import headshot from '../assets/headShot.jpg'
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
                        <h3 className='text-lg'>Hello I'm</h3>
                        <h1>Utkarsh More</h1>
                        <h2>Frontend Developer</h2>
                        <div>
                            <button>Download CV</button>
                            <button>Contacnt Info</button>
                        </div>
                        <div>
                            <img src="" />
                            <img src="" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HeroSection