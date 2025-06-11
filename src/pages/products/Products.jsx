import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import furnitures from "../../configs/furnitures";
import tilesAndSanitary from "../../configs/tiles-and-sanitary";
import electrics from "../../configs/electrics";
import useFilter from "./useFilter";

const Products = () => {
  const { pathname } = useLocation();
  const category = useMemo(() => pathname.split("/")?.[3] || null, [pathname]);

  const filterData = useMemo(() => {
    return useFilter(pathname);
  }, [pathname]);

  return (
    <>
      <main className="w-full px-8 py-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-6">
          {filterData.map((item, index) => (
            <ProductCard
              key={index}
              {...item}
              // title={"Adonis Coffee Table"}
              // image="https://homecityonline.com/wp-content/smush-webp/2023/09/IMG_5917-ambi-copy-450x450.jpg.webp"
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Products;
