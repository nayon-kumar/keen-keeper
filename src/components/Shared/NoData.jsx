import React from "react";
import { CiFileOn } from "react-icons/ci";

const NoData = () => {
  return (
    <div className="bg-white shadow mt-10 py-10 flex flex-col items-center justify-center rounded-2xl border border-[#E9E9E9] text-gray-500">
      <CiFileOn size={100} />
      <p className="mt-4">No data found!</p>
    </div>
  );
};

export default NoData;
