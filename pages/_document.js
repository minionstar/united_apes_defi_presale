import * as React from "react";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";

function createEmotionCache() {
  return createCache({ key: "css" });
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Bangers"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Poppins"
          />
        </Head>
        <body>
          <Main />
          <div id="60360-4cxwrvbz" className="sw_container"><script type="text/javascript" src="https://sweepwidget.com/w/j/w_init.js"></script></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
