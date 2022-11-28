import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const ReadyToJoin = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className=' flex justify-between items-center my-24 bg-blue-900 w-11/12 rounded-lg mx-auto px-24 py-6'>
                <div className='w-1/2'>
                    <h1 className='text-4xl font-semibold text-white'>Ready To Join?</h1>
                    <p className='text-white text-justify w-4/5 my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='w-1/2 flex justify-end'>
                    {
                        user?.email ?
                            <Link to='/'>
                                <button className='btn bg-white text-black'>Register Now</button>
                            </Link>
                            :
                            <Link to='/signup'>
                                <button className='btn bg-white text-black'>Register Now</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default ReadyToJoin;