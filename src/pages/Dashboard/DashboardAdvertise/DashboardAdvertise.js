import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import offer from '../../../assets/offer.png'


const DashboardAdvertise = () => {
    const [adDatas, setAdDatas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => {
                setAdDatas(data)
            })
    }, [])

    return (
        <div className=' mx-auto text-center'>
            <h1 className='text-2xl font-bold underline text-primary'>Dashboard Advertising:</h1>
            <div className='relative'>
                <img className='absolute w-24 z-50 -rotate-12' src={offer} alt="" />
                <Swiper pagination={true} modules={[Pagination]}>
                    {
                        adDatas.map((adData) =>
                            <div
                                key={adData._id}
                            >
                                {
                                    adData?.sold ||
                                    <SwiperSlide>
                                        <div>
                                            <img className='mt-12 object-contain' src={adData.img} alt='' />
                                            <div className='text-violet-800'>
                                                <p className="text-lg font-bold">{adData.model}</p>
                                                <p className="-mt-2 text-lg font-bold">{adData.brand_name}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                }
                            </div>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default DashboardAdvertise;