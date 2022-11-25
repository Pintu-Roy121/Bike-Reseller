import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/users/buyers')
            .then(res => res.json())
            .then(data => {
                setAllBuyers(data);
            })
    }, [refresh]);

    const handleDelete = (id) => {
        const agree = window.confirm("Deleted Item cann 't resore Are you sure want to delete?");
        if (agree) {
            fetch(`http://localhost:5000/buyers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Buyer deleted successfull')
                        setRefresh(!refresh);
                    }
                })

        }
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <h1 className='text-2xl mb-5 underline font-bold text-center'>Toal Buyers: {allBuyers.length}</h1>
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
                                        <button onClick={() => handleDelete(buyer._id)} className='btn btn-sm btn-error'>Delete buyer</button>
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