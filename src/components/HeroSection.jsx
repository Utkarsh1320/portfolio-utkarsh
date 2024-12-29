import headshot from '../assets/headShot.jpg'
import github from '../assets/github_svg.svg'
import linkedin from '../assets/LinkedIn_svg.svg'
import Navbar from "../components/Navbar"
const HeroSection = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <div className="block lg:flex flex-grow space-evenly gap-20 justify-center">
                    <div className='justify-items-center content-center w-1/4 '>
                        <img className='rounded-full' src={headshot} />
                    </div>

                    <section className='justify-items-center content-center'>
                        <h3 className='text-2xl'>Hello I'm</h3>
                        <h1 className='text-6xl font-bold'>Utkarsh More</h1>
                        <h2 className='text-4xl text-gray-400 font-semibold py-3'>Frontend Developer</h2>
                        <div className='pt-12 grid grid-cols-2 gap-4'>
                            <button className='py-3 px-6 border-2 border-black rounded-full '>Download CV</button>
                            <button className='py-3 px-6 border-2 rounded-full text-white bg-black '>Contact Info</button>
                        </div>
                        <div className='grid grid-cols-2 gap-3 mt-6'>
                            <img src={github} />
                            <img src={linkedin} />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HeroSection