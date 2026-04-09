import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import BlogForm from "@/components/BlogForm";
import { isDevMode } from "@/lib/devMode";
import { getBlogById, getUserByIdFromJson } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Blog",
};

export default async function CreateBlogPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  if (!isDevMode()) return notFound();

  const { id } = await searchParams;
  let existingBlog = null;
  let existingAuthor = null;

  if (id) {
    existingBlog = getBlogById(id) ?? null;
    if (existingBlog) {
      existingAuthor = getUserByIdFromJson(existingBlog.authorId) ?? null;
    }
  }

  return (
    <main className="flex items-center flex-col overflow-x-hidden overflow-y-hidden bg-[linear-gradient(to_bottom,_white_30%,_#F4F1EE_50%,_#C4DCF4_100%)] relative min-h-screen">
      <Header />
      <div className="mt-24 w-full flex justify-center">
        <BlogForm blog={existingBlog} author={existingAuthor} />
      </div>
      <Footer />
    </main>
  );
}
