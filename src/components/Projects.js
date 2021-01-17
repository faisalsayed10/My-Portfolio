import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const projectImage1 = "https://doggo.ninja/RUtKvm.PNG";
const projectLink1 = "https://hacktoberfest-2020-recreated.webflow.io/";
const projectImage2 = "http://u.filein.io/NCSXHHL-Xj.png";
const projectLink2 = "https://weatherer.fayd.me";
const projectImage3 = "https://ninja.dog/i0IbpK.PNG";
const projectLink3 = "https://binger.fayd.me/";

const Projects = () => {
  return (
    <>
      <div id="project" className="project-container">
        <h1 className="projects-title">My Projects</h1>

        <div className="project-cards">
          <ProjectCard
            projectImage={projectImage1}
            projectLink={projectLink1}
            title="Hacktober Fest 2020"
          >
            Recreation of the Hactoberfest 2020 website in Webflow
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage2}
            projectLink={projectLink2}
            title="Weatherer"
          >
            A Realtime Weather App built with ReactJS
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage3}
            projectLink={projectLink3}
            title="Binger"
          >
            A Movie-Search App built with ReactJS and TMDB API
          </ProjectCard>
        </div>
        <Link to="/projects" className="more-projects">
          MORE
        </Link>
      </div>
    </>
  );
};

export default Projects;
