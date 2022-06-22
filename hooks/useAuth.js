import { useWeb3React } from "@web3-react/core";
import React from "react";

export const useAuth = () => {
  const { activate, deactivate, chainId } = useWeb3React();
  const login = (connectors) => {
    activate(connectors);
  };

  const logout = async () => {
    // refreshState();
    deactivate();
  };
  return { login, logout };
};

export default useAuth;
