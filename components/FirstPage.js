import styled, { keyframes } from "styled-components";
import Plants from "../components/img";
import {glitch} from "../components/Footer"

const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

const type = keyframes`
    from { width: 0; } 
    to { width: 30em; }
`;

const Title = styled.h1`
        overflow: hidden;
        white-space: nowrap;
        margin-left: 1.8em;
        margin-top: 5em;
        margin-bottom: 0;
        font-family: 'Rubik Mono One', sans-serif;
        font-size: 4.2em;
        color: #F5F5F5;
        animation: ${fadeInRight} ease 6s forwards;
        &:before,
        &:after{
          display: block;
          content: 'Sandra Grahl,';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: .8;
        }
        &:after {
          color: #D81159;
          z-index: -2;
        }
        &:before {
          color: #2fbf71;
          z-index: -1;
        }
        &:hover {
          &:before {
            animation: ${glitch} 8s cubic-bezier(.25, .46, .45, .94) both infinite
          }
          &:after {
            animation: ${glitch} 8s cubic-bezier(.25, .46, .45, .94) reverse both infinite
          }
        }
`;


const Title2 = styled.h1`
        overflow: hidden;
        white-space: nowrap;
        margin-left: 1.8em;
        margin-top: 0;
        font-family: 'Rubik Mono One', sans-serif;
        font-size: 4.2em;
        color: #F5F5F5;
        animation: ${fadeInRight} ease 6s forwards;
        &:before,
        &:after{
          display: block;
          content: 'Web developer';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: .8;
        }
        &:after {
          color: #D81159;
          z-index: -2;
        }
        &:before {
          color: #2fbf71;
          z-index: -1;
        }
        &:hover {
          &:before {
            animation: ${glitch} 8s cubic-bezier(.25, .46, .45, .94) both infinite
          }
          &:after {
            animation: ${glitch} 8s cubic-bezier(.25, .46, .45, .94) reverse both infinite
          }
        }
`;

const Slogan = styled.article`
  font-size: 2em;
  font-family: "Rajdhani", sans-serif;
  margin-left: 5.4em;
  color: #f5f5f5;
  opacity: 0;
  animation: ${fadeInRight} ease 6s forwards;
  z-index: 1;
`;

const Languages = styled.article`
  font-size: 2em;
  font-family: "Rajdhani", sans-serif;
  margin-top: 0.6em;
  margin-left: 5.4em;
  color: #2fbf71;
  opacity: 0;
  animation: ${fadeInRight} ease 6s forwards;
`;

const fade = keyframes`
    from { opacity: 0; } 
    to { opacity: 1; }
`;

const FirstPage = styled.section`
  & ${FirstPage}:nth-child(5) {
    float: right;
    transform: translateY(-10%);
    z-index: -1;
    animation: ${fade} ease 7s forwards;
    margin-bottom: 0;
  }
`;

const LandingPage = () => (
  <FirstPage>
    <Title>
      Sandra Grahl,
    </Title>
    <Title2>Web Developer</Title2>
    <Slogan>
      Hi, I'm a london-based full-stack programmer. Let's make something
    </Slogan>
    <Languages>
      | HTML | JavaScript | Node.js | CSS | React | PostgreSQL |
    </Languages>
    <Plants />
  </FirstPage>
);

export default LandingPage;
