import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthProvider';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const { user, Logout } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleLogout = () => {
        Logout()
            .then(() => {
                toast.success('Logout Successful')
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const menuItems = <>
        <li className='font-semibold'>
            <Link to='/'> Home</Link>
            <Link to='/products'> All Product</Link>
            <Link to='/blog'> Blog</Link>
            {
                user?.uid ?
                    <>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link>{user?.email}</Link>
                        <Link>{user?.displayName}</Link>
                        <Link onClick={handleLogout} to='/login'>LogOut</Link>
                    </>
                    :
                    <Link to='/login'>Login</Link>
            }
        </li>
    </>

    return (
        <div className='bg-base-100 w-full sticky top-0 z-50'>
            <div className="navbar w-11/12 flex justify-between mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className='text-2xl' />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className='w-16' src={logo} alt="" />
                    </Link>
                </div>
                {/* For large screen................. */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <FaBars className='text-2xl' />
                </label>
            </div>
        </div>
    );
};

export default Navbar;