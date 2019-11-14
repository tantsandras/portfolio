import styled, { keyframes } from "styled-components" 
import {device} from "./devices"

const Round = styled.div` 
position: relative;
height: 340px;
width: 340px;
border-radius: 50%;
float: left;
clip-path: circle(50%);
margin: 0 6em 0 4em;
-webkit-shape-outside: circle();
shape-outside: circle();

&:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0px 0px 40px 5px rgba(0,0,0,0.9);
  -moz-box-shadow: inset 0px 0px 40px 5px rgba(0,0,0,0.9);
  -webkit-box-shadow: inset 0px 0px 40px 5px rgba(0,0,0,0.9);
}

    @media ${device.tablet} {
    max-width: 200px;
    max-height: 200px;
    margin: 0 0 0 1em;
    }
`;

const ProfilePhoto = styled.img`
object-fit: cover;
height: 675px;
width: 1000px;
max-width: 100%;
max-height: 100%;

`;

const Photo = () => (
    <Round>
        <ProfilePhoto src="https://cdn1.cdnme.se/1573896/8-3/img_97752_57949d09ddf2b37eda693de5.jpg" alt="Sandra Grahl in front of greenery" />
    </Round>
)

export default Photo