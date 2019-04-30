import plants from "./leaf.png"
import {device} from "./devices"
import styled, { keyframes } from "styled-components"

const Plants = styled.div`
    padding-right: 2em;
    width: 607px;

    @media ${device.tablet} {
    margin: 0 auto;
    width: 250px;
    padding-top: 4em;
  }
`;

export default () => <Plants>
<img src={plants} style={{maxWidth: `100%`}} />
</Plants>