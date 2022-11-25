import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
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
        let time_ob = new Date();
        let hours = time_ob.getHours();
        let minutes = time_ob.getMinutes();
        let seconds = time_ob.getSeconds();
        const time = {
            hours,
            minutes,
            seconds
        }

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
                        time

                    }
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                navigate('/dashboard/myproducts')
                                toast.success('Product add Successful')
                            }
                        })
                }
            })
    }

    return (
        <div className='bg-slate-200 p-24 rounded-xl'>
            <div className="text-3xl font-semibold text-center underline">Add A Product</div>
            <form onSubmit={handleSubmit(AddProduct)}>
                <div className='grid grid-cols-2 gap-5 font-semibold'>
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
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
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
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Seller Name:</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: 'name is Required'
                            })}
                            className="input input-bordered input-info w-full" />
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
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
                        {/* product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), description, price, Year of purchase  */}
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
                        {/* {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>} */}
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
                        {/* {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>} */}
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Description:</span>
                    </label>
                    <textarea
                        {...register("description", {
                            required: 'location is Required'
                        })}
                        className="textarea textarea-info" placeholder="Description"></textarea>
                </div>
                <div className='border rounded-lg flex justify-center items-center border-info my-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo</span>
                        </label>
                        <input type="file"
                            {...register('image', {
                                required: 'image is Required'
                            })} className="input bg-transparent" />
                        {/* {errors.img && <p className='text-red-600'>{errors.image?.message}</p>} */}
                    </div>
                </div>

                <input type="submit" value='submit' className='btn btn-info w-full my-5' />
            </form>
        </div>
    );
};

export default AddProduct;



