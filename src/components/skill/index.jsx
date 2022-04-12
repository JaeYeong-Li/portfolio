import React from "react";
import "./index.scss";
const Skill = ({ skill, toggle }) => {
  return (
    <div className="skill sa sa-up">
      <div className="skillButton hi">
        <button
          data-tooltip-text="cooperation"
          className="black"
          onClick={(e) => {
            toggle(e.target.className.toUpperCase());
          }}
        >
          ●
        </button>
        <button
          data-tooltip-text="experience"
          className="blue"
          onClick={(e) => {
            toggle(e.target.className.toUpperCase());
          }}
        >
          ●
        </button>
        <button
          data-tooltip-text="my skills"
          className="red"
          onClick={(e) => {
            toggle(e.target.className.toUpperCase());
          }}
        >
          ●
        </button>
      </div>
      <div className="mySkills">
        <div className="mySkill">
          <p>language</p>
          {skill.language.map((e) => {
            return e.show ? (
              <p key={e.key} className={e.state.toLowerCase()}>
                {e.key}
              </p>
            ) : null;
          })}
        </div>
        <div className="mySkill">
          <p>frontend</p>
          {skill.frontend.map((e) => {
            return e.show ? (
              <p key={e.key} className={e.state.toLowerCase()}>
                {e.key}
              </p>
            ) : null;
          })}
        </div>
        <div className="mySkill">
          <p>backend</p>
          {skill.backend.map((e) => {
            return e.show ? (
              <p key={e.key} className={e.state.toLowerCase()}>
                {e.key}
              </p>
            ) : null;
          })}
        </div>
        <div className="mySkill">
          <p>cooperation</p>
          {skill.cooperation.map((e) => {
            return e.show ? (
              <p key={e.key} className={e.state.toLowerCase()}>
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
