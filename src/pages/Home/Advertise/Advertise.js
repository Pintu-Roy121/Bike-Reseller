import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import offer from '../../../assets/offer.png'
import axios from 'axios';


const Advertise = () => {
    const [advertiseData, setAdvertiseData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/advertise')
            .then(data => {
                setAdvertiseData(data.data);
            })

    }, [])

    return (
        <div>
            {
                advertiseData.length !== 0 &&

                <div className='w-full md:w-4/5 lg:w-1/2 mx-auto text-center my-32 '>
                    <h1 className='text-4xl font-bold underline my-10'>Advertised Product</h1>
                    <div className='relative mt-16'>
                        <img className='absolute z-50 -top-24 -rotate-12' src={offer} alt="" />
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
                                advertiseData.map((adproduct, index) =>
                                    <div key={adproduct._id}>
                                        <SwiperSlide>
                                            <div>
                                                <img className='w-full h-96 object-contain' src={adproduct.img} alt='' />
                                                <p className="text-2xl font-bold">{adproduct.model}</p>
                                                <p className="text-3xl font-bold">{adproduct.brand_name}</p>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                )
                            }
                        </Swiper>
                    </div>

                </div>
            }
        </div>

    );
}
export default Advertise;


// {/* <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//       </Swiper> */}