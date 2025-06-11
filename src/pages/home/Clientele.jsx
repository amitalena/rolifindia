import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Register Autoplay module
SwiperCore.use([Autoplay]);

const Clientele = React.memo(() => {
  return (
    <div className="py-2 px-4 md:px-8 w-full">
      <div className="w-full mx-auto text-center">
        {/* <Heading startText="Our" endText="Clients" pb={1} /> */}
        <h2 className="text-[32px] uppercase font-semibold">Our Clients</h2>
        <h2 className="mt-1">
          Trusted by leading industries in manufacturing, infrastructure, and commercial sectors.
        </h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={0} // No space between slides
          slidesPerView={10} // Adjusted to match max breakpoint for consistency
          // centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            speed: 1500,
          }}
          speed={5000}
          pagination={false}
          navigation={false}
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 0 },
            600: { slidesPerView: 4, spaceBetween: 0 },
            960: { slidesPerView: 7, spaceBetween: 0 },
            1280: { slidesPerView: 10, spaceBetween: 0 },
          }}
        >
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index} className="py-3 mx-2 flex justify-center items-center ">
                <img
                  src={`/images/clients/${index + 1}.png`}
                  alt={`Client ${index + 1}`}
                  className="w-48 h-20 object-contain rounded-lg m-0 px-8 border border-solid border-gray-300 shadow-md shadow-gray-400" // Added h-24 for consistent height
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
});

export default Clientele;