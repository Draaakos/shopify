import { useEffect, useState } from "react";
import data from './mockdata.js';

const useHome = () => {
  const [ itemsPerPage, _ ] = useState(8);
  const [ products, setProducts ] = useState([]);
  const [ activePage, setActivePage ] = useState(0);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  console.log('totalPages', totalPages)


  useEffect(() => {
    setProducts(data.pages);
  }, []);

  const states = {
    products: products[activePage]
  };

  const actions = {
    onNextPage: () => {
      if (activePage <= totalPages - 1) {
        setActivePage(activePage + 1);
      }
    },
    onPrevPage: () => {
      if (activePage > 0) {
        setActivePage(activePage - 1);
      }
    }
  };

  return { actions, states }
};

export default useHome;
