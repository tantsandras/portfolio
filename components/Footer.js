import React from "react";
import styled, { keyframes } from "styled-components";
import Github from "./github-10-xxl.png";
import { device } from "./devices"

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
  padding-bottom: 8em;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: #191919;
  z-index: 9;
  &:after {
    -webkit-clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
    background-color: #191919;
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    display: block;
    z-index: 9;
  }
`;

const GlitchFont = styled.p`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 1.8em;
  color: #f5f5f5;
  margin: 0.8em 2em;
  position: relative;
  text-decoration: none;
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
    color: #44b1a1;
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
    font-size: 1.4em;
    margin-left: 10%;
  }
`;

const GlitchFont2 = styled.a`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 1.8em;
  color: #f5f5f5;
  position: relative;
  text-decoration: none;
  margin: 0.8em 2em;
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
    color: #44b1a1;
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
    font-size: 1.4em;
    margin-left: 10%;
  }

`;

const Paragraph = styled.p`
  color: #f5f5f5;
  font-size: 1.4em;
  margin-left: 2em;
  font-family: "Rajdhani", sans-serif;
  @media ${device.tablet} {
    font-size: 1em;
    margin-left: 10%;
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
  right: 0.5em;
  letter-spacing: 2px;

  @media ${device.tablet} {
    font-size: 1em;
    right: 0.3em;
  }
`;

const GithubLogo = styled.img`
`;

const ButtonSpread = styled.button`
position: absolute;
left: 14px;
bottom: 14px;
width: 50px;
height: 50px;
background-color: #44b1a1;
border: none;
border-radius: 30px;
cursor: pointer;
outline: none;
transition: all 0.3s ease;
z-index: -1;
  &: hover {
  transform: scale(17.5);
}

@media ${ device.tablet} {
  transform: scale(15);
    &: hover {
    transform: scale(15);
  }
}
`;

const Hidden = styled.p`
position: absolute;
left: 23px;
bottom: 127px;
color: #191919;
font-size: 1.4em;
font-family: "Rajdhani", sans-serif;

@media ${ device.tablet} {
  font-size: 1em;
  bottom: 160px;
}
`;

const Row = styled.div`
display: flex;
flex-flow: row wrap;
transform: translateY(-100px);
width: 100%;
`
const Row2 = styled.div`
display: flex: 
flex-flow: row wrap;
width: 60%;
`

const FooterSection = () => (
  <Footer id="contact">
    <Row>

      <GlitchFont2 href="https://github.com/tantsandras">Github <GithubLogo src={Github} width="28px" height="28px" alt="Link to my github" /></GlitchFont2>
      <GlitchFont>Contact</GlitchFont>      <Paragraph>grahlsan@gmail.com</Paragraph>
    </Row>
    <Row2>

      <ButtonSpread aria-label="Hovering button reveals hidden message: Feel free to say hi" />
      <Hidden>Feel free to say hi!</Hidden>

    </Row2>
    {/* <Greeting>--- Drop me a line ---</Greeting> */}
  </Footer >
);

export { FooterSection, glitch };
