import { NextRequest } from "next/server";
import { getUsers, saveUser, getNextUserId } from "@/lib/data";
import { isDevMode } from "@/lib/devMode";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(getUsers());
}

export async function POST(request: NextRequest) {
  if (!isDevMode()) {
    return Response.json({ error: "Not available in production" }, { status: 403 });
  }
  const body = await request.json();
  const user = { ...body, id: body.id || getNextUserId() };
  const saved = saveUser(user);
  return Response.json(saved, { status: 201 });
}
