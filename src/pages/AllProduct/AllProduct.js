import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';

const AllProduct = () => {
    const { loading } = useContext(AuthContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allproducts`);
            const data = await res.json();
            return data;
        }
    })

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-4xl my-8 font-bold underline text-center'>Total Products:{products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProduct;