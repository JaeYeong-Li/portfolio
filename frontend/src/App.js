import '@/App.scss';
import Header from '@components/header';
import Profile from '@components/profile';
import Skill from '@components/skill';
import Projects from '@components/projects';

function App() {
  return (
    <div className="rootWrapper">
      <Header/>
      <div className="content">
        <Profile/>
        <Skill/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
