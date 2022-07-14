import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box, Grid } from "@mui/material";
import CollectionsCards from "../../../components/CollectionsCards";
import Slider from "react-slick";
const cardInformations = [
  {
    image: "images/collections-1.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-2.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-3.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-1.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-2.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-3.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-1.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-2.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
  {
    image: "images/collections-3.png",
    title: "Odio fames rutrum laoreet",
    description:
      "Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.Cras posuere ultrices varius odio odio fames rutrum laoreet accumsan, aliquam rutrum est, felis odio.",
  },
];
const settings = {
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3500,
  arrows: false,
  responsive: [
    {
      breakpoint: 735,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, rows: 1 },
    },
    {
      breakpoint: 1111,
      settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true },
    },
  ],
};
const Collections = () => {
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  };
  return (
    <div name="NFT COLLECTIONS">
      <Box sx={{ position: "relative", width: "100%" }}>
        <Container fixed>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
              mb: 20,
              mt: 20,
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration="500"
                sx={{
                  fontFamily: "Bangers",
                  color: "#f27474",
                  fontSize: "53px",
                  display: { xs: "none", md: "block" },
                }}
              >
                NFT collection
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration="500"
                sx={{
                  fontFamily: "Bangers",
                  color: "#f27474",
                  fontWeight: 400,
                  fontSize: { xs: "50px", md: "53px" },
                  display: { xs: "block", md: "none" },
                }}
              >
                NFT collection
              </Typography>
            </ThemeProvider>
            <Box sx={{ width: { xs: "100%", md: "70%" }, mb: 2 }}>
              <Typography
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration="500"
                sx={{
                  fontFamily: "Bangers",
                  color: "#f27474",
                  lineHeight: "30px",
                  fontSize: { xs: "17px", md: "20px" },
                }}
              >
                Top 500 contributors at launch will be airdropped NFTs worth
                free lifetime entries into our Lottery.
              </Typography>
            </Box>
          </Box>

          <Slider
            data-aos="zoom-out"
            data-aos-delay={600}
            data-aos-duration="500"
            rows={1}
            {...settings}
          >
            {cardInformations.map((data, i) => (
              <Box sx={{ p: 2 }} key={i}>
                <CollectionsCards data={data} />
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    </div>
  );
};
export default Collections;
