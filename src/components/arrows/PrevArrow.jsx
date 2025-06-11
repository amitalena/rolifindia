import { Button } from "@material-tailwind/react";
import { IoIosArrowBack } from "react-icons/io";

const PrevArrow = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            ripple={false}
            className="!absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 p-0 rounded-full bg-white text-black border border-gray-300 shadow-md hover:bg-gray-100 flex items-center justify-center cursor-pointer"
        >
            <IoIosArrowBack size={18} />
        </Button>
    );
};

export default PrevArrow;
