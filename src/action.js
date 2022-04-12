export const SKILL_TOGGLE = "SKILL_TOGGLE";

export const PROJECT_MOVE = "PROJECT_MOVE";

export const SETTING_MODECHANGE = "SETTING_MODECHANGE";

export const TOGGLESKILL = (text) => ({
  type: SKILL_TOGGLE,
  text,
});

export const MOVEPROJECT = (text) => ({
  type: PROJECT_MOVE,
  text,
});

export const MODECHANGE = (text) => ({
  type: SETTING_MODECHANGE,
  text,
});
