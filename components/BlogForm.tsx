"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ContentBlock {
  id: string;
  type: "head" | "subhead" | "body" | "image";
  value: string;
}

interface BlogFormProps {
  blog?: {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    authorId: string;
    tag: string;
    tagColor: string;
    content: { type: string; value: string }[];
  } | null;
  author?: {
    id: string;
    name: string;
    role: string;
    avatar: string;
  } | null;
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

async function uploadImage(
  file: File,
  type: "cover" | "profile" | "content",
  name?: string
): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("type", type);
  if (name) fd.append("name", name);
  const res = await fetch("/api/upload", { method: "POST", body: fd });
  const data = await res.json();
  return data.path;
}

export default function BlogForm({ blog, author }: BlogFormProps) {
  const router = useRouter();
  const isEdit = !!blog;

  // Author state
  const [authorName, setAuthorName] = useState(author?.name ?? "");
  const [authorRole, setAuthorRole] = useState(author?.role ?? "");
  const [authorAvatar, setAuthorAvatar] = useState(author?.avatar ?? "");
  const [authorAvatarFile, setAuthorAvatarFile] = useState<File | null>(null);
  const [authorId] = useState(author?.id ?? "");

  // Blog meta state
  const [title, setTitle] = useState(blog?.title ?? "");
  const [description, setDescription] = useState(blog?.description ?? "");
  const [tag, setTag] = useState(blog?.tag ?? "");
  const [tagColor, setTagColor] = useState(blog?.tagColor ?? "#156CC2");
  const [coverImage, setCoverImage] = useState(blog?.imageSrc ?? "");
  const [coverFile, setCoverFile] = useState<File | null>(null);

  // Content blocks
  const [blocks, setBlocks] = useState<ContentBlock[]>(
    blog?.content?.map((c) => ({
      id: uid(),
      type: c.type as ContentBlock["type"],
      value: c.value,
    })) ?? []
  );

  const [saving, setSaving] = useState(false);

  // Block management
  function addBlock(type: ContentBlock["type"]) {
    setBlocks([...blocks, { id: uid(), type, value: "" }]);
  }

  function updateBlock(id: string, value: string) {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, value } : b)));
  }

  function removeBlock(id: string) {
    setBlocks(blocks.filter((b) => b.id !== id));
  }

  function moveBlock(idx: number, dir: -1 | 1) {
    const target = idx + dir;
    if (target < 0 || target >= blocks.length) return;
    const next = [...blocks];
    [next[idx], next[target]] = [next[target], next[idx]];
    setBlocks(next);
  }

  async function handleImageBlock(id: string, file: File) {
    const path = await uploadImage(file, "content");
    updateBlock(id, path);
  }

  // Submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      // Upload avatar if new file selected
      let avatarPath = authorAvatar;
      if (authorAvatarFile) {
        avatarPath = await uploadImage(authorAvatarFile, "profile");
      }

      // Upload cover if new file selected
      let coverPath = coverImage;
      if (coverFile) {
        coverPath = await uploadImage(coverFile, "cover");
      }

      // Save/update author
      const userPayload = {
        id: authorId || undefined,
        name: authorName,
        role: authorRole,
        avatar: avatarPath,
      };
      const userRes = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPayload),
      });
      const savedUser = await userRes.json();

      // Prepare blog content
      const content = blocks.map((b) => ({ type: b.type, value: b.value }));

      const blogPayload = {
        id: isEdit ? blog!.id : undefined,
        title,
        description,
        imageSrc: coverPath,
        authorId: savedUser.id,
        tag,
        tagColor,
        content,
      };

      if (isEdit) {
        await fetch(`/api/blogs/${blog!.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blogPayload),
        });
        router.push(`/blog/${blog!.id}`);
      } else {
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blogPayload),
        });
        const saved = await res.json();
        router.push(`/blog/${saved.id}`);
      }
    } catch (err) {
      console.error("Failed to save:", err);
      alert("Failed to save blog. Check console for details.");
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[15px] outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition";
  const labelClass = "text-[14px] font-semibold text-[#453F3D] mb-1 block";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[750px] mx-auto py-16 px-8 z-10 flex flex-col gap-10"
    >
      <div className="text-[36px] font-semibold text-center">
        {isEdit ? "Edit Blog" : "Create New Blog"}
      </div>

      {/* Author Section */}
      <fieldset className="flex flex-col gap-4 p-6 rounded-2xl bg-white/70 border border-gray-100">
        <legend className="text-[20px] font-semibold px-2">
          Author Details
        </legend>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className={labelClass}>Name</label>
            <input
              className={inputClass}
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Author name"
              required
            />
          </div>
          <div className="flex-1">
            <label className={labelClass}>Role</label>
            <input
              className={inputClass}
              value={authorRole}
              onChange={(e) => setAuthorRole(e.target.value)}
              placeholder="e.g. Software Engineer, Company"
              required
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Profile Image</label>
          <div className="flex items-center gap-4">
            {(authorAvatar || authorAvatarFile) && (
              <img
                src={
                  authorAvatarFile
                    ? URL.createObjectURL(authorAvatarFile)
                    : authorAvatar
                }
                alt="avatar"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="text-sm"
              onChange={(e) => {
                if (e.target.files?.[0]) setAuthorAvatarFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </fieldset>

      {/* Blog Meta Section */}
      <fieldset className="flex flex-col gap-4 p-6 rounded-2xl bg-white/70 border border-gray-100">
        <legend className="text-[20px] font-semibold px-2">Blog Details</legend>

        <div>
          <label className={labelClass}>Title</label>
          <input
            className={inputClass}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog title"
            required
          />
        </div>

        <div>
          <label className={labelClass}>Description</label>
          <textarea
            className={inputClass + " min-h-[80px] resize-y"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description"
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className={labelClass}>Tag</label>
            <input
              className={inputClass}
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="e.g. DEVELOPMENT"
              required
            />
          </div>
          <div className="w-[140px]">
            <label className={labelClass}>Tag Color</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={tagColor}
                onChange={(e) => setTagColor(e.target.value)}
                className="w-[40px] h-[40px] rounded-lg border border-gray-200 cursor-pointer"
              />
              <span className="text-[13px] text-gray-500">{tagColor}</span>
            </div>
          </div>
        </div>

        <div>
          <label className={labelClass}>Cover Image</label>
          <div className="flex items-center gap-4">
            {(coverImage || coverFile) && (
              <img
                src={
                  coverFile ? URL.createObjectURL(coverFile) : coverImage
                }
                alt="cover"
                className="w-[120px] h-[80px] rounded-xl object-cover"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="text-sm"
              onChange={(e) => {
                if (e.target.files?.[0]) setCoverFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </fieldset>

      {/* Content Blocks Section */}
      <fieldset className="flex flex-col gap-4 p-6 rounded-2xl bg-white/70 border border-gray-100">
        <legend className="text-[20px] font-semibold px-2">
          Blog Content
        </legend>

        {blocks.map((block, idx) => (
          <div
            key={block.id}
            className="flex gap-2 items-start p-3 rounded-xl bg-gray-50 border border-gray-100"
          >
            {/* Type badge */}
            <div
              className={`shrink-0 mt-1 px-2 py-1 rounded-md text-[11px] font-bold text-white uppercase ${
                block.type === "head"
                  ? "bg-indigo-500"
                  : block.type === "subhead"
                  ? "bg-purple-400"
                  : block.type === "image"
                  ? "bg-emerald-500"
                  : "bg-gray-400"
              }`}
            >
              {block.type}
            </div>

            {/* Input */}
            <div className="flex-1">
              {block.type === "image" ? (
                <div className="flex flex-col gap-2">
                  {block.value && (
                    <img
                      src={block.value}
                      alt=""
                      className="w-full max-h-[200px] object-cover rounded-lg"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="text-sm"
                    onChange={(e) => {
                      if (e.target.files?.[0])
                        handleImageBlock(block.id, e.target.files[0]);
                    }}
                  />
                </div>
              ) : block.type === "body" ? (
                <textarea
                  className={inputClass + " min-h-[80px] resize-y text-[14px]"}
                  value={block.value}
                  onChange={(e) => updateBlock(block.id, e.target.value)}
                  placeholder="Paragraph text..."
                />
              ) : (
                <input
                  className={inputClass}
                  value={block.value}
                  onChange={(e) => updateBlock(block.id, e.target.value)}
                  placeholder={
                    block.type === "head"
                      ? "Section heading..."
                      : "Sub-heading..."
                  }
                />
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-1 shrink-0">
              <button
                type="button"
                onClick={() => moveBlock(idx, -1)}
                disabled={idx === 0}
                className="p-1 rounded hover:bg-gray-200 disabled:opacity-30 text-[14px]"
              >
                &#9650;
              </button>
              <button
                type="button"
                onClick={() => moveBlock(idx, 1)}
                disabled={idx === blocks.length - 1}
                className="p-1 rounded hover:bg-gray-200 disabled:opacity-30 text-[14px]"
              >
                &#9660;
              </button>
              <button
                type="button"
                onClick={() => removeBlock(block.id)}
                className="p-1 rounded hover:bg-red-100 text-red-500 text-[14px]"
              >
                &#10005;
              </button>
            </div>
          </div>
        ))}

        {/* Add block buttons */}
        <div className="flex gap-2 mt-2">
          <button
            type="button"
            onClick={() => addBlock("head")}
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-[13px] font-semibold hover:bg-indigo-600"
          >
            + Header
          </button>
          <button
            type="button"
            onClick={() => addBlock("subhead")}
            className="px-4 py-2 rounded-lg bg-purple-400 text-white text-[13px] font-semibold hover:bg-purple-500"
          >
            + Subheader
          </button>
          <button
            type="button"
            onClick={() => addBlock("body")}
            className="px-4 py-2 rounded-lg bg-gray-400 text-white text-[13px] font-semibold hover:bg-gray-500"
          >
            + Content
          </button>
          <button
            type="button"
            onClick={() => addBlock("image")}
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-[13px] font-semibold hover:bg-emerald-600"
          >
            + Image
          </button>
        </div>
      </fieldset>

      {/* Submit */}
      <button
        type="submit"
        disabled={saving}
        className="w-full py-4 rounded-full bg-[#C9502E] text-white text-[16px] font-semibold hover:bg-[#b0432a] disabled:opacity-50 transition"
      >
        {saving
          ? "Saving..."
          : isEdit
          ? "Update Blog"
          : "Publish Blog"}
      </button>
    </form>
  );
}
