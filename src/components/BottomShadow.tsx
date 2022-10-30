import React from "react";

export const BottomShadow: React.FC = () => (
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "124px",
      width: "100%",
      background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      marginTop: 0,
      zIndex: 10,
    }}
  />
);
