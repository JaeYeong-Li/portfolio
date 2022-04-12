import "@/App.scss";
import HeaderContainer from "@containers/header";
import Profile from "@components/profile";
import SkillContainer from "@containers/skill";
import ProjectContainer from "@containers/project";
import React, { useLayoutEffect, useMemo, useRef, useCallback } from "react";
import { throttle } from "lodash";
import { useDispatch } from "react-redux";
import { SETSCROLL } from "./action";

function App() {
  const saTriggerMargin = 300;
  const myComponents = useRef(null);
  const dispatch = useDispatch();

  const showHandler = useCallback(() => {
    for (const element of myComponents.current.childNodes) {
      const elementLoc = element.getBoundingClientRect().top + saTriggerMargin;
      if (
        (!element.classList.contains("show") &&
          window.innerHeight > elementLoc) ||
        (element.classList.contains("show") && window.innerHeight <= elementLoc)
      ) {
        element.classList.toggle("show");
      }
    }
  }, []);

  const throttledScrollHandler = useMemo(
    () =>
      throttle(() => {
        const scrollTop =
          document.documentElement.scrollHeight - window.innerHeight;
        dispatch(SETSCROLL((window.scrollY * 100) / scrollTop));
        showHandler();
      }, 300),
    [dispatch, showHandler]
  );

  useLayoutEffect(() => {
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener(throttledScrollHandler);
    };
  }, [throttledScrollHandler]);

  return (
    <React.Fragment>
      <HeaderContainer />
      <div className="content" ref={myComponents}>
        <Profile />
        <SkillContainer />
        <ProjectContainer />
      </div>
    </React.Fragment>
  );
}

export default App;
