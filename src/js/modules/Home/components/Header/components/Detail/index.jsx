import { useContext } from "react";
import Item from './Item.jsx';
import { HomeContext } from "../../../../context.js";


const Detail = () => {
  const { states } = useContext(HomeContext);

  const products = states.car
    .map((product, idx) => <Item key={`product-${idx}`} product={product} />
  );

  const cost = states.car.reduce((acc, next) => acc + (next.quantity * next.price), 0);
  const iva = cost * 0.19;
  const total = iva + cost;

  const emptyCar = (
    <div className="detail-product__empty-car">
      No hay productos seleccionados.
    </div>
  );

  const carComponent = (
    <div>
      <div className="detail-product">
        <div className="detail-product__strong">Product</div>
        <div className="detail-product__strong">Cantidad</div>
        <div className="detail-product__strong">Precio</div>
      </div>

      {products}

      <div className="detail-product-iva">
        <div className="detail-product-iva__element">IVA: {iva.toFixed(2)} ARS</div>
        <div className="detail-product-iva__element">TOTAL: {total.toFixed(2)} ARS</div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="detail-title">Carro de compras</div>

      { states.car.length ? carComponent : emptyCar }
    </div>
  );
};

export default Detail;
