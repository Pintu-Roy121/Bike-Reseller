import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    const [allsellers, setAllSellers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users/sellers')
            .then(res => res.json())
            .then(data => {
                setAllSellers(data);
            })
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allsellers.map((seller, i) =>
                                <tr
                                    key={seller._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>
                                        <button className='btn btn-sm btn-error'>Delete seller</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;