import { SKILL_TOGGLE } from "@/action";

const mySkill = {
  language: [
    { key: "JS", state: "RED", show: true },
    { key: "C/C++", state: "RED", show: true },
    { key: "TS", state: "BLUE", show: true },
    { key: "JAVA(Android)", state: "BLUE", show: true },
  ],
  frontend: [
    { key: "React", state: "RED", show: true },
    { key: "Webpack", state: "RED", show: true },
    { key: "SCSS", state: "RED", show: true },
    { key: "Styled-Component", state: "RED", show: true },
  ],
  backend: [
    { key: "Node.js", state: "RED", show: true },
    { key: "mySQL", state: "BLUE", show: true },
    { key: "Sequelize", state: "BLUE", show: true },
  ],
  cooperation: [
    { key: "Git", state: "BLACK", show: true },
    { key: "Figma", state: "BLACK", show: true },
  ],
};

export default function skill(previousState, action) {
  if (previousState === undefined) {
    return mySkill;
  }
  switch (action.type) {
    case SKILL_TOGGLE:
      const newState = { ...previousState };
      Object.entries(previousState).forEach(([key, arr]) => {
        arr.forEach((skillNode, idx) => {
          if (skillNode.state === action.text) {
            newState[key][idx].show = skillNode.show ? false : true;
          }
        });
      });
      return newState;
    default:
      return previousState;
  }
}
