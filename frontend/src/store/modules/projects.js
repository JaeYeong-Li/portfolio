import { projectDB } from "./projectsDB";
const ADD = "project/ADD";
const DEL = "project/DEL";

// export function add(newProject) {
//   return {
//     type: ADD,
//     project: projectDB.push(newProject),
//   };
// }

// export function del(toRemove) {
//     let idx;
//     projectDB.some((p,i)=>{if(p.name===toRemove) idx=i; return (p.name===toRemove)});
//     return {
//         type: DEL,
//         project: projectDB.slice(idx,1),
//     };
// }

const initState = {
  project: projectDB,
};

export default function projects(state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        project: projectDB.push(action.project),
      };
    case DEL:
      let idx;
      projectDB.some((p,i)=>{if(p.name===action.project) idx=i; return (p.name===action.project)});
      return {
        ...state,
        project: projectDB.slice(idx,1),
      };
    default:
      return state;
  }
}
