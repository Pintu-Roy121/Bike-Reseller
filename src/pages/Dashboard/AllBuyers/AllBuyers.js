import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle/useTitle';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useTitle('Buyers-Dashboard')

    useEffect(() => {
        fetch('https://bike-resell-shop-server.vercel.app/users/buyers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAllBuyers(data);
            })
    }, [refresh]);

    const handleDelete = (id) => {
        const agree = window.confirm("Deleted Item cann 't resore Are you sure want to delete?");
        if (agree) {
            fetch(`https://bike-resell-shop-server.vercel.app/buyers/${id}`, {
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
                                        <button onClick={() => handleDelete(buyer._id)} className='w-32 hover:bg-[#f35252] btn btn-sm btn-error shadow-md shadow-error mr-2'>Delete buyer</button>
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