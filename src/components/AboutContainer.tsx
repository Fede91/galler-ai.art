import { useBreakpointValue, VStack } from "@chakra-ui/react";
import React from "react";

export const AboutContainer: React.FC<any> = ({ children }) => {
  const w = useBreakpointValue(
    {
      base: "100%",
      sm: "100%",
      md: "45vw",
    },
    {
      fallback: "base",
    }
  );

  const paddingLeft = useBreakpointValue(
    {
      base: "80px",
      sm: "80px",
      md: "0",
    },
    {
      fallback: "base",
    }
  );

  const h = useBreakpointValue(
    {
      base: "calc(100vh - 100px)",
      sm: "calc(100vh - 100px)",
      md: "100vh",
    },
    {
      fallback: "base",
    }
  );

  return (
    <VStack
      alignItems={"center"}
      paddingTop={"100px"}
      w={w}
      h={h}
      paddingLeft={paddingLeft}
    >
      {children}
    </VStack>
  );
};
