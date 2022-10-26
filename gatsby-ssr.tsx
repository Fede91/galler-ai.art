import React from "react";

export const onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Satoshi-Black.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SatoshiBlackFont"
    />,
    <link
      rel="preload"
      href="/fonts/Satoshi-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SatoshiMediumFont"
    />,
    <link
      rel="preload"
      href="/fonts/Satoshi-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SatoshiRegularFont"
    />,
    <link
      rel="preload"
      href="/fonts/TsukimiRounded-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="TsukimiRoundedFont"
    />,
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ]);
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <img
        src="/images/fd_logo.png"
        alt="logo"
        style={{ height: "calc(3.23625vw + 77.86408px)" }}
      />
      <div className="preloader_animation"></div>
    </div>,
  ]);
  setBodyAttributes({
    className: "preloader_active",
  });
  setPostBodyComponents([<script src="/scripts/preloader.js" />]);
};
