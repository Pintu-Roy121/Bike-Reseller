import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
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
        <div>
            {
                adDatas.length !== 0 &&

                <div className='mx-auto mt-7 text-center'>
                    <h1 className='text-2xl font-bold underline text-primary'>Dashboard Advertising:</h1>
                    <div className='relative'>
                        <img className='absolute w-24 z-50 -rotate-12' src={offer} alt="" />
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                adDatas.map((adData) =>
                                    <div key={adData._id} className='rounded-lg'>
                                        <SwiperSlide>
                                            <div>
                                                <img className='mt-12 w-full h-52 object-cover' src={adData.img} alt='' />
                                                <div className='text-violet-800'>
                                                    <p className="text-lg font-bold">{adData.model}</p>
                                                    <p className="-mt-2 text-lg font-bold">{adData.brand_name}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>)
                            }
                        </Swiper>
                    </div>
                </div>
            }
        </div>
    );
};

export default DashboardAdvertise;