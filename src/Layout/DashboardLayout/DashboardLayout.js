import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import useBuyer from '../../hooks/useBuyer/useBuyer';
import useSeller from '../../hooks/useSeller/useSeller';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-100">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-slate-200">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 gap-3 rounded-lg text-xl font-semibold ">
                        {
                            isBuyer && <li ><Link to='/dashboard/myorders' className='btn btn-info btn-outline'>My orders</Link></li>
                        }
                        {
                            isAdmin && <>
                                <li ><Link to='/dashboard/allsellers' className='btn btn-info btn-outline border-info '>All Sellers</Link></li>
                                <li ><Link to='/dashboard/allbuyers' className='btn btn-info btn-outline border-info '>All Buyers</Link></li>
                                <li ><Link to='/dashboard/reported' className='btn btn-info btn-outline border-info '>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li ><Link to='/dashboard/myproducts' className='btn btn-info btn-outline border-info '>My Products</Link></li>
                                <li ><Link to='/dashboard/addproduct' className='btn btn-info btn-outline border-info '>Add a Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div >
            <Footer></Footer>

        </div >
    );
};

export default DashboardLayout;