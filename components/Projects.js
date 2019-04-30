import styled, { keyframes } from "styled-components"
import {device} from "./devices"

const Showcase = styled.article`
    width: 566.7px;
    height: 280px;


@media ${device.tablet} {
    height: auto;
    width: 100%;
`;

export default Showcase