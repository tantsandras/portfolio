import styled, { keyframes } from "styled-components";
import Projects from "./Projects";
import { Jo, Space, Pest, Sports, Plastic } from "./ProjectThumbnails";

const Grid = styled.div`
  margin: 6em 0  0 auto;
  display: grid;
  height: 100vw;
  width: 90%;
  grid-template-columns: 30% 30%;
  grid-template-rows: 500px 500px;
  grid-gap: 10%;
`;

const ProjectBoxes = styled.div`
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: rgba(216, 17, 89, 0.8);
  padding: 30px 15px 20px;
  transform: translate(20%, -20%);
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
  margin-left: -3.4em;
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
      <Jo />
      <ProjectBoxes>
        <ProjectTitles>Rarely Jovial</ProjectTitles>

      <ProjectDescription>
        A blog made with Handlebars, Express, Node.js and Postgres. I made it on
        my spare time for a friend.
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>

    <Projects>
      <Space />
      <ProjectBoxes>
        <ProjectTitles>Space Explorer</ProjectTitles>
      <ProjectDescription>
        Made with GatsbyJs and Canvas, the "Great Gatsby - Space Explorer" game
        is a personal project that I built to try out Gatsby.
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>

   
    <Projects>
      <Sports />
      <ProjectBoxes>
        <ProjectTitles>Casual Sports</ProjectTitles>

      <ProjectDescription>
        An app that aims to connect people looking to do sports.
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>

        {/* <Projects>
      <Pest />
      <ProjectBoxes> 
        <ProjectTitles>Pest Alert</ProjectTitles>
 
      <ProjectDescription>
        An app made for CABI - Plantwise that takes in risk levels of pests in
        Kenya, Ghana and Zambia from an API and displays information about the
        pests, how to monitor, prevent and how to treat the affected crops.
      </ProjectDescription>
      </ProjectBoxes>
    </Projects> */}

    <Projects>
      <Plastic />
      <ProjectBoxes>
        <ProjectTitles>PlastiScene</ProjectTitles>

      <ProjectDescription>
        A project done at Athena Hackathon 2019, with the aim of solving the
        plastic crisis
      </ProjectDescription>
      </ProjectBoxes>
    </Projects>
  </Grid>
);
