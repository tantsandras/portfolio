import Header from "../components/Header";
import React from "react";
import Head from "next/head";
import AboutPage from "../components/About";
import LandingPage from "../components/FirstPage";
import { FooterSection } from "../components/Footer";

const Index = () => (
  <div
    style={{
      backgroundColor: `#191919`,
      margin: `-8px`,
    }}
  >
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik+Mono+One|Rajdhani|Raleway:900"
        rel="stylesheet"
      />
      <title>Sandra Grahl, web developer in London</title>
      <meta
        name="Description"
        content="Sandra Grahl, fullstack web developer based in London"
      ></meta>
      <meta name="theme-color" content="#44b1a1" />
    </Head>
    <Header />
    <LandingPage />
    <AboutPage />
    <FooterSection />

  </div>
);

export default Index;
