import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [97, 1, 3],
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/9c48d1f781404552b1a017d597f6bee1`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/9c48d1f781404552b1a017d597f6bee1`,
  appName: "web3-react-demo",
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink,
};
