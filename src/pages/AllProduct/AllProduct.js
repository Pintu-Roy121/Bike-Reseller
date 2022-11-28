import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle/useTitle';
import PrivateRoutes from '../../Routes/PrivateRoutes/PrivateRoutes';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';

const AllProduct = () => {
    const { loading } = useContext(AuthContext);
    const [selectProduct, setSelectedProduct] = useState(null);
    useTitle('All-Product')

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://bike-resell-shop-server.vercel.app/allproducts`);
            const data = await res.json();
            return data;
        }
    })

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-4xl my-8 font-bold underline text-center'>Available Products:{products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    ></Product>)
                }
            </div>
            {
                selectProduct && <PrivateRoutes>
                    <BookingModal
                        refetch={refetch}
                        selectProduct={selectProduct}
                        setSelectedProduct={setSelectedProduct}
                    ></BookingModal>
                </PrivateRoutes>
            }
        </div>
    );
};

export default AllProduct;