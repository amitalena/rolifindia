const CategoryCard = ({
    name = "",
    image = "",
}) => {
    return <>
        <div className="flex flex-col justify-center group gap-y-2 items-center cursor-pointer">
            <div className="w-full h-auto overflow-hidden">
                <img
                    src={image}
                    alt="image"
                    className="w-full h-auto group-hover:scale-110 transition-all duration-300"
                />
            </div>
            <h2 className="font-semibold text-[18px]">{name}</h2>
        </div>
    </>
}

export default CategoryCard;