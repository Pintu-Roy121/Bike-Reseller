import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import Category from '../Category/Category';

const Categories = () => {
    const { loading } = useContext(AuthContext)

    const { data: Categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://bike-resell-shop-server.vercel.app/categories');
            const data = res.json();
            return data;

        }
    })

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='w-11/12 mx-auto my-12 text-center'>
            <h1 className='text-5xl font-bold underline mb-5'>Bike Brands</h1>
            <p className='md:w-3/4 lg:w-1/2 mx-auto font-semibold mb-16'>A motorcycle, often called a motorbike, bike, cycle, or trike, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                {
                    Categories.map((category, i) => <Category
                        key={i}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;