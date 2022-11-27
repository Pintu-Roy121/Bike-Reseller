import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const { data: loginuser = {} } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/${user.email}`);
            const data = await res.json();
            return data;
        }
    })

    const imageHostkey = process.env.REACT_APP_Imagebb_key;



    const AddProduct = (data) => {
        const formData = new FormData();
        const image = data.image[0]
        formData.append('image', image)

        // set time when add the product....................................
        const date = new Date();
        const selectdate = format(date, 'PP');
        console.log(selectdate);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        brand_name: data.brand_name,
                        email: user.email,
                        description: data.description,
                        img: imgData.data.url,
                        location: data.location,
                        model: data.model,
                        seller_name: data.name,
                        original_price: data.original_price,
                        phone: data.phone,
                        quality: data.quality,
                        resale_price: data.resale_price,
                        years: data.years,
                        yearsof_use: data.yearsof_use,
                        user_verify: loginuser.verify,
                        date: selectdate

                    }
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                navigate('/dashboard/myproducts')
                                Swal.fire(
                                    'Successful!',
                                    'Product add Successful!',
                                    'success'
                                )
                            }
                        })
                }
            })
    }

    return (
        <div className='w-11/12 mx-auto my-8 bg-slate-200 p-16 rounded-xl'>
            <div className="text-3xl font-bold text-center underline">Add A Product</div>
            <form onSubmit={handleSubmit(AddProduct)}>
                <div className='grid grid-cols-2 gap-2 font-semibold'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Brand:</span>
                        </label>
                        <select
                            {...register("brand_name", {
                                required: 'brand_name is Required'
                            })}
                            className="select text-base select-info w-full" defaultValue='Buyer'>
                            <option>YAMAHA</option>
                            <option>HONDA</option>
                            <option>SUZUKI</option>
                            <option>HERO</option>
                            <option>TVS</option>
                            <option>BAJAJ</option>
                            <option>RUNNER</option>
                            <option>Others</option>
                        </select>
                        {errors.brand_name && <p className='text-red-600'>{errors.brand_name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Product Model:</span>
                        </label>
                        <input type="text"
                            {...register("model", {
                                required: 'model is Required'
                            })}
                            className="input input-bordered input-info w-full" />
                        {errors.model && <p className='text-red-600'>{errors.model?.message}</p>}
                    </div>
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
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Resale Price:</span>
                        </label>
                        <input type="text"
                            {...register("resale_price", {
                                required: 'resale_price is Required'
                            })}
                            className="input input-bordered input-info w-full" />
                        {errors.resale_price && <p className='text-red-600'>{errors.resale_price?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Original Price:</span>
                        </label>
                        <input type="text"
                            {...register("original_price", {
                                required: 'original_price is Required'
                            })}
                            className="input input-bordered input-info w-full" />
                        {errors.original_price && <p className='text-red-600'>{errors.original_price?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Yearsof Use:</span>
                        </label>
                        <input type="text"
                            {...register("yearsof_use", {
                                required: 'yearsof_use is Required'
                            })}
                            className="input input-bordered input-info w-full" />
                        {errors.yearsof_use && <p className='text-red-600'>{errors.yearsof_use?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Condition :</span>
                        </label>
                        <select
                            {...register("quality", {
                                required: 'quality is Required'
                            })}
                            className="select text-lg select-info w-full" defaultValue='Buyer'>
                            <option>excellent</option>
                            <option>good</option>
                            <option>fair</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Mobile Number:</span>
                        </label>
                        <input type="text"
                            {...register("phone", {
                                required: 'phone is Required'
                            })}
                            placeholder="+880"
                            className="input input-bordered input-info w-full" />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Location:</span>
                        </label>
                        <input type="text"
                            {...register("location", {
                                required: 'location is Required'
                            })}
                            placeholder="Your Location"
                            className="input input-bordered input-info w-full" />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Year of Purchase:</span>
                        </label>
                        <input type="text"
                            {...register("years", {
                                required: 'years is Required'
                            })}
                            placeholder="Your Location"
                            className="input input-bordered input-info w-full" />
                        {errors.years && <p className='text-red-600'>{errors.years?.message}</p>}
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Description:</span>
                    </label>
                    <textarea
                        {...register("description", {
                            required: 'description is Required'
                        })}
                        className="textarea textarea-info" placeholder="Description"></textarea>
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                </div>
                <div className='border rounded-lg py-2 flex justify-center items-center border-info my-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold my-3">Upload Product Photo:</span>
                        </label>
                        <input type="file"
                            {...register('image', {
                                required: 'image is Required'
                            })} className="input bg-transparent" />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                </div>
                <input type="submit" value='submit' className='btn btn-info w-full' />
            </form>
        </div>
    );
};

export default AddProduct;



