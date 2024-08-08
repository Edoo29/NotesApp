import Link from "next/link";
import { validateRequest } from "@/lib/validate-requests";
import deleteAccountAction from "./actions";
import Navbar from "@/components/layout/navbar";

export default async function Settings() {
  const { user } = await validateRequest()
  return (
    <>
      <Navbar />
      <main className="gap-10 flex flex-col justify-center items-center mt-32">
        <p className="text-2xl font-bold">Settings</p>
        <p>
          You are logged in as{" "}
          <span className="font-bold">{user!.username}</span>
        </p>
        <div className="flex gap-10">
          <Link href="/" className="hover:underline">
            <button className="btn">
              Back to home
            </button>
          </Link>
          <form action={deleteAccountAction}>
            <button className="btn btn-error">Delete account</button>
          </form>
        </div>
      </main>
    </>
  );
}
