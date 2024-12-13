import ArrowNavigation from 'ui/ArrowNavigation/index.jsx';
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
        <div>
          <Header />
        </div>

        <div>
          <Banner/>
        </div>

        <div>
          <ProductList />
        </div>

        <div className="page-navigation">
          <ArrowNavigation onNext={actions.onNextPage} onPrev={actions.onPrevPage} />
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
