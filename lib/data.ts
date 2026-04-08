import fs from "fs";
import path from "path";

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

export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

const blogsPath = path.join(process.cwd(), "data/blogs.json");
const usersPath = path.join(process.cwd(), "data/users.json");

// --- Blogs ---

export function getBlogs(): Blog[] {
  const raw = fs.readFileSync(blogsPath, "utf-8");
  return JSON.parse(raw);
}

export function getBlogById(id: string): Blog | undefined {
  return getBlogs().find((b) => b.id === id);
}

export function getNextBlogId(): string {
  const blogs = getBlogs();
  const maxId = blogs.reduce((max, b) => Math.max(max, parseInt(b.id) || 0), 0);
  return String(maxId + 1);
}

export function saveBlog(blog: Blog): Blog {
  const blogs = getBlogs();
  const idx = blogs.findIndex((b) => b.id === blog.id);
  if (idx >= 0) {
    blogs[idx] = blog;
  } else {
    blogs.push(blog);
  }
  fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2));
  return blog;
}

export function deleteBlog(id: string): boolean {
  const blogs = getBlogs();
  const filtered = blogs.filter((b) => b.id !== id);
  if (filtered.length === blogs.length) return false;
  fs.writeFileSync(blogsPath, JSON.stringify(filtered, null, 2));
  return true;
}

// --- Users ---

export function getUsers(): User[] {
  const raw = fs.readFileSync(usersPath, "utf-8");
  return JSON.parse(raw);
}

export function getUserByIdFromJson(id: string): User | undefined {
  return getUsers().find((u) => u.id === id);
}

export function getNextUserId(prefix: string = "author"): string {
  const users = getUsers();
  const matching = users
    .filter((u) => u.id.startsWith(prefix + "_"))
    .map((u) => parseInt(u.id.split("_")[1]) || 0);
  const maxNum = matching.length > 0 ? Math.max(...matching) : 0;
  return `${prefix}_${maxNum + 1}`;
}

export function saveUser(user: User): User {
  const users = getUsers();
  const idx = users.findIndex((u) => u.id === user.id);
  if (idx >= 0) {
    users[idx] = user;
  } else {
    users.push(user);
  }
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
  return user;
}

// --- Hydrated blogs (with author info) ---

export function getHydratedBlogs() {
  const blogs = getBlogs();
  return blogs.map((blog) => {
    const author = getUserByIdFromJson(blog.authorId);
    return {
      ...blog,
      author: author
        ? { name: author.name, role: author.role, avatar: author.avatar }
        : { name: "Unknown", role: "", avatar: "" },
    };
  });
}
