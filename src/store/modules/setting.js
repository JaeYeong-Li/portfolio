const DARK = "setting/DARK";
const MODE = "setting/MODE";
const SCROLL = "setting/SCROLL";

export function dark(isDark) {
  return {
    type: DARK,
    dark: isDark,
  };
}

export function mode(modeNum) {
  return {
    type: MODE,
    num: modeNum,
  };
}

export function updateScroll(h) {
  return {
    type: SCROLL,
    scroll: h,
  };
}

const initState = {
  dark: false,
  mode: 1,
  scroll: 0,
};

export default function setting(state = initState, action) {
  switch (action.type) {
    case DARK:
      return {
        ...state,
        dark: !action.isDark,
      };
    case MODE:
      return {
        ...state,
        mode: action.modeNum,
      };
    case SCROLL:
      return {
        ...state,
        scroll: action.scroll,
      };
    default:
      return state;
  }
}
