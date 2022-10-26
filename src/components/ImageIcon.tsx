import React from "react";
import styled from "styled-components";

type Props = {
  src: string;
};

export const ImageIcon: React.FC<Props> = ({ src }) => {
  return <StyledImg src={src} alt="" />;
};

const StyledImg = styled.img`
  height: 1.375rem;
  width: auto;
`;
