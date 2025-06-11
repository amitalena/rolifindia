import React from 'react'
import { Link } from 'react-router-dom'

const FurnitureGrid = ({
  image = "",
  products = []
}) => {
  return (
    <>
      <img src={image} alt="" className='w-full' />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4">
        {products.map((product, index) => (
          <Link
            key={index}
            to={product?.route}
            className="block group overflow-hidden rounded-lg"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[200px] object-cover transition-all duration-500 group-hover:scale-110"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {/* Category Title */}
            <div className="mt-3 text-center">
              <h3 className="font-medium text-gray-800 text-lg group-hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>

  )
}

export default FurnitureGrid