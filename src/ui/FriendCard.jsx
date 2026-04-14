import Image from "next/image";
import React from "react";

const FriendCard = ({ friend }) => {
  console.log(friend.status);
  return (
    <div className="text-center bg-white rounded-lg p-6 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <Image
        className="mx-auto rounded-full h-20 w-20"
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
      />
      <h4 className="text-[#1F2937] font-semibold text-xl mt-3">
        {friend.name}
      </h4>
      <p className="text-[#64748B] mt-2 text-[12px]">
        {friend.days_since_contact}d ago
      </p>
      <div className="flex gap-2 items-center justify-center mt-2">
        {friend.tags.map((tag, index) => (
          <div key={index}>
            <p className="text-[#244D3F] bg-[#CBFADB] text-[12px] font-medium uppercase rounded-full px-2 py-1.5">
              {tag}
            </p>
          </div>
        ))}
      </div>
      <p className="text-white bg-[#EF4444] px-2 py-1.5 text-[12px] font-medium rounded-full inline-block mt-3.5 capitalize">
        {friend.status}
      </p>
    </div>
  );
};

export default FriendCard;
