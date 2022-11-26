import React from 'react';

const Advertise = ({ data }) => {
    const { img } = data;
    return (
        <div className='my-32 mx-10 text-center'>
            <h1 className='text-4xl font-bold underline my-10'>Advertised Product</h1>
            <h1 className='text-3xl font-bold text-red-700 underline my-10'>Offer! Offer! Offer!</h1>
            <img className='w-full rounded-lg object-cover' src={img} alt="" />
        </div>
    );
};

export default Advertise;