import React from "react";
import { IoMdVideocam } from "react-icons/io";
import { LuMessageSquareText, LuPhoneCall } from "react-icons/lu";

const TimelineCard = ({ timeline }) => {
  return (
    <div className="border border-[#E9E9E9] bg-white rounded-lg p-4 flex items-center gap-4">
      <div>
        {timeline.type === "video" ? (
          <IoMdVideocam size={40} />
        ) : timeline.type === "call" ? (
          <LuPhoneCall size={40} />
        ) : (
          <LuMessageSquareText size={40} />
        )}
      </div>
      <div>
        <p>
          <span className="text-[#244D3F] text-xl font-medium">
            {timeline.type === "video"
              ? "Video"
              : timeline.type === "call"
                ? "Call"
                : "Text"}
          </span>
          <span className="text-[#64748B] text-lg"> with {timeline.name}</span>
        </p>
        <p className="font-medium text-[#64748B] mt-1">March 26, 2026</p>
      </div>
    </div>
  );
};

export default TimelineCard;
