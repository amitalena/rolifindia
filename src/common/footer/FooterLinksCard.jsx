import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinksCard = ({
    item
}) => {
    return <>
        <div className="flex flex-col justify-start items-start">
            <h2 className="text-[18px] leading-tight font-semibold text-main-color">{item?.name}</h2>
            <div className="h-[2px] bg-main-color w-full"></div>
            <div className="flex flex-col justify-start my-2 items-start">
                {
                    item?.subMenu?.map((it, index) => (
                        <Link
                            key={index}
                            to={it.route}
                            className="cursor-pointer group font-medium text-black flex items-center gap-x-2 transition-all duration-200 hover:text-blue-700"
                        >
                            <div className="relative flex items-center">
                                {/* Arrow (FaPlay) initially invisible, becomes visible on hover and sits at same place as text start */}
                                <FaPlay
                                    size={12}
                                    className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                />
                                {/* Text moves right on hover */}
                                <span className="transition-all duration-300 transform group-hover:translate-x-4">
                                    {it.name}
                                </span>
                            </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    </>
}

export default FooterLinksCard;