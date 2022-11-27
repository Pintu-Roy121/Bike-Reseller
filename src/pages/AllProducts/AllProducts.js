import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle/useTitle';
import PrivateRoutes from '../../Routes/PrivateRoutes/PrivateRoutes';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';

const AllProducts = () => {
    const { brand } = useParams();
    const { loading } = useContext(AuthContext);
    const [selectProduct, setSelectedProduct] = useState(null);
    useTitle('AllProduct')


    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://bike-resell-shop-server.vercel.app/products/${brand}`);
            const data = await res.json();
            return data;
        }
    })

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

export default AllProducts;