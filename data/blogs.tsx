// Static blog data for client-side consumption
// Server-side CRUD should use lib/data.ts directly

import blogsJson from "./blogs.json";
import { getUserById } from "./users";

export interface BlogContent {
  type: "head" | "subhead" | "body" | "image";
  value: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  authorId: string;
  tag: string;
  tagColor: string;
  content: BlogContent[];
}

const blogsRaw: Blog[] = blogsJson as Blog[];

export const blogs = blogsRaw.map((blog) => {
  const author = getUserById(blog.authorId);
  return {
    ...blog,
    author: author
      ? { name: author.name, role: author.role, avatar: author.avatar }
      : { name: "Unknown", role: "", avatar: "" },
  };
});
