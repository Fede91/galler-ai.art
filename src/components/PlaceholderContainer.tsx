import { useBreakpointValue, VStack } from "@chakra-ui/react";
import React from "react";

export const PlaceholderContainer: React.FC<any> = ({ children }) => {
  const w = useBreakpointValue(
    {
      base: "0px",
      sm: "0px",
      md: "40vw",
    },
    {
      fallback: "base",
    }
  );

  const h = useBreakpointValue(
    {
      base: "0px",
      sm: "0px",
      md: "100vh",
    },
    {
      fallback: "base",
    }
  );

  return (
    <VStack w={w} h={h} marginTop={"0 !important"}>
      {children}
    </VStack>
  );
};
