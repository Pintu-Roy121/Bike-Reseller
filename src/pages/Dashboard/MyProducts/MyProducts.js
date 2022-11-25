import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/allproducts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })

    }, [user.email])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
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

export default MyProducts;