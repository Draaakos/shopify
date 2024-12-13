import Card from 'ui/Card';
import Header from './components/Header/index.jsx';
import Banner from './components/Banner/index.jsx';
import useHome from './useHome.js';


const Home = () => {
  const { states, actions } = useHome();

  console.log(states)

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <Card />
    </div>
  )
};


export default Home;
