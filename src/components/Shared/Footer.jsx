import React from "react";
import MyContainer from "./MyContainer";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] pt-20 pb-7.5">
      <MyContainer>
        <div className="text-center text-white ">
          <Link href="/" className="text-white font-bold text-3xl md:text-5xl">
            KeenKeeper
          </Link>
          <p className="mt-4 mb-6 text-white/80">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h4 className="font-medium text-xl">Social Links</h4>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="bg-white text-black hover:text-blue-500 transition-all duration-300 ease-in-out rounded-full p-2.5 inline-block cursor-pointer">
              <FaInstagram size={20} />
            </div>
            <div className="bg-white text-black hover:text-blue-500 transition-all duration-300 ease-in-out rounded-full p-2.5 inline-block cursor-pointer">
              <FaFacebookSquare size={20} />
            </div>
            <div className="bg-white text-black hover:text-blue-500 transition-all duration-300 ease-in-out rounded-full p-2.5 inline-block cursor-pointer">
              <FaXTwitter size={20} />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-between text-white/50 border-t border-[#1A8862] mt-10 pt-7.5">
            <div>
              <p>© 2026 KeenKeeper. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="cursor-pointer hover:underline hover:text-white transition-all duration-300 ease-in-out">
                Privacy Policy{" "}
              </p>
              <p className="cursor-pointer hover:underline hover:text-white transition-all duration-300 ease-in-out">
                Terms of Service{" "}
              </p>
              <p className="cursor-pointer hover:underline hover:text-white transition-all duration-300 ease-in-out">
                Cookies
              </p>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
