import React from 'react'
import { Link } from 'react-router-dom'

const FurnitureAbout = ({
  image = ""
}) => {
  return (
    <div className="relative bg-gray-50 py-8 px-6 md:px-16 overflow-hidden">
      {/* Background SVG Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4F46E5"
            d="M45.2,-58.1C58.8,-45.1,70.1,-29.6,72.8,-12.3C75.6,5,69.8,24.1,57.1,38.5C44.4,52.9,24.8,62.6,3.8,60.2C-17.2,57.8,-34.5,43.3,-47.1,27.2C-59.7,11.1,-67.5,-6.7,-63.1,-22.3C-58.7,-37.9,-42.1,-51.4,-25.8,-63.3C-9.5,-75.2,6.5,-85.6,22.1,-81.9C37.7,-78.2,52.9,-60.5,45.2,-58.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-15">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#EC4899"
            d="M49.7,-56.3C62.3,-46.3,68.8,-28.3,70.4,-10.3C72,7.7,68.7,25.7,57.1,38.3C45.5,50.9,25.7,58.1,4.9,55.2C-15.9,52.3,-31.8,39.2,-43.1,24.3C-54.4,9.4,-61.1,-7.3,-56.9,-21.9C-52.7,-36.5,-37.6,-49,-21.3,-57.1C-5.1,-65.2,12.3,-68.8,49.7,-56.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-main-color leading-snug">
            Elevate Your Space with
            <span className="text-gray-700 block text-3xl mt-2">Luxurious Furniture</span>
          </h2>
          <p className="text-gray-900 font-medium text-[15px] leading-relaxed">
            Discover timeless elegance and modern comfort with our exclusive furniture collection. Designed for sophistication, crafted for comfort. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iure corporis laboriosam voluptas provident nam eveniet inventore eligendi praesentium culpa corrupti.
          </p>
          <Link to={"/furniture"} className='w-auto h-auto'>
            <button className="relative cursor-pointer px-6 text-[15px] py-2 font-medium text-white bg-blue-600 rounded-lg group overflow-hidden">
              <span className="absolute top-0 left-0 w-0 h-full bg-blue-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center gap-2">
                <span>Explore Collection</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-2xl group">
            <img
              src={image}
              alt="Furniture"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FurnitureAbout