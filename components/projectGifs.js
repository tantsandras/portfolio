import styled, { keyframes } from "styled-components";
import React from "react";

const ProjectGif = ({src}) => (
  <video width="500px" height="250" autoPlay>
    <source src={src} type="video/mp4" />
  </video>
);

export default ProjectGif 
