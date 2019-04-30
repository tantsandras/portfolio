import styled, { keyframes } from "styled-components";
import React from "react";
import {device} from "./devices"

const Video = styled.video`
    width: 500px;
    height: 250px;

@media ${device.tablet} {
  height: 166px;
  width: 332px;
  margin: 0 0 2em -0.8em;
  z-index: 1;
}
`; 

const ProjectGif = ({src}) => (
  <Video autoPlay>
    <source src={src} type="video/mp4" />
  </Video>
);

export default ProjectGif 
