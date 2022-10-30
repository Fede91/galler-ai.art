import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useMediaQuery } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { MasonryContainer } from "./MasonryContainer";
import { TopShadow } from "./TopShadow";

type Props = {
  images: any[];
  isVisible: boolean;
};

export const Gallery: React.FC<Props> = ({ images, isVisible }) => {
  const [isLargenThanMd] = useMediaQuery("(min-width: 48em)");

  return (
    <MasonryContainer isLargerThanMd={isLargenThanMd} isVisible={isVisible}>
      <TopShadow />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}>
        <Masonry>
          {images.map((art) => (
            <Card
              date={""}
              title={art.node.data.title.text}
              cover={art.node.data.preview.url}
              localCover={""}
              url={""}
              tags={""}
              key={art.node.id}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </MasonryContainer>
  );
};
