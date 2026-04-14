"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const SmallMenu = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex sm:hidden">
      <div
        onClick={() => setOpen(!open)}
        className={`transition-transform duration-300 ${
          open ? "rotate-90" : "rotate-0"
        }`}
      >
        {open ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>
      <div>
        <div
          className={`px-5 py-5 absolute bg-linear-to-r from-[#1F2937] to-[#244D3F] w-full transition-all duration-300 ease-in-out ${open ? "top-19 left-0" : "top-19 -left-200 "}`}
        >
          <ul className="text-white font-semibold space-y-3">
            <li
              onClick={() => setOpen(false)}
              className={`bg-black px-5 py-2 rounded-lg ${pathName === "/" ? "bg-gray-300" : ""}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className={`bg-black px-5 py-2 rounded-lg ${pathName === "/timeline" ? "bg-gray-300" : ""}`}
            >
              <Link href="/timeline">Timeline</Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className={`bg-black px-5 py-2 rounded-lg ${pathName === "/stats" ? "bg-gray-300" : ""}`}
            >
              <Link href="/stats">Stats</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallMenu;
