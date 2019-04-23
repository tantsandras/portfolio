import React from "react"
import styled, { keyframes } from "styled-components"
import Link from 'next/link'

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

const Footer = styled.section`
background-color: #3C3C3C;
margin-top: 14em;
padding-bottom: 8em;
width: 100%;
display: flex;
flex-direction: row;
`;

const GlitchFont = styled.a`
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 2.6em;
  color: #F5F5F5;
  position:absolute;
  left: 10%;
  transform: translate(50%, -100%);
  margin: 0;
  text-decoration: none;
  &:before,
  &:after{
    display: block;
    content: 'Contact';
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

const GlitchFont2 = styled.a`
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 2.6em;
  color: #F5F5F5;
  position:absolute;
  left: 30%;
  transform: translate(150%, -100%);
  margin: 0;
  text-decoration: none;
  &:before,
  &:after{
    display: block;
    content: 'Github';
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

const Paragraph = styled.p`
  color: #F5F5F5;
  font-size: 2em;
  font-family: 'Rajdhani', sans-serif;
  transform: translate(150%, 0%);
`;

const FooterSection = () => (
    <Footer id="contact">
      <a href="mailto:grahlsan@gmail.com">
        <GlitchFont>
        Contact
        </GlitchFont>
      </a><Paragraph>grahlsan@gmail.com</Paragraph>
      <a href="https://github.com/tantsandras">
        <GlitchFont2>
        Github
        </GlitchFont2>
      </a>
    </Footer>
)

export {
    FooterSection,
    glitch
}