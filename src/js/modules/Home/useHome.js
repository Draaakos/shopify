import { useEffect, useState } from "react";
import data from './mockdata.js';

const useHome = () => {
  const [ products, setProducts ] = useState([]);
  const [ activePage, setActivePage ] = useState(0);

  useEffect(() => {
    setProducts(data.pages);
  }, []);

  const states = {
    products: products[activePage]
  };

  const actions = {

  };

  return { actions, states }
};

export default useHome;
