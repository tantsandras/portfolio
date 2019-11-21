import styled, { keyframes } from "styled-components";
import Flowers from "./IMG_3676background.jpg";
import Photo from "./ProfilePhoto";
import { device } from "./devices";

const fade = keyframes`
    from { opacity: 0; } 
    to { opacity: 1; }
`;

const About = styled.section`
// background-image: 
// linear-gradient(90deg, rgba(0,0,0,.1) 50%, transparent 0),
// linear-gradient(rgba(0,0,0,.1) 50%, transparent 0),
// linear-gradient(134deg, rgba(0,0,0,.1) 50%, transparent 0);
// -moz-linear-gradient(0deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
// background-size: 100px 90px;
background-color: rgba(0, 0, 0, .75);
background-image: -webkit-linear-gradient(315deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px), -webkit-linear-gradient(225deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px);
background-image: -moz-linear-gradient(315deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px), -moz-linear-gradient(225deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px);
background-image: -ms-linear-gradient(315deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px), -ms-linear-gradient(225deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px);
background-image: -o-linear-gradient(315deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px), -o-linear-gradient(225deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px);
background-image: linear-gradient(315deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px), linear-gradient(225deg, rgba(0, 0, 0, .7) 22px, black 22px, black 24px, transparent 24px, transparent 67px, black 67px, black 69px, transparent 69px);
background-position: 0 0%, 0 64px;
background-size: 64px 128px;
  margin-top: 18em;
  width: 100%;
  padding-bottom: 6em;
  background-repeat: repeat;
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  // background-repeat: no-repeat;
  // background-size: contain;
  
`;

const AboutContainer = styled.article`
  font-size: 1.6em;
  font-family: "Rubik Mono One", sans-serif;
  color: #f5f5f5;
  padding-top: 2em;
  animation: ${fade} ease 6s forwards;
  width: 100%;

  & ${AboutContainer}:nth-child(2) {
    text-shadow: 2px 2px #d81159;
    animation: ${fade} ease 6s forwards;
    padding-top: 0.8em;

    @media ${device.tablet} {
      text-align: center;
      font-size: 1em;
      margin-top: 7em;
    }
  }

  & ${AboutContainer}:nth-child(3) {
    animation: ${fade} ease 6s forwards;
    color: #f5f5f5;
    font-size: 1em;
    font-family: "Rajdhani", sans-serif;
    line-height: 1.5;
    width: 70%;
    padding-top: 0.1em;
    padding-bottom: 2em;

    @media ${device.tablet} {
      font-size: 0.8em;
      width: 80%;
      padding-left: 10%;
    }
  }

  & ${AboutContainer}:nth-child(4) {
    text-shadow: 2px 2px #d81159;
    animation: ${fade} ease 6s forwards;
    padding-left: 60%;
    padding-top: 2em;

    @media ${device.tablet} {
      text-align: center;
      font-size: 1em;
      margin-top: 4em;
      padding-left: 0;
    }
  }

  & ${AboutContainer}:nth-child(5) {
    animation: ${fade} ease 6s forwards;
    color: #f5f5f5;
    font-size: 1em;
    font-family: "Rajdhani", sans-serif;
    width: 50%;
    padding-left: 40%;
    padding-top: 1em;
    padding-bottom: 4em;

    @media ${device.tablet} {
      font-size: 0.8em;
      width: 80%;
      padding-left: 10%;
    }
  }
`;

const AboutPage = () => (
  <About id="about">
    <AboutContainer>
      <Photo />
      <h2>Who am I?</h2>
      <p>
        I fell in love with programming pretty recently, but passionately.
        Curious about all things code, I have no problems challenging myself to
        learn more, and find creative solutions to make thoughtful, fun, and
        functional projects. I'm especially stoked about{" "}
        <i>digital communication</i> & <i>design</i>.
      </p>
      <h2>What can I do?</h2>
      <p>
        Plan, build and deliver beautiful and exciting features, both backend
        and frontend.
      </p>
    </AboutContainer>
  </About>
);

export default AboutPage;
