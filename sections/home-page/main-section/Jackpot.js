import Grid from "@mui/material/Grid";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
const Jackpot = () => {
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
      {/* web start */}
      <Container fixed sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            item
            xs={12}
            md={12}
          >
            <Stack
              data-aos="fade-right"
              data-aos-delay={200}
              data-aos-duration="1000"
              sx={{ alignItems: { xs: "center", md: "flex-center" }, width:"100%"}}
              spacing={4}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Bangers",
                    color: "#FF0000",
                  }}
                >
                  The Jackpot
                </Typography>
              </ThemeProvider>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontFamily: "Bangers", color: "#ffffff" }}
              >
                How to win:
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontFamily: "Bangers", color: "#ffffff" }}
              >
                - On every buy 3% tax is allocated to Jackpot.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontFamily: "Bangers", color: "#ffffff" }}
              >
                - On every sell 5% is allocated to the Jackpot.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontFamily: "Bangers", color: "#ffffff" }}
              >
                - If there is no buy over 0.1 BNB in the last 10 minutes the
                last person who bought in with over 0.1 BNB will win the
                Jackpot.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontFamily: "Bangers", color: "#ffffff" }}
              >
                - 10% of all winnings will automatically be sent to the burn
                address.
              </Typography>
            </Stack>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Image
              data-aos="fade-left"
              data-aos-delay={200}
              data-aos-duration="1000"
              src="/images/jackpot.png"
              alt="Jackpot"
              width={715}
              height={715}
            />
          </Grid> */}
        </Grid>
      </Container>
      {/* web end */}
      {/* --------------- */}
      {/* mobile start */}
      <Container fixed sx={{ display: { xs: "block", md: "none" } }}>
        <Stack
          sx={{ alignItems: { xs: "center", md: "flex-start" }, mt: 5 }}
          spacing={2}
        >
          <ThemeProvider theme={theme}>
            <Typography
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{ fontFamily: "Bangers", color: "#FF0000", fontSize: "50px" }}
            >
              The Jackpot
            </Typography>
          </ThemeProvider>
          {/* <Image
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration="500"
            src="/images/jackpot.png"
            alt="Jackpot"
            width={715}
            height={715}
          /> */}
          <Typography
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration="500"
            sx={{
              fontFamily: "Bangers",
              color: "#FF0000",
              textAlign: "center",
              fontSize: "17px",
              lineHeight: "30px",
            }}
          >
            How to win:
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration="500"
            sx={{
              fontFamily: "Bangers",
              color: "#ffffff",
              textAlign: "center",
              fontSize: "17px",
              lineHeight: "30px",
            }}
          >
            - On every buy 3% tax is allocated to Jackpot.
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration="500"
            sx={{
              fontFamily: "Bangers",
              color: "#ffffff",
              textAlign: "center",
              fontSize: "17px",
              lineHeight: "30px",
            }}
          >
            - On every sell 5% is allocated to the Jackpot.
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration="500"
            sx={{
              fontFamily: "Bangers",
              color: "#ffffff",
              textAlign: "center",
              fontSize: "17px",
              lineHeight: "30px",
            }}
          >
            - If there is no buy over 0.1 BNB in the last 10 minutes the last
            person who bought in with over 0.1 BNB will win the Jackpot.
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration="500"
            sx={{
              fontFamily: "Bangers",
              color: "#ffffff",
              textAlign: "center",
              fontSize: "17px",
              lineHeight: "30px",
            }}
          >
            - 10% of all winnings will automatically be sent to the burn
            address.
          </Typography>
        </Stack>
      </Container>
    </>
  );
};
export default Jackpot;
