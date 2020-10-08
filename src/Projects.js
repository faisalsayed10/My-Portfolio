import React from "react";
import "./Project.css";
import "./MinorProjects.js";
import MinorProjects from "./MinorProjects.js";
import { Link } from "react-router-dom";

const projectImage1 = "https://doggo.ninja/RUtKvm.PNG";
const projectLink1 = "https://hacktoberfest-2020-recreated.webflow.io/";
const projectImage2 = "https://doggo.ninja/p5OrIe.png";
const projectLink2 = "https://play.google.com/store/apps/details?id=com.faydstudios.rius"
const projectImage3 = "https://ninja.dog/i0IbpK.PNG";
const projectLink3 = "https://binger.fayd.me/";

const Projects = () => {

  return (
    <>
      <div id="project" className="project-container">
        <h1 className="projects-title">My Projects</h1>

        <div className="project-cards">
          <div className="cards card-1">
            <a className="removeClass" href={projectLink1} rel='noopener noreferrer' target="_blank">
              <img
                className="prj-img"
                src={projectImage1}
                alt="Hactoberfest recreated"
              ></img>
              <h1 className="card-title">Hacktoberfest 2020 Recreated.</h1>
              <h1 className="card-desc">
                I recreated the Hactoberfest 2020 website in Webflow!
              </h1>
            </a>
          </div>
          <div className="cards card-2">
          <a className="removeClass" href={projectLink2} rel='noopener noreferrer' target="_blank">
            <img className="prj-img" alt='' src={projectImage2}></img>
            <h1 className="card-title">Rius</h1>
            <h1 className="card-desc">
              This is my first ever built indie game for Android. This is a
              platformer game which revolves around the journey of Rius.
            </h1>
            </a>
          </div>

          <div className="cards card-3">
            <a className="removeClass" href={projectLink3} rel='noopener noreferrer' target="_blank">
              <img className="prj-img" alt='' src={projectImage3}></img>
              <h1 className="card-title"><span role="img" aria-label="">🍿</span>Binger</h1>
              <h1 className="card-desc">Built a movie search app with React!</h1>
            </a>
          </div>
        </div>
          <Link to='/projects' className='more-projects'>MORE</Link>
        <div className="minor-proj">
          <h1 className="minor-proj-title">My Other Minor Projects</h1>
          <MinorProjects />
        </div>
      </div>
    </>
  );
};

export default Projects;
