import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users/buyers')
            .then(res => res.json())
            .then(data => {
                setAllBuyers(data);
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
                            allBuyers.map((buyer, i) =>
                                <tr
                                    key={buyer._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.role}</td>
                                    <td>
                                        <button className='btn btn-sm btn-error'>Delete buyer</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;