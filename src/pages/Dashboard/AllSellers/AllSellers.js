
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FcApproval } from "react-icons/fc";

const AllSellers = () => {
    // const [allsellers, setAllSellers] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/users/sellers')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllSellers(data);
    //         })
    // }, [])

    const { data: allsellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers');
            const data = await res.json();
            return data;
        }
    })


    const handleVerify = (id) => {
        fetch(`http://localhost:5000/sellers/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('seller verified')
                }
            })
    }


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
                                    <td className='font-bold flex items-center gap-2'>
                                        {seller.name}
                                        {
                                            seller?.verify && <FcApproval />
                                        }
                                    </td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>
                                        <button className='btn btn-sm btn-error mr-2'>Delete seller</button>
                                        {
                                            seller?.verify ||
                                            <button onClick={() => handleVerify(seller._id)} className='btn btn-sm btn-info'>verify user</button>
                                        }
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