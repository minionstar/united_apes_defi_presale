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
import { useRouter } from "next/router";
import Script from "next/script";
import * as fbq from "../utils/fpixel";

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


  const pageview = () => {
    window.fbq('track', 'PageView')
  }
  
  // https://developers.facebook.com/docs/facebook-pixel/advanced/
  const event = (name, options = {}) => {
    window.fbq('track', name, options)
  }
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1038839080101601');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
