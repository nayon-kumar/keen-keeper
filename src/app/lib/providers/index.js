import TimelineContext from "@/context/TimelineContext";
import React from "react";

const Providers = ({ children }) => {
  return <TimelineContext>{children}</TimelineContext>;
};

export default Providers;
