"use client";
import React, { use, useContext } from "react";
import MyContainer from "../Shared/MyContainer";
import { MyContext } from "@/context/TimelineContext";

const friendsPromise = fetch(
  "https://keen-keeper-khaki-pi.vercel.app/friends.json",
  {
    cache: "no-store",
  },
).then((res) => res.json());

const Status = () => {
  const { timelines } = useContext(MyContext);
  const friends = use(friendsPromise);
  let onTrack = 0;
  let overdue = 0;
  for (const friend of friends) {
    if (friend.status === "On-Track") {
      onTrack++;
    }
    if (friend.status === "Overdue") {
      overdue++;
    }
  }
  return (
    <MyContainer>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg text-center p-8 hover:shadow-lg transition-all duration-300 ease-in-out">
          <h4 className="font-semibold text-3xl text-[#244D3F]">
            {friends.length}
          </h4>
          <p className="text-[#64748B] text-lg mt-2">Total Friends</p>
        </div>
        <div className="bg-white shadow rounded-lg text-center p-8 hover:shadow-lg transition-all duration-300 ease-in-out">
          <h4 className="font-semibold text-3xl text-[#244D3F]">{onTrack}</h4>
          <p className="text-[#64748B] text-lg mt-2">On Track</p>
        </div>
        <div className="bg-white shadow rounded-lg text-center p-8 hover:shadow-lg transition-all duration-300 ease-in-out">
          <h4 className="font-semibold text-3xl text-[#244D3F]">{overdue}</h4>
          <p className="text-[#64748B] text-lg mt-2">Need Attention</p>
        </div>
        <div className="bg-white shadow rounded-lg text-center p-8 hover:shadow-lg transition-all duration-300 ease-in-out">
          <h4 className="font-semibold text-3xl text-[#244D3F]">
            {timelines.length}
          </h4>
          <p className="text-[#64748B] text-lg mt-2">Interactions This Month</p>
        </div>
      </div>
    </MyContainer>
  );
};

export default Status;
