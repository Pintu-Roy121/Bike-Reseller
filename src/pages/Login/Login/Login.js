import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken/useToken';

const Login = () => {
    const { Login, LoginWithGoogle } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const [loginEmail, setLoginEmail] = useState('')
    const [token] = useToken(loginEmail);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {

        Login(data.email, data.password)
            .then(result => {
                toast.success('Login successful');
                setLoginEmail(data.email)
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then(result => {
                const user = {
                    name: result.user.displayName,
                    email: result.user.email,
                    role: "buyer"
                }
                saveUser(user);
                setLoginEmail(result.user.email)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const saveUser = (user) => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User Saved successful')
                }
                // toast.success(`${data.message}`)
            })
    }





    return (
        <div className='my-24 bg-slate-200 w-3/4 mx-auto p-24 rounded-xl'>
            <h1 className='text-4xl text-center font-bold'>Login to your Account</h1>
            <form className='w-3/4 mx-auto' onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Email:</span>
                    </label>
                    <input type="text"
                        {...register("email", {
                            required: 'Email is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Password:</span>
                    </label>
                    <input type="password"
                        {...register("password", {
                            required: 'Password is Required'
                        })}
                        className="input input-bordered input-info w-full" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                {
                    error ?
                        <p className='text-lg text-red-600 font-semibold'>{error}</p>
                        :
                        ""
                }
                <input type="submit" value='Login' className='btn btn-info w-full my-5' />
            </form>
            <div className='w-3/4 mx-auto'>
                <p>New to doctors Porta? <Link to='/signup' className='text-info hover:text-sky-600 duration-200 underline'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn text-base btn-outline btn-info w-full text-white'>Continue With Google</button>
            </div>

        </div >
    );
};

export default Login;