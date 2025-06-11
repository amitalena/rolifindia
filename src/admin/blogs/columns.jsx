import MyButton from "../../components/buttons/MyButton";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

const columns = [
    {
        name: 'Title',
        selector: row => row?.title || '-',
        wrap: true,
        sortable: true,
    },
    {
        name: 'Image',
        cell: () => <h2>image</h2>,
    },
    {
        name: 'Date',
        sortable: true,
        selector: row => row?.date || '-',
    },
    {
        name: 'Action',
        cell: () => (
            <div className="flex justify-center items-center gap-x-2">
                <MyButton className="bg-blue-700 px-2" title="Edit" placement="left">
                    <AiOutlineEdit size={20} />
                </MyButton>
                <MyButton className="bg-red-700 px-2" title="Delete" placement="right">
                    <MdDeleteOutline size={20} />
                </MyButton>
            </div>
        )
    }
]

export default columns;