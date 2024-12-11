// import headshot from '../assets/headShot.jpg'
import Navbar from "../components/Navbar"
const HeroSection = () => {
    return (
        <>
            <div className='flex flex-col'>
                <Navbar />
                <div className='min-h-100 flex-1 sm:block md:block lg:flex-auto overflow-hidden'>
                    <div className='bg-blue-500 flex'>Hello </div>

                    <div className='bg-green-500'>world</div>
                </div>
            </div>
        </>
    )
}

export default HeroSection