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
const projectImage5 = "https://ninja.dog/c687Qe.PNG";
const projectLink5 = "https://another-simple-calculator.vercel.app/";
const projectImage6 = "http://u.filein.io/r-p6kCopMl.png";
const projectLink6 = "https://expenseman.fayd.me/";
const projectImage7 = "http://u.filein.io/AyRQUdIpdX.png";
const projectLink7 = "https://todo.fayd.me/";
const projectImage8 = "http://u.filein.io/NCSXHHL-Xj.png";
const projectLink8 = "https://weatherer.fayd.me";
const projectImage9 = "http://u.filein.io/pwyW25TB2P.png";
const projectLink9 = "https://worldalytics.now.sh/";
const projectImage10 = "http://u.filein.io/EbRSO6Cu6u.png";
const projectLink10 = "https://fast-feed.now.sh/";
const projectImage11 = "http://u.filein.io/qNS8qkr8eb.png";
const projectLink11 = "https://gh-searcher.vercel.app/";
const projectImage12 = "http://u.filein.io/NE7ixltSiG.png";
const projectLink12 = "https://pokedex-git-main.fayd.vercel.app/";
const projectImage13 = "http://u.filein.io/HaPXgxpqs7.png";
const projectLink13 = "https://codepen-clone.fayd.vercel.app/";

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
          <ProjectCard
            projectImage={projectImage9}
            projectLink={projectLink9}
            title="Worldalytics"
          >
            World Analytics, at your fingertips
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage10}
            projectLink={projectLink10}
            title="Fast Feedback"
          >
            Built as a part of React 2025
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage11}
            projectLink={projectLink11}
            title="GH Searcher"
          >
            Get a detailed data of any github user
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage12}
            projectLink={projectLink12}
            title="Pokedex"
          >
            Pokemon Database built with ReactJS and SWR
          </ProjectCard>
          <ProjectCard
            projectImage={projectImage13}
            projectLink={projectLink13}
            title="Codepen Clone"
          >
            A clone version of codepen built with ReactJS
          </ProjectCard>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
