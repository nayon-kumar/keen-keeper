import React from "react";
import MyContainer from "../Shared/MyContainer";
import { LuPlus } from "react-icons/lu";

const Banner = () => {
  return (
    <MyContainer>
      <div className="text-center pt-36">
        <h2 className="font-bold text-3xl md:text-4xl text-[#1F2937] ">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B] mt-4 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the
          <br />
          relationships that matter most.
        </p>
        <div>
          <button className="btn text-white bg-[#244D3F] font-semibold">
            <LuPlus size={20} /> Add a Friend
          </button>
        </div>
      </div>
    </MyContainer>
  );
};

export default Banner;
