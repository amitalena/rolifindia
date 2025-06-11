import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return <>
        <div className="hidden md:flex justify-center px-3 py-2 w-1/2 lg:w-[40%] rounded-full gap-x-2 bg-gray-200 items-center">
            <input
                type="text"
                placeholder="What are you looking for?"
                className="outline-none w-full placeholder:font-medium placeholder:text-gray-800 placeholder:text-[15px] px-1 font-normal"
            />
            <div className="flex justify-center hover:text-gray-700 transition-all duration-300 cursor-pointer items-center">
                <IoSearch size={20} />
            </div>
        </div>
    </>
}

export default SearchBar;