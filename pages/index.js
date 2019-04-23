import Header from "../components/Header";
import React from "react";
import Head from "next/head";
import AboutPage from "../components/About";
import LandingPage from "../components/FirstPage";
import { FooterSection } from "../components/Footer"

const Index = () => (
  <div
    style={{
      backgroundColor: `#191919`,
      margin: `0`
    }}
  >
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik+Mono+One|Rajdhani|Raleway:900"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <LandingPage />
    <AboutPage />
    <FooterSection />
  </div>
);

export default Index;
