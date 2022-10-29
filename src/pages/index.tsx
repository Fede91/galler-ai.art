import * as React from "react";
import staticData from "../content/data.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { graphql } from "gatsby";
import { Logo } from "../components/Logo";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card } from "../components/Card";
import { RootLayout } from "../components/RootLayout";
import {
  ChakraProvider,
  Heading,
  Stack,
  Text,
  useInterval,
} from "@chakra-ui/react";
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

  const [sliderIndex, setSliderIndex] = React.useState(0);
  const [isPortfolioVisible, setIsPortfolioVisible] = React.useState(false);

  const highlightedArt = React.useMemo(() => {
    return data.allPrismicAiArt.edges.filter((art) => art.node.data.highlight);
  }, [data]);

  React.useEffect(() => {}, []);
  useInterval(() => {
    setSliderIndex((sliderIndex + 1) % highlightedArt.length);
  }, 2800);

  const handleTogglePortfolio = React.useCallback(() => {
    setIsPortfolioVisible(!isPortfolioVisible);
  }, [setIsPortfolioVisible, isPortfolioVisible]);

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
          <PortfolioTitle onClick={handleTogglePortfolio} />
          <AwesomeSlider
            // play={true}
            bullets={false}
            organicArrows={false}
            fillParent
            transitionDelay={800}
            selected={sliderIndex}
          >
            {highlightedArt.map((art) => (
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
          </AwesomeSlider>
          <Stack position={"absolute"} right="1rem" bottom={"1rem"} zIndex={25}>
            {highlightedArt.map((art) => (
              <div
                key={art.node.id}
                style={{
                  height: "2rem",
                  width: "2rem",
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
          </Stack>
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
          <Stack
            position={"absolute"}
            left={0}
            top={0}
            w={"100%"}
            h={"100%"}
            backgroundColor={"#000"}
            zIndex={50}
            marginTop={"0px !important"}
            overflowY={"scroll"}
            visibility={"hidden"}
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            >
              <Masonry>
                {[...data.allPrismicAiArt.edges].map((art) => (
                  <Card
                    date={""}
                    title={art.node.data.title.text}
                    cover={art.node.data.preview.url}
                    localCover={""}
                    url={""}
                    tags={""}
                    key={art.node.id}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Stack>
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
