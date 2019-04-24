import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Grid from "../components/ProjectGrid"
import {FooterSection} from "../components/Footer"

const PortfolioPage = () => (
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
        <Grid />
        <FooterSection />
      </div>
) 

export default PortfolioPage