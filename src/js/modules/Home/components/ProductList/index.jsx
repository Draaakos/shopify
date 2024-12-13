import Card from 'ui/Card';
import { HomeContext } from '../../context.js';
import { useContext, useEffect, useState } from 'react';


const ProductList = () => {
  const { states, actions } = useContext(HomeContext);
  const [ productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(states.products);
  }, [ states.products ]);


  const products = productList && productList
    .map((product, idx) => <Card key={`card-${idx}`} item={product} />);

  return (
    <div>
      <div className='plp-title'>Featured Collection</div>

      <div className='plp'>
        {products}
      </div>
    </div>
  );
};


export default ProductList;
