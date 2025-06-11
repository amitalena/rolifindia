import React from 'react'
import { Link } from 'react-router-dom'

const TilesAbout = ({
  image = ""
}) => {
  return (
    <div className="relative bg-gray-100 py-8 px-6 md:px-16 overflow-hidden">
      {/* Background SVG Shapes - Different from FurnitureAbout */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF6B6B"
            d="M39.8,-44.1C53.9,-33.9,69.1,-23.7,73.3,-9.7C77.5,4.3,70.7,22.1,58.1,35.8C45.5,49.5,27.1,59.1,8.2,65.3C-10.7,71.5,-30,74.3,-43.8,65.2C-57.6,56.1,-65.8,35.1,-68.3,14.3C-70.8,-6.5,-67.6,-27.1,-56.2,-40.9C-44.8,-54.7,-25.2,-61.7,-6.5,-59.1C12.2,-56.5,24.4,-44.3,39.8,-44.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-15">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4ECDC4"
            d="M50.6,-56.3C63.6,-44.5,71.2,-26.6,72.8,-8.2C74.4,10.2,70,28.1,58.2,41.5C46.4,54.9,27.2,63.8,6.9,61.8C-13.4,59.7,-26.8,46.7,-39.5,33.3C-52.2,19.9,-64.2,6.1,-64.4,-8.3C-64.6,-22.7,-53,-37.7,-38.8,-49.9C-24.6,-62.1,-7.8,-71.5,9.4,-77.4C26.6,-83.3,53.2,-85.7,68.2,-72.7C83.2,-59.7,86.6,-31.3,83.4,-5.5C80.2,20.3,70.4,43.1,55.2,56.2C40,69.3,19.4,72.7,0.3,72.2C-18.8,71.7,-37.6,67.3,-50.6,56.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-main-color leading-snug">
            Elevate Your Space with
            <span className="text-gray-600 block text-3xl mt-2">Premium Tiles</span>
          </h2>
          <p className="text-gray-900 font-medium text-main-size leading-relaxed">
            Transform your home with the timeless elegance and durability of Sumani Tiles. Our exquisite tile collection blends modern aesthetics with unmatched craftsmanship, creating spaces that reflect sophistication and style.
            <br /><br />
            From sleek, contemporary designs to classic textures, our tiles are engineered for lasting beauty and performance. Whether for floors, walls, or statement accents, Sumani Tiles bring luxury and functionality to every corner of your home.
          </p>
          <Link to={"/tiles-and-sanitary-ware"} className='w-auto h-auto'>
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
              alt="Premium Tiles"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TilesAbout