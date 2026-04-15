"use client";
import MyContainer from "@/components/Shared/MyContainer";
import { MyContext } from "@/context/TimelineContext";
import TimelineCard from "@/ui/TimelineCard";
import React, { useContext } from "react";

const TimelinePage = () => {
  const { timelines } = useContext(MyContext);
  return (
    <div className="bg-[#F8FAFC] pt-32 pb-20">
      <MyContainer>
        <div>
          <h3 className="font-bold text-2xl text-[#1F2937] md:text-3xl">
            Timeline
          </h3>
          {timelines.length > 0 ? (
            <>
              <div>Filter timeline</div>
              <div className="flex flex-col gap-6">
                {timelines.map((timeline, index) => (
                  <TimelineCard key={index} timeline={timeline} />
                ))}
              </div>
            </>
          ) : (
            <>
              <p>Not data found</p>
            </>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default TimelinePage;
