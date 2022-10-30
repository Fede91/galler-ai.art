import React from "react";

export const SideShadow: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100%",
      background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%)",
      marginTop: 0,
      zIndex: 10,
    }}
  />
);
