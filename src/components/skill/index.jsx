import React, { useState, useRef } from "react";
import "./index.scss";

const myData = {
  language: [
    { key: "JS", state: "red" },
    { key: "C/C++", state: "red" },
    { key: "TS", state: "blue" },
    { key: "JAVA(Android)", state: "blue" },
  ],
  frontend: [
    { key: "React", state: "red" },
    { key: "Webpack", state: "red" },
    { key: "SCSS", state: "red" },
    { key: "Styled-Component", state: "red" },
  ],
  backend: [
    { key: "Node.js", state: "red" },
    { key: "mySQL", state: "blue" },
    { key: "Sequelize", state: "blue" },
  ],
  cooperation: [
    { key: "Git", state: "black" },
    { key: "Figma", state: "black" },
  ],
};

const Skill = () => {
  const [showSkills, setShowSKills] = useState({ red: true, blue: true, black: true });
  const mySkills = useRef(null);
  const skillClickHandler = (e) => {
    const pClassList = e.target.parentNode.classList;
    if (!pClassList.contains("skillButton")) return;
    const curColor = e.target.className;
    const updatedSkills = Object.keys(showSkills).reduce((obj, key) => {
      obj[key] = curColor === key ? !showSkills[key] : showSkills[key];
      return obj;
    }, {});
    setShowSKills(updatedSkills);
  };
  return (
    <div className="skill sa sa-up">
      <div className="skillButton hi">
        <button
          data-tooltip-text="cooperation"
          className="black"
          onClick={(e) => {
            skillClickHandler(e);
          }}
        >
          ●
        </button>
        <button
          data-tooltip-text="experience"
          className="blue"
          onClick={(e) => {
            skillClickHandler(e);
          }}
        >
          ●
        </button>
        <button
          data-tooltip-text="my skills"
          className="red"
          onClick={(e) => {
            skillClickHandler(e);
          }}
        >
          ●
        </button>
      </div>
      <div className="mySkills" ref={mySkills}>
        <div className="mySkill">
          <p>language</p>
          {myData.language.map((e) => {
            return showSkills[e.state] ? (
              <p key={e.key} className={e.state}>
                {e.key}
              </p>
            ) : null;
          })}
        </div>
        <div className="mySkill">
          <p>frontend</p>
          {myData.frontend.map((e) => {
            return showSkills[e.state] ? (
              <p key={e.key} className={e.state}>
                {e.key}
              </p>
            ) : null;
          })}
        </div>
        <div className="mySkill">
          <p>backend</p>
          {myData.backend.map((e) => {
            return showSkills[e.state] ? (
              <p key={e.key} className={e.state}>
                {e.key}
              </p>
            ) : null;
          })}
        </div>
        <div className="mySkill">
          <p>cooperation</p>
          {myData.cooperation.map((e) => {
            return showSkills[e.state] ? (
              <p key={e.key} className={e.state}>
                {e.key}
              </p>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
