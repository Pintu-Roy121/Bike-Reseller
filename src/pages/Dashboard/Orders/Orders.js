import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Orders = ({ booked, refetch }) => {

    const { img, product, price, _id } = booked;

    const handleDelete = (id) => {
        const agree = window.confirm('Do you want to delete your order!!!')
        if (agree) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {

                        refetch()
                        Swal.fire(
                            'Deleted !',
                            'Delete Successful!',
                            'success'
                        )
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-52 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product}</h2>
                <p className='font-semibold'>Price:$ {price}</p>
                <div className="card-actions justify-between mt-4">
                    <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-error'>delete</button>
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