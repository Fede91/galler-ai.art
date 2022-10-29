import React from "react";
import styled from "styled-components";

export const Card: React.FC<any> = ({
  url,
  cover,
  date,
  tags,
  title,
  localCover,
}) => (
  <StyledContainer>
    <StyledImageWrapper>
      <img src={cover} alt={title} />
    </StyledImageWrapper>
    <div>
      <h4>{title}</h4>
    </div>
  </StyledContainer>
);

const StyledContainer = styled.div`
  margin-bottom: 4rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const StyledImageWrapper = styled.div`
  border-radius: 0.1rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;
