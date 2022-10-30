import * as React from "react";
import staticData from "../content/data.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { graphql } from "gatsby";
import { Logo } from "../components/Logo";
import { RootLayout } from "../components/RootLayout";
import {
  ChakraProvider,
  Stack,
  useInterval,
  useMediaQuery,
} from "@chakra-ui/react";
import { PortfolioTitle } from "../components/PortfolioTitle";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { PlaceholderContainer } from "../components/PlaceholderContainer";
import theme from "../theme";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Gallery } from "../components/Gallery";
import { SliderBullets } from "../components/SliderBullets";
import { SideShadow } from "../components/SideShadow";
import { BottomShadow } from "../components/BottomShadow";
import { SEO } from "../components/SEO";

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

const IndexPage: React.FC<Props> = ({ data }) => {
  const [isLargenThanMd] = useMediaQuery("(min-width: 48em)");
  const { links } = staticData;

  const [sliderIndex, setSliderIndex] = React.useState(0);
  const [isPortfolioVisible, setIsPortfolioVisible] = React.useState(false);

  const highlightedArt = React.useMemo(() => {
    return data.allPrismicAiArt.edges.filter((art) => art.node.data.highlight);
  }, [data]);

  useInterval(() => {
    setSliderIndex((sliderIndex + 1) % highlightedArt.length);
  }, 3500);

  const handleTogglePortfolio = React.useCallback(() => {
    setIsPortfolioVisible(!isPortfolioVisible);
  }, [setIsPortfolioVisible, isPortfolioVisible]);

  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Logo />
        <PlaceholderContainer />
        <Container>
          <PortfolioTitle onClick={handleTogglePortfolio} />
          <Stack
            id="slider-wrapper"
            h={"100vh"}
            position={"relative"}
            marginTop={"0 !important"}
          >
            <SideShadow />
            <AwesomeSlider
              bullets={false}
              organicArrows={false}
              fillParent
              selected={sliderIndex}
            >
              {highlightedArt.map((art) => (
                //  <HighlightedImg  key={art.node.id}url={art.node.data.preview.url} />
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
                />
              ))}
            </AwesomeSlider>
            <SliderBullets index={sliderIndex} images={highlightedArt} />
            {!isLargenThanMd ? <BottomShadow /> : null}
          </Stack>

          <Gallery
            images={data.allPrismicAiArt.edges}
            isVisible={isPortfolioVisible}
          />
        </Container>
        <Footer links={links} />
      </RootLayout>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head = () => <SEO />;

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
