import { projectDB } from "./projectsDB";
import { PROJECT_MOVE } from "@/action";

export default function project(previousState, action) {
  if (previousState === undefined) {
    return [projectDB[0], projectDB[1]];
  }
  let idx1, idx2;
  switch (action.type) {
    case PROJECT_MOVE:
      if (action.text === "LEFT") {
        idx2 =
          previousState[1].id - 2 < 0
            ? projectDB.length - 1
            : projectDB.length - 2;
        idx1 = idx2 - 1 < 0 ? projectDB.length - 1 : idx2 - 1;
      } else {
        idx1 =
          projectDB.length <= previousState[0].id + 2
            ? 0
            : previousState[0].id + 2;
        idx2 = idx1 === projectDB.length - 1 ? 0 : idx1 + 1;
      }
      return [projectDB[idx1], projectDB[idx2]];
    default:
      return previousState;
  }
}
