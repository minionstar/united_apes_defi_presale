import { Container, Typography, Box, Grid, Stack, Button } from "@mui/material";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Lottery = () => {
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
    <>
      {/* web starts */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          mb: 10,
          mt: 10,
          display: { xs: "none", md: "block" },
        }}
      >
        <Container fixed>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Stack
                sx={{ alignItems: { xs: "center", md: "flex-start" } }}
                spacing={2}
                data-aos="fade-right"
                data-aos-delay={200}
                data-aos-duration="1000"
              >
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    component="div"
                    sx={{ fontFamily: "Bangers", color: "#f27474" }}
                  >
                    The Lottery
                  </Typography>
                </ThemeProvider>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Bangers",
                    color: "#f27474",
                    lineHeight: "45px",
                  }}
                >
                  - Everyone can participate in our lottery every 12 hours ⏰
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Bangers",
                    color: "#f27474",
                    lineHeight: "45px",
                  }}
                >
                  - NFT holders will have free lifetime entries into the lottery determined by the level of NFT they hold 🎟
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Bangers",
                    color: "#f27474",
                    lineHeight: "45px",
                  }}
                >
                  - Non-NFT holders will have to pay a fee with $UAD to gain
                  entries 💵
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Bangers",
                    color: "#f27474",
                    lineHeight: "45px",
                  }}
                >
                  - We will burn 10% of all winnings 🔥
                </Typography>
                <Button
                  sx={{
                    fontFamily: "Bangers",
                    backgroundColor: "#FF0000",
                    fontSize: { xs: "15px", md: "24px" },
                    lineHeight: "25.54px",
                    width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
                  }}
                  color="error"
                  variant="contained"
                  href="https://klaydoe-uad.gitbook.io/united-apes-defi/lottery"
                  target="_blank"
                >
                  LEARN MORE
                </Button>
              </Stack>
            </Grid>
            <Grid
              data-aos="fade-left"
              data-aos-delay={200}
              data-aos-duration="1000"
              item
              xs={12}
              md={6}
            >
              <Image
                src="/images/lottery.png"
                alt="Lottery"
                width={715}
                height={715}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* web ends */}
      {/* ------------ */}
      {/* mobile starts */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          mt: 10,
          mb: 10,
          display: { xs: "block", md: "none" },
        }}
      >
        <Container fixed>
          <Stack
            sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            spacing={2}
          >
            <ThemeProvider theme={theme}>
              <Typography
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration="500"
                sx={{ fontFamily: "Bangers", color: "#f27474", fontSize: "50px" }}
              >
                The Lottery
              </Typography>
            </ThemeProvider>
            <Image
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              src="/images/lottery.png"
              alt="Lottery"
              width={715}
              height={715}
            />
            <Typography
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                fontFamily: "Bangers",
                color: "#f27474",
                lineHeight: "45px",
                textAlign: "center",
                fontSize: "17px",
              }}
            >
              - UAD will hold a lottery every 12 hours and everyone can
              participate ⏰
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                fontFamily: "Bangers",
                color: "#f27474",
                lineHeight: "45px",
                textAlign: "center",
                fontSize: "17px",
              }}
            >
              - NFT holders will have a fixed amount of free entries into every
              lottery determined by the level of NFTs they hold 🎟
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                fontFamily: "Bangers",
                color: "#f27474",
                lineHeight: "45px",
                textAlign: "center",
                fontSize: "17px",
              }}
            >
              - Non-NFT holders will have to pay a fee with $UAD to gain entries
              💵
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                fontFamily: "Bangers",
                color: "#f27474",
                lineHeight: "45px",
                textAlign: "center",
                fontSize: "17px",
              }}
            >
              - We will burn 10% of all winnings 🔥
            </Typography>
            <Button
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                fontFamily: "Bangers",
                backgroundColor: "#FF0000",
                fontSize: "21px",
                lineHeight: "25.54px",
                padding: "10px",
                width: { xs: "50%", md: "30%" },
              }}
              color="error"
              variant="contained"
              href="https://klaydoe-uad.gitbook.io/united-apes-defi/lottery"
              target="_blank"
            >
              LEARN MORE
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default Lottery;
