import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import offer from '../../../assets/offer.png'


const AdShow = () => {

    // return (
    //     <div className='w-1/2 mx-auto text-center my-32 '>
    //         <h1 className='text-4xl font-bold underline my-10'>Advertised Product</h1>
    //         <div className='relative mt-16'>
    //             <img className='absolute z-50 -top-24 -rotate-12' src={offer} alt="" />
    //             <Swiper pagination={true} modules={[Pagination]}>
    //                 {
    //                     advertiseData.map(adproduct =>
    //                         <SwiperSlide
    //                             key={adproduct._id}
    //                         >
    //                             <div>
    //                                 <img className='w-full h-96 object-contain' src={adproduct.img} alt='' />
    //                                 <p className="text-2xl font-bold">{adproduct._id}</p>
    //                                 <p className="text-2xl font-bold">{adproduct.model}</p>
    //                                 <p className="text-3xl font-bold">{adproduct.brand_name}</p>
    //                             </div>
    //                         </SwiperSlide>
    //                     )
    //                 }
    //             </Swiper>
    //         </div>

    //     </div>
    // );
};

export default AdShow;