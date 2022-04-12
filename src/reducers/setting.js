import { SETTING_MODECHANGE, SETTING_SCROLL } from "@/action";

export default function setting(previousState, action) {
  if (previousState === undefined) {
    return {
      mode: true,
      scroll: 0,
    };
  }
  switch (action.type) {
    case SETTING_MODECHANGE:
      return {
        ...previousState,
        mode: !action.text,
      };
    case SETTING_SCROLL:
      return {
        ...previousState,
        scroll: action.text,
      };
    default:
      return previousState;
  }
}
