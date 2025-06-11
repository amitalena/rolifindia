import { useMemo, useState } from 'react';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaShareAlt } from 'react-icons/fa';
import { IoIosCall } from "react-icons/io";
import { FiTruck } from 'react-icons/fi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { BiArrowBack } from 'react-icons/bi';
import FurnitureSlider from '../../components/FurnitureSlider';
import ImageViewer from './ImageViewer';
import ProductDetailsTable from './ProductDetailsTable';
import { Button } from '@material-tailwind/react';
import NumberModal from '../../components/modals/NumberModal';
import GetBestPriceModal from '../../components/modals/GetBestPriceModal';
import AddReview from './AddReview';
import ShareButton from '../../components/buttons/ShareButton';
import { useLocation } from 'react-router-dom';
import furnitureProducts from '../../configs/furnitureProducts';

const ProductDetailsPage = () => {
    const { pathname } = useLocation();
    // Sample product data - replace with your actual data
    // const product = {
    //     id: 1,
    //     title: "Premium Wooden Dining Table",
    //     description: "Handcrafted from solid oak wood, this dining table combines durability with elegant design. Perfect for family gatherings and dinner parties. Features a smooth finish and sturdy construction.",
    //     price: 599.00,
    //     discountPrice: 499.00,
    //     rating: 4.5,
    //     reviewCount: 128,
    //     images: [
    //         "https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg",
    //         "https://m.media-amazon.com/images/I/610sNIpxQ7L._AC_UF894,1000_QL80_.jpg",
    //         "https://m.media-amazon.com/images/I/61cEjmXGHUL._AC_UF894,1000_QL80_.jpg",
    //         "https://s.alicdn.com/@sc04/kf/H289738d3e7034f438fdcd00cc73c32b8z.jpg_720x720q50.jpg",
    //     ],
    //     colors: ["#5F4B32", "#3E3E3E", "#D4A76A"],
    //     dimensions: "180cm × 90cm × 75cm",
    //     material: "Solid Oak Wood",
    //     weight: "45kg",
    //     style: "Modern Farmhouse",
    //     warranty: "2 Years",
    //     delivery: "3-5 business days",
    //     stock: 15
    // };
    const product = useMemo(() => {
        let category = pathname.split('/')[1];
        let id = pathname.split('/')[2];
        // if(category === 'furniture-details'){
        //     return furnitureProducts.filter((item) => item.id === id)[0] || null;
        // }
        return furnitureProducts[0];
    }, [pathname]);

    // Furniture-specific attributes
    const furnitureDetails = [
        { label: "Material", value: product?.material },
        { label: "Dimensions", value: product?.dimensions },
        { label: "Weight", value: product?.weight },
        { label: "Style", value: product?.style },
        { label: "Assembly Required", value: "No" },
        { label: "Warranty", value: product?.warranty },
    ];

    // Tiles-specific attributes (example)
    const tilesDetails = [
        { label: "Material", value: "Ceramic" },
        { label: "Size", value: "30cm × 30cm" },
        { label: "Thickness", value: "8mm" },
        { label: "Coverage", value: "9 tiles per m²" },
        { label: "Water Absorption", value: "<3%" },
        { label: "Finish", value: "Glossy" },
    ];

    // Sanitary ware-specific attributes (example)
    const sanitaryDetails = [
        { label: "Material", value: "Vitreous China" },
        { label: "Color", value: "White" },
        { label: "Flush Type", value: "Dual Flush" },
        { label: "Water Usage", value: "3/6 liters" },
        { label: "Installation", value: "Floor Mounted" },
        { label: "Warranty", value: "5 Years" },
    ];

    const sliderImages = [
        {
            image: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg",
            route: '/furniture-details/1',
        },
        {
            image: "https://img.freepik.com/free-photo/scandinavian-vintage-wood-cabinet-with-chair-by-dark-blue-wall_53876-98164.jpg",
            route: '/furniture-details/2',
        },
        {
            image: "https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=",
            route: '/furniture-details/3',
        },
        {
            image: "https://www.urbanwood.in/image/catalog/blogs/1260h-teak-wood-living-room-furniture-1051780.jpg",
            route: '/furniture-details/4',
        },
        {
            image: "https://www.realsimple.com/thmb/kRRAaK6XhZIqL_GFIxfZzHTHx7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/furniture-styles-GettyImages-1467984982-512fed4077b646eabbc187619554d517.jpg",
            route: '/furniture-details/5',
        },
        {
            image: "https://m.media-amazon.com/images/I/81JKyHGNbQL._AC_UF894,1000_QL80_.jpg",
            route: '/furniture-details/6',
        },
    ];

    // const [quantity, setQuantity] = useState(1);
    const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
    const [isGetModalOpen, setIsGetModalOpen] = useState(false);

    const renderRatingStars = () => {
        const stars = [];
        const fullStars = Math.floor(product?.rating);
        const hasHalfStar = product?.rating % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }

        return stars;
    };

    return <>
        <NumberModal
            isOpen={isNumberModalOpen}
            setIsOpen={setIsNumberModalOpen}
        />
        <GetBestPriceModal
            isOpen={isGetModalOpen}
            setIsOpen={setIsGetModalOpen}
        />
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back button */}
            <button className="flex items-center cursor-pointer  text-gray-600 hover:text-gray-900 mb-6" onClick={() => window.history.back()}>
                <BiArrowBack className="mr-2" /> Back to Products
            </button>

            {/* Section 1: Product Image with Title, Description, Price, Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Product Images */}
                <ImageViewer product={product} />

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{product?.title}</h1>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                            {renderRatingStars()}
                        </div>
                        <span className="text-gray-600 text-sm">({product?.reviewCount} reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <span className="text-3xl font-bold text-gray-900">₹ {product?.discountPrice.toFixed(2) || 0}</span>
                        {product?.discountPrice < product?.price && (
                            <>
                                <span className="text-lg text-gray-700 line-through ml-2">₹ {product?.price.toFixed(2)}</span>
                                <span className="bg-red-100 text-red-800 text-sm font-medium ml-2 px-2 py-0.5 rounded">
                                    {Math.round((1 - product?.discountPrice / product?.price) * 100)}% OFF
                                </span>
                            </>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">{product?.description}</p>

                    {/* Color Options */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                        <div className="flex space-x-2">
                            {product?.colors?.map((color, index) => (
                                <button
                                    key={index}
                                    className="w-8 h-8 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    style={{ backgroundColor: color }}
                                    aria-label={`Color option ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row gap-3 mb-8">
                        <Button className="flex-1 cursor-pointer normal-case text-[15px] hover:shadow shadow-none bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium flex items-center justify-center"
                            onClick={() => setIsGetModalOpen(true)}
                        >
                            Get Best Price
                        </Button>
                        <Button className="flex-1 bg-green-700 normal-case text-[15px] shadow-none hover:shadow cursor-pointer hover:bg-green-800 text-white py-2 px-6 rounded-md font-medium flex items-center justify-center"
                            onClick={() => setIsNumberModalOpen(true)}
                        >
                            <IoIosCall size={20} className="mr-2" /> Show Number
                        </Button>
                        <ShareButton />
                    </div>

                    {/* Review */}
                    <AddReview />

                    {/* Delivery Info */}
                    {/* <div className="bg-gray-100 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <FiTruck className="text-green-600 mr-2" />
                            <span className="font-medium">Free Delivery</span>
                            <span className="text-gray-600 ml-auto">{product.delivery}</span>
                        </div>
                        <div className="flex items-center">
                            <RiSecurePaymentLine className="text-blue-600 mr-2" />
                            <span className="font-medium">Secure Payment</span>
                            <span className="text-gray-600 ml-auto">SSL Encryption</span>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Section 2: Product Details and Additional Information */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>

                {/* Furniture Details */}
                <ProductDetailsTable productDetails={furnitureDetails} type={product?.category || ''} />
            </div>

            {/* Additional HTML Content */}
            <div className="prose max-w-none mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h2>
                <p>Our premium wooden dining table is crafted with attention to detail and built to last. The solid oak construction ensures durability while the elegant design complements any dining space.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Care Instructions</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Wipe clean with a soft, damp cloth</li>
                    <li>Avoid harsh chemical cleaners</li>
                    <li>Use coasters for hot items</li>
                    <li>Protect from direct sunlight</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Why Choose This Product?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">Premium Quality</h4>
                        <p className="text-sm text-blue-700">Made from sustainably sourced solid oak wood with a durable finish.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-2">Easy Maintenance</h4>
                        <p className="text-sm text-green-700">Simple to clean and maintain for years of beautiful use.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium text-purple-800 mb-2">Versatile Design</h4>
                        <p className="text-sm text-purple-700">Complements both modern and traditional decor styles.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full'>
            <h2 className="text-2xl font-bold text-gray-900 px-4">Similar Products</h2>
            <FurnitureSlider sliderImages={sliderImages} />
        </div>
    </>
};

export default ProductDetailsPage;