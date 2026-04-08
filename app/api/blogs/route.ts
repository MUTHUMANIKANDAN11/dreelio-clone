import { NextRequest } from "next/server";
import { getBlogs, saveBlog, getNextBlogId } from "@/lib/data";
import { isDevMode } from "@/lib/devMode";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(getBlogs());
}

export async function POST(request: NextRequest) {
  if (!isDevMode()) {
    return Response.json({ error: "Not available in production" }, { status: 403 });
  }
  const body = await request.json();
  const blog = { ...body, id: body.id || getNextBlogId() };
  const saved = saveBlog(blog);
  return Response.json(saved, { status: 201 });
}
