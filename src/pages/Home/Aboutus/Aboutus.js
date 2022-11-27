import React from 'react';
import { FaShopify, FaCogs, FaTools } from "react-icons/fa";
import backgroundImage from '../../../assets/Banner.jpg';

const Aboutus = () => {
    return (
        <div className='bg-slate-500 bg-cover bg-fixed' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='bg-gray-300 py-10 bg-opacity-0'>
                <div className='w-11/12 mx-auto my-16 text-center'>
                    <div className='text-white'>
                        <h1 className='text-5xl font-bold underline mb-5'>About us</h1>
                        <p className='md:w-3/4 lg:w-1/2 mx-auto font-semibold'>Locate the nearest bike showrooms in your locality. We help you to find the address and phone numbers of showrooms of all major bike companies in India.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                        <div className='text-center bg-slate-100 rounded-lg py-6 shadow-lg p-4'>
                            <div className='text-8xl w-full font-bold mb-5'>
                                <FaShopify className='mx-auto' />
                            </div>
                            <h1 className='text-xl font-bold my-5'>Simple</h1>
                            <p className='font-semibold'>Create your online store with the market leader. Our platform is exclusively designed to serve local bike shops.</p>
                        </div>
                        <div className='text-center bg-slate-100 rounded-lg py-6 shadow-lg p-4'>
                            <div className='text-8xl w-full font-bold mb-5'>
                                <FaCogs className='mx-auto' />
                            </div>
                            <h1 className='text-xl font-bold my-5'>Integrated</h1>
                            <p className='font-semibold'>Get online fast and reduce maintenance. Connect your POS and suppliers to automatically build your online store.</p>
                        </div>
                        <div className='text-center bg-slate-100 rounded-lg py-6 shadow-lg p-4'>
                            <div className='text-8xl w-full font-bold mb-5'>
                                <FaTools className='mx-auto' />
                            </div>
                            <h1 className='text-xl font-bold my-5'>Effective</h1>
                            <p className='font-semibold'>Transform your site into a content-rich, interactive, marketing vehicle that makes shopping with your business intuitive.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;