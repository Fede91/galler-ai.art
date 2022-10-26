import React from "react";
import Img from "../assets/img/Blob_Primary.png";
import styled from "styled-components";

export const PrimaryBlob: React.FC = () => <StyledImg src={Img} alt="blob" />;

const StyledImg = styled.img`
  position: fixed;
  top: -460px;
  left: -300px;
  z-index: -10;
`;
