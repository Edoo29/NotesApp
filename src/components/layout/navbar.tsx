import Link from "next/link";
import { logoutAction } from "@/app/actions";
import { IoSettingsOutline } from "react-icons/io5"
import { IoIosLogOut } from "react-icons/io";
import Sidebar from "./sidebar";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-300 flex justify-between">
      <div className="flex gap-5">
        <Sidebar />
        <Link href="/settings" className="hover:underline">
          <button className="text-xl btn">
            <IoSettingsOutline />
          </button>
        </Link>
      </div>
      <form action={logoutAction}>
        <button className="text-xl btn"><IoIosLogOut /></button>
      </form>
    </nav>
  );
}
