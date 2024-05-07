import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";


function Slider({SlideData}:any) {
  const swiperRef:any = useRef(null);
  const paginationRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  const paginationStyle = {
    '--swiper-pagination-color': '#6D28D9',
    'display':'flex',
    'justify-content':'center',
    'margin-top':'10px'
  };

  useEffect(() => {
    if (swiperRef.current && !swiper) {
      setSwiper(swiperRef.current);
    }
  }, [swiper]);

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
      >
        {SlideData.map((slide:any, index:any) => (
          <SwiperSlide key={slide._id}>
            <img src={slide.poster} width={400} alt={`slide_${index}`}/>
          </SwiperSlide>
        ))}
        <div ref={paginationRef} style={paginationStyle} />
      </Swiper>
    </div>
  );
}

export default Slider;
