import Navbar from "@/components/layout/navbar"
import Link from "next/link"
import { eq } from "drizzle-orm"
import { db } from "@/db"
import { notesTable } from "@/db/schema"

export default async function editNote() {
  return (
    <>
      <Navbar />
      <main>
        <form autoComplete="off" className="flex flex-col gap-5 p-10">
          <div className="flex gap-10 ">
            <input name="title" className="input" placeholder="Title" />
            <input name="description" className="input" placeholder="Description" />
            <p className="mt-3"></p>
          </div>
          <textarea name="content" className="textarea textarea-bordered w-full h-80" placeholder="Start to write your note here..."></textarea>
          <div className="flex justify-center gap-10">
            <button className="btn w-1/3" type="submit">Finish</button>
            <Link href="/" className="btn btn-error w-1/3">
              Delete
            </Link>
          </div>
        </form>
      </main>
    </>
  )
}
