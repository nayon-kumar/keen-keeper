"use client";
import MyContainer from "@/components/Shared/MyContainer";
import NoData from "@/components/Shared/NoData";
import { MyContext } from "@/context/TimelineContext";
import React, { useContext } from "react";

const StatsPage = () => {
  const { timelines } = useContext(MyContext);
  console.log(timelines);
  return (
    <div className="bg-[#F8FAFC] pt-32 pb-20">
      <MyContainer>
        <h3 className="text-2xl md:text-3xl text-[#1F2937] font-bold">
          Friendship Analytics
        </h3>
        {timelines.length > 0 ? (
          <>
            <p>Data</p>
          </>
        ) : (
          <>
            <NoData />
          </>
        )}
      </MyContainer>
    </div>
  );
};

export default StatsPage;
