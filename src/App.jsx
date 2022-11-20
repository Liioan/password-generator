//. assets
import GithubIco from './assets/github.svg';

//. components
import MainCard from './components/MainCard/MainCard';
import BackgroundCards from './components/BackgroundCards/BackgroundCards';

//. styles
import './assets/global.css';
import './assets/variables.css';

function App() {
  return (
    <div className='App'>
      <MainCard />
      <BackgroundCards />
      <a
        href='https://github.com/liioan/password-generator'
        target='_blank'
        className='github-ico'
      >
        <img src={GithubIco} alt='' />
      </a>
    </div>
  );
}

export default App;
