import React from "react";
import Head from "next/head";
import { FooterSection } from "../components/Footer";
import Carousel from "../components/projectCarousel"
import { Jo, Space, Sports, Wollstonecraft } from "../components/ProjectThumbnails";
import stars from "../components/36326012-space-wallpapers.jpg"
import leaves from "../components/IMG_6302 (1).jpg"
import naranjas from "../components/naranjas.png"
import boxes from "../components/boxes.jpg"

const slideData = [
  {
    id: 0,
    img: `${boxes}') left 0% top 0%/74% repeat`,
    color: "#D81159",
    src: "https://wollstonecraftwalks.netlify.com/",
    headline: "Wollstonecraft Walks",
    component: <Wollstonecraft />,
    description: `A progressive web app and virtual walk guide about Mary
      Wollstonecraft and her life on Newington Green. I made it in
      gatsby.js, with netlify's content management system, for the
      organisations Fragments & Monuments and Scary Little Girls.`
  },
  {
    id: 1,
    img: `${stars}') left 0% top 0%/100% no-repeat`,
    color: "#191919",
    src: "https://great-gatsby-space-explorer.netlify.com/",
    headline: "Space Explorer",
    component: <Space />,
    description: `Made with GatsbyJs and Canvas, the "Great Gatsby - Space
      Explorer" game is a personal project that I built because I had
      never used Canvas before. And because, you know, ...space.`
  },
  {
    id: 2,
    img: `${leaves}') left 0% top 0%/100% no-repeat`,
    color: "#2E5444",
    src: "https://jos-blog.herokuapp.com/",
    headline: "Rarely Jovial",
    component: <Jo />,
    description: `Rarely Jovial is a blog I made with Handlebars, Express, Node.js
      and PostgreSQL. It was a personal project that I tinkered with
      in my spare time, and unfortunately I didn't finish it, but it
      was good backend practice.`
  },
  {
    id: 3,
    img: `${naranjas}') left 0% top 0%/10% repeat`,
    color: "#EE6E46",
    src: "https://casual-sports.herokuapp.com/",
    headline: "Casual Sports",
    component: <Sports />,
    description: `This is an app that aims to connect commitmentphobes and
      chillers who want to play sports. On the app, you can either
      sign your team up to play against other teams, see what sport
      events are going on in London through displaying events from the
      Meetup API, see what sport events are going on near you, or add
      and organise sport events.`
  }
];

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
    {/* <Header /> */}
    {/* <Grid /> */}
    <Carousel slideData={slideData} />
    <FooterSection />
  </div>
);

export default PortfolioPage;
