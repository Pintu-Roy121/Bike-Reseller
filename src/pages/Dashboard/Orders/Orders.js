import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ booked }) => {

    const { img, product, price, _id } = booked;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-52 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product}</h2>
                <p className='font-semibold'>Price:$ {price}</p>
                <div className="card-actions justify-end">
                    {
                        booked?.price && !booked?.paid &&
                        <Link to={`/dashboard/payment/${_id}`}>
                            <button className='btn btn-sm btn-info px-7'>pay</button>
                        </Link>
                    }
                    {
                        booked?.price && booked?.paid &&
                        <span className='text-lg font-bold text-success'>Paid</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;