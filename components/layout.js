import Header from "../layouts/Header";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Bangers"
        />
      </Head>
      <Header key={"header"} />
      <main>{children}</main>
    </>
  );
}
