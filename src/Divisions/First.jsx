import React from 'react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation,Pagination } from 'swiper/modules';

function First() {
  return (
    <Swiper   pagination={{clickable:true
    }} navigation={true}
 
    modules={[Navigation,Pagination,Autoplay]}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    
    className="mySwiper">
          <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725022748_lakme_powered_by_sunscreen_revised_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725043361_ubtan-de-tan-powder-banner_web.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725084749_lakme_hul_makeup_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1724911956_web-hero_1298x418.jpg"alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725084747_cetaphil_radiance_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725046660_ag-pu_webhp-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725085155_dot_and_key_eventone_-_skincare_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725090185_mars-_makeup-_blush_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1724836179_global_store_skinmakeup_and_hair_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='500px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725084752_mamaearth_everday_makeup_2596x836.jpeg" alt="" /></SwiperSlide>
        
      </Swiper>
  )
}

export default First