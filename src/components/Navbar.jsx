

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between px-16 py-10 w-3/4 mx-auto">
                <div className=" font-bold items-center justify-right text-center text-xl">Logo</div>
                <div className="w-2/4 ">
                    <ul className="flex space-x-10 h-full">
                        <li className="flex-1 text-right font-Embed text-xl">About</li>
                        <li className="flex-1 text-right font-Embed text-xl">Careers</li>
                        <li className="flex-1 text-right font-Embed text-xl">Contact</li>
                    </ul>
                </div>
            </div>
            <div className="border-b border-gray-400 w-3/4 mx-auto"></div>
        </>
    )
}

export default Navbar