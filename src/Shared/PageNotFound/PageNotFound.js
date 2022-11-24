import React from 'react';
import img from '../../assets/404 page.png'

const PageNotFound = () => {
    return (
        <div data-theme="dark">
            <div className='w-96 max-h-screen mx-auto my-10'>
                <img src={img} alt="404 error" />
                <h1 className='text-4xl font-bold text-cyan-500'>PAGE NOT FOUND !!!!</h1>
            </div>
        </div>
    );
};

export default PageNotFound;