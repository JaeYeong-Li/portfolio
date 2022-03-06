import '@/App.scss';
import Header from '@components/header';
import Profile from '@components/profile';
import Skill from '@components/skill';
import Projects from '@components/projects';
import React,{useLayoutEffect, useMemo, useRef} from 'react';
import { useDispatch } from 'react-redux';
import {throttle} from 'lodash';
import { updateScroll } from '@store/modules/setting';

function App() {
  const dispatch = useDispatch();
  const saTriggerMargin = 300;
  const myComponents = useRef(null);

  const showHandler = () => {
    for(const element of myComponents.current.childNodes) {
      const curScroll = element.getBoundingClientRect().top + saTriggerMargin;
      if( ((!element.classList.contains('show')) && (window.innerHeight > curScroll)) || 
        (element.classList.contains('show') && (window.innerHeight <= curScroll )) ) {
          element.classList.toggle('show');
        }
    }
  }
  const throttledScrollHandler = useMemo(
    () =>
      throttle(() => {
        const scrollTop = document.documentElement.scrollHeight - window.innerHeight;
        dispatch(updateScroll(window.scrollY*100/scrollTop));
        showHandler();
      }, 300),
    [dispatch]
  );

  useLayoutEffect(()=>{
    window.addEventListener('scroll', throttledScrollHandler);
    return ()=> {
      window.removeEventListener(throttledScrollHandler);
    }
  },[throttledScrollHandler]);

  return (
    <div className="rootWrapper">
      <Header/>
      <div className="content" ref={myComponents}>
        <Profile/>
        <Skill/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
