"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteBlogButton({ blogId }: { blogId: string }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    setDeleting(true);
    try {
      await fetch(`/api/blogs/${blogId}`, { method: "DELETE" });
      router.push("/blogs");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete blog.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 disabled:opacity-50 transition"
    >
      {deleting ? "Deleting..." : "Delete Blog"}
    </button>
  );
}
