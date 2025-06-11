import { Drawer } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import AppSideLink from "./AppSideLink";

// icons
import { FaUsers, FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { LuTableOfContents } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAction } from "../../redux/features/action";
import FurnitureSvg from "../../svgs/FurnitureSvg";
import TileSvg from "../../svgs/TileSvg";
import LightSvg from "../../svgs/LightSvg";
import ServicesSvg from "../../svgs/ServicesSvg";
import menuLinks from "../../configs/menuLinks";

const AppSidebar = () => {
    const location = useLocation();
    const appSidebar = useSelector((state) => state.action.appSidebar);
    const dispatch = useDispatch();
    const [openProducts, setOpenProducts] = useState(false);

    const navLinks = [
        {
            name: 'Home',
            route: '/',
            icon: <GoHomeFill size={18} />,
        },
        {
            name: 'About Us',
            route: '/about-us',
            icon: <FaUsers size={18} />,
        },
        {
            name: 'Blogs',
            route: '/blogs',
            icon: <LuTableOfContents size={18} />,
        },
        {
            name: 'Gallery',
            route: '/gallery',
            icon: <GrGallery size={16} />,
        },
        {
            name: 'Contact Us',
            route: '/contact-us',
            icon: <IoIosCall size={18} />,
        },
    ]

    const productLinks = [
        {
            route: "/furniture",
            icon: <FurnitureSvg size="20px" />,
        },
        {
            route: "/tiles-and-sanitary-ware",
            icon: <TileSvg size="24px" />,
        },
        {
            route: "/electrics",
            icon: <LightSvg size="20px" />,
        },
        {
            route: "/services",
            icon: <ServicesSvg size="20px" />,
        },
    ].map((item) => ({
        ...(menuLinks.filter((product) => product.route === item.route)?.[0] || {}),
        icon: item?.icon,
    }));

    useEffect(() => {
        if (location) {
            dispatch(setAction({ appSidebar: false }));
        }
    }, [location]);

    return (
        <Drawer
            open={appSidebar}
            onClose={() => dispatch(setAction({ appSidebar: false }))}
            overlayProps={{
                className: "bg-black/20 backdrop-blur-[2px]",
            }}
            className="p-0 bg-gradient-to-b from-gray-50 to-gray-100"
        >
            <aside className="w-full h-full flex flex-col">
                {/* Header with logo and close button */}
                <div className="w-full p-4 flex justify-between items-center bg-white shadow-sm">
                    <img 
                        src="/logo.svg" 
                        alt="Logo" 
                        className="w-[70px] h-auto" 
                    />
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={() => dispatch(setAction({ appSidebar: false }))}
                    >
                        <RxCross2 size={20} className="text-gray-600" />
                    </button>
                </div>

                {/* Navigation content with scroll */}
                <div className="flex-1 overflow-y-auto py-4 px-2">
                    {/* Main navigation links */}
                    <div className="space-y-1 mb-4">
                        {navLinks.map((item, index) => (
                            <AppSideLink
                                key={`nav-${index}`}
                                {...item}
                                className="hover:bg-gray-200 rounded-lg"
                            />
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-2 bg-gray-100 text-sm text-gray-500">
                                Our Products
                            </span>
                        </div>
                    </div>

                    {/* Products dropdown */}
                    <div className="mb-4">
                        <button
                            onClick={() => setOpenProducts(!openProducts)}
                            className={`w-full flex items-center justify-between py-2 cursor-pointer px-3 rounded-lg transition-colors ${openProducts ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-200'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-medium">Products</span>
                            </div>
                            {openProducts ? (
                                <FaChevronDown size={14} />
                            ) : (
                                <FaChevronRight size={14} />
                            )}
                        </button>

                        {/* Dropdown content */}
                        {openProducts && (
                            <div className="mt-1 space-y-1">
                                {productLinks.map((item, index) => (
                                    <AppSideLink
                                        key={`product-${index}`}
                                        {...item}
                                        className="hover:bg-gray-200 rounded-lg pl-4"
                                        iconClassName="text-blue-500"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer area */}
                <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Your Company
                    </div>
                </div>
            </aside>
        </Drawer>
    );
};

export default AppSidebar;