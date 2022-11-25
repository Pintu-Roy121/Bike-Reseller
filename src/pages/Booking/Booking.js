import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Booking = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const { data: product = {}, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product/${id}`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(product);

    const { model, resale_price, img } = product;

    const handleBooking = (data) => {


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    navigate('/dashboard/myorders')
                    Swal.fire(
                        'Success!',
                        'Product booking Successful!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className='my-24 bg-slate-200 w-11/12 mx-auto p-20 rounded-xl'>
            <h1 className='text-4xl text-center font-bold'>Book Your Prduct</h1>
            <form onSubmit={handleSubmit(handleBooking)}>
                <div className='grid grid-cols-2 gap-5 font-semibold'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-bold">Seller Name:</span>
                        </label>
                        <input type="text"
                            defaultValue={user?.displayName}
                            {...register("name", {
                                required: 'name is Required'
                            })}
                            className="input input-bordered input-info w-full" readOnly />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-bold">Email:</span>
                        </label>
                        <input type="email"
                            defaultValue={user?.email}
                            {...register("email", {
                                required: 'Email is Required'
                            })}
                            className="input input-bordered input-info w-full" readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-bold">Product Name:</span>
                        </label>
                        <input type="text"
                            defaultValue={model}
                            {...register("product", {
                                required: 'product is Required'
                            })}
                            className="input input-bordered input-info w-full" readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-bold">Product Price:</span>
                        </label>
                        <input type="text"
                            defaultValue={resale_price}
                            {...register("price", {
                                required: 'price is Required'
                            })}
                            className="input input-bordered input-info w-full" readOnly />
                    </div>
                    <div className="form-control w-full hidden">
                        <label className="label">
                        </label>
                        <input type="text"
                            defaultValue={img}
                            {...register("img", {
                                required: 'price is Required'
                            })}
                            className="input input-bordered input-info w-full" readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-bold">Your Mobile No:</span>
                        </label>
                        <input type="text"
                            {...register("phone", {
                                required: 'phone is Required'
                            })}
                            placeholder="Place Your Phone Number"
                            className="input input-bordered input-info w-full" />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-bold">Meeting Location:</span>
                        </label>
                        <input type="text"
                            {...register("location", {
                                required: 'location is Required'
                            })}
                            placeholder="Place Your Phone Number"
                            className="input input-bordered input-info w-full" />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>
                </div>
                <input type="submit" value='submit' className='btn btn-info w-full my-5' />
            </form>
        </div >
    );
};

export default Booking;