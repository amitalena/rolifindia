import { useEffect, useState } from "react";
import menuLinks from "../../configs/menuLinks";
import navLinks from "../../configs/navLinks";
import MenuLink from "./MenuLink";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import StickyNavbar from "./StickyNavbar";

import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import MenuButton from "./MenuButton";
import FurnitureSvg from "../../svgs/FurnitureSvg";
import TileSvg from "../../svgs/TileSvg";
import LightSvg from "../../svgs/LightSvg";
import ServicesSvg from "../../svgs/ServicesSvg";

import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

// social media
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import IconButton from "../../components/buttons/IconButton";

const Navbar = () => {
  const [isStickyNavOpen, setIsStickyNavOpen] = useState(false);

  const productLinks = [
    {
      route: "/furniture",
      icon: <FurnitureSvg size="30px" />,
    },
    {
      route: "/tiles-and-sanitary-ware",
      icon: <TileSvg size="34px" />,
    },
    {
      route: "/electrics",
      icon: <LightSvg size="30px" />,
    },
    {
      route: "/services",
      icon: <ServicesSvg size="30px" />,
    },
  ].map((item) => ({
    ...(menuLinks.filter((product) => product.route === item.route)?.[0] || {}),
    icon: item?.icon,
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsStickyNavOpen(true);
      } else {
        setIsStickyNavOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount -
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="w-full flex flex-col z-50 shadow-sm justify-center items-center"
      >
        {/* layer1 */}
        <section className="w-full bg-[#000] text-main-size hidden md:flex py-2 px-4 lg:px-8 text-gray-50 gap-2 justify-between items-center">
          <div className="text-[12px] flex flex-col lg:flex-row  justify-start items-start lg:items-center gap-1.5">
            <div className="flex justify-start items-center gap-1.5">
              <FaLocationDot size="12px" />
              Plot no 15, Greater Noida W Rd, opp. gaurecity 2, Yusufpur, Nai Basti Dundahera, Ghaziabad, Uttar Pradesh 201009
            </div>
            <span className="hidden lg:block">|</span>
            <div className="flex justify-start items-center gap-x-1.5">
              <IoIosCall size={'14px'} />
              08062679687
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-2.5">
            <IconButton
              icon={<TiSocialFacebook size={18} />}
              route="https://www.facebook.com/rolifindia/"
              className="hover:bg-blue-700"
            />
            <IconButton
              icon={<FaLinkedinIn size={14} />}
              route={'https://www.linkedin.com/company/rolif-india-pvt-ltd/?originalSubdomain=in'}
              className="hover:bg-indigo-600"
            />
            <IconButton
              icon={<FaYoutube size={14} />}
              route={'https://www.youtube.com/channel/UCmGPRf6YCyhTsbxrjMQtBhg'}
              className="hover:bg-red-800"
            />
          </div>
        </section>
        {/* layer2 */}
        <section className="w-full bg-cover bg-bottom bg-no-repeat flex justify-between items-center py-3 px-8"
          style={{
            background: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/images/nav-bg.png')"
          }}
        >
          <div className="flex justify-center items-center gap-x-8">
            <img src="/logo.svg" alt="logo" className="w-26" />
          </div>

          <SearchBar />

          <div className="hidden lg:flex justify-center items-center gap-x-4">
            {navLinks.map((item, index) => (
              <NavLink key={index} {...item} />
            ))}
            <Link
              to={"/login"}
              className="h-auto w-auto flex justify-center items-center"
            >
              <button className="cursor-pointer hover:text-main-color">
                <FaUserCircle size={24} />
              </button>
            </Link>
          </div>

          <MenuButton />
        </section>

        {/* layer3 */}
        <section className="hidden md:flex justify-center border-t border-solid border-gray-200 py-2 px-8 bg-gray-50 !text-gray-900 w-full items-center gap-x-6 xl:gap-x-10">
          {productLinks.map((item, index) => (
            <MenuLink key={index} {...item} />
          ))}
        </section>
      </nav>

      {/* Pass the state to StickyNavbar if needed */}
      <StickyNavbar isOpen={isStickyNavOpen} productLinks={productLinks} />
    </>
  );
};

export default Navbar;
