import { Stack, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { Link as TLink } from "../types";
import { Icon } from "./Icon";

type Props = {
  links: TLink[];
};

export const Footer: React.FC<Props> = ({ links }) => {
  return (
    <Stack position={"absolute"} left="2rem" bottom={"1rem"}>
      <HStack gap={"1.5rem"}>
        {links.map((link, idx) => (
          <Link key={idx} href={link.url} isExternal rel="noopener noreferrer">
            {/* @ts-ignore */}
            <Icon icon={link.icon} color={"#FFF"} />
          </Link>
        ))}
      </HStack>
    </Stack>
  );
};
