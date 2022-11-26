import React from 'react';

const Advertise = ({ data }) => {
    const { img, brand_name, model } = data;
    return (
        <div className='w-1/2 mx-auto text-center my-32'>
            <h1 className='text-4xl font-bold underline'>Advertised Product</h1>
            <div className='flex flex-col justify-center my-4'>
                <h1 className='text-3xl font-bold '>Brand: <span className='text-orange-600'>{brand_name}</span></h1>
                <h1 className='text-3xl font-bold'>Model: <span className='text-orange-600'>{model}</span></h1>
            </div>
            <img className='max-w-fit rounded-lg object-cover' src={img} alt="" />
        </div>
    );
};

export default Advertise;