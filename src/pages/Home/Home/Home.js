import React from 'react';
import useTitle from '../../../hooks/useTitle/useTitle';
import Aboutus from '../Aboutus/Aboutus';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import PaymentMethods from '../PaymentMethods/PaymentMethods';
import ReadyToJoin from '../ReadyToJoin/ReadyToJoin';
const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <ReadyToJoin></ReadyToJoin>
            <Aboutus></Aboutus>
            <PaymentMethods></PaymentMethods>
        </div>
    );
};

export default Home;