import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
// import useBuyer from '../../hooks/useBuyer/useBuyer';
import useSeller from '../../hooks/useSeller/useSeller';
import useTitle from '../../hooks/useTitle/useTitle';
import DashboardAdvertise from '../../pages/Dashboard/DashboardAdvertise/DashboardAdvertise';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    useTitle('Dashboard');
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-green-100">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-green-200">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 gap-3 rounded-lg text-xl font-semibold ">
                        {
                            isAdmin || <li ><Link to='/dashboard/myorders' className='btn btn-success shadow-lg hover:bg-[#61E9A8] shadow-green-500'>My orders</Link></li>
                        }
                        {
                            isAdmin && <>
                                <li ><Link to='/dashboard/allsellers' className='btn btn-success shadow-lg hover:bg-[#61E9A8] shadow-green-500'>All Sellers</Link></li>
                                <li ><Link to='/dashboard/allbuyers' className='btn btn-success shadow-lg hover:bg-[#61E9A8] shadow-green-500'>All Buyers</Link></li>
                                <li ><Link to='/dashboard/reported' className='btn btn-success shadow-lg hover:bg-[#61E9A8] shadow-green-500'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li ><Link to='/dashboard/myproducts' className='btn btn-success shadow-lg hover:bg-[#61E9A8] shadow-green-500'>My Products</Link></li>
                                <li ><Link to='/dashboard/addproduct' className='btn btn-success shadow-lg hover:bg-[#61E9A8] shadow-green-500'>Add a Product</Link></li>
                            </>
                        }
                        <div className='w-full'>
                            <DashboardAdvertise></DashboardAdvertise>
                        </div>
                    </ul>

                </div>
            </div >
            <Footer></Footer>

        </div >
    );
};

export default DashboardLayout;