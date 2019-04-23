import styled, { keyframes } from "styled-components";
import React from "react";

const hoverJo = (
  <video width="500px" height="250" autoPlay>
    <source src="/static/Peek 2019-04-17 13-37 (1).m4v" type="video/mp4" />
  </video>
);

const hoverSpace = (
  <video width="500px" height="250" autoPlay>
    <source src="/static/Peek 2019-04-17 13-39 (1).m4v" type="video/mp4" />
  </video>
);

const hoverPest = (
  <video width="500px" height="250" autoPlay>
    <source src="/static/Peek 2019-04-17 13-45.m4v" type="video/mp4" />
  </video>
)

const hoverSports = (
    <video width="500px" height="250" autoPlay>
      <source src="/static/Peek 2019-04-17 13-48.m4v" type="video/mp4" />
    </video>
  );

const hoverPlastic = (
  <video width="500px" height="250" autoPlay>
  <source src="/static/plastiscene.mp4" type="video/mp4" />
</video>
)

export { hoverJo, hoverSpace, hoverPest, hoverSports, hoverPlastic };
