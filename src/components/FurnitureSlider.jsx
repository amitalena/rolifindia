import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link } from 'react-router-dom';

const FurnitureSlider = ({ sliderImages = [] }) => {
  return (
    <div className="w-full mx-auto px-4 py-4 relative group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          }
        }}
        className="rounded-2xl"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {sliderImages.map((img, index) => (
          <SwiperSlide key={index} className='my-8'>
            <div className="relative hover-card">
              <Link to={img?.route} className='block relative'>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-400/20">
                  <img
                    src={img?.image || ''}
                    alt={`slide-${index}`}
                    className="w-full h-72 object-cover transition-all duration-500 hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 transition-opacity duration-300 hover:opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full text-white transition-all duration-500 transform translate-y-0 hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-1">{img?.title || 'Furniture Item'}</h3>
                    <p className="text-sm opacity-80 mb-3">{img?.description || 'Premium quality furniture'}</p>
                    <span className="inline-block px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium transition-all duration-300 hover:bg-amber-500 hover:text-white">
                      View Details
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 transform scale-75 hover:scale-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-xl cursor-pointer transform transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-amber-500 hover:text-white -translate-x-6 group-hover:translate-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-xl cursor-pointer transform transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-amber-500 hover:text-white translate-x-6 group-hover:-translate-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Custom Pagination Dots */}
        {/* <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center space-x-2 w-full"></div> */}
      </Swiper>

      {/* Custom styles for pagination */}
      <style jsx>{`
        .custom-bullet {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #dbdbdb;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background-color: #F59E0B;
          width: 16px;
        }
        .custom-pagination {
          padding: 10px 0;
        }
      `}</style>
    </div>
  )
}

export default FurnitureSlider;