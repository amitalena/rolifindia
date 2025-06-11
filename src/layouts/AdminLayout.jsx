import { Outlet } from "react-router-dom";
import Sidebar from "../common/sidebar/Sidebar";
import useCollapse from "../hooks/useCollapse";

const AdminLayout = () => {
    const { collapse } = useCollapse();
    return <>
        <main className="w-full flex justify-start items-start">
            <Sidebar />
            <section className={`w-full ${collapse ? "w-[92%] lg:-[95%]": "w-full md:w-[80%]"} p-3`}>
                <Outlet />
            </section>
        </main>
    </>
}

export default AdminLayout;