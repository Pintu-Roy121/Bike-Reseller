import { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false)
    // console.log(is);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.role === 'seller') {
                        setIsSeller(data.role)
                    }
                })
        }
    }, [email])
    return [isSeller]
};

export default useSeller;