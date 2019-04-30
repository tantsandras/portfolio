import styled, { keyframes } from "styled-components"
import {device} from "./devices"

const growLeft = keyframes`
from {
  transform: scaleX(0);
}
to {
  transform: scaleX(1);
}
`;

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

const Navbar = styled.div`
display: flex;
flex-direction: row;

& ${Navbar}:nth-child(1) {
  font-size: 1.4em;
  font-family: 'Rajdhani', sans-serif;
  text-transform: uppercase;
  margin: 1em;
  color: #F5F5F5;
  opacity: 0;
  animation: ${fadeInRight} ease 0.6s forwards;
  @media ${device.tablet} {
    font-size: 1em;
  }
}

& ${Navbar}:nth-child(1):hover {
  color: #ED7D3A;
}
  
& ${Navbar}:nth-child(2) {
  width: 40%;
  margin: 2.2em 1em 1em 1em;
  height: 0.08em;
  background-color: #F5F5F5;
  transform: scaleX(0);
  transform-origin: left;
  animation: ${growLeft} cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s forwards;
  animation-delay: 0.8s;
  @media ${device.tablet} {
    margin: 1.6em 0.2em 0.6em 0.2em;
  }
}

& ${Navbar}:nth-child(3) {
  font-size: 1.4em;
  text-transform: uppercase;
  font-family: 'Rajdhani', sans-serif;
  color: #F5F5F5;
  margin: 1em;
  opacity: 0;
  animation: ${fadeInRight} ease 1.2s forwards;
  animation-delay: 1.6s;
  @media ${device.tablet} {
    font-size: 1em;
  }
}

& ${Navbar}:nth-child(3):hover {
  color: #ED7D3A;
}

& ${Navbar}:nth-child(4) {
  font-size: 1.4em;
  text-transform: uppercase;
  font-family: 'Rajdhani', sans-serif;
  color: #F5F5F5;
  margin: 1em;
  opacity: 0;
  animation: ${fadeInRight} ease 1.2s forwards;
  animation-delay: 1.6s;
  @media ${device.tablet} {
    font-size: 1em;
  }
}

& ${Navbar}:nth-child(4):hover {
  color: #ED7D3A;
}

& ${Navbar}:nth-child(5) {
  font-size: 1.4em;
  text-transform: uppercase;
  font-family: 'Rajdhani', sans-serif;
  color: #F5F5F5;
  margin: 1em;
  opacity: 0;
  animation: ${fadeInRight} ease 1.2s forwards;
  animation-delay: 1.6s;
}

& ${Navbar}:nth-child(5):hover {
  color: #ED7D3A;
}
`;

export default Navbar