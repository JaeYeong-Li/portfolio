/* eslint-disable jsx-a11y/alt-text */
import "./index.scss";

const myMenu = [{ name: "akvk98@naver.com" }, { name: "Github", link: "https://github.com/JaeYeong-Li" }, { name: "Blog", link: "https://velog.io/@akvk98" }];
const infoMenuClickHandler = (e) => {
  const curName = e.target.innerHTML;
  let idx;
  myMenu.some((menu, i) => {
    if (menu.name === curName) idx = i;
    return menu.name === curName;
  });
  window.open(myMenu[idx].link, "_blank");
};
const InfoMenu = () => {
  return (
    <div className="profile-infoMenu">
      {myMenu.map((menu) => {
        return Object.keys(menu).length === 1 ? (
          <div key={menu.name} className="moveButton">
            {menu.name}
          </div>
        ) : (
          <div key={menu.name} className="moveButton" onClick={(e) => infoMenuClickHandler(e)}>
            {menu.name}
          </div>
        );
      })}
    </div>
  );
};

const Info = () => {
  return (
    <div className="profile-info">
      <img className="profile-logo" src={process.env.PUBLIC_URL + "/img/jaeyeong.png"} />
      <InfoMenu />
    </div>
  );
};

export default Info;
