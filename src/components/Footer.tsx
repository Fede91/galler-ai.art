import { Stack, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as TLink } from "../types";
import { Icon } from "./Icon";

type Props = {
  links: TLink[];
};

export const Footer: React.FC<Props> = ({ links }) => {
  return (
    <Stack position={"absolute"} left="1.45rem" bottom={"1rem"}>
      <HStack
        transform={"rotate(270deg)"}
        marginLeft={"-7.8rem"}
        marginBottom={"9rem"}
      >
        <Text
          fontSize={"0.75rem"}
          fontWeight={"light"}
          color={"#fff"}
          opacity={0.2}
        >
          Copyright © 2022. All Rights Reserved.
        </Text>
        <Link
          href="https://fedesign.space"
          isExternal
          fontSize={"0.75rem"}
          fontWeight={"light"}
          color={"#fff"}
          opacity={0.2}
        >
          FeDesign
        </Link>
      </HStack>
      <Stack gap={"1rem"}>
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            isExternal
            rel="noopener noreferrer"
            opacity={0.5}
          >
            {/* @ts-ignore */}
            <Icon icon={link.icon} color={"#FFF"} />
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};
