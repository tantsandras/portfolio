import josBlog from "./jos-blog.png";
import spaceGame from "./space-game.png"
import pestAlert from "./pest-alert.png"
import casualSports from "./casual-sports.png"
import plastiscene from "./plastic.png"

import styled, { keyframes } from "styled-components";
import React from "react";
import { hoverJo, hoverSpace, hoverPest, hoverSports, hoverPlastic } from "./projectGifs.js"

const Photo = styled.img`
  object-fit: cover;
  width: 1275px;
  height: 663px;
  max-width: 100%;
  max-height: 100%;
  -webkit-filter: grayscale(100%);
  filter: grayscale(60%);
  transform: scale(1);
`;

const Frame = styled.div`
  position: relative;
  margin: 0 auto;
  height: 250px;
  width: 500px;
  transition: all 1s ease;
&:hover {
  transform: scale(1.5);
  z-index: 1;
}
`;

const Jo = () => {

  const [hover, setHover] = React.useState(false);

  return (
    <Frame
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}>
    {hover ? hoverJo : 
    <Photo
      src={josBlog}
    />
    }

    </Frame>
  );
};

const Space = () => {

  const [hover, setHover] = React.useState(false);

  return (
    <Frame
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}>
    {hover ? hoverSpace : 
    <Photo
      src={spaceGame}
    />
    }

    </Frame>
  );
};

const Pest = () => {

  const [hover, setHover] = React.useState(false);

  return (
    <Frame
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}>
    {hover ? hoverPest : 
    <Photo
      src={pestAlert}
    />
    }
    </Frame>
  );
};

const Sports = () => {

  const [hover, setHover] = React.useState(false);

  return (
    <Frame
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}>
    {hover ? hoverSports : 
    <Photo
      src={casualSports}
    />
    }

    </Frame>
  );
}

const Plastic = () => {

  const [hover, setHover] = React.useState(false);

  return (
    <Frame
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}>
    {hover ? hoverPlastic : 
    <Photo
      src={plastiscene}
    />
    }

    </Frame>
  );
}

export {
  Jo,
  Space,
  Pest,
  Sports,
  Plastic
}