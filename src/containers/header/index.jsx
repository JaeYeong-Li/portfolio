import { useSelector } from "react-redux";
import Header from "@components/header";

const HeaderContainer = () => {
  const curScroll = useSelector((state) => state.setting.scroll);
  return <Header curScroll={curScroll} />;
};
export default HeaderContainer;
