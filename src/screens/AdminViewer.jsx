import MyButton from "../components/buttons/MyButton";
import { FaArrowLeft } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import TouchableOpacity from "../components/buttons/TouchableOpacity";

const AdminViewer = ({
    title = "",
    children,
    backview = false,
}) => {
    return <>
        <main className="w-full h-auto">
            <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-x-3">
                    {
                        backview ?
                            <MyButton title="Back" className="px-3 py-1.5" onClick={() => window.history.back()}>
                                <FaArrowLeft size={15} />
                            </MyButton> : null
                    }
                    <h2 className="font-medium text-[20px]">{title}</h2>
                </div>
                <TouchableOpacity className="block md:hidden">
                    <RxHamburgerMenu size={22} />
                </TouchableOpacity>
            </div>
            <div className="w-full my-2">
                {children}
            </div>
        </main>
    </>
}

export default AdminViewer;