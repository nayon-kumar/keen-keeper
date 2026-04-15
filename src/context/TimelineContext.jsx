"use client";
import React, { createContext, useState } from "react";

export const MyContext = createContext();

const TimelineContext = ({ children }) => {
  const [timelines, setTimelines] = useState([]);
  const data = {
    timelines,
    setTimelines,
  };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default TimelineContext;
