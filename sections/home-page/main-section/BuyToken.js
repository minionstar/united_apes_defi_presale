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
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              fontFamily: "Bangers",
              color: "#ffffff",
              lineHeight: "45px",
              textAlign: "center",
            }}
          >
            Join our Discord for instructions on how to participate in our
            whitelist private sale!
          </Typography>
          <ConnectModal open={open} handleModalShowHide={handleModalShowHide} />
        </Box>
      </Container>
    </Box>
  );
};
export default BuyToken;
