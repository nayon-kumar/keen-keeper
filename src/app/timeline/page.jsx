"use client";
import MyContainer from "@/components/Shared/MyContainer";
import NoData from "@/components/Shared/NoData";
import { MyContext } from "@/context/TimelineContext";
import TimelineCard from "@/ui/TimelineCard";
import React, { useContext, useState } from "react";

const TimelinePage = () => {
  const { timelines } = useContext(MyContext);
  const [filterType, setFilterType] = useState("");
  const allTimelines = [...timelines];

  // Filter the timelines
  const filteredTimelines =
    filterType === ""
      ? allTimelines
      : allTimelines.filter((timeline) => timeline.type === filterType);

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
                  defaultValue="Filter Timeline"
                  className="select select-neutral w-full sm:w-75"
                >
                  <option disabled={true}>Filter Timeline</option>
                  <option onClick={() => setFilterType("")}>All</option>
                  <option onClick={() => setFilterType("text")}>Text</option>
                  <option onClick={() => setFilterType("call")}>Call</option>
                  <option onClick={() => setFilterType("video")}>Video</option>
                </select>
              </div>
              {filterType === "" ? (
                <>
                  <div className="flex flex-col gap-6">
                    {timelines.map((timeline, index) => (
                      <TimelineCard key={index} timeline={timeline} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-6">
                    {filteredTimelines.map((timeline, index) => (
                      <TimelineCard key={index} timeline={timeline} />
                    ))}
                  </div>
                </>
              )}
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
