import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Banners = () => {
  const images = [
    {
      src: "/home-banner/1.png",
      alt: "Banner 1"
    },
    {
      src: "/home-banner/2.png",
      alt: "Banner 2"
    },
    {
      src: "/home-banner/3.png",
      alt: "Banner 3"
    },
  ];

  return (
    <section className="relative w-full overflow-x-hidden group">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{ 
          delay: 3000, 
          disableOnInteraction: false,
          // pauseOnMouseEnter: true
        }}
        navigation={{
          nextEl: '.banner-next',
          prevEl: '.banner-prev',
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop
        speed={800}
        className="w-full"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx} className="!w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="banner-prev absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FiChevronLeft size={24} />
      </button>
      <button className="banner-next absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FiChevronRight size={24} />
      </button>
    </section>
  );
};

export default Banners;