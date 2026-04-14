"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdHome, IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";

const NavLinks = () => {
  const pathName = usePathname();
  return (
    <>
      <Link
        href="/"
        className={` btn border-0  shadow-none ${pathName === "/" ? "bg-[#244D3F] text-white" : "bg-white text-[#64748B]"}`}
      >
        <IoMdHome size={20} />
        Home
      </Link>
      <Link
        href="/timeline"
        className={` btn border-0  shadow-none ${pathName === "/timeline" ? "bg-[#244D3F] text-white" : "bg-white text-[#64748B]"}`}
      >
        <IoMdTime size={20} />
        Timeline
      </Link>
      <Link
        href="/stats"
        className={` btn border-0  shadow-none ${pathName === "/stats" ? "bg-[#244D3F] text-white" : "bg-white text-[#64748B]"}`}
      >
        <TfiStatsUp size={20} />
        Stats
      </Link>
    </>
  );
};

export default NavLinks;
