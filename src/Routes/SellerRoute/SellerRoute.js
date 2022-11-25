import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/useSeller/useSeller';
import Loading from '../../Shared/Loading/Loading';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller,] = useSeller(user?.email);



    if (loading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children
    }
};

export default SellerRoute;