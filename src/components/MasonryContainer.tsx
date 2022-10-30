import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  isLargerThanMd: boolean;
  children: any;
  isVisible: boolean;
};

export const MasonryContainer: React.FC<Props> = ({
  isLargerThanMd,
  children,
  isVisible,
}) => {
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

  return isLargerThanMd ? (
    <Stack
      position={"absolute"}
      left={0}
      top={0}
      w={"100%"}
      h={"100%"}
      backgroundColor={"#000"}
      zIndex={50}
      marginTop={"0px !important"}
      overflowY={"scroll"}
      visibility={isVisible ? "visible" : "hidden"}
    >
      {children}
    </Stack>
  ) : (
    <Stack
      marginTop={"0px !important"}
      paddingLeft={paddingLeft}
      position={"relative"}
    >
      {children}
    </Stack>
  );
};
