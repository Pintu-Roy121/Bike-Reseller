import React from 'react';
import visa from '../../../assets/visa.webp';
import master from '../../../assets/mastercard.png';
import american from '../../../assets/american.png';
import paypal from '../../../assets/PayPal.svg.png';
import discover from '../../../assets/Discover.png';
import apple from '../../../assets/apple pay.png';
import google from '../../../assets/Google pay.png';
import diner from '../../../assets/brand-diners.png';


const PaymentMethods = () => {
    return (
        <div className='w-11/12 mx-auto my-16 text-center'>
            <h1 className='text-5xl font-bold  mb-5'>Payment Methods</h1>
            <p className='md:w-3/4 lg:w-1/2 mx-auto font-semibold'>A payment method is a way that customers pay for a product or service. In a brick-and-mortar store, accepted payment methods may include cash, a gift card, credit cards, prepaid cards, debit cards, or mobile payments.</p>
            <div className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2 bg-slate-100 p-20 rounded-lg my-8'>
                <div className=' flex md:w-64 md:h-40 lg:w-full -full justify-center items-center rounded-lg bg-slate-50 py-8 px-5'>
                    <img className='w-28' src={visa} alt="" />
                </div>
                <div className=' flex md:w-64 md:h-40 lg:w-full -full justify-center items-center rounded-lg bg-slate-50 py-8 px-5'>
                    <img className='w-28' src={master} alt="" />
                </div>
                <div className=' flex md:w-64 md:h-40 lg:w-full -full justify-center items-center rounded-lg bg-slate-50 py-8 px-5'>
                    <img className='w-28' src={paypal} alt="" />
                </div>
                <div className=' flex md:w-64 md:h-40 lg:w-full -full justify-center items-center rounded-lg bg-slate-50 py-8 px-5'>
                    <img className='w-28' src={american} alt="" />
                </div>
                <div className=' flex md:w-64 md:h-40 lg:w-full -full justify-center items-center rounded-lg bg-slate-50 py-8 px-5'>
                    <img className='w-28' src={apple} alt="" />
                </div>
                <div className=' flex md:w-64 md:h-40 lg:w-full -full justify-center items-center rounded-lg bg-slate-50 py-8 px-5'>
                    <img className='w-28' src={google} alt="" />
                </div>
                <div className=' flex md:w-64 md:h-40 lg:w-full -full justify-center items-center rounded-lg bg-slate-50 py-8 px-5'>
                    <img className='w-28' src={discover} alt="" />
                </div>
                <div className=' flex md:w-64 md:h-40 lg:w-full -full justify-center items-center rounded-lg bg-slate-50 py-8 px-5'>
                    <img className='w-28' src={diner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;