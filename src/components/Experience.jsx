
const Experience = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen mx-0 lg:mx-24 md:mx-24" >
                <p className="text-center mt-4 font-roboto font-light text-gray-600">Explore my</p>
                <header className="text-4xl md:text-5xl font-semibold text-center pb-8 text-gray-900">
                    Experience
                </header>
                <section className="flex">
                    <side className="px-10 mt-3">
                        <div className="h-2 w-2 mb-2 rounded-full bg-slate-400"></div>
                        <div className="min-h-full bg-slate-300 w-1 justify-self-center"></div>
                    </side>
                    <main>
                        <h1 className=" text-2xl">Full Stack developer</h1>
                        <h1 className=" text-lg pl-5 text-slate-500">KoCH Technologies</h1>
                        <wrapper>
                            <p> •	Designed and maintained backend services and RESTful APIs for enterprise-level systems integration, using Node.js and Express to optimize performance, reduce latency by 20%, and improve throughput through load balancing.
                            </p>
                            <p>                        •	Enhance user security by implementing advanced authentication methods such as single sign-on (SSO), silent sign-on, and client-server validation using Node.js.
                            </p>
                            •	Apply advanced algorithms and data structures to improve service logic and optimize the backend codebase. This includes participating in regular code reviews, debugging, and refactoring code to maintain scalability.
                            <p>
                                •	Develop and document reusable UI and backend components using React and Node.js. These components are shared across teams to ensure consistency, reduce development time, and maintain an organized codebase that scales with ease.
                            </p>
                        </wrapper >
                    </main>

                </section>
            </div >
        </>
    )
}

export default Experience