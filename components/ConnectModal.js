import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNetwork } from "../hooks/useNetwork";
import { connectors } from "../utils/connectors";
import { Button } from "@mui/material";
import useAuth from "./../hooks/useAuth";
import BuyTokenModal from "./BuyTokenModal";
export const ConnectModal = (props) => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      <Button
        sx={{
          fontFamily: "Bangers",
          backgroundColor: "#FF0000",
          fontSize: { xs: "15px", md: "24px" },
          lineHeight: "25.54px",
          width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
          color: "#FFFFFF"
        }}
        color="error"
        variant="contained"
        target="_blank"
        onClick={() => props.handleModalShowHide(true)}
      >
        BUY TOKEN
      </Button>
      <BuyTokenModal
        open={props.open}
        handleModalShowHide={props.handleModalShowHide}
      />
    </>
  );
};
