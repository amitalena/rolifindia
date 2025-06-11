import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiImage } from "react-icons/fi"; // Import a fallback icon

const ImageViewer = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [direction, setDirection] = useState(0);

    // Handle case where product or images array is missing
    const images = product?.images || [];
    const hasImages = images.length > 0;

    const handleImageChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < images.length) {
            setDirection(newIndex > selectedImage ? 1 : -1);
            setSelectedImage(newIndex);
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 200 : -200,
            opacity: 0
        })
    };

    return (
        <div>
            {/* Main Image with Animation */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 h-96 flex items-center justify-center relative">
                <AnimatePresence mode="wait" custom={direction}>
                    {hasImages ? (
                        <motion.img
                            key={selectedImage}
                            src={images[selectedImage]}
                            alt={product?.title || 'Product image'}
                            className="object-contain w-full h-full absolute"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { 
                                    type: "spring", 
                                    stiffness: 500,
                                    damping: 30, 
                                    duration: 0.3
                                },
                                opacity: { duration: 0.15 }
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = ''; // Clear broken image
                            }}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-gray-400">
                            <FiImage className="text-5xl mb-2" />
                            <p>No images available</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Thumbnail Gallery - Only show if we have images */}
            {hasImages && (
                <div className="grid grid-cols-4 gap-3">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageChange(index)}
                            className={`bg-gray-100 cursor-pointer rounded-md overflow-hidden h-24 flex items-center justify-center border-2 ${
                                selectedImage === index ? 'border-blue-500' : 'border-transparent'
                            }`}
                        >
                            <motion.img 
                                src={img} 
                                alt={`Thumbnail ${index + 1}`} 
                                className="object-contain w-full h-full"
                                whileHover={{ scale: 1.05 }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 500,
                                    damping: 15,
                                    duration: 0.2 
                                }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = ''; // Clear broken image
                                    e.target.parentElement.classList.add('bg-gray-200');
                                }}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageViewer;