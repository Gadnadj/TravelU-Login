import logo from '../assets/nature-logo.png';

type Props = {
    loginPopup: boolean
    setLoginPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginMenu = [
    {
        id: 1,
        link: '#',
        name: 'Home'
    },
    {
        id: 2,
        link: '#',
        name: 'About'
    },
    {
        id: 3,
        link: '#',
        name: 'Contact'
    },
    {
        id: 4,
        link: '#',
        name: 'Login'
    }
];

const NavBar = ({ loginPopup, setLoginPopup }: Props) => {
    return (
        <header className='bg-white/80 shadow-lg after:'>
            <div className='container flex items-center justify-between'>
                <nav>
                    <a href="#" className='text-gray-800 font-bold text-3xl'>
                        <img className='h-10 mr-1 inline' src={logo} />
                        TravelU
                    </a>
                </nav>

                {/* Desktop Menu  */}
                <div className='sm:block'>
                    <ul className='flex gap-4 text-2xl justify-center items-center'>
                        {
                            LoginMenu.map((item) => (
                                <li className='text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none cursor-pointer' key={item.id}>
                                    <a href={item.link}></a>
                                    {
                                        item.name === 'Login' && (
                                            <li onClick={() => setLoginPopup(!loginPopup)}>{item.name}</li>
                                        )
                                    }

                                    {
                                        item.name !== 'Login' && (
                                            <li className='hidden sm:block'>{item.name}</li>
                                        )

                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </header>
    );
};

export default NavBar;