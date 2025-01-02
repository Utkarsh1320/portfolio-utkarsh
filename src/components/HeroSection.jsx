import headshot from '../assets/heroImg.png';
import github from '../assets/github_svg.svg';
import linkedin from '../assets/LinkedIn_svg.svg';
import Navbar from "../components/Navbar";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />

                <div className="flex flex-col lg:flex-row items-center justify-center flex-grow gap-10 px-6 md:px-12 lg:px-24">
                    <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
                        <img
                            className="w-3/4 md:w-2/3 lg:w-full max-w-md"
                            src={headshot}
                            alt="Utkarsh More"
                        />
                    </div>

                    <section className="text-center lg:text-left">
                        <h3 className="text-xl md:text-2xl">Hello I&apos;m</h3>
                        <h1 className="text-4xl md:text-6xl font-bold">Utkarsh More</h1>
                        <h2 className="text-2xl md:text-4xl text-gray-400 font-semibold py-3">
                            Frontend Developer
                        </h2>


                        <div className="pt-8 flex flex-col md:flex-row justify-center lg:justify-start gap-4">
                            <button className="py-3 px-6 border-2 border-black rounded-full hover:bg-gray-100 transition">
                                Download CV
                            </button>
                            <button className="py-3 px-6 border-2 rounded-full text-white bg-black hover:bg-gray-800 transition">
                                Contact Info
                            </button>
                        </div>


                        <div className="flex justify-center lg:justify-start gap-6 mt-8">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
