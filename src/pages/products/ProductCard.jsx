import { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../components/buttons/MyButton";
import QuickViewModal from "../../components/modals/QuickViewModal";

const ProductCard = ({
    image = "",
    title = "",
    id = "",
    category = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <QuickViewModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                image={image}
                name={title}
            />
            <div className="w-full h-full group flex flex-col justify-start items-start border-b border-solid border-gray-300">
                <Link
                    to={`/${category}-details/${id}`}
                    className="w-full h-auto flex flex-col items-center"
                >
                    <div className="w-full h-[300px] flex justify-center items-center bg-white overflow-hidden relative">
                        <img
                            src={image}
                            alt="image"
                            className="w-full bg-gray-200 object-fill group-hover:scale-105 transition-all duration-200"
                        />
                        <div className="w-full h-full absolute top-0 left-0 flex justify-center bg-black/35 opacity-0 group-hover:opacity-100 transition-all duration-300 items-center">
                            <MyButton
                                className="bg-white text-black py-1 px-3 text-main-size z-10"
                                onClick={(e) => {
                                    e.preventDefault(); // stop Link from navigating
                                    e.stopPropagation(); // stop event bubbling
                                    setIsOpen(true);
                                }}
                            >
                                Quick View
                            </MyButton>
                        </div>
                    </div>
                    <h2 className="font-medium my-2 text-center">{title}</h2>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
