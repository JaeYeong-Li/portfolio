/* eslint-disable jsx-a11y/alt-text */
import "./index.scss";
import React from "react";

const Project = ({ projects, move }) => {
  const createCard = (project) => {
    return (
      <div className="project">
        <div className="name">{project.name}</div>
        <div className="img">
          <img src={process.env.PUBLIC_URL + "/img/" + project.img} />
        </div>
        <div className="subMenu">
          <div className="duration">{project.duration}</div>
          <div className="icons">
            <div className="git">
              <a href={project.git} target="_blank" rel="noopner noreferrer">
                <img src={process.env.PUBLIC_URL + "/icon/github.png"} />
              </a>
            </div>
            {project.demo !== "" ? (
              <div className="demo">
                <a href={project.demo} target="_blank" rel="noopner noreferrer">
                  <img src={process.env.PUBLIC_URL + "/icon/demo.png"} />
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <div className="env">
          {project.env.split(", ").map((e) => {
            return (
              <span className="env-item" key={e}>
                {e}
              </span>
            );
          })}
        </div>
        <div className="explanation">{project.explanation}</div>
      </div>
    );
  };
  return (
    <div className="projects sa sa-up">
      <div
        className="moveButton left"
        onClick={() => {
          move("LEFT");
        }}
      >
        <img src={process.env.PUBLIC_URL + "/icon/left.png"} />
      </div>
      {createCard(projects[0])}
      {createCard(projects[1])}
      <div
        className="moveButton right"
        onClick={() => {
          move("RIGHT");
        }}
      >
        <img src={process.env.PUBLIC_URL + "/icon/right.png"} />
      </div>
    </div>
  );
};

export default Project;
