import { RxHamburgerMenu } from "react-icons/rx";
import { setAction } from "../../redux/features/action";
import { useDispatch } from "react-redux";

const MenuButton = () => {
    const dispatch = useDispatch();
    return <>
        <button
            className="flex lg:hidden justify-center items-center cursor-pointer"
            onClick={() => dispatch(setAction({ appSidebar: true }))}
        >
            <RxHamburgerMenu size={24} />
        </button>
    </>
}

export default MenuButton;