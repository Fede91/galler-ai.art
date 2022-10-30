import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export const Container: React.FC<any> = ({ children }) => {
  const h = useBreakpointValue(
    {
      base: undefined,
      sm: undefined,
      md: "100vh",
    },
    {
      fallback: "base",
    }
  );

  return (
    <Stack
      w={{ sm: "100%", md: "60vw" }}
      h={h}
      overflowY="scroll"
      overflow={"hidden"}
      marginTop={"0 !important"}
      position="relative"
    >
      {children}
    </Stack>
  );
};
