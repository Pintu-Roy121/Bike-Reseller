import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();

    const { data: product = {} } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product/${id}`);
            const data = await res.json();
            return data;
        }
    })
    console.log(product);

    return (
        <div>
            This is booking page
        </div>
    );
};

export default Booking;