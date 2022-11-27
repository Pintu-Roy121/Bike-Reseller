
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FcApproval } from "react-icons/fc";

const AllSellers = () => {
    const { data: allsellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    const handleVerify = (id) => {
        fetch(`http://localhost:5000/sellers/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('seller verified');
                    refetch();
                }
            })
    }

    const handleDelete = (id) => {
        const agree = window.confirm("Deleted Item cann 't resore");
        if (agree) {
            fetch(`http://localhost:5000/sellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('seller deleted successfull')
                        refetch();
                    }
                })

        }
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <h1 className='text-2xl mb-5 underline font-bold text-center'>Toal Sellers: {allsellers.length}</h1>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Name</th>
                            <th>Status</th>
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
                                    <td>
                                        <span className='font-bold flex items-center gap-2'>
                                            {seller.name}
                                            {
                                                seller?.verify && <FcApproval />
                                            }
                                        </span>
                                    </td>
                                    <td>
                                        {
                                            seller?.verify && <span className='font-black text-success'>Verified</span>
                                        }
                                    </td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>
                                        <div className='flex flex-col gap-2'>
                                            <button onClick={() => handleDelete(seller._id)} className='w-32 hover:bg-[#f35252] btn btn-sm btn-error shadow-lg shadow-error mr-2'>Delete</button>
                                            {
                                                seller?.verify ?
                                                    <>
                                                    </>
                                                    :
                                                    <button onClick={() => handleVerify(seller._id)} className='w-32 hover:bg-[#39e092] btn btn-sm btn-success shadow-lg shadow-green-500'>verify</button>
                                            }
                                        </div>
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