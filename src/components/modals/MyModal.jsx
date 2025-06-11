import { Dialog } from "@material-tailwind/react";
import { RxCross2 } from 'react-icons/rx';

const MyModal = ({
    isOpen = false,
    setIsOpen = () => { },
    children,
    className = "",
    size = "md",
    title = ""
}) => {
    const handleOpen = () => setIsOpen(false);

    return <>
        <Dialog
            open={isOpen}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            className={`rounded-sm ${className}`}
            size={size}
        >
            <div className="py-4 px-5 text-black">
                <div className="flex justify-between items-center">
                    <h2 className='font-semibold text-[18px]'>{title}</h2>
                    <button className="cursor-pointer hover:text-red-700 transition-all duration-300" onClick={handleOpen}>
                        <RxCross2 size={25} />
                    </button>
                </div>
                {children}
            </div>
        </Dialog>
    </>
}

export default MyModal;