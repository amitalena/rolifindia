// src/router.js
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AdminLayout from "../layouts/AdminLayout";

// lazy-loaded components
const Home = lazy(() => import("../pages/home/Home"));
const AboutUs = lazy(() => import("../pages/about/AboutUs"));
const Login = lazy(() => import("../pages/validations/Login"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const ContactUs = lazy(() => import("../pages/contact/ContactUs"));

// product
const Products = lazy(() => import("../pages/products/Products"));
const FurniturePage = lazy(() => import("../pages/products/FurniturePage"));
const TilesPage = lazy(() => import("../pages/products/TilesPage"));
const ElectricsPage = lazy(() => import("../pages/products/ElectricsPage"));
const ProductDetails = lazy(() => import("../pages/products/ProductDetails"));
const ProductDetailsPage = lazy(() => import("../pages/products/ProductDetailsPage"));

// blogs
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const BlogPost = lazy(() => import("../pages/blogs/BlogPost"));

// admin panel
const Dashboard = lazy(() => import("../admin/dashboard/Dashboard"));
const AdminProducts = lazy(() => import("../admin/products/AdminProducts"));
const AdminBlogs = lazy(() => import("../admin/blogs/AdminBlogs"));
const AddBlog = lazy(() => import("../admin/blogs/AddBlog"));
const AdminSettings = lazy(() => import("../admin/settings/AdminSettings"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },

      // Product category routes
      {
        path: "furniture",
        element: <FurniturePage />,
      },
      {
        path: "tiles-and-sanitary-ware",
        element: <TilesPage />,
      },
      {
        path: "electrics",
        element: <ElectricsPage />,
      },
      {
        path: "furniture/*",
        element: <Products />,
      },
      {
        path: "tiles-and-sanitary-ware/*",
        element: <Products />,
      },
      {
        path: "electrics/*",
        element: <Products />,
      },
      {
        path: "services/*",
        // element: <Products />,
        element: <h2 className="text-2xl my-4 text-center w-full">Coming Soon...!</h2>
      },

      // Product details routes
      {
        path: "furniture-details/:id",
        // element: <ProductDetails />,
        element: <ProductDetailsPage />,
      },
      {
        path: "tiles-and-sanitary-ware-details/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "sanitary-ware-details/:id", // Added alternative route
        element: <ProductDetailsPage />,
      },
      {
        path: "tiles-details/:id", // Added alternative route
        element: <ProductDetailsPage />,
      },
      {
        path: "electrics-details/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "services-details/:id",
        element: <ProductDetailsPage />,
      },

      // Blog routes
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogpost/:slug", // Changed to use slug parameter
        element: <BlogPost />,
      },

      // Other pages
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },

  // Auth routes
  {
    path: "/login",
    element: <Login />,
  },

  // Admin routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "blogs",
        element: <AdminBlogs />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
      {
        path: "*",
        element: <h2>Admin 404 page!</h2>,
      },
    ],
  },

  // 404 catch-all
  {
    path: "*",
    element: <h2>404 page!</h2>,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
