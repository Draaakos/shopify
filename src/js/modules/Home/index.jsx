import Header from './components/Header/index.jsx';
import Banner from './components/Banner/index.jsx';
import ProductList from './components/ProductList/index.jsx';
import useHome from './useHome.js';
import { HomeContext } from './context.js';


const Home = () => {
  const { states, actions } = useHome();

  return (
    <HomeContext.Provider value={{ states, actions }}>
      <div className="page">
        <Header />
        <Banner/>
        <ProductList />
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
