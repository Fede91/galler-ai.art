import React from "react";
import styled from "styled-components";

type Props = {
  active: boolean;
  imgUrl: string;
};

export const Thumbnail: React.FC<Props> = ({ active, imgUrl }) => {
  return (
    <StyledContainer active={active}>
      <StyledThumb url={imgUrl} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ active: boolean }>`
  height: 2rem;
  width: 2rem;
  padding: 1px;
  border: ${(props) =>
    props.active ? "1px solid #fff" : "1px solid rgba(255,255,255,0.15)"};
`;

const StyledThumb = styled.div<{ url: string }>`
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url("${props.url}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
