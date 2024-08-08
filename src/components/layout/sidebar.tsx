import Link from "next/link";
import { db } from "@/db";
import { validateRequest } from "@/lib/validate-requests";
import { notesTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { IoFolderOpenOutline } from "react-icons/io5";

export default async function Sidebar() {
  const { user } = await validateRequest();
  const noteId = notesTable.userId;
  const userId: string = String(user?.id);
  const notes = await db.select().from(notesTable).where(eq(noteId, userId));

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn drawer-button">
          <IoFolderOpenOutline />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <Link
            href="/note"
            className="btn bg-base-100 mb-5 flex justify-between"
          >
            <button>New note</button>
            <p>{notes.length} notes</p>
          </Link>
          {notes.map((note) => (
            <Link
              href="/note/edit"
              key={note.id}
              className="hover:bg-base-100 p-4 rounded-xl cursor-pointer hover:shadow-xl"
            >
              <p className="font-bold">{note.title}</p>
              <p>{note.description}</p>
              <p>{note.created_at}</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
