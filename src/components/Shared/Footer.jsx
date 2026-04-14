import React from "react";
import MyContainer from "./MyContainer";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] pt-20 pb-7.5">
      <MyContainer>
        <div className="text-center text-white ">
          <h2 className="text-white font-bold text-3xl md:text-5xl">
            KeenKeeper
          </h2>
          <p className="mt-4 mb-6 text-white/80">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h4 className="font-medium text-xl">Social Links</h4>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="bg-white text-black rounded-full p-2.5 inline-block cursor-pointer">
              <FaInstagram size={20} />
            </div>
            <div className="bg-white text-black rounded-full p-2.5 inline-block cursor-pointer">
              <FaFacebookSquare size={20} />
            </div>
            <div className="bg-white text-black rounded-full p-2.5 inline-block cursor-pointer">
              <FaXTwitter size={20} />
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
