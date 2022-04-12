import "@/App.scss";
import Header from "@components/header";
import Profile from "@components/profile";
import SkillContainer from "@containers/skill";
import ProjectContainer from "@containers/project";
import React, { useLayoutEffect, useMemo, useRef, useCallback } from "react";
import { throttle } from "lodash";

function App() {
  const saTriggerMargin = 300;
  const myComponents = useRef(null);

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
        showHandler();
      }, 300),
    [showHandler]
  );

  useLayoutEffect(() => {
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener(throttledScrollHandler);
    };
  }, [throttledScrollHandler]);

  return (
    <React.Fragment>
      <Header />
      <div className="content" ref={myComponents}>
        <Profile />
        <SkillContainer />
        <ProjectContainer />
      </div>
    </React.Fragment>
  );
}

export default App;
