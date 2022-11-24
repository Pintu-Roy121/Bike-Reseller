import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import AllProducts from "../../pages/AllProducts/AllProducts";
import Blog from "../../pages/Blog/Blog";
import Booking from "../../pages/Booking/Booking";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Signup from "../../pages/Login/Signup/Signup";
import PageNotFound from "../../Shared/PageNotFound/PageNotFound";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/allproducts/:id',
                element: <AllProducts></AllProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/booking/:id',
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])