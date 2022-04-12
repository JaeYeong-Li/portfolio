import { useDispatch, useSelector } from "react-redux";
import { MOVEPROJECT } from "@/action";
import Project from "@components/project";

const ProjectContainer = () => {
  const project = useSelector((state) => state.project);
  const dispatch = useDispatch();
  function move(dir) {
    dispatch(MOVEPROJECT(dir));
  }
  return <Project projects={project} move={move} />;
};

export default ProjectContainer;
