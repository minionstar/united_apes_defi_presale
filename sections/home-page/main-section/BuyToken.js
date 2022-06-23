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
          <ConnectModal open={open} handleModalShowHide={handleModalShowHide} />
        </Box>
      </Container>
    </Box>
  );
};
export default BuyToken;
