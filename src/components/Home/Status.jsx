import React from "react";
import MyContainer from "../Shared/MyContainer";

const Status = () => {
  return (
    <MyContainer>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg text-center p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out">
          <h4 className="font-semibold text-3xl text-[#244D3F]">10</h4>
          <p className="text-[#64748B] text-lg mt-2">Total Friends</p>
        </div>
        <div className="bg-white shadow rounded-lg text-center p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out">
          <h4 className="font-semibold text-3xl text-[#244D3F]">3</h4>
          <p className="text-[#64748B] text-lg mt-2">On Track</p>
        </div>
        <div className="bg-white shadow rounded-lg text-center p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out">
          <h4 className="font-semibold text-3xl text-[#244D3F]">6</h4>
          <p className="text-[#64748B] text-lg mt-2">Need Attention</p>
        </div>
        <div className="bg-white shadow rounded-lg text-center p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out">
          <h4 className="font-semibold text-3xl text-[#244D3F]">12</h4>
          <p className="text-[#64748B] text-lg mt-2">Interactions This Month</p>
        </div>
      </div>
    </MyContainer>
  );
};

export default Status;
