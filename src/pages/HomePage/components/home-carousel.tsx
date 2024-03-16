import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import * as S from './home-carousel.css';
import { useNavigate } from 'react-router-dom';

export default function HomeCarousel() {
  const navigate = useNavigate();

  interface carouselItem {
    id: number;
    title: string;
    path: string;
  }

  const carouselItems = [
    { id: 0, title: '서비스소개', path: '/home' },
    { id: 1, title: '이벤트', path: '/event' },
    { id: 2, title: '굿즈함', path: '/goods' },
  ];

  return (
    <div className={S.wrapper}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {carouselItems.map((item: carouselItem) => (
          <SwiperSlide
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '328px',
                height: '328px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundImage: 'url(/assets/image/swiper_img_1.jpg)',
                backgroundSize: 'cover',
              }}
              onClick={() => navigate(item.path)}
            >
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
