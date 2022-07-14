import Grid from "@mui/material/Grid";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
const AutoStaking = () => {
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
      <Box name="PRODUCTS" sx={{ position: "relative", marginBottom: 20 }}>
        <Container fixed sx={{ display: { xs: "none", md: "block" } }}>
          <Stack direction="row">
            <Box sx={{ pt: 4 }}>
              <Image
                src="/images/image-1.png"
                alt="Image-1"
                width={715}
                height={715}
              />
            </Box>
            <Box
              data-aos="fade-right"
              data-aos-delay={200}
              data-aos-duration="500"
              sx={{
                textAlign: "left",
                p: 2,
                width: { xs: "100%", sm: "60%", md: "100%", lg: "70%" },
                mr: 20,
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  sx={{ fontFamily: "Bangers", color: "#f27474" }}
                >
                  Auto Staking
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
                  textAlign: "left",
                }}
              >
                $UAD is a rebase token that rewards holders every 3 seconds with
                a sustainable 191,021% APY. No need to connect the wallet to a
                dApp to receive rewards simply buy and hold."
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
                href="https://klaydoe-uad.gitbook.io/united-apes-defi/auto-staking"
                target="_blank"
              >
                LEARN MORE
              </Button>
            </Box>
          </Stack>
        </Container>
        {/* web end */}
        {/* -------------- */}
        {/* mobile starts */}
        <Container fixed sx={{ display: { xs: "block", md: "none" } }}>
          <Stack
            sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            spacing={2}
          >
            <ThemeProvider theme={theme}>
              <Typography
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration="500"
                sx={{
                  fontFamily: "Bangers",
                  color: "#f27474",
                  fontSize: { xs: "50px", md: "53px" },
                }}
              >
                Auto Staking
              </Typography>
            </ThemeProvider>
            <Image
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration="500"
              src="/images/image-1.png"
              alt="Image-1"
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
                lineHeight: "30px",
                textAlign: "center",
                fontWeight: 400,
                fontSize: "17px",
              }}
            >
              $UAD is a rebase token that rewards holders every 3 seconds with a
              sustainable 191,021% APY. No need to connect the wallet to a dApp
              to receive rewards simply buy and hold."
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
              href="https://klaydoe-uad.gitbook.io/united-apes-defi/auto-staking"
              target="_blank"
            >
              LEARN MORE
            </Button>
          </Stack>
        </Container>
        <Box className="rose1">
          <Image
            data-aos="fade-left"
            data-aos-delay={200}
            layout="responsive"
            src="/images/rose-10.png"
            alt="rose-1"
            width={419}
            height={413}
          />
        </Box>
        <Box className="rose8">
          <Image
            data-aos="fade-right"
            data-aos-delay={400}
            layout="responsive"
            src="/images/rose-11.png"
            alt="rose-8"
            width={388}
            height={422}
          />
        </Box>
      </Box>
    </>
  );
};
export default AutoStaking;
