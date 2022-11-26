import React, { useEffect, useState } from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ReadyToJoin from '../ReadyToJoin/ReadyToJoin';

const Home = () => {

    // const [advertiseData, setAdvertiseData] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/advertise')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdvertiseData(data)
    //         })
    // }, [])

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            {/* {
                advertiseData.map(data => <Advertise
                    key={data._id}
                    data={data}
                ></Advertise>)
            } */}
            <ReadyToJoin></ReadyToJoin>
        </div>
    );
};

export default Home;