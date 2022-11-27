import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoding] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://bike-resell-shop-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.role === 'admin') {
                        setIsAdmin(data.role);
                        setIsAdminLoding(false)
                    }
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
};

export default useAdmin;