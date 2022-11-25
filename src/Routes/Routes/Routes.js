import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import AllProduct from "../../pages/AllProduct/AllProduct";
import AllProducts from "../../pages/AllProducts/AllProducts";
import Blog from "../../pages/Blog/Blog";
import Booking from "../../pages/Booking/Booking";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../pages/Dashboard/Payment/Payment";
import Reported from "../../pages/Dashboard/Reported/Reported";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Signup from "../../pages/Login/Signup/Signup";
import PageNotFound from "../../Shared/PageNotFound/PageNotFound";
import AdminRutes from "../AdminRoutes/AdminRutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                path: '/products',
                element: <AllProduct></AllProduct>
            },
            {
                // path: '/allproducts/:id',
                path: '/allproducts/:brand',
                element: <AllProducts></AllProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
                path: '/booking/:id',
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRutes><AllSellers></AllSellers></AdminRutes>
            },
            // admin: roypintu121@gmail.compact pass: 123456
            {
                path: '/dashboard/allbuyers',
                element: <AdminRutes><AllBuyers></AllBuyers></AdminRutes>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/reported',
                element: <Reported></Reported>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/booked/payment/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])