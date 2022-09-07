import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAuth from "../hooks/useAuth";
import { connectors } from "../utils/connectors";
import { useWeb3React } from "@web3-react/core";
import { onlyNumbers } from "../utils/service";
import Web3 from "web3";
import {
  BUSDToken,
  ICOContractaddress,
  UADToken,
} from "../config/contract/contract";
import { BUSD } from "../config/ABI/BUSD";
import { ICOAbi } from "../config/ABI/ICOAbi";
import Swal from "sweetalert2";
import { Token } from "../config/ABI/Token";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "100%",
  bgcolor: "#000",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};
function BuyTokenModal(props) {
  const { login } = useAuth();
  const [isApproveDone, setIsApproveDone] = useState(false);
  const [isValue, setIsValue] = useState(0);
  const { chainId, account, library, active, deactivate } = useWeb3React();
  const ChainID = 3;
  const handleApprove = async () => {
    console.log(chainId, account);
    if (chainId !== ChainID && account === undefined) {
      Swal.fire("Warning", "Please connect to the wallect", "warning");
    } else {
      let web3 = new Web3(library.provider);
      let token = new web3.eth.Contract(BUSD, BUSDToken);
      let ICOtoken = new web3.eth.Contract(Token, UADToken);
      let ICO = new web3.eth.Contract(ICOAbi, ICOContractaddress);
      let data = await ICO.methods.getTokenomics().call();
      let NumberOfTokens = parseFloat(
        onlyNumbers(isValue) / (data[2] / Math.pow(10, 18))
      );
      let balanceToken = await ICOtoken.methods
        .balanceOf(ICOContractaddress)
        .call();
      let BUSDBalacne = await token.methods.balanceOf(account).call();
      console.log(
        NumberOfTokens,
        (parseFloat(balanceToken) - data[5]) / Math.pow(10, 5)
      );
      console.log(isValue);

      if (isValue > 0) {
        if (new Date().getTime() / 1000 >= data[3]) {
          if (new Date().getTime() / 1000 < data[4]) {
            if (
              NumberOfTokens <=
              (parseFloat(balanceToken) - data[5]) / Math.pow(10, 5)
            ) {
              if (
                parseFloat(onlyNumbers(isValue)) <=
                BUSDBalacne / Math.pow(10, 18)
              ) {
                token.methods
                  .approve(
                    ICOContractaddress,
                    web3.utils.toWei(onlyNumbers(isValue).toString(), "ether")
                  )
                  .send({ from: account })
                  .then(() => {
                    setIsApproveDone(true);
                    Swal.fire("Success", "Transcation succefull", "success");
                  })
                  .catch(() => {
                    setIsApproveDone(false);
                    setIsValue(0);
                    Swal.fire("Warning", "Transcation Failed", "warning");
                  });
              } else {
                Swal.fire(
                  "Warning!",
                  "You dont have enough BUSD amount",
                  "warning"
                );
              }
            } else {
              Swal.fire(
                "Warning!",
                "ICO don't have sufficient funds.",
                "warning"
              );
            }
          } else {
            Swal.fire("Warning!", "Sale has ended", "warning");
          }
        } else {
          Swal.fire("Warning!", "Sale is not started yet", "warning");
        }
      } else {
        if (isValue < 0) {
          Swal.fire("Warning", "Please enter correct amount", "warning");
        } else {
          Swal.fire("Warning", "Please enter amount ", "warning");
        }
      }
    }
  };
  const handleBuy = async () => {
    if (chainId !== ChainID && account === undefined) {
      alert("Please connect to the wallect");
    } else {
      console.log(library.provider);
      let web3 = new Web3(library.provider);
      let ICO = new web3.eth.Contract(ICOAbi, ICOContractaddress);
      console.log((isValue * Math.pow(10, 5)).toString());
      ICO.methods
        .buyToken(web3.utils.toWei(onlyNumbers(isValue).toString(), "ether"))
        .send({ from: account })
        .then(() => {
          setIsApproveDone(false);
          props.handleModalShowHide(false);
          Swal.fire("Success", "Transcation succefull", "success");
        })
        .catch(() => {
          props.handleModalShowHide(false);
          setIsValue(0);
          Swal.fire("Warning", "Transcation Failed", "warning");
        });
    }
  };
  return (
    <>
      {" "}
      <Modal
        open={props.open}
        onClose={() => props.handleModalShowHide(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontFamily: "Bangers", color: "#0afa07" }}
            >
              Buy Token
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontFamily: "Bangers", color: "#0afa07" }}
              onClick={() => {
                setIsApproveDone(false);
                props.handleModalShowHide(false);
              }}
            >
              X
            </Typography>
          </div>

          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <input
                placeholder="Enter Amount"
                type="number"
                min="0"
                step="any"
                id="buyAmount"
                onInput={(e) => setIsValue(e.target.value)}
                disabled={isApproveDone}
                style={{
                  padding: "10px",
                  marginBottom: "10px",
                  outline: "none",
                  border: "0",
                  borderRadius: "5px",
                  flex: 1,
                }}
              ></input>
              <div style={{ color: "#FF0000", marginLeft: "10px" }}>BUSD</div>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              {!active ? (
                <Button
                  sx={{
                    color: "#ffffff",
                    fontFamily: "Bangers",
                    backgroundColor: "#0afa07",
                    fontSize: { xs: "15px", md: "24px" },
                    lineHeight: "25.54px",
                    width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
                  }}
                  color="error"
                  variant="contained"
                  target="_blank"
                  onClick={() =>
                    login(
                      window.ethereum
                        ? connectors.injected
                        : connectors.walletConnect
                    )
                  }
                >
                  Connect
                </Button>
              ) : (
                <Button
                  sx={{
                    color: "#ffffff",
                    fontFamily: "Bangers",
                    backgroundColor: "#0afa07",
                    fontSize: { xs: "15px", md: "24px" },
                    lineHeight: "25.54px",
                    width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
                  }}
                  color="error"
                  variant="contained"
                  target="_blank"
                  onClick={() => deactivate()}
                >
                  Disconnect
                </Button>
              )}
              <Button
                sx={{
                  color: "#ffffff",
                  fontFamily: "Bangers",
                  backgroundColor: "#0afa07",
                  fontSize: { xs: "15px", md: "24px" },
                  lineHeight: "25.54px",
                  width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
                }}
                color="error"
                variant="contained"
                target="_blank"
                onClick={!isApproveDone ? handleApprove : handleBuy}
              >
                {!isApproveDone ? "Approve" : "Buy"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default BuyTokenModal;
