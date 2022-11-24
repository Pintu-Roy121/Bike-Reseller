import React from 'react';
import banner from '../../../assets/Banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen mb-8" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-11/12">
                    <h1 className="mb-5 text-5xl lg:text-6xl w-full font-bold text-white">Welcome To Bike Re-seller World</h1>
                    <p className='md:w-3/4 lg:w-1/2 mx-auto'>A motorcycles are rated highly in consumer-based reports regarding reliability. They are also one of the more affordable bikes to own and maintain. Owner maintenance is a crucial factor in determining a bike's reliability and longevity.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;