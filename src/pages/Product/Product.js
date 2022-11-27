import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcApproval } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import useBuyer from '../../hooks/useBuyer/useBuyer';

const Product = ({ product, setSelectedProduct }) => {
    // const [isBuyer] = useBuyer(user?.email)
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email)

    const { _id, date, model, img, location, seller_name, resale_price, original_price, yearsof_use, user_verify } = product;


    const handleReport = (id) => {

        fetch(`http://localhost:5000/reported/products/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.error('Product Report Successful !!!')
                }
            })

    }


    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-72 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{model}</h2>
                    {
                        user_verify ?
                            <span className='flex flex-col'>
                                <div className='flex items-center gap-1'>
                                    <h2 className='text-xl font-bold'>{seller_name}</h2>
                                    <FcApproval className='text-2xl font-bold' />
                                </div>
                                <p className='text-sm text-info font-bold'>Date:{date}</p>
                            </span>
                            :
                            <div className='flex flex-col'>
                                <h2 className='text-xl font-bold'>{seller_name}</h2>
                                <p className='text-sm text-info font-bold'>Date:{date}</p>
                            </div>
                    }
                    <div className='flex justify-between text-lg font-semibold'>
                        <div>
                            <p className='text-base'>Location: {location}</p>
                            <p className='text-base'>Used: {yearsof_use} years</p>
                        </div>
                        <div className='text-right'>
                            <p className='text-base'>Price:$ <span className='text-info text-lg font-bold'>$ {resale_price}</span></p>
                            <p className='text-base'>Original Price:<span className='text-error font-bold line-through decoration-2'>$ {original_price}</span></p>
                        </div>
                    </div>
                    <div className={`card-actions mt-4 justify-end ${user && 'justify-between items-center'}`}>

                        <div className='flex gap-2'>
                            {
                                !isAdmin ?
                                    isBuyer && <button onClick={() => handleReport(_id)} className='btn btn-sm btn-outline btn-error'>Report</button>
                                    :
                                    <button onClick={() => handleReport(_id)} className='btn btn-sm btn-error'>Delete</button>
                            }
                        </div>
                        <label onClick={() => setSelectedProduct(product)} htmlFor="booking-modal" className="btn btn-primary btn-sm">book now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;