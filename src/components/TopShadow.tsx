import React from "react";

export const TopShadow: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "16px",
      width: "100%",
      background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
      marginTop: 0,
      zIndex: -1,
    }}
  />
);
