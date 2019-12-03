import josBlog from "./jos-blog.png";
import spaceGame from "./space-game.png";
import casualSports from "./casual-sports.png";
import wollstonecraft from "./ww.png";

import styled, { keyframes } from "styled-components";
import React from "react";
import ProjectGif from "./projectGifs.js";
import {device} from "./devices"

const Photo = styled.img`
  object-fit: cover;
  width: 1275px;
  height: 663px;
  max-width: 100%;
  max-height: 100%;
  transform: scale(1);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),
  0 10px 10px -5px rgba(0, 0, 0, 0.08);
  @media ${device.tablet} {
    margin: 1em 10%;
  }
`;

const Frame = styled.div`
  position: relative;
  margin-left: 60%; 
  padding-top: 10%;
  margin-bottom: -20%; 
  height: 250px;
  width: 500px;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.5);
    z-index: 1;
  }
  @media ${device.tablet} {
    height: 125px;
    width: 250px;
    margin: 1em 2em;
  }
`;

const Jo = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <Frame
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover ? <ProjectGif src="/static/Peek 2019-04-17 13-37 (1).m4v" /> : <Photo src={josBlog} alt="Screenshot of Rarely Jovial website" />}
    </Frame>
  );
};

const Space = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <Frame
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover ? <ProjectGif src="/static/Peek 2019-04-17 13-39 (1).m4v" /> : <Photo src={spaceGame} alt="Screenshot of Space Explorer website" />}
    </Frame>
  );
};

const Pest = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <Frame
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover ? hoverPest : <Photo src={pestAlert} />}
    </Frame>
  );
};

const Sports = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <Frame
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover ? <ProjectGif src="/static/Peek 2019-04-17 13-48.m4v" /> : <Photo src={casualSports} alt="Screenshot of Casual Sports website" />}
    </Frame>
  );
};

const Wollstonecraft = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <Frame
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover ? <ProjectGif src="/static/wwalks.m4v" /> : <Photo src={wollstonecraft} alt="Screenshot of Wollstonecraft Walks progressive web app" />}
    </Frame>
  );
};

export { Jo, Space, Pest, Sports, Wollstonecraft };
