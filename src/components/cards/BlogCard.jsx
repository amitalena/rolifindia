import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard = ({
    title = "",
    description = "",
    date = "",
    _id = "",
    image = "",
}) => {
    return <>
        <div className="w-full h-auto bg-white flex flex-col justify-start items-start gap-y-4">
            <div className="w-full h-[200px] overflow-hidden">
                <img src={image} alt="image" className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex flex-col justify-start items-start px-3 pb-2 gap-y-2">
                <h2 className="font-semibold">{title}</h2>
                <p className="text-main-size">{description.substring(0, 120) + "..."}</p>
                <h3 className="text-[15px] font-medium">- {date}</h3>
                <Link to={`/blogpost/${_id}`}>
                    <button
                        className="flex justify-center items-center transition-all duration-300 hover:text-blue-800 gap-x-2 text-[15px] cursor-pointer"
                    >
                        <span>Read More</span>
                        <FaArrowRightLong size={14} />
                    </button>
                </Link>
            </div>
        </div>
    </>
}

export default BlogCard;