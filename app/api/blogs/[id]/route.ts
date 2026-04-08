import { NextRequest } from "next/server";
import { getBlogById, saveBlog, deleteBlog } from "@/lib/data";
import { isDevMode } from "@/lib/devMode";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(blog);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isDevMode()) {
    return Response.json({ error: "Not available in production" }, { status: 403 });
  }
  const { id } = await params;
  const body = await request.json();
  const saved = saveBlog({ ...body, id });
  return Response.json(saved);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isDevMode()) {
    return Response.json({ error: "Not available in production" }, { status: 403 });
  }
  const { id } = await params;
  const deleted = deleteBlog(id);
  if (!deleted) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json({ success: true });
}
