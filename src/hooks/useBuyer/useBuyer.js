import { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false)
    // console.log(is);

    useEffect(() => {
        if (email) {
            fetch(`https://bike-resell-shop-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.role === 'buyer') {
                        setIsBuyer(data.role)
                    }
                })
        }
    }, [email])
    return [isBuyer]
};

export default useBuyer;
