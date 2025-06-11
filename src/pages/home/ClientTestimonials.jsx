import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import PrevArrow from "../../components/arrows/PrevArrow";
import NextArrow from "../../components/arrows/NextArrow";
import testimonials from "../../configs/testimonials";
import TestimonialCard from '../../components/cards/TestimonialCard';

const ClientTestimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full py-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Top Blob */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#4F46E5" 
            d="M39.8,-44.1C53.9,-33.9,69.1,-23.7,73.3,-9.7C77.5,4.3,70.7,22.1,58.1,35.8C45.5,49.5,27.1,59.1,8.2,65.3C-10.7,71.5,-30,74.3,-43.8,65.2C-57.6,56.1,-65.8,35.1,-68.3,14.3C-70.8,-6.5,-67.6,-27.1,-56.2,-40.9C-44.8,-54.7,-25.2,-61.7,-6.5,-59.1C12.2,-56.5,24.4,-44.3,39.8,-44.1Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>

      {/* Bottom Wave SVG Background */}
      <div className="absolute bottom-0 left-0 w-full opacity-10 transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#EC4899" 
            className="shape-fill"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="#4ECDC4" 
            className="shape-fill"
            opacity="0.5"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <PrevArrow 
            onClick={() => swiperRef.current?.swiper?.slidePrev()} 
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 hidden md:block"
          />
          
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={800}
            loop={true}
            pagination={{ 
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'w-2 h-2 inline-block rounded-full bg-gray-300 mx-1',
              bulletActiveClass: '!bg-blue-700 w-4'
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="h-full py-2 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <NextArrow 
            onClick={() => swiperRef.current?.swiper?.slideNext()} 
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 hidden md:block"
          />
        </div>

        {/* Custom pagination */}
        <div className="testimonial-pagination text-center mt-0"></div>
      </div>
    </section>
  );
};

export default ClientTestimonials;