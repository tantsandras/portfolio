import styled, { keyframes } from "styled-components"

const LinkStyle = styled.a`
    margin-right: 15:
    text-decoration: none;

    &:active {
      color: #ED7D3A;
    }
`;


const fadeAndGrow = keyframes`
from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;


const Blobs = styled.div`
  display: flex;
  flex-flow: row wrap;
  transform: translate(10%, 10%);
  margin: 0;
  margin-left: 0;
  margin-top: 0;
  align-items: unsafe center;
  width: 40%;

  & ${Blobs}:nth-child(1) {
    border-radius: 70% 40% 60% 30% / 60% 40% 60% 40%;
    height: 10em;
    width: 8em;
    align-self: center;
    opacity: 0;
    transform: scale(0);
    background-color: #D81159;
    animation: ${fadeAndGrow} ease 12s forwards;
    animation-delay: 0.2s;
  }
  & ${Blobs}:nth-child(2) {
    border-radius:  70% 70% 30% 30% / 70% 30% 70% 30%;
    height: 21em;
    width: 16em;
    opacity: 0;
    align-self: flex-start;
    transform: scale(0);
    background-color: #D81159;
    animation: ${fadeAndGrow} ease 12s forwards;
    animation-delay: 0.1s;
  }
`;


export {
    LinkStyle,
    Blobs
}