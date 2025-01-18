import React from 'react';
import BgStyle from '../assets/bg-image.jpg';


type Props = {
    loginPopup: boolean
    setLoginPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPopup = ({ loginPopup, setLoginPopup }: Props) => {

    const bgStyle = {
        backgroundImage: `url(${BgStyle})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    };
    return (
        <>
            {loginPopup && (
                <div className='fixed top-0 h-full w-full z-50 overflow-y-auto'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl 
                    shadow-2xl w-[90] sm:w-auto bg-white'>
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:w-[600px] md:w-[700px] relative'>

                                {/* Login form section */}
                                <div className='p-5'>
                                    <h1 className='text-2xl text-gray-600 font-semibold text-center mb-4'>Login</h1>
                                    <form className='flex flex-col gap-4'>
                                        <div>
                                            <label className='input-label' htmlFor="username">Username</label>
                                            <input type="text" id='username' className='input' />
                                        </div>
                                        <div>
                                            <label className='input-label' htmlFor="password">Password</label>
                                            <input type="text" id='password' className='input' />
                                        </div>
                                    </form>
                                    <button className='bg-blue-500 hover:bg-blue-500/80 rounded-full mt-8 text-white py-1 px-5 block w-full'>
                                        Submit
                                    </button>
                                </div>


                                {/* Image section */}
                                <div className='w-full h-full'>
                                    <img className='rounded-r-2xl' style={bgStyle} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginPopup;