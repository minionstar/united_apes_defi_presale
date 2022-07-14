import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  input: {
    color: "#f27474",
  },
});
const HeroSection = (props) => {
  const classes = useStyles();
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "rgba(255, 255, 255,0)",
        darker: "rgba(255, 255, 255,0)",
      },
      neutral: {
        main: "rgba(255, 255, 255,0)",
      },
    },
  });

  theme.typography.h3 = {
    fontSize: "40px",
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('images/hero-section.png')",
          minHeight: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          position: "relative"
        }}
      >
        <Container sx={{ paddingTop: 18, zIndex: 3 }} fixed>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid container mt={2} spacing={1}>
              <Grid item xs={12} md={12}>
                <Image
                  src="/images/hero-section-image.jpg"
                  alt="Logo"
                  width={422}
                  height={441}
                  data-aos="zoom-in"
                  data-aos-delay={400}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  pb: { xs: 0, md: 20 },
                  ml: 6,
                  pr: 0,
                  mt: { xs: 2, md: 0 },
                  display: "flex",
                  justifyContent: "center",
                }}
              ></Grid>
              <Grid
                item
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={12}
              >
                <Box
                  data-aos="fade-up"
                  data-aos-delay={800}
                  sx={{ width: { xs: "100%", sm: "55%", md: "60%" } }}
                >
                  <ThemeProvider theme={theme}>
                    <Typography
                      sx={{
                        fontFamily: "Bangers",
                        color: "#f27474",
                        lineHeight: "52px",
                        fontSize: {
                          xs: "46px",
                          sm: "46px",
                          md: "46",
                          lg: "49",
                        },
                      }}
                    >
                      UAD is bringing the online gaming and casino industry to
                      defi
                    </Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box className={"gorilla"}>
          <Image
            layout="responsive"
            data-aos="fade-right"
            data-aos-delay={800}
            src="/images/Gorilla.png"
            alt="gorilla"
            width={315}
            height={437}
          />
        </Box>
      </Box>
    </>
  );
};
HeroSection.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default HeroSection;
