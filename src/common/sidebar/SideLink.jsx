import { Button } from "@material-tailwind/react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import useCollapse from "../../hooks/useCollapse";
import { Tooltip } from "antd";

const SideLink = ({
    name = "",
    route = "",
    icon,
}) => {
    const { pathname } = useLocation();
    const { collapse } = useCollapse();

    const isActive = useMemo(() => (pathname.startsWith(route)), [pathname])

    return <>
        <Tooltip title={collapse ? name : null} placement="rightBottom">
            <Link to={route} className="w-full h-auto">
                <Button className={`flex w-full justify-start normal-case gap-x-2 cursor-pointer font-medium shadow-none hover:shadow-none text-[16px] transition-all duration-200 rounded-md py-1.5 px-2 items-center ${isActive ? "bg-gray-900 text-white" : "text-black hover:bg-gray-400 bg-transparent"}`}>
                    {icon}
                    {
                        !collapse ?
                            <span>{name}</span> : null
                    }
                </Button>
            </Link>
        </Tooltip>
    </>
}

export default SideLink;