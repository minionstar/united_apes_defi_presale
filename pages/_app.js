import "../styles/globals.css";
import Layout from "../components/layout";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
function getLibrary(provider) {
  const library = new Web3Provider(provider);
  console.log(library);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
