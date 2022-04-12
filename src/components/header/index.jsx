import "./index.scss";
import { useEffect, useRef } from "react";

const Header = ({ curScroll }) => {
  const curHeader = useRef(null);
  useEffect(() => {
    curHeader.current.style.width = `${curScroll}%`;
  }, [curScroll]);
  return (
    <header>
      안녕하세요 이재영입니다 :)
      <div className="header-background"></div>
      <div className="header-current" ref={curHeader}></div>
    </header>
  );
};

export default Header;
