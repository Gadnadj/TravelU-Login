import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaLinkedinIn } from 'react-icons/fa';


interface props {
    showSignIn: boolean,
    setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<props> = ({ setShowSignIn, showSignIn }: props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className={'p-4'}>
                <h1 className="text-2xl text-gray-600 font-semibold text-center mb-4">
                    Log in
                </h1>
                <form className="flex flex-col gap-3">
                    <div>
                        <label htmlFor="username" className="input-label">
                            Username
                        </label>
                        <input id="username" type="text" className="input" />
                    </div>
                    <div>
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="input pr-8"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                            />

                            {showPassword ? (
                                <FaEye
                                    className="text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            ) : (
                                <FaEyeSlash
                                    className="text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            )}
                        </div>
                    </div>
                </form>
                <button className="bg-blue-500 text-white py-1 px-5 rounded-full mt-7 block w-full hover:bg-blue-500/80 transition-200">
                    Submit
                </button>
                <p className="text-center text-gray-500 text-sm my-3">or login with</p>
                <div className="flex gap-4 justify-center">
                    <FcGoogle className="text-2xl grayscale hover:grayscale-0 transition-200 cursor-pointer" />
                    <FaLinkedinIn className="text-2xl text-gray-600 hover:text-blue-600 transition-200 cursor-pointe" />
                </div>
                <p
                    className="text-center text-gray-500 text-sm my-3 "

                >
                    No Account?{' '}
                    <span className='hover:text-blue-700 cursor-pointer underline underline-offset-2'
                        onClick={() => setShowSignIn(!showSignIn)}>Sign Up
                    </span>
                </p>
            </div>
        </>
    );
};

export default Login;