import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from '../Category/Category';

const Categories = () => {
    // const [Categories, setCategoris] = useState([])

    // useEffect(() => {
    //     fetch('productsCategory.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCategoris(data);
    //         })
    // }, [])

    const { data: Categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = res.json();
            return data;

        }
    })


    return (
        <div className='w-11/12 mx-auto my-12 text-center'>
            <h1 className='text-5xl font-bold underline mb-5'>Bike Brands</h1>
            <p className='md:w-3/4 lg:w-1/2 mx-auto'>A motorcycle, often called a motorbike, bike, cycle, or trike, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding.</p>
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