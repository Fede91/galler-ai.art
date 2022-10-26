import React from "react";
import Img from "../assets/img/fd_logo.png";
import styled from "styled-components";

export const Logo: React.FC = () => <StyledImg src={Img} alt="FeDesign logo" />;

const StyledImg = styled.img`
  height: 2.5rem;
  width: auto;
  position: fixed;
  left: 25px;
  top: 18px;
`;
