import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
};

export const PortfolioTitle: React.FC<Props> = ({ onClick }) => {
  const leftContainer = useBreakpointValue(
    {
      base: "0px",
      sm: "0px",
      md: "38vw",
    },
    {
      fallback: "base",
    }
  );

  const topLine = useBreakpointValue(
    {
      base: "58px",
      sm: "58px",
      md: "0",
    },
    {
      fallback: "base",
    }
  );

  return (
    <Stack
      position={"fixed"}
      top="0"
      left={leftContainer}
      h={"100vh"}
      w={"100px"}
      overflow={"visible"}
      alignContent="center"
      justifyContent={"center"}
      alignItems="center"
    >
      <Stack
        position={"absolute"}
        borderLeft={"1px solid #fff"}
        height="100vh"
        left={"2.5rem"}
        top={topLine}
        width={"1px"}
        opacity={0.15}
      />
      <StyledWrapper onClick={onClick}>
        <Stack transform={"rotate(270deg)"}>
          <Text
            fontSize={"1rem"}
            fontWeight={"bold"}
            color={"#fff"}
            opacity={0.5}
          >
            PORTFOLIO
          </Text>
          <Text
            fontSize={"2.25rem"}
            fontWeight={"bold"}
            marginTop={"0rem !important"}
            color={"#fff"}
            opacity={0.5}
          >
            EXPLORE MY WORKS
          </Text>
        </Stack>
      </StyledWrapper>
    </Stack>
  );
};

const StyledWrapper = styled.div`
  width: 25rem;
  cursor: pointer;
`;
