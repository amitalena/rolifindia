import { Title } from "react-head";
import allBlogs from "./allBlogs";
import BlogCard from "../../components/cards/BlogCard";

const Blogs = () => {
    return <>
        <Title>Blogs</Title>
        <main className="w-full">
            <img src="/banners/Our-blogs.png" alt="banner image" className="w-full h-auto" />
            <div className="w-full grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6 bg-gray-100 px-4 md:px-8 py-5">
                {
                    allBlogs.map((item, index) => (
                        <BlogCard key={index} {...item} />
                    ))
                }
            </div>
        </main>
    </>
}

export default Blogs;