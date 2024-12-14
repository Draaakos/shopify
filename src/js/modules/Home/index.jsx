import Header from './components/Header/index.jsx';
import Banner from './components/Banner/index.jsx';
import ProductList from './components/ProductList/index.jsx';
import useHome from './useHome.js';
import { HomeContext } from './context.js';


const Home = () => {
  const { states, actions } = useHome();

  console.log('actions', actions)

  return (
    <HomeContext.Provider value={{ states, actions }}>
      <div className="page">
        <div>
          <Header />
        </div>

        <div>
          <Banner/>
        </div>

        <div>
          <ProductList />
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
