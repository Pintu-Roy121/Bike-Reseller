import React from 'react';
import { FcApproval } from "react-icons/fc";

const Product = ({ product, setSelectedProduct }) => {

    const { model, img, location, seller_name, resale_price, original_price, yearsof_use, user_verify } = product;


    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-72 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{model}</h2>
                    {
                        user_verify ?
                            <span className='flex items-center gap-2'>
                                <h2 className='text-xl font-bold'>{seller_name}</h2>
                                <FcApproval className='text-xl font-bold' />
                            </span>
                            :
                            <h2 className='text-xl font-bold'>{seller_name}</h2>
                    }
                    <div className='flex justify-between text-lg font-semibold'>
                        <div>
                            <p>Location: {location}</p>
                            <p>Used: {yearsof_use} years</p>
                        </div>
                        <div className='text-right'>
                            <p>Price:$ {resale_price}</p>
                            <p>Original Price:$ {original_price}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary btn-sm">Booking</button>
                        </Link> */}

                        <label onClick={() => setSelectedProduct(product)} htmlFor="booking-modal" className="btn btn-primary btn-sm">booking</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;