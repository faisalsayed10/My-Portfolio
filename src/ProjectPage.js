import React from "react";
import './ProjectPage.css';

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
const projectImage6 = "https://storage.googleapis.com/file-in.appspot.com/files/Ieowt0XwWS.png";
const projectLink6 = "https://expenseman.fayd.me/";
const projectImage7 = "https://storage.googleapis.com/file-in.appspot.com/files/bX-xJi__v3.png";
const projectLink7 = "https://todo.fayd.me/";

function ProjectPage() {
  return (
    <>
      <div id="project" className="project-container">
        <h1 className="projectPage-title">My Projects</h1>

        <div className="project-cards">
          <div className="cards card-1">
            <a
              className="removeClass"
              href={projectLink1}
              rel="noopener noreferrer"
              target="_blank"
            >
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
            <a
              className="removeClass"
              href={projectLink2}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="prj-img" alt="" src={projectImage2}></img>
              <h1 className="card-title">Rius</h1>
              <h1 className="card-desc">
                This is my first ever built indie game for Android. This is a
                platformer game which revolves around the journey of Rius.
              </h1>
            </a>
          </div>
          <div className="cards card-3">
            <a
              className="removeClass"
              href={projectLink3}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="prj-img" alt="" src={projectImage3}></img>
              <h1 className="card-title">
                <span role="img" aria-label="">
                  🍿
                </span>
                Binger
              </h1>
              <h1 className="card-desc">
                Built a movie search app with React!
              </h1>
            </a>
          </div>
          <div className="cards card-4">
            <a
              className="removeClass"
              href={projectLink4}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="prj-img" alt="" src={projectImage4}></img>
              <h1 className="card-title">Drumkit</h1>
              <h1 className="card-desc">
                Built a drumkit with Vanilla JS following Wesbos' Course
              </h1>
            </a>
          </div>
          <div className="cards card-5">
            <a
              className="removeClass"
              href={projectLink5}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="prj-img" alt="" src={projectImage5}></img>
              <h1 className="card-title">Calculator</h1>
              <h1 className="card-desc">Built a Calculator with React JS.</h1>
            </a>
          </div>
          <div className="cards card-6">
            <a
              className="removeClass"
              href={projectLink6}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="prj-img" alt="" src={projectImage6}></img>
              <h1 className="card-title">ExpenseMan</h1>
              <h1 className="card-desc">Expense Organizer built with React JS</h1>
            </a>
          </div>
          <div className="cards card-7">
            <a
              className="removeClass"
              href={projectLink7}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="prj-img" alt="" src={projectImage7}></img>
              <h1 className="card-title">Tsilodot</h1>
              <h1 className="card-desc">Todo List built with React JS</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
