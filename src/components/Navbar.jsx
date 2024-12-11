

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between p-16">
                <div className=" font-Embed text-center text-3xl lg:text-4xl md:text-3xl sm:text-3xl">Dev-X-u</div>
                <div>
                    <ul className="h-full hidden sm:hidden md:flex">
                        <li className="flex-1 text-right font-Embed lg:text-3xl md:text-2xl px-5">About</li>
                        <li className="flex-1 text-right font-Embed lg:text-3xl md:text-2xl px-5">Experience</li>
                        <li className="flex-1 text-right font-Embed lg:text-3xl md:text-2xl px-5">Projects</li>
                        <li className="flex-1 text-right font-Embed lg:text-3xl md:text-2xl px-5">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar