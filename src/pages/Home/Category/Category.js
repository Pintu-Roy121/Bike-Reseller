import React from 'react';

const Category = ({ category }) => {
    const { brand, img } = category
    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-36" />
            </figure>

            <h2 className="text-center uppercase text-2xl font-black">{brand}</h2>
            <div className="card-body items-center text-center">
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Category;