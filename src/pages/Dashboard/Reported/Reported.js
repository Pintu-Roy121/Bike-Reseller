import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FcCancel } from "react-icons/fc";
import Swal from 'sweetalert2';

const Reported = () => {
    const [reported, setReported] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        // fetch('http://localhost:5000/reported/products', {
        //     headers: {
        //         authorization: `bearer ${localStorage.getItem('accessToken')}`
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         setReported(data);
        //     })

        axios.get('http://localhost:5000/reported/products', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(data => {
                setReported(data.data)
            })

    }, [refresh])

    const handleDelete = (id) => {
        console.log(id);
    }

    const handleReport = (id) => {
        fetch(`http://localhost:5000/reported/product/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire(
                        'Report Cancel!!',
                        'Cancel Successful!',
                        'success'
                    )
                    setRefresh(!refresh)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <h1 className='text-2xl mt-5 underline font-bold text-center'>Toal Reported Items: {reported.length}</h1>
                <table className="table w-full my-12">
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
                    <tbody className='bg-green-200'>
                        {
                            reported.map((product, i) => {
                                return (
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
                                                <button onClick={() => handleDelete(product._id)} className='w-32 hover:bg-[#f35252] btn btn-sm btn-error shadow-lg shadow-error mr-2'>Delete</button>
                                                <button onClick={() => handleReport(product._id)} className='w-32 hover:bg-[#39e092] btn btn-sm btn-success shadow-lg shadow-green-500'>Cancle Report</button>
                                            </div>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reported;