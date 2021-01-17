import React from "react";

function ProjectCard({ projectLink, projectImage, title, children }) {
  return (
    <div className="card">
      <a
        className="removeClass"
        href={projectLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="prj-img"
          src={projectImage}
          alt="Project"
        ></img>
        <h1 className="card-title">{title}</h1>
        <h1 className="card-desc">{children}</h1>
      </a>
    </div>
  );
}

export default ProjectCard;
