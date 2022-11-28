import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle/useTitle';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { product, price, location, name, phone, img } = booking;
    useTitle('Payment')

    return (
        <div className='w-3/4 mx-auto my-5 '>
            <div className='flex w-full justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>Payment for: <span className='text-primary'>{product}</span></h1>
                    <p className='text-3xl font-bold'>Price: <span className='text-sky-700'>$ {price}</span></p>
                    <p className='text-xl font-semibold'>Location of Receive : <span className='text-primary'>{location}</span></p>
                    <div>
                        <p className='text-lg font-bold'>Seller Name : <span className='text-primary'>{name}</span></p>
                        <p className='text-lg font-bold'>Contact  <span className='text-primary'>Mob: {phone}</span></p>
                    </div>
                </div>
                <div className='md:hidden lg:block' >
                    <img className='w-48 object-cover' src={img} alt="" />
                </div>
            </div>
            <div className='border-2 border-info p-24 rounded-lg items-center'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>

    );
};

export default Payment;