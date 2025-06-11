import { Button } from "@material-tailwind/react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const AppSideLink = ({
    icon,
    name = "",
    route = "",
}) => {
    const { pathname } = useLocation();
    const isActive = useMemo(() => (pathname === route), [pathname])

    return <>
        <Link
            className="w-auto h-auto"
            to={route}
        >
            <Button
                className={`w-full flex justify-start items-center capitalize cursor-pointer py-1.5 shadow-none hover:shadow-none  text-[16px] text-black px-2 rounded-md gap-x-3 font-medium transition-all duration-300 my-1 ${isActive ? 'bg-gray-300': 'bg-transparent hover:bg-gray-200'}`}
            >
                <span>{icon}</span>
                <span>{name}</span>
            </Button>
        </Link>
    </>
}

export default AppSideLink;