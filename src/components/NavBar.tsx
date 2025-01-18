import React from 'react';
import logo from '../assets/nature-logo.png';

type Props = {}

const NavBar = (props: Props) => {
    return (
        <header className='bg-white/80 shadow-lg after:'>
            <div className='container flex items-center justify-between pt-2 pb-2'>
                <nav>
                    <a href="#" className='text-gray-800 font-bold text-3xl'>
                        <img className='h-10 mr-1 inline' src={logo} />
                        TravelU
                    </a>
                </nav>

                {/* Desktop Menu  */}
                <div>
                    <ul className='flex gap-10 text-2xl'>
                        <li>
                            <a className='hidden sm:block' href="#">Home</a>
                        </li>
                        <li>
                            <a className='hidden sm:block' href="#">About</a>
                        </li>
                        <li>
                            <a className='hidden sm:block' href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    );
};

export default NavBar;