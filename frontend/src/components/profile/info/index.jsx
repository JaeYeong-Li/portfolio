/* eslint-disable jsx-a11y/alt-text */
import './index.scss';

const InfoMenu = () => {
    const myMenu = ["akvk98@naver.com", "Github", "Blog"]
    return <div className="profile-infoMenu">{myMenu.map((e)=><div key={e} className="moveButton"><p>{e}</p></div>)}</div>;
}

const Info = () => {
    return (
        <div className="profile-info">
            <img className="profile-logo" src={process.env.PUBLIC_URL+'/img/jaeyeong.png'}/>
            <InfoMenu/>
        </div>
    )
}

export default Info;