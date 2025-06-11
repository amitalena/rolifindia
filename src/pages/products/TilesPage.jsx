import { useMemo } from "react";
import useFilter from "./useFilter";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const TilesPage = () => {
    const { pathname } = useLocation();
    const filterData = useMemo(() => {
        return useFilter(pathname);
    }, [pathname]);

    return <>
        <main className="w-full">
            <img src="/images/tiles/Bed-Room-Wall.png" alt="image" className="w-full h-auto" />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-6 px-4 lg:px-8 py-5">
                {filterData.slice(0, 8).map((item, index) => (
                    <ProductCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
            <img src="/images/tiles/Living-Room-Wall.png" alt="image" className="w-full h-auto" />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-6 px-4 lg:px-8 py-5">
                {filterData.slice(8, 16).map((item, index) => (
                    <ProductCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
            <div className="flex justify-start items-start w-full px-4 gap-6 lg:px-8 py-5">
                <div className="w-auto hidden lg:block">
                    <img src="/images/tiles/Door-Floor.png" alt="image" className="w-full h-auto" />
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filterData.slice(16, 22).map((item, index) => (
                        <ProductCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 gap-6 lg:px-8 py-5">
                <img src="/images/tiles/Cabinets.png" alt="image" className="w-full" />
                <img src="/images/tiles/Cabinets1.png" alt="image" className="w-full" />
            </div>
            <div className="flex justify-start items-start w-full px-4 gap-6 lg:px-8 py-5">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filterData.slice(22, 28).map((item, index) => (
                        <ProductCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
                <div className="w-auto hidden lg:block">
                    <img src="/images/tiles/Out-Door-Wall.png" alt="image" className="w-full h-auto" />
                </div>
            </div>
        </main>
    </>
}

export default TilesPage;