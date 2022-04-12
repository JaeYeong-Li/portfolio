import { SETTING_MODECHANGE } from "@/action";

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
    default:
      return previousState;
  }
}
