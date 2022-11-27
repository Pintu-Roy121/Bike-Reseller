import React, { useEffect, useState } from 'react';
import { FcCancel } from "react-icons/fc";

const Reported = () => {
    const [reported, setReported] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reported/products', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReported(data);
            })
    }, [])

    const handleDelete = (id) => {
        console.log(id);
    }

    const handleReport = (id) => {
        console.log(id);
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <h1 className='text-2xl mb-5 underline font-bold text-center'>Toal Repordtd Items: {reported.length}</h1>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Bike Model</th>
                            <th>seller_Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reported.map((product, i) =>
                                <tr
                                    key={product._id}
                                >
                                    <th>{i + 1}</th>
                                    <th className='flex justify-center items-center gap-5'>
                                        <div className="avatar">
                                            <div className="w-24 rounded-xl">
                                                <img src={product.img} alt='/' />
                                            </div>
                                        </div>
                                        <FcCancel className='text-4xl font-bold' />

                                    </th>
                                    <td className='text-lg font-bold text-red-600'>Reported</td>
                                    <td className='text-lg font-bold '>{product.model}</td>
                                    <td>{product.seller_name}</td>
                                    <td>{product.resale_price} $</td>
                                    <td >
                                        <div className='flex flex-col gap-3'>
                                            <button onClick={() => handleDelete(product._id)} className='btn btn-sm btn-error'>Delete Product</button>
                                            <button onClick={() => handleReport(product._id)} className='btn btn-sm btn-success'>Cancle Report</button>
                                        </div>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reported;