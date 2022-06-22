import { useWeb3React } from "@web3-react/core";
import React from "react";
import { toHex } from "./../utils/service";
export const useNetwork = (props) => {
  const { library, setError } = useWeb3React();
  console.log(library);
  const switchNetwork = async (network) => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      });
      console.log(network);
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            // params: [networkParams[toHex(network)]],
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };
  return {
    switchNetwork,
  };
};
