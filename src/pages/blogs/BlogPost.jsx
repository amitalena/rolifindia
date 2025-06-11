import { Title } from "react-head";
import { FaCalendarAlt, FaUser, FaShareAlt, FaBookmark, FaHeart, FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { useMemo, useState } from "react";
import allBlogs from "./allBlogs";
import { Link, useLocation } from "react-router-dom";
import filterBlogs from "./filterBlogs";

const BlogPost = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(42);
    const { pathname } = useLocation();

    const blogPost = useMemo(() => {
        const id = pathname.split('/')[2];
        return filterBlogs.filter((item) => item._id === id)[0];
    }, [pathname]);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <>
            <Title>{blogPost?.title || 'Blog Post - Rolif India'}</Title>
            <main className="w-full bg-gray-50">
                {/* Hero Banner */}
                <div className="relative w-full h-96 overflow-hidden">
                    <img
                        // src="https://www.grantandstone.co.uk/media/wysiwyg/lighting-banner.png"
                        src={blogPost?.image || ''}
                        alt="A flashlight illuminating a dark path"
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center px-4 max-w-4xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                                {/* Guiding the Way, One Beam at a Time */}
                                {blogPost?.title || '-'}
                            </h1>
                            <div className="flex justify-center items-center gap-6 text-white text-sm md:text-base">
                                <span className="flex items-center gap-2">
                                    <FaUser className="text-blue-100" />
                                    <span>By Admin</span>
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-blue-100" />
                                    {/* <span>June 15, 2023</span> */}
                                    <span>{blogPost?.date || ''}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <article className="flex-1">
                            {/* blogs post */}
                            <div
                                className="w-full"
                                dangerouslySetInnerHTML={{
                                    __html: blogPost?.blog || '-'
                                }}></div>

                            {/* Tags and Social Sharing */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <span className="text-sm font-medium text-gray-500">Tags:</span>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {['Flashlights', 'Outdoor Gear', 'Emergency Preparedness', 'Technology', 'Innovation'].map(tag => (
                                                <a
                                                    key={tag}
                                                    // href={`/tags/${tag.toLowerCase()}`}
                                                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition"
                                                >
                                                    {tag}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setIsBookmarked(!isBookmarked)}
                                            className="text-gray-500 hover:text-blue-600 transition"
                                            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
                                        >
                                            {isBookmarked ? <FaBookmark size={18} /> : <FaRegBookmark size={18} />}
                                        </button>
                                        <button
                                            onClick={handleLike}
                                            className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition"
                                            aria-label={isLiked ? "Unlike this article" : "Like this article"}
                                        >
                                            {isLiked ? <FaHeart size={18} className="text-red-500" /> : <FaRegHeart size={18} />}
                                            <span className="text-sm">{likeCount}</span>
                                        </button>
                                        <button
                                            className="text-gray-500 hover:text-blue-500 transition"
                                            aria-label="Share this article"
                                        >
                                            <FaShareAlt size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:w-72 flex-shrink-0">
                            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
                                <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-800">
                                    Related Posts
                                </h3>
                                <div className="space-y-4">
                                    {allBlogs.map((post, index) => (
                                        <Link
                                            key={index}
                                            to={`/blogpost/${post._id}`}
                                            className="block border-b border-gray-100 pb-4 hover:bg-gray-50 px-2 -mx-2 rounded transition"
                                        >
                                            <h4 className="font-medium text-gray-800 hover:text-blue-600 transition">
                                                {post.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
};

export default BlogPost;