import { NextRequest } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { isDevMode } from "@/lib/devMode";

export async function POST(request: NextRequest) {
  if (!isDevMode()) {
    return Response.json({ error: "Not available in production" }, { status: 403 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File;
  const type = formData.get("type") as string; // 'cover' | 'profile' | 'content'
  const name = formData.get("name") as string | null; // optional custom filename

  if (!file) {
    return Response.json({ error: "No file provided" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = path.extname(file.name) || ".png";
  const filename = name ? `${name}${ext}` : `${Date.now()}${ext}`;

  const subdir = type === "cover" ? "covers" : type === "profile" ? "profiles" : "";
  const savePath = path.join(
    process.cwd(),
    "public/blogImages",
    subdir,
    filename
  );

  await writeFile(savePath, buffer);

  const publicPath = `/blogImages/${subdir ? subdir + "/" : ""}${filename}`;
  return Response.json({ path: publicPath });
}
