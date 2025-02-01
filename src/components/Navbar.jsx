<<<<<<< HEAD
/* eslint-disable react/prop-types */
import vscode from "../assets/icons/vscode.ico";
const list = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];
function NavBar({ theme }) {
  return (
    <header className={`  bg-titlebarBg text-textColor `}>
      <nav
        className={`mx-3 flex h-8 items-center justify-between  text-center`}
      >
        <div className="mr-auto flex  items-center md:gap-x-3">
          <img src={vscode} height={20} width={20} alt="" />
          <ul className="flex gap-x-3 max-md:hidden">
            {list.map((l, i) => {
              return (
                <li className=" cursor-pointer" key={i}>
                  {l}
                </li>
              );
            })}
          </ul>
        </div>
        <h1 className=" md:mr-auto">Utkarsh More-Visual Studio Code</h1>
        <div className="ml-auto flex gap-x-2">
          <div className="h-3 w-3 rounded-full bg-yellow-200 md:h-4 md:w-4"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 md:h-4 md:w-4"></div>
          <div className="h-3 w-3 rounded-full bg-red-400 md:h-4 md:w-4"></div>
        </div>
      </nav>
    </header>
  );
}
// src\assets\icons\vscode.ico
export default NavBar;
=======


const Navbar = () => {
    return (
        <>
            <div className="flex justify-between px-56 py-10">
                <div className=" font-Embed text-center text-3xl lg:text-4xl md:text-3xl sm:text-3xl">Logo</div>
                <div>
                    <ul className="h-full hidden sm:hidden md:flex">
                        <li className="flex-1 text-right font-Embed lg:text-2xl md:text-2xl px-5">About</li>
                        <li className="flex-1 text-right font-Embed lg:text-2xl md:text-2xl px-5">Experience</li>
                        <li className="flex-1 text-right font-Embed lg:text-2xl md:text-2xl px-5">Projects</li>
                        <li className="flex-1 text-right font-Embed lg:text-2xl md:text-2xl px-5">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
>>>>>>> 88e599cc7812b71f039a4c59b86a0583c50b0ba1
