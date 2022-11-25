import React, { useEffect, useState } from 'react';
import { FcCancel } from "react-icons/fc";

const Reported = () => {
    const [reported, setReported] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setReported(data);
            })
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <h1 className='text-2xl mb-5 underline font-bold text-center'>Toal Repordtd Items: {reported.length}</h1>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Image</th>
                            <th>car model</th>
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
                                        <FcCancel className='text-3xl font-bold' />
                                    </th>
                                    <td>{product.name}</td>
                                    <td>{product.seller_name}</td>
                                    <td>{product.resale_price} $</td>
                                    <td>
                                        <button className='btn btn-sm btn-error'>Delete Product</button>
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