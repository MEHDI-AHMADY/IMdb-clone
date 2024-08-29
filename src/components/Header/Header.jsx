import { TiHome } from "react-icons/ti";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "../MenuItem/MenuItem";
import Link from "next/link";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={TiHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg ">
            IMdb
          </span>
          <span className="hidden sm:inline text-xl">Clone</span>
        </Link>
      </div>
    </div>
  );
}
