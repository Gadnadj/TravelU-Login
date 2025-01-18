import LoginPopup from './LoginPopup';

type Props = {
    loginPopup: boolean
    setLoginPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Hero = ({ loginPopup, setLoginPopup }: Props) => {
    return (
        <>
            <main className='hero-background h-screen flex flex-row items-center justify-center w-full'>
                <div className='text-center space-y-5'>
                    <h1 className='md:w-[600px] text-center font-dancing text-4xl sm:text-6xl md:text-8xl text-white mix-blend-difference'>Adopt the pace of nature.</h1>
                    <p className='text-white mix-blend-difference'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quibusdam.</p>
                    <button onClick={() => setLoginPopup(!loginPopup)} className='text-white text-lg bg-orange-600 hover:bg-orange-700 px-6 py-1 rounded-full'>Join Now</button>
                </div>
            </main>
        </>
    );
};

export default Hero;