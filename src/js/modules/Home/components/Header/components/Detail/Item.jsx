import { useContext } from 'react';
import { HomeContext } from '../../../../context.js';
import SVG from 'ui/SVG';


const Item = ({ product }) => {
  const { actions } = useContext(HomeContext)
  const total = product.quantity * product.price;

  return (
    <div className="detail-product">
      <div>{product.name}</div>
      <div>{product.quantity} {product.quantity == 1 ? "unidad" : "unidades"}</div>
      <div>$ {total.toFixed(2)}</div>
      <div onClick={() => actions.onRemoveFromCar(product)}><SVG src="/static/images/general/trash.svg" /></div>
    </div>
  );
};

export default Item;
