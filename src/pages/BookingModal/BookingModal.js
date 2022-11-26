
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ selectProduct, setSelectedProduct, refetch }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    // console.log(selectProduct);
    const { model, img, resale_price, _id } = selectProduct

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
                    setSelectedProduct(null)
                    refetch()
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
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">You Booking Bike is: {model}</h3>
                    <form onSubmit={handleSubmit(handleBooking)}>
                        <div className='grid font-semibold'>
                            {/* Product Id is hidden here........................ */}
                            <div className="form-control w-full hidden">
                                <label className="label">
                                </label>
                                <input type="text"
                                    defaultValue={_id}
                                    {...register("productid", {
                                        required: 'productId is Required'
                                    })}
                                    className="input input-bordered input-info w-full" readOnly />
                            </div>
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
                            {/*Product Image is hidden ................................ */}
                            <div className="form-control w-full hidden">
                                <label className="label">
                                </label>
                                <input type="text"
                                    defaultValue={img}
                                    {...register("img", {
                                        required: 'img is Required'
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
                </div>
            </div>
        </div>
    );
};

export default BookingModal;