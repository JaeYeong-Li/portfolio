import '@/App.scss';
import Header from '@components/header';
import Profile from '@components/profile'

function App() {
  return (
    <div className="rootWrapper">
    <Header/>
    <div className="content">
    <Profile/>
    </div>
    </div>
  );
}

export default App;
