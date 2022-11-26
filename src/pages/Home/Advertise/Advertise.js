import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import offer from '../../../assets/offer.png'

const Advertise = () => {
    const [advertiseData, setAdvertiseData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => {
                setAdvertiseData(data)
            })
    }, [])

    return (
        <div className='w-1/2 mx-auto text-center my-32 '>
            <h1 className='text-4xl font-bold underline my-10'>Advertised Product</h1>
            <div className='relative mt-16'>
                <img className='absolute z-50 -top-24 -rotate-12' src={offer} alt="" />
                <Swiper pagination={true} modules={[Pagination]}>
                    {
                        advertiseData.map((addver, i) =>
                            <SwiperSlide
                                key={i}
                            >
                                <div>
                                    <img className='w-full h-96 object-contain' src={addver.img} alt='' />
                                    <p className="text-2xl font-bold">{addver.model}</p>
                                    <p className="text-3xl font-bold">{addver.brand_name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

        </div>
    );
}
export default Advertise;


// <div className='w-1/2 mx-auto text-center my-32'>
//     <h1 className='text-4xl font-bold underline'>Advertised Product</h1>
//     <div className='flex flex-col justify-center my-4'>
//         <h1 className='text-3xl font-bold '>Brand: <span className='text-orange-600'>{brand_name}</span></h1>
//         <h1 className='text-3xl font-bold'>Model: <span className='text-orange-600'>{model}</span></h1>
//     </div>
//     <div className='relative mt-14'>
//         <img className='absolute -top-24 -rotate-12' src={offer} alt="" />
//         <img className='max-w-fit mx-auto rounded-lg object-cover' src={img} alt="" />
//     </div>
// </div>


