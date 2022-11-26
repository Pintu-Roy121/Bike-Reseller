import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(false)


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
                }
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
                                    <td>{product.model}</td>
                                    <td>{product.seller_name}</td>
                                    <td>{product.resale_price} $</td>
                                    <td>
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-sm btn-error'>Delete</button>
                                        <Link onClick={() => handleAdvertise(product)}>
                                            <button className='btn btn-sm btn-info ml-2'>Advertise</button>
                                        </Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;