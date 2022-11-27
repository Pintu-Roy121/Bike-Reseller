import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import useTitle from '../../../hooks/useTitle/useTitle';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useTitle('Myproducts-Dashboard')


    useEffect(() => {
        fetch(`http://localhost:5000/allproducts/${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })

    }, [user.email, refresh])

    if (loading) {
        return <Loading></Loading>
    }

    const handleDelete = (id) => {
        const agree = window.confirm('Are you sure Want to Delete? ')
        if (agree) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire(
                            'Deleted Successful!',
                            'Product Deleted Successfully!',
                            'success'
                        )
                        setRefresh(!refresh)
                    }
                })
        }
    }

    const handleAdvertise = (product) => {
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Advertise Successful!',
                        'Show Your Advertise on Home page!',
                        'success'
                    )
                } else {
                    Swal.fire(
                        `${data.message}`,
                        'Show Your Advertise on Home page!',
                        'success'
                    )
                }
                setRefresh(!refresh)
            })
    }

    return (
        <div className='my-5'>
            <div className="overflow-x-auto">
                <h1 className='text-2xl mb-5 underline font-bold text-center'>Total Products: {products.length}</h1>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Image</th>
                            <th>car model</th>
                            <th>seller_Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr
                                    key={product._id}
                                >
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-24 rounded-xl">
                                                <img className='object-contain' src={product.img} alt='/' />
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <span className='flex flex-col'>
                                            <span className='text-lg font-bold'>{product.model}</span>
                                            <span className='text-sm font-semibold'>{product.brand_name}</span>
                                        </span>
                                    </td>
                                    <td>{product.seller_name}</td>
                                    <td>{product.resale_price} $</td>
                                    <td>
                                        {
                                            product?.sold ?
                                                <span className='text-lg font-bold text-success flex items-center gap-2'>
                                                    <span>Sold</span>
                                                    <FaCheck />
                                                </span>
                                                :
                                                <span className='text-lg font-bold text-info'>Available</span>


                                        }
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-1'>
                                            {/* <button onClick={() => handleDelete(product._id)} className='border p-1'> <FaTrashAlt className='text-2xl' /> </button> */}
                                            <FaTrashAlt onClick={() => handleDelete(product._id)} className='text-2xl text-error cursor-pointer hover:text-red-500 duration-500' />
                                            {
                                                product?.sold ? '' :
                                                    <>
                                                        {
                                                            product?.advertise ? <span className='text-lg font-semibold text-success ml-2'>Advertising</span>
                                                                :
                                                                <Link onClick={() => handleAdvertise(product)}>
                                                                    <button className='btn btn-sm btn-info ml-2'>Advertise</button>
                                                                </Link>
                                                        }
                                                    </>
                                            }
                                        </div>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyProducts;