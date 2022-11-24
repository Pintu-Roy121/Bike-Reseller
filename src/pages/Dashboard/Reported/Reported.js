import React, { useEffect, useState } from 'react';

const Reported = () => {
    const [reported, setReported] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setReported(data);
            })
    }, [])
    console.log(reported);
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
                            reported.map((product, i) =>
                                <tr
                                    key={product._id}
                                >
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-24 rounded-xl">
                                                <img src={product.img} alt='/' />
                                            </div>
                                        </div>
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