import Navbar from "@/components/layout/navbar";
import Link from "next/link";
import noteAction from "./actions";

export default function NotePage() {
  const date = new Date().toLocaleDateString();
  return (
    <>
      <Navbar />
      <main>
        <form
          autoComplete="off"
          className="flex flex-col gap-5 p-10"
          action={noteAction}
        >
          <div className="flex flex-col md:flex-row gap-1 md:gap-10 ">
            <input name="title" className="input" placeholder="Title" />
            <input
              name="description"
              className="input"
              placeholder="Description"
            />
            <p className="mt-3">{date}</p>
          </div>
          <textarea
            name="content"
            spellCheck="false"
            className="textarea textarea-bordered w-full h-80"
            placeholder="Start to write your note here..."
          ></textarea>
          <div className="flex justify-center gap-10">
            <button className="btn w-1/3" type="submit">
              Finish
            </button>
            <Link href="/" className="btn btn-error w-1/3">
              Delete
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
