import Link from "next/link";
import { logoutAction } from "@/app/actions";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-300 flex justify-between">
      <Link href="/settings" className="hover:underline">
        Settings
      </Link>
      <form action={logoutAction}>
        <button className="hover:underline">Logout</button>
      </form>
    </nav>
  );
}
