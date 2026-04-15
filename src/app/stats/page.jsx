"use client";
import MyContainer from "@/components/Shared/MyContainer";
import NoData from "@/components/Shared/NoData";
import { MyContext } from "@/context/TimelineContext";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { timelines } = useContext(MyContext);
  let text = 0;
  let call = 0;
  let video = 0;
  for (const timeline of timelines) {
    if (timeline.type === "text") {
      text++;
    } else if (timeline.type === "call") {
      call++;
    } else {
      video++;
    }
  }
  const data = [
    { name: "Text", value: text, fill: "#FFBB28" },
    { name: "Call", value: call, fill: "#FF8042" },
    { name: "Video", value: video, fill: "#0088FE" },
  ];

  return (
    <div className="bg-[#F8FAFC] pt-32 pb-20">
      <MyContainer>
        <h3 className="text-2xl md:text-3xl text-[#1F2937] font-bold">
          Friendship Analytics
        </h3>
        {timelines.length > 0 ? (
          <>
            <div className="bg-white mt-6 p-8 rounded-xl shadow">
              <h4 className="font-medium text-[#244D3F] text-xl mb-6">
                By Interaction Type
              </h4>
              <div className="flex items-center justify-center">
                <PieChart
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    maxHeight: "80vh",
                    aspectRatio: 1,
                  }}
                  responsive
                >
                  <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                  />
                  <Legend />
                  <Tooltip />
                </PieChart>
              </div>
            </div>
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
