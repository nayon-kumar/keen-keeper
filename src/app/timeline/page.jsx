"use client";
import MyContainer from "@/components/Shared/MyContainer";
import NoData from "@/components/Shared/NoData";
import { MyContext } from "@/context/TimelineContext";
import TimelineCard from "@/ui/TimelineCard";
import React, { useContext } from "react";
import { CiFileOn } from "react-icons/ci";

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
              <div className="my-6">
                <select
                  defaultValue="Filter timeline"
                  className="select select-neutral w-full sm:w-75"
                >
                  <option disabled={true}>Filter timeline</option>
                  <option>Default</option>
                  <option>Text</option>
                  <option>Call</option>
                  <option>Video</option>
                </select>
              </div>
              <div className="flex flex-col gap-6">
                {timelines.map((timeline, index) => (
                  <TimelineCard key={index} timeline={timeline} />
                ))}
              </div>
            </>
          ) : (
            <>
              <NoData />
            </>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default TimelinePage;
