import { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ArrowNavigation from 'ui/ArrowNavigation/index.jsx';
import Card from 'ui/Card';
import { HomeContext } from '../../context.js';




const ProductList = () => {
  const { states, actions } = useContext(HomeContext);
  const [ productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(states.products);
  }, [ states.products ]);

  const products = [
    productList && productList.map((page) => {
      const items = page.map((product, idx) =>
        <Card key={`card-${idx}`} item={product} />
      );

      return (
        <SwiperSlide>
          <div className='products'>{items}</div>
        </SwiperSlide>
      )
    })
  ]

  return (
    <div>
      <div className='plp-title'>Featured Collection</div>

      <div className='plp'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => actions.setSwiperInstancePLP(swiper)}
        >
          {products}
        </Swiper>
      </div>

      <div className="page-navigation">
        <ArrowNavigation
          onPrev={() => states.swiperInstancePLP && states.swiperInstancePLP.slidePrev()}
          onNext={() => states.swiperInstancePLP && states.swiperInstancePLP.slideNext()}
        />
      </div>
    </div>
  );
};


export default ProductList;
