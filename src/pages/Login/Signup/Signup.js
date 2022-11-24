import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Signup = () => {
    const { LoginWithGoogle } = useContext(AuthContext);
    const { createUser, updateUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        // const role = form.role.value;

        createUser(email, password)
            .then(result => {
                toast.success('signup successful')
                const profile = {
                    displayName: name
                }
                updateUser(profile)
                    .then(() => {
                        console.log(result.user);
                        navigate('/')
                        form.reset(' ')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then(result => {
                navigate('/')
                toast.success("Login in successful")
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className='my-24 bg-slate-200 w-3/4 mx-auto p-24 rounded-xl'>
            <h1 className='text-4xl text-center font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-3/4 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Name:</span>
                    </label>
                    <input type="name" name='name' className="input input-bordered input-info w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Email:</span>
                    </label>
                    <input type="email" name='email' className="input input-bordered input-info w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Password:</span>
                    </label>
                    <input type="password" name='password' className="input input-bordered input-info w-full" required />
                </div>
                <div className=' my-5'>
                    <span className="label-text text-base font-semibold">Select Role:</span>
                    <select name='role' className="select text-lg select-info w-full" defaultValue='Buyer'>
                        <option >Buyer</option>
                        <option>Seller</option>
                    </select>
                </div>
                {
                    error ?
                        <p className='text-lg text-red-600 font-semibold'>{error}</p>
                        :
                        ""
                }
                <input type="submit" value='Sign up' className='btn btn-info w-full my-3' />
            </form>
            <div className='w-3/4 mx-auto'>
                <p>Already Have an Account? <Link to='/login' className='text-info hover:text-sky-600 duration-200 underline'>Log in</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn text-base btn-outline btn-info w-full text-white'>Continue With Google</button>
            </div>

        </div >
    );
};

export default Signup;