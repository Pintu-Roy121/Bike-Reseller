import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ReadyToJoin from '../ReadyToJoin/ReadyToJoin';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <ReadyToJoin></ReadyToJoin>
        </div>
    );
};

export default Home;