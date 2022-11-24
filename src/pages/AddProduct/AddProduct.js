import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // picture, name, location, resale price, original price, years of use, the time when it got posted, the seller's name

    return (
        <div className='my-24 bg-slate-200 w-3/4 mx-auto p-24 rounded-xl'>
            <div className="text-3xl font-semibold text-center">Add A Doctor</div>
            <form onSubmit={handleSubmit} className='w-full'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" {...register('name', {
                        required: 'Name is Required'
                    })} className="input input-bordered input-primary w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email"{...register('email', {
                        required: 'Email is Required'
                    })} className="input input-bordered input-primary w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo</span>
                    </label>
                    <input type="file" {...register('image', {
                        required: 'Photo is Required'
                    })} className="input bg-transparent w-full" />
                    {errors.img && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <input type="submit" value='Sign Up' className='btn btn-primary w-full my-5' />
            </form>
        </div>
    );
};

export default AddProduct;