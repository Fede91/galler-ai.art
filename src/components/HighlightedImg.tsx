import React from "react";
import styled from "styled-components";

type Props = {
  url: string;
};

export const HighlightedImg: React.FC<Props> = ({ url }) => {
  return <StyledImgWrapper url={url} />;
};

const StyledImgWrapper = styled.div<{ url: string }>`
  height: 100vh;
  width: 100%;
  background-image: ${(props) => `url("${props.url}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
