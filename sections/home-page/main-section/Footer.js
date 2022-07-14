import { Box, Container, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", mt: 10, pb: 10 }}>
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            data-aos="flip-left"
            data-aos-delay={200}
            data-aos-duration="500"
            src="/images/logo.jpg"
            alt="logo"
            width={144}
            height={168}
          />
          <Typography
            data-aos="fade-up"
            data-aos-delay={400}
            data-aos-duration="500"
            sx={{
              fontFamily: "Bangers",
              color: "#f27474",
              lineHeight: "45px",
              textAlign: "center",
              width: { xs: "100%", md: "50%" },
              fontSize: { xs: "15", md: "18px" },
              mt: 2,
            }}
          >
            The saga continues...
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Box
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration="500"
            >
              <a
                href="https://www.facebook.com/unitedapesdefi?_rdc=1&_rdr"
                target="_blank"
              >
                <FacebookIcon sx={{ color: "#f27474" }} />{" "}
              </a>
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay={800}
              data-aos-duration="500"
            >
              <a href="https://instagram.com/unitedapesdefi" target="_blank">
                <InstagramIcon sx={{ color: "#f27474" }} />
              </a>
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay={1000}
              data-aos-duration="500"
            >
              <a href="https://twitter.com/unitedapesdefi" target="_blank">
                <TwitterIcon sx={{ color: "#f27474" }} />
              </a>
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay={1000}
              data-aos-duration="700"
              sx={{ pt: 0.5 }}
            >
              <a href="https://discord.com/invite/3u5dtQ83" target="_blank">
                <FontAwesomeIcon style={{ color: "#f27474" }} icon={faDiscord} />
              </a>
            </Box>
          </Stack>
          <Typography
            data-aos="fade-up"
            data-aos-delay={1200}
            data-aos-duration="500"
            sx={{
              fontFamily: "Bangers",
              color: "#f27474",
              lineHeight: "45px",
              textAlign: "center",
              width: { xs: "80%", md: "50%" },
              mt: 2,
              fontSize: { xs: "15", md: "18px" },
            }}
          >
            copyright © 2022 all rights reserved
          </Typography>
        </Box>
      </Container>
      <Box className="rose6">
        <Image
          src="/images/rose-12.png"
          alt="rose-6"
          width={499}
          height={494}
          data-aos="fade-right"
          data-aos-delay={200}
          data-aos-duration="500"
        />
      </Box>
      <Box className="rose7">
        <Image
          data-aos="fade-left"
          data-aos-delay={200}
          data-aos-duration="500"
          src="/images/rose-13.png"
          alt="rose-7"
          width={363}
          height={360}
        />
      </Box>
    </Box>
  );
};
export default Footer;
