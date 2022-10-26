import * as React from "react";
import staticData from "../content/data.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { graphql } from "gatsby";
import { Logo } from "../components/Logo";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card } from "../components/Card";
import { RootLayout } from "../components/RootLayout";
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";
import { PortfolioTitle } from "../components/PortfolioTitle";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { AboutContainer } from "../components/AboutContainer";
import theme from "../theme";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

library.add(fab);

type Props = {
  data: {
    allPrismicAiArt: {
      edges: {
        node: {
          id: string;
          data: {
            title: {
              text: string;
            };
            description: {
              text: string;
            };
            preview: {
              url: string;
            };
            highlight?: boolean;
          };
        };
      }[];
    };
  };
};

const AutoplaySlider = withAutoplay(AwesomeSlider);

const IndexPage: React.FC<Props> = ({ data }) => {
  const { hero, links } = staticData;
  console.log(data);

  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Logo />
        <AboutContainer>
          <Heading fontSize="2.5rem" fontWeight="400">
            {hero.name}
          </Heading>
          <Text fontSize="1.25rem">{hero.bio}</Text>
        </AboutContainer>
        <Container>
          <PortfolioTitle />
          <AutoplaySlider
            play={true}
            bullets={false}
            organicArrows={false}
            fillParent
            transitionDelay={500}
          >
            {data.allPrismicAiArt.edges
              .filter((art) => art.node.data.highlight)
              .map((art) => (
                <div
                  key={art.node.id}
                  style={{
                    height: "100vh",
                    width: "100%",
                    backgroundImage: `url("${art.node.data.preview.url}")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {/* <img
                  src={art.node.data.preview.url}
                  alt="Gatsby Docs are awesome"
                /> */}
                </div>
              ))}
          </AutoplaySlider>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100%",
              background:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%)",
              marginTop: 0,
              zIndex: 10,
            }}
          />
          {/* <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          >
            <Masonry>
              {[...data.allDribbbleShot.nodes].map((shot) => (
                <Card
                  date={shot.published}
                  title={shot.title}
                  cover={shot.cover}
                  localCover={shot.localCover}
                  url={shot.url}
                  tags={shot.tags}
                  key={shot.id}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry> */}
        </Container>
        {/* <Footer links={links} /> */}
      </RootLayout>
    </ChakraProvider>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allPrismicAiArt {
      edges {
        node {
          id
          data {
            description {
              text
            }
            preview {
              url
            }
            title {
              text
            }
            highlight
          }
        }
      }
    }
  }
`;
