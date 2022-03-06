import Info from '@components/profile/info/';
import Badge from '@components/profile/badge/';
import Introduce from '@components/profile/introduce/';
import './index.scss';
const Profile = () =>{
    return (
        <div className="profile sa sa-up">
        <Info />
        <Badge />
        <Introduce />
        </div>
    )
}

export default Profile;