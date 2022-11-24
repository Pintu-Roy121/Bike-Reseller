import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Booking = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const { data: product = {} } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product/${id}`);
            const data = await res.json();
            return data;
        }
    })

    const { name, resale_price } = product;

    const handleBooking = (data) => {
        console.log(data);
        toast.success('Booked confirmed')
        reset();
    }

    return (
        <div className='my-24 bg-slate-200 w-11/12 mx-auto p-20 rounded-xl'>
            <h1 className='text-4xl text-center font-bold'>Sign in to your Account</h1>
            <form onSubmit={handleSubmit(handleBooking)}>
                <div className='grid grid-cols-2 gap-5 font-semibold'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Seller Name:</span>
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
                            <span className="label-text text-base font-semibold">Email:</span>
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
                            <span className="label-text text-base font-semibold">Product Name:</span>
                        </label>
                        <input type="text"
                            defaultValue={name}
                            {...register("product", {
                                required: 'product is Required'
                            })}
                            className="input input-bordered input-info w-full" readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Product Price:</span>
                        </label>
                        <input type="text"
                            defaultValue={`$ ${resale_price}`}
                            {...register("price", {
                                required: 'price is Required'
                            })}
                            className="input input-bordered input-info w-full" readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Product Price:</span>
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
                            <span className="label-text text-base font-semibold">Meeting Location:</span>
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