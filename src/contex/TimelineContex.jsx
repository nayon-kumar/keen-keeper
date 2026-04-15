import React, { createContext } from "react";

export const MyContex = createContext();

const TimelineContex = ({ children }) => {
  const data = {
    name: "Nayon",
    age: 24,
  };
  return <MyContex.Provider value={data}>{children}</MyContex.Provider>;
};

export default TimelineContex;
