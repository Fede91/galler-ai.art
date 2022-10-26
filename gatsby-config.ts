require("dotenv").config({
  path: `.env`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `FeDesign`,
    description: "Hi! I'm FeDesign, a UX / UI Enthusiast",
    siteUrl: `https://fedesign.space`,
    image: `/images/fd_logo.png`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver:
          ({ node, key, value }: any) =>
          (post: any) =>
            `/${post.uid}`,
        shouldDownloadFiles: {
          "ai_art.data.preview": true,
        },
        schemas: {
          "ai-art": require("./custom_types/ai_art.json"),
        },
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
};

export default config;
