import Head from "next/head";
import Image from "next/image";
import HeroSection from "../sections/home-page/HeroSection";
import MainSection from "../sections/home-page/MainSection";

export default function Home() {
  return (
    <>
      <HeroSection /> <MainSection />
    </>
  );
}
