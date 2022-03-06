/* eslint-disable jsx-a11y/alt-text */
import "./index.scss";
import { useSelector } from "react-redux";
import React, { useState } from "react";

const Projects = () => {
  const myProjects = useSelector((state) => state.projects.project);
  const [cIdxs, setIdxs] = useState([0, 1]);
  const moveHandler = (e) => {
    const cButton = e.target.parentNode.classList.contains("left")
      ? "left"
      : "right";
    let idx1, idx2;
    if (cButton === "left") {
      idx2 = cIdxs[1] - 2 < 0 ? myProjects.length - 1 : cIdxs[1] - 2;
      idx1 = idx2 - 1 < 0 ? myProjects.length - 1 : idx2 - 1;
    } else {
      idx1 = myProjects.length <= cIdxs[0] + 2 ? 0 : cIdxs[0] + 2;
      idx2 = idx1 === myProjects.length - 1 ? 0 : idx1 + 1;
    }
    setIdxs([idx1, idx2]);
  };
  const createCard = (idx) => {
    return (
      <div className="project">
        <div className="name">{myProjects[idx].name}</div>
        <div className="img">
          <img src={process.env.PUBLIC_URL + "/img/" + myProjects[idx].img} />
        </div>
        <div className="subMenu">
          <div className="duration">{myProjects[idx].duration}</div>
          <div className="icons">
            <div className="git">
              <a
                href={myProjects[idx].git}
                target="_blank"
                rel="noopner noreferrer"
              >
                <img src={process.env.PUBLIC_URL + "/icon/github.png"} />
              </a>
            </div>
            {myProjects[idx].demo !== "" ? (
              <div className="demo">
                <a
                  href={myProjects[idx].demo}
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  <img src={process.env.PUBLIC_URL + "/icon/demo.png"} />
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <div className="env">
          {myProjects[idx].env.split(", ").map((e) => {
            return (
              <span className="env-item" key={e}>
                {e}
              </span>
            );
          })}
        </div>
        <div className="explanation">{myProjects[idx].explanation}</div>
      </div>
    );
  };
  return (
    <div className="projects sa sa-up">
      <div
        className="moveButton left"
        onClick={(e) => {
          moveHandler(e);
        }}
      >
        <img src={process.env.PUBLIC_URL + "/icon/left.png"} />
      </div>
      {createCard(cIdxs[0])}
      {createCard(cIdxs[1])}
      <div
        className="moveButton right"
        onClick={(e) => {
          moveHandler(e);
        }}
      >
        <img src={process.env.PUBLIC_URL + "/icon/right.png"} />
      </div>
    </div>
  );
};

export default Projects;
