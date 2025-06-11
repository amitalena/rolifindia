import MyModal from './MyModal';
import { IoCallOutline } from "react-icons/io5";

const NumberModal = ({
    isOpen = false,
    setIsOpen = () => { }
}) => {
    return <>
        <MyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            size='xs'
            title = "Contact Information"
        >
            <div className='flex flex-col mt-3 justify-start items-start gap-2'>
                <div className='flex font-medium justify-start items-center gap-x-2'>
                    <IoCallOutline size={18} />
                    <h3>07942690172</h3>
                </div>
            </div>
        </MyModal>
    </>
}

export default NumberModal;