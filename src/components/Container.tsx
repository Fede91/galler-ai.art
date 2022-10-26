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

  const paddingTop = useBreakpointValue(
    {
      base: "0px",
      sm: "0px",
      md: "5.625rem",
    },
    {
      fallback: "base",
    }
  );

  return (
    <Stack
      w={{ sm: "100vw", md: "55vw" }}
      h={h}
      overflowY="scroll"
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingBottom={"7rem"}
      position={"relative"}
      overflow={"hidden"}
    >
      {children}
    </Stack>
  );
};
