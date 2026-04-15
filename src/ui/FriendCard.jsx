import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <Link
      href={`/friend-details/${friend.id}`}
      className="text-center bg-white rounded-lg p-6 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
    >
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
      <p
        className={`text-white  px-2 py-1.5 text-[12px] font-medium rounded-full inline-block mt-3.5 capitalize ${friend.status === "Overdue" ? "bg-[#EF4444]" : friend.status === "Almost Due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}`}
      >
        {friend.status}
      </p>
    </Link>
  );
};

export default FriendCard;
