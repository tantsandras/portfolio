import styled, { keyframes } from "styled-components";
import Projects from "./Projects";
import { Jo, Space, Sports, Wollstonecraft } from "./ProjectThumbnails";
import {device} from "./devices"

const Grid = styled.div`
  margin: 6em 0  30em auto;
  display: grid;
  height: 100%;
  padding-left: 6%;
  grid-template-columns: 30% 30%;
  grid-template-rows: 800px 800px;
  grid-gap: 20%;
  @media ${device.tablet} {
    grid-template-columns: 100%;
    grid-template-rows: 700px 700px 700px 700px;
    grid-row-gap: 2em;
  }
`;

const ProjectBoxes = styled.div`
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: rgba(216, 17, 89, 0.8);
  padding: 30px 15px 20px;
  transform: translate(40%, -80px);
  box-shadow: 5px 5px 5px;
  @media ${device.tablet} {
    transform: translate(0%, 0px);
    margin: 0;
    max-width: 70vw;
  }
`;
 
const ButtonSpread = styled.button`
  margin-left: 2.4em;
  width: 50px;
  height: 50px;
  background:	#80f3e5;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  mix-blend-mode: hard-light;
  &:hover {
    transform: scale(17.5);
  }
`;

const type = keyframes`
    from { 
        width: 0; 
        opacity: 1;
    } 
    to { 
        width: 30em; 
        opacity: 1;
    }
`;

const ProjectTitles = styled.h3`
  font-family: 'Rubik Mono One', sans-serif;
  margin-left: -4.6em;
  margin-top: 2.4em;
  text-transform: uppercase;
  font-size: 2em;
  color: #f5f5f5;
  text-shadow: 2px 2px #2fbf71;
  overflow: hidden;
  white-space: nowrap;
  animation: ${type} 6s steps(80, end);
  @media ${device.tablet} {
    font-size: 1.6em;
    margin-left: -1.6em;
    margin-right: -1em;
  }
`;

const ProjectDescription = styled.p`
  font-family: "Rajdhani", sans-serif;
  font-size: 1.4em;
  color: #f5f5f5;
  text-align: left;
  padding-left: 1em;
  @media ${device.tablet} {
    font-size: 1.2em;
  }
`;

export default () => (
  <Grid>

    <Projects>
      <Space />
      <ProjectBoxes>
        <ProjectTitles>Space Explorer</ProjectTitles>
      <ProjectDescription>
        Made with GatsbyJs and Canvas, the "Great Gatsby - Space Explorer" game
        is a personal project that I built because I had never used Canvas before. And because, you know, ...space. 
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>
    
    <Projects>
      <Wollstonecraft />
      <ProjectBoxes>
        <ProjectTitles>Wollstonecraft Walks</ProjectTitles>
      <ProjectDescription>
        A progressive web app and virtual walk guide about Mary Wollstonecraft and her life on Newington Green. I made it in gatsby.js, with netlify's content management system, for the organisations Fragments & Monuments and Scary Little Girls.
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>

    <Projects>
      <Jo />
      <ProjectBoxes>
        <ProjectTitles>Rarely Jovial</ProjectTitles>
      <ProjectDescription>
        Rarely Jovial is a blog I made with Handlebars, Express, Node.js and PostgreSQL. It was a personal project that I tinkered with in my spare time, and unfortunately I didn't finish it, but it was good backend practice.
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>
    
    <Projects>
      <Sports />
      <ProjectBoxes>
        <ProjectTitles>Casual Sports</ProjectTitles>
      <ProjectDescription>
        This is an app that aims to connect commitmentphobes and chillers who want to play sports. On the app, you can either sign your team up to play against other teams, see what sport events are going on in London through displaying events from the Meetup API, see what sport events are going on near you, or add and organise sport events.
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>
 
  </Grid>
);
