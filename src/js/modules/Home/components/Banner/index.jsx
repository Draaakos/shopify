import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import BannerItem from './BannerItem';



const Banner = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className='banner'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide>
          <BannerItem
            onPrev={() => swiperInstance && swiperInstance.slidePrev()}
            onNext={() => swiperInstance && swiperInstance.slideNext()}
            img="/static/images/banner/img5.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem
            onPrev={() => swiperInstance && swiperInstance.slidePrev()}
            onNext={() => swiperInstance && swiperInstance.slideNext()}
            img="/static/images/products/img2.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
