import React from 'react';
import { FaEye, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

type Props = {
    showPassword: boolean,
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp = ({ showPassword, setShowPassword }: Props) => {
    return (
        <>
            <div className='p-5'>
                <h1 className='text-2xl text-gray-600 font-semibold text-center mb-4'>Sign Up</h1>
                <form className='flex flex-col gap-4'>
                    <div>
                        <label className='input-label' htmlFor="username">Username</label>
                        <input type="text" id='username' className='input' />
                    </div>
                    <div>
                        <label className='input-label' htmlFor="password">Password</label>
                        <div className='flex items-center relative'>
                            <input type={showPassword ? 'text' : 'password'} id='password' className='input' />
                            <FaEye
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 text-gray-600 cursor-pointer' />
                        </div>
                    </div>
                </form>
                <button className='bg-blue-500 hover:bg-blue-500/80 rounded-full mt-8 text-white py-1 px-5 block w-full'>
                    Submit
                </button>
                <p className='text-center text-gray-500 mt-2'>or login with</p>
                <div className='flex items-center justify-center mt-3 gap-4'>
                    <FcGoogle size={25} className='cursor-pointer' />
                    <FaLinkedinIn size={25} className='hover:text-blue-500 cursor-pointer' />
                </div>
                <p className='text-center text-sm text-gray-700 mt-3'>No Account? <span className='hover:text-blue-600 cursor-pointer underline underline-offset-2'>Sign up</span></p>
            </div>
        </>
    );
};

export default SignUp;