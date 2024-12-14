import { useEffect, useState } from "react";
import data from './mockdata.js';

const useHome = () => {
  const [ products, setProducts ] = useState([]);
  const [ swiperInstancePLP, setSwiperInstancePLP ] = useState(null);

  useEffect(() => {
    setProducts(data.pages);
  }, []);

  const states = {
    products,
    swiperInstancePLP
  };

  const actions = {
  };

  return {
    actions: {
      ...actions,
      setSwiperInstancePLP
    },
    states
  }
};

export default useHome;
