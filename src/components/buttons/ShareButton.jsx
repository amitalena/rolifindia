import { FaShareAlt, FaFacebook, FaTwitter, FaLinkedin, FaLink, FaWhatsapp } from "react-icons/fa";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";

const ShareButton = () => {
    return (
        <Menu placement="left-end">
            <MenuHandler>
                <button className="bg-white cursor-pointer border flex justify-center items-center gap-2 border-gray-300 hover:bg-gray-100 text-gray-800 py-2 px-3 rounded-md">
                    <FaShareAlt /> <span className='md:hidden'>Share</span>
                </button>
            </MenuHandler>
            <MenuList className="p-2 min-w-[200px]">
                <MenuItem className="flex items-center gap-3">
                    <FaFacebook className="text-blue-600 text-lg" />
                    <span>Facebook</span>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                    <FaTwitter className="text-blue-400 text-lg" />
                    <span>Twitter</span>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                    <FaLinkedin className="text-blue-700 text-lg" />
                    <span>LinkedIn</span>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                    <FaWhatsapp className="text-green-500 text-lg" />
                    <span>WhatsApp</span>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                    <FaLink className="text-gray-500 text-lg" />
                    <span>Copy Link</span>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ShareButton;