import "./index.scss";

const Badges = () => {
  const myBadges = ["boostcamp.png", "삼성sds_pro.png", "정보처리기사.png"];
  // eslint-disable-next-line prettier/prettier
  return myBadges.map((e) => <img className="badges" src={process.env.PUBLIC_URL + "/badges/" + e} alt={e} />);
};

const Badge = () => {
  return (
    <div className="profile-badge">
      <Badges />
    </div>
  );
};

export default Badge;
