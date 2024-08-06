"use server"

import { validateRequest } from "@/lib/validate-requests"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { userTable } from "@/db/schema"
import { sessionTable } from "@/db/schema"
import { redirect } from "next/navigation"

export default async function deleteAccountAction() {
  const { user } = await validateRequest()
  await db.delete(sessionTable)
  await db.delete(userTable).where(eq(userTable.id, user!.id))
  return redirect("/login")
}
