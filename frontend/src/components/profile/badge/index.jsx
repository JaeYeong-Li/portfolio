/* eslint-disable jsx-a11y/alt-text */
import "./index.scss";

const Badges = () => {
    const myBadges = ["knu.jpg", "boostcamp.png", "삼성SDS_PRO.png"];
    return myBadges.map((e)=> <img className="badges" src={process.env.PUBLIC_URL+'/badges/'+e}/>);
}

const Badge = () => {
    return (
        <div className="profile-badge">
            <Badges/>
        </div>
    )
}

export default Badge;