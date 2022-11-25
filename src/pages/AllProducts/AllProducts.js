import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';

const AllProducts = () => {
    // const { brand } = useParams()
    const { loading } = useContext(AuthContext);
    const products = useLoaderData();
    // console.log(brand);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-3xl font-bold text-center underline my-5'>Total Products:{products.length} </h1>
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

export default AllProducts;