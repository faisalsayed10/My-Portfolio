import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./ProjectPage.css";

const projectImage1 = "https://doggo.ninja/RUtKvm.PNG";
const projectLink1 = "https://hacktoberfest-2020-recreated.webflow.io/";
const projectImage2 = "https://doggo.ninja/p5OrIe.png";
const projectLink2 =
  "https://play.google.com/store/apps/details?id=com.faydstudios.rius";
const projectImage3 = "https://ninja.dog/i0IbpK.PNG";
const projectLink3 = "https://binger.fayd.me/";
const projectImage4 = "https://ninja.dog/5A6nXu.PNG";
const projectLink4 = "https://drum.fayd.me/";
const projectImage5 = "https://ninja.dog/c687Qe.PNG";
const projectLink5 = "https://calculator.fayd.me/";
const projectImage6 = "http://u.filein.io/r-p6kCopMl.png";
const projectLink6 = "https://expenseman.fayd.me/";
const projectImage7 = "http://u.filein.io/AyRQUdIpdX.png";
const projectLink7 = "https://todo.fayd.me/";
const projectImage8 = "http://u.filein.io/NCSXHHL-Xj.png";
const projectLink8 = "https://weatherer.fayd.me";
const projectImage9 = "";
const projectLink9 = "";
const projectImage10 = "";
const projectLink10 = "";
const projectImage11 = "";
const projectLink11 = "";
const projectImage12 = "";
const projectLink12 = "";

function ProjectPage() {
  return (
    <>
      <h1 className="projectPage-title">My Projects</h1>
      <div className="project-container">
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
            title="Rius"
          >
            Indie platformer game which revolves around the journey of Rius
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage3}
            projectLink={projectLink3}
            title="Binger"
          >
            A Movie-Search App built with ReactJS and TMDB API
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage4}
            projectLink={projectLink4}
            title="Drum Kit"
          >
            A drumkit built with Vanilla JS following Wesbos' Course
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage5}
            projectLink={projectLink5}
            title="Calculator"
          >
            A Calculator with React JS
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage6}
            projectLink={projectLink6}
            title="ExpenseMan"
          >
            Expense Organizer built with React JS
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage7}
            projectLink={projectLink7}
            title="Tsilodot"
          >
            Todo List built with React JS
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage8}
            projectLink={projectLink8}
            title="Weatherer"
          >
            Realtime Weather App Built with React JS and Weather API
          </ProjectCard>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
