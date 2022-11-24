import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loading = () => {
    return <div className='h-32 my-24 relative'>
        <div className='absolute left-1/2'>
            <Oval
                height={40}
                width={40}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={6}
                strokeWidthSecondary={6}

            />
        </div>
    </div>
};

export default Loading;