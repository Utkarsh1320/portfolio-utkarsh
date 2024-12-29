import aboutImg from '../assets/AboutImg.png';

const AboutSection = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen px-4 md:px-10 lg:px-20">
                <div className="text-4xl md:text-5xl font-semibold text-center py-8">
                    About Me
                </div>

                <section className="flex flex-col lg:flex-row items-center justify-center flex-grow">
                    <div className="flex-1 flex justify-center items-center pl-16">
                        <div className="text-center lg:text-left max-w-xl">
                            <div className="text-lg md:text-2xl font-light">
                                I’m a Full-Stack Developer skilled in Java, ReactJS, NodeJS, and MongoDB, with experience building scalable web applications and seamless user interfaces. I’m passionate about crafting efficient solutions using tools like AWS, Git, and frameworks such as Spring Boot and Express.js.
                            </div>
                            <div className="text-lg md:text-2xl font-light mt-6 md:mt-10">
                                Driven by a passion for problem-solving and continuous learning, I strive to create impactful digital experiences that combine functionality, performance, and user-centric design. My goal is to deliver innovative solutions that make a difference.
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src={aboutImg}
                            alt="About Me"
                            className="w-3/4 md:w-2/3 lg:w-full"
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutSection;
