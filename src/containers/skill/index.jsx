import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { TOGGLESKILL } from "@/action";
import Skill from "@components/skill";

const SkillContainer = () => {
  const skill = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const toggle = useCallback(
    (color) => {
      dispatch(TOGGLESKILL(color));
    },
    [dispatch]
  );
  return <Skill skill={skill} toggle={toggle} />;
};
export default SkillContainer;
