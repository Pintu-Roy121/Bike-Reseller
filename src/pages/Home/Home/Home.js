import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ReadyToJoin from '../ReadyToJoin/ReadyToJoin';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ReadyToJoin></ReadyToJoin>
        </div>
    );
};

export default Home;