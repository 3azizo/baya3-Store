
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import "../assets/styles/TripleSlider.css"
const images = [
  'https://www.games2egypt.com/Images/Slides/191?lang=ar&fileFormat=1&lastModified=638785947116530000&width=900',
  'https://www.games2egypt.com/Images/Slides/189?lang=ar&fileFormat=0&lastModified=638785937279170000&width=900',
  'https://www.games2egypt.com/Images/Slides/187?lang=ar&fileFormat=0&lastModified=638785935390900000&width=900',
  'https://www.games2egypt.com/Images/Slides/198?lang=ar&fileFormat=0&lastModified=638827377289030000&width=900',
];


const TripleSlider = () => {
  return (
    <div className="hero-slider">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <img src={imgSrc} alt={`slide-${index}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default TripleSlider;
