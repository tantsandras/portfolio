import styled, { keyframes } from "styled-components";
import Projects from "./Projects";
import { Jo, Space, Sports, Plastic } from "./ProjectThumbnails";

const Grid = styled.div`
  margin: 6em 0  0 auto;
  display: grid;
  height: 100vw;
  width: 90%;
  grid-template-columns: 30% 30%;
  grid-template-rows: 600px 600px;
  grid-gap: 20%;
`;

const ProjectBoxes = styled.div`
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: rgba(216, 17, 89, 0.8);
  padding: 30px 15px 20px;
  transform: translate(40%, -80px);
  box-shadow: 5px 5px 5px;
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
  font-size: 3em;
  color: #f5f5f5;
  text-shadow: 2px 2px #2fbf71;
  overflow: hidden;
  white-space: nowrap;
  animation: ${type} 6s steps(80, end);
`;

const ProjectDescription = styled.p`
  font-family: "Rajdhani", sans-serif;
  font-size: 1.6em;
  color: #f5f5f5;
  text-align: left;
  padding-left: 1em;
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
      <Plastic />
      <ProjectBoxes>
        <ProjectTitles>PlastiScene</ProjectTitles>
      <ProjectDescription>
        A project done at Athena Hackathon 2019, with the aim of solving the
        plastic crisis. It's made with React, Gatsby.js and D3. It's supposed to be a marketplace where businesses can shop around for existing projects that can either replace, recycle or dispose of plastic.
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
        This is an app that wants to connect commitmentphobes and chillers who want to play sports. On the app, you can either sign your team up to play against other teams, see what sport events are going on in London through displaying events from the Meetup API, see what sport events are going on near you, or add and organise sport events.
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>
 
  </Grid>
);
