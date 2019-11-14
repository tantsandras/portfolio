import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Grid from "../components/ProjectGrid";
import { FooterSection } from "../components/Footer";

const PortfolioPage = () => (
  <div
    style={{
      backgroundColor: `#191919`,
      margin: `-8px`
    }}
  >
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik+Mono+One|Rajdhani|Raleway:900"
        rel="stylesheet"
      />
      <title>Sandra Grahl, portfolio</title>
      <meta name="Description" content="Web developer portfolio"></meta>
      <meta name="theme-color" content="#2fbf71" />
    </Head>
    <Header />
    <Grid />
    <FooterSection />
  </div>
);

export default PortfolioPage;
