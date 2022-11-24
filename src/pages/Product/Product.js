import React from 'react';

const Product = ({ product }) => {
    const { name, img } = product
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-72 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;