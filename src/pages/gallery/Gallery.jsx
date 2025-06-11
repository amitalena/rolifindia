import { Title } from "react-head";
import { useState, useMemo, useCallback } from 'react';
import furnitureItems from "./furnitureItems";

const categories = [
  { id: 'all', name: 'All Collections' },
  { id: 'living', name: 'Living Room' },
  { id: 'bedroom', name: 'Bedroom' },
  { id: 'dining', name: 'Dining Room' },
  { id: 'office', name: 'Office' },
];

const ZoomModal = ({ zoomImage, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
  >
    <div className="relative max-w-6xl w-full h-[400px]">
      <button
        className="absolute top-4 right-4 text-white text-3xl z-10"
        onClick={onClose}
        aria-label="Close zoom modal"
      >
        &times;
      </button>
      <img
        src={zoomImage.image}
        alt={zoomImage.title}
        className="w-full h-full object-contain"
        loading="eager"
      />
      <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2">
        <h3 className="text-xl font-semibold">{zoomImage.title}</h3>
      </div>
    </div>
  </div>
);

const GalleryItem = ({ item, onZoom }) => (
  <div
    className={`relative group overflow-hidden rounded-xl shadow-md transition-all duration-500 hover:shadow-xl h-[400px] ${
      item.featured ? 'md:col-span-2' : ''
    }`}
  >
    <div className="w-full h-full overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-amber-200 font-medium capitalize">{item.category} collection</p>
      </div>
    </div>
    <button
      onClick={() => onZoom(item)}
      className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-100 cursor-pointer"
      aria-label={`Zoom ${item.title}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    </button>
    {item.featured && (
      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
        Featured
      </div>
    )}
  </div>
);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [zoomImage, setZoomImage] = useState(null);

  const filteredItems = useMemo(() => (
    activeCategory === 'all'
      ? furnitureItems
      : furnitureItems.filter(item => item.category === activeCategory)
  ), [activeCategory]);

  const handleZoom = useCallback((item) => setZoomImage(item), []);
  const handleCloseZoom = useCallback(() => setZoomImage(null), []);

  return (
    <>
      <Title>Gallery</Title>
      <div className="w-full h-[400px] overflow-hidden">
        <img 
          src="/banners/gallery.png" 
          alt="Furniture gallery banner" 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {zoomImage && <ZoomModal zoomImage={zoomImage} onClose={handleCloseZoom} />}

        {/* Gallery Header */}
        <header className="text-center mb-12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our exquisite collection of handcrafted furniture pieces that blend functionality with timeless design.
          </p>
        </header>

        {/* Category Filters */}
        <nav className="flex flex-wrap justify-center gap-3 mb-12 items-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
              }`}
              aria-current={activeCategory === category.id ? 'true' : undefined}
            >
              {category.name}
            </button>
          ))}
        </nav>

        {/* Gallery Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} onZoom={handleZoom} />
          ))}
        </main>

        {/* Call to Action */}
        {/* <section className="mt-16 text-center h-[400px] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to See More?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Visit our showroom to experience the quality and craftsmanship of our furniture in person.
          </p>
          <button 
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Book a showroom tour"
          >
            Book a Showroom Tour
          </button>
        </section> */}
      </div>
    </>
  );
};

export default Gallery;