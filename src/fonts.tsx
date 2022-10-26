import { Global } from "@emotion/react";
import React from "react";

const Fonts: React.FC = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('./fonts/Satoshi-Black.woff2') format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./fonts/Satoshi-Medium.woff2') format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Satoshi-Regular.woff2') format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Tsukimi Rounded';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/TsukimiRounded-Regular.woff2') format('woff2');
      }
    `}
  />
);

export default Fonts;
