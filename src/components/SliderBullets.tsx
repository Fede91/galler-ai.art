import { Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Thumbnail } from "./Thumbnail";

type Props = {
  index: number;
  images: any[];
};

export const SliderBullets: React.FC<Props> = ({ images, index }) => {
  const [isLargenThanMd] = useMediaQuery("(min-width: 48em)");

  return (
    <Stack
      position={"absolute"}
      right={isLargenThanMd ? "2rem" : undefined}
      left={isLargenThanMd ? undefined : "1.5rem"}
      top={"63px"}
      bottom={"0rem"}
      zIndex={25}
      marginTop={"0 !important"}
    >
      <Stack
        flexGrow={2}
        w={"1rem"}
        borderRight={isLargenThanMd ? 0 : "1px"}
        borderRightColor={"rgba(255,255,255,0.15)"}
        marginTop={"0 !important"}
      />
      {images.map((art, idx) => (
        <Thumbnail
          key={art.node.id}
          imgUrl={art.node.data.preview.url}
          active={idx === index}
        />
      ))}
      <Stack
        h={"3rem"}
        w={"1rem"}
        borderRight={"1px"}
        borderRightColor={"rgba(255,255,255,0.15)"}
      />
    </Stack>
  );
};
