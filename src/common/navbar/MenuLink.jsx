import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const MenuLink = ({ name = '', subMenu = [], route = "", icon }) => {
  return (
    <Menu animate={{ mount: { y: 0 }, unmount: { y: 25 } }} allowHover>
      <MenuHandler>
        <Link to={`${route}`} className="w-auto !outline-none h-auto">
          <div className="flex justify-center !outline-none items-center text-main-size gap-x-2 cursor-pointer">
            <div className="flex justify-start items-center text-gray-900 font-semibold gap-x-2">
              {icon}
              <p>{name}</p>
            </div>
            <IoIosArrowDown size={16} />
          </div>
        </Link>
      </MenuHandler>

      <MenuList className="!outline-none border-none shadow-lg p-1 rounded-md w-[240px] z-50">
        {subMenu.map((item, index) =>
          item?.subMenu?.length > 0 ? (
            <Menu key={index} placement="right-start" allowHover offset={10}>
              <MenuHandler>
                <MenuItem className="p-0 w-full !outline-none">
                  <Link to={`${item.route}`} className="w-auto !outline-none h-auto">
                    <div className="w-full flex justify-between items-center py-2 px-3 text-gray-900 font-medium rounded-lg hover:bg-main-color hover:text-white">
                      <p>{item.name}</p>
                      <IoIosArrowDown size={16} className="-rotate-90" />
                    </div>
                  </Link>
                </MenuItem>
              </MenuHandler>

              <MenuList className="shadow-lg rounded-md border-none !outline-none z-[9999] w-[240px] p-1">
                {item.subMenu.map((subItem, subIndex) =>
                  subItem?.subMenu?.length > 0 ? (
                    <Menu key={subIndex} placement="right-start" allowHover offset={10}>
                      <MenuHandler>
                        <MenuItem className="p-0 w-full !outline-none">
                          <div className="w-full flex justify-between items-center py-2 px-3 text-gray-900 font-medium rounded-lg hover:bg-main-color hover:text-white">
                            <p>{subItem.name}</p>
                            <IoIosArrowDown size={16} className="-rotate-90" />
                          </div>
                        </MenuItem>
                      </MenuHandler>

                      <MenuList className="shadow-lg rounded-md border-none !outline-none z-[9999] w-[240px] p-1">
                        {subItem.subMenu.map((thirdItem, thirdIndex) => (
                          <MenuItem key={thirdIndex} className="p-0 !outline-none">
                            <Link
                              to={thirdItem.route}
                              className="w-full flex justify-start !outline-none items-center py-2 px-3 rounded-lg text-sm text-gray-900 font-medium hover:bg-main-color hover:text-white"
                            >
                              {thirdItem.name}
                            </Link>
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <MenuItem key={subIndex} className="p-0 !outline-none">
                      <Link
                        to={subItem.route}
                        className="w-full flex justify-start !outline-none items-center text-gray-900 font-medium py-2 px-3 rounded-lg text-sm hover:bg-main-color hover:text-white"
                      >
                        {subItem.name}
                      </Link>
                    </MenuItem>
                  )
                )}
              </MenuList>
            </Menu>
          ) : (
            <MenuItem key={index} className="p-0 w-full !outline-none">
              <Link
                to={item.route}
                className="w-full flex justify-start items-center !outline-none text-gray-900 font-semibold py-2 px-3 rounded-lg hover:bg-main-color hover:text-white"
              >
                {item.name}
              </Link>
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default MenuLink;
