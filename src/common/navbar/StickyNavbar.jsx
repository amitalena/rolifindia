import { useMemo, useState } from "react";
import navLinks from "../../configs/navLinks";
import NavLink from "./NavLink";
import MenuButton from "./MenuButton";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuLink from "./MenuLink";
import SearchBar from "./SearchBar";

const StickyNavbar = ({
    isOpen = false,
    productLinks = [],
}) => {
    const isNavOpen = useMemo(() => (isOpen ? 'top-0' : "-top-[100%]"), [isOpen]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <>
        <header className={`fixed left-0 w-full transition-all duration-300 z-50 bg-white shadow-md h-auto ${isNavOpen}`}>
            <nav className={`relative bg-cover bg-bottom bg-no-repeat flex w-full justify-between py-3 px-8 items-center `}
                style={{
                    background: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/images/nav-bg.png')"
                }}
            >
                <div className="flex justify-start items-center gap-x-6 lg:gap-x-10">
                    <img src="/logo.svg" alt="logo" className="w-26" />
                    <button className="cursor-pointer outline-none hidden md:block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <RxHamburgerMenu size={24} />
                    </button>
                </div>
                <SearchBar />
                <div className="hidden lg:flex justify-center items-center gap-x-4">
                    {
                        navLinks.map((item, index) => (
                            <NavLink key={index} {...item} />
                        ))
                    }
                </div>
                <MenuButton />
                <section className={`hidden absolute top-full overflow-hidden left-0  md:flex justify-center border-t border-solid border-gray-200 px-8 transition-all duration-300 bg-gray-50 !text-gray-900 w-full items-center gap-x-6 xl:gap-x-10 ${isMenuOpen ? 'max-h-[300px] py-2 shadow-md' : 'max-h-0 py-0'}`}>
                    {productLinks.map((item, index) => (
                        <MenuLink key={index} {...item} />
                    ))}
                </section>
            </nav>
        </header>
    </>
}

export default StickyNavbar;