import '@/App.scss';
import Header from '@components/header';
import Profile from '@components/profile';
import Skill from '@components/skill';

function App() {
  return (
    <div className="rootWrapper">
      <Header/>
      <div className="content">
        <Profile/>
        <Skill/>
      </div>
    </div>
  );
}

export default App;
