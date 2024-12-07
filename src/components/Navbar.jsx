

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between p-10">
                <div className="w-1/4 font-bold items-center justify-right text-center">Logo</div>
                <div className="w-2/4 ">
                    <ul className="flex items-center justify space-x-10 h-full">
                        <li className="flex-1 text-center font-mono">About</li>
                        <li className="flex-1 text-center font-mono">Careers</li>
                        <li className="flex-1 text-center font-mono">Contact</li>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Navbar