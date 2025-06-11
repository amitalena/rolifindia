import { RxHamburgerMenu } from "react-icons/rx";
import SideLink from "./SideLink";

// icons
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandBlogger } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

import { Button } from "@material-tailwind/react";
import TouchableOpacity from "../../components/buttons/TouchableOpacity";

// hooks
import useCollapse from "../../hooks/useCollapse";
import { Tooltip } from "antd";

const Sidebar = () => {
    const { collapse, setCollapse } = useCollapse();

    const sidebarLinks = [
        { name: 'Dashboard', route: '/admin/dashboard', icon: <LuLayoutDashboard size={18} /> },
        { name: 'Blogs', route: '/admin/blogs', icon: <TbBrandBlogger size={18} /> },
        { name: 'Products', route: '/admin/products', icon: <AiOutlineProduct size={19} /> },
        { name: 'Settings', route: '/admin/settings', icon: <IoSettingsOutline size={18} /> },
    ];

    return <>
        <aside className={`transition-all duration-300 ${collapse ? "w-[8%] xl:w-[5%] items-center" : "w-[20%] items-start"} h-screen bg-gray-200 p-4 hidden md:flex flex-col justify-start gap-y-4 sticky top-0 left-0`}
            style={{
                // background: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('/images/footer-bg.jpg')"
            }}
        >
            <div className={`flex ${collapse ? "justify-center" : "justify-between"} w-full items-center`}>
                {
                    !collapse ?
                        <img src="/logo.svg" alt="logo" className="w-16" /> : null
                }
                <TouchableOpacity onClick={() => setCollapse(!collapse)}>
                    <RxHamburgerMenu size={22} />
                </TouchableOpacity>
            </div>
            <div className="flex flex-col w-full gap-y-2 justify-start items-start">
                {
                    sidebarLinks.map((item, index) => (
                        <SideLink key={index} {...item} />
                    ))
                }
                <Tooltip title={collapse ? "Logout" : null} placement="rightBottom">
                    <Button className={`flex w-full justify-start normal-case gap-x-2 cursor-pointer font-medium shadow-none hover:shadow-none text-[16px] transition-all duration-200 rounded-md py-1.5 px-2.5 items-center text-white bg-red-700`}>
                        <LuLogOut size={17} />
                        {
                            !collapse ?
                                <span>Logout</span> : null
                        }
                    </Button>
                </Tooltip>
            </div>
        </aside>
    </>
}

export default Sidebar;