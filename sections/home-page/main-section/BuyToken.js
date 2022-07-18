import { Box, Container, Typography, Stack, Button } from "@mui/material";
import BuyTokenModal from "../../../components/BuyTokenModal";
import React, { useState } from "react";
import { ConnectModal } from "../../../components/ConnectModal";
import useAuth from "../../../hooks/useAuth";
const BuyToken = () => {
  const [open, setOpen] = React.useState(false);
  const { login, logout } = useAuth();
  function handleModalShowHide(res) {
    setOpen(res);
  }

  return (
    <Box
      name="BUY TOKEN"
      sx={{ width: "100%", position: "relative", mt: 10, pb: 10 }}
    >
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ fontFamily: "Bangers", color: "#FF0000" }}
          >
            Buy cryptocurrencies, trusted by United Apes Defi users.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              fontFamily: "Bangers",
              color: "#FF0000",
              lineHeight: "45px",
              textAlign: "center",
            }}
          >
            Join our Discord for instructions on how to participate  in our whitelist private sale..
          </Typography>
          {/* <Button
            sx={{
              fontFamily: "Bangers",
              backgroundColor: "#FF0000",
              fontSize: { xs: "15px", md: "24px" },
              lineHeight: "25.54px",
              width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
            }}
            color="error"
            variant="contained"
            target="_blank"
            onClick={handleModalShowHide}
          >
            BUY TOKEN
          </Button> */}
          <ConnectModal open={open} handleModalShowHide={handleModalShowHide} />
        </Box>
      </Container>
    </Box>
  );
};
export default BuyToken;
