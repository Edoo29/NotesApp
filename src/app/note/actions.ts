"use server";

import { db } from "@/db";
import { notesTable } from "@/db/schema";
import { generateIdFromEntropySize } from "lucia";
import { validateRequest } from "@/lib/validate-requests";
import { redirect } from "next/navigation";

export default async function noteAction(formData: FormData) {
  const { user } = await validateRequest();

  const id = generateIdFromEntropySize(10);
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const date = new Date().toLocaleDateString();

  const userId: string = String(user?.id);

  await db.insert(notesTable).values({
    created_at: date,
    title: title,
    description,
    content,
    id: id,
    userId: userId,
  });

  return redirect("/");
}
