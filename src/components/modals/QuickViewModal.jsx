import { RxCross2 } from "react-icons/rx";
import MyModal from "./MyModal";

const QuickViewModal = ({
    isOpen = false,
    setIsOpen = () => { },
    image = "",
    name = "",
}) => {
    return <>
        <MyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            className="py-1 px-2"
            size="lg"
        >
            <div className="w-full relative grid grid-cols-2 gap-x-4 justify-start items-start h-auto">
                <img src={image} alt="image" className="w-full h-full" />
                <div className="w-full flex flex-col justify-start items-start gap-y-2">
                    <h2 className="text-[22px] text-black font-medium">{name}</h2>
                    <p className="text-[15px] text-gray-800">The <b className="font-semibold">Della Bedside Table</b> is a chic and practical addition to your bedroom. Its modern design, clean lines, and premium construction offer a stylish and functional bedside companion. Crafted with attention to detail and quality materials, it provides a convenient surface for your essentials while enhancing your bedroom decor.</p>
                </div>
            </div>
        </MyModal>
    </>
}

export default QuickViewModal;