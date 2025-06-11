import { Title } from "react-head";
import AdminViewer from "../../screens/AdminViewer";
import MyButton from "../../components/buttons/MyButton";
import { FaPlus } from "react-icons/fa6";
import DataTable from "react-data-table-component";
import columns from "./columns";
import { Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getAllBlogsRedux } from "../../redux/features/blogs";
import { Link } from "react-router-dom";

const AdminBlogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs);
    const allBlogs = useMemo(() => (blogs?.blogs || []), [blogs]);

    useEffect(() => {
        dispatch(getAllBlogsRedux());
    }, []);

    return <>
        <Title>All Blogs - Rolif India</Title>
        <AdminViewer
            title="Blogs"
        >
            <div className="w-full flex justify-between items-center gap-x-2">
                <div>
                    <Input label="Search" className="!text-black" />
                </div>
                <Link to={"/admin/add-blog"}>
                    <MyButton className="bg-blue-700 py-1.5 flex justify-center items-center gap-x-2">
                        <FaPlus size={16} />
                        <span>Add Blog</span>
                    </MyButton>
                </Link>
            </div>

            <div className="w-full my-3">
                <DataTable
                    data={allBlogs}
                    columns={columns}
                    customStyles={{
                        headCells: {
                            style: {
                                background: '#dbdbdb',
                                color: '#000',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }
                        },
                        table: {
                            style: {
                                borderRadius: '6px',
                                overflow: 'hidden',
                                border: '1px solid #dbdbdb'
                            }
                        }
                    }}
                    pagination
                />
            </div>
        </AdminViewer>
    </>
}

export default AdminBlogs;