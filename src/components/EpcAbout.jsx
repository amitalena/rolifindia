import React from 'react'

const EpcAbout = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-main-color leading-snug">
        Elevate Your Vision with
          <span className="text-gray-400"> Expert EPC Solutions</span>
        </h2>
        <p className="text-gray-600 text-lg">
        Delivering excellence in Engineering, Procurement, and Construction (EPC), we provide end-to-end project management to bring ambitious visions to life. From concept to commissioning, our team ensures precision, efficiency, and innovation at every stage.

With expertise in infrastructure, industrial, and commercial projects, we optimize resources, streamline execution, and guarantee timely delivery. Whether it’s large-scale construction, energy solutions, or turnkey projects, our commitment to quality and sustainability sets us apart.

Let’s build the future—one project at a time.


        </p>
        <button className="px-3 py-1 bg-red-300 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all">
          Explore Collection
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/images/furniture/2.gif"
            alt="Furniture"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default EpcAbout