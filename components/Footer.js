import React from "react";
import styled, { keyframes } from "styled-components";
import Github from "./github-10-xxl.png";
import {device} from "./devices"

const glitch = keyframes`
  0% {
      -webkit-transform: translate(0);
      transform: translate(0)
  }
  20% {
      -webkit-transform: translate(-5px, 5px);
      transform: translate(-5px, 5px)
  }
  40% {
      -webkit-transform: translate(-5px, -5px);
      transform: translate(-5px, -5px)
  }
  60% {
      -webkit-transform: translate(5px, 5px);
      transform: translate(5px, 5px)
  }
  80% {
      -webkit-transform: translate(5px, -5px);
      transform: translate(5px, -5px)
  }
  to {
      -webkit-transform: translate(0);
      transform: translate(0)
  }
`;

const Footer = styled.div`
  -webkit-clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  position: relative;
  margin-top: -5em;
  padding-top: 18em;
  padding-bottom: 6em;
  overflow: shidden;
  background-color: #191919;
  &:after {
    -webkit-clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    background: #191919;
    content: "";
    position: absolute;
    left: 0;
    top: -82%;
    right: 0;
    height: 100%;
    display: block;
    z-index: 9;
  }
`;

const GlitchFont = styled.a`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 2.6em;
  color: #f5f5f5;
  position: absolute;
  left: 10%;
  transform: translate(50%, -100%);
  margin: 0;
  text-decoration: none;
  padding-bottom: 1em;
  &:before,
  &:after {
    display: block;
    content: "Contact";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    color: #d81159;
    z-index: -2;
  }
  &:before {
    color: #2fbf71;
    z-index: -1;
  }
  &:hover {
    &:before {
      animation: ${glitch} 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    }
    &:after {
      animation: ${glitch} 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
        infinite;
    }
  }

  @media ${device.tablet} {
    font-size: 1.6em;
    transform: translate(10%, -0%);
  }
`;

const GlitchFont2 = styled.a`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 2.6em;
  color: #f5f5f5;
  position: absolute;
  left: 30%;
  transform: translate(150%, -100%);
  margin: 0;
  text-decoration: none;
  padding-bottom: 1em;
  &:before,
  &:after {
    display: block;
    content: "Github";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    color: #d81159;
    z-index: -2;
  }
  &:before {
    color: #2fbf71;
    z-index: -1;
  }
  &:hover {
    &:before {
      animation: ${glitch} 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    }
    &:after {
      animation: ${glitch} 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
        infinite;
    }
  }
  
  @media ${device.tablet} {
    font-size: 1.6em;
    transform: translate(0%, -220%);
  }

`;

const Paragraph = styled.p`
  color: #f5f5f5;
  font-size: 2em;
  font-family: "Rajdhani", sans-serif;
  padding-left: 20%;

  @media ${device.tablet} {
    font-size: 1.4em;
    padding-left: 10%;
  }
`;

const Greeting = styled.p`
  color: #f5f5f5;
  font-size: 1.6em;
  font-family: "Rajdhani", sans-serif;
  writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  position: absolute;
  top: 8em;
  right: 1em;
  letter-spacing: 2px;


  @media ${device.tablet} {
    font-size: 1.2em;
    right: 0.5em;
  }
`;

const GithubLogo = styled.img`
  transform: translate(2200%, -190%);

  @media ${device.tablet} {
    transform: translate(290%, -360%);
  }
`;

const ButtonSpread = styled.button`
  position: absolute;
  left: 14px;
  bottom: 14px;
  width: 50px;
  height: 50px;
  background-color: #2fbf71;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  z-index: -1;
  &:hover {
    transform: scale(17.5);
  }

  @media ${device.tablet} {
    transform: scale(15);
  }
`;

const Hidden = styled.p`
  position: absolute;
  left: 30px;
  bottom: 97px;
  color: #191919;
  font-size: 2em;
  font-family: "Rajdhani", sans-serif;

  @media ${device.tablet} {
    font-size: 1.2em;
    bottom: 130px;
  }
`;

const FooterSection = () => (
  <Footer id="contact">
    <GlitchFont>Contact</GlitchFont>
    <GithubLogo src={Github} width="50px" height="50px" alt="Github logo" />
    <GlitchFont2 href="https://github.com/tantsandras">Github</GlitchFont2>

    <Paragraph>grahlsan@gmail.com</Paragraph>
    <ButtonSpread />
    <Hidden>Feel free to say hi ---></Hidden>
    <Greeting>--- Drop me a line ---</Greeting>
  </Footer>
);

export { FooterSection, glitch};
