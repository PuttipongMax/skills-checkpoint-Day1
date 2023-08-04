import { useState } from "react";

function Navbar() {
    let links = [
        {name: "About", link: "/"},
        {name: "Passions", link: "/"},
        {name: "Portfolio", link: "/"},
    ];
    let [open, setOpen] = useState(false);

  return (
    <>
    <nav className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex item-center justify-between bg-[#0e1b41] py-4 md:px-[118px] px-7">
            <div>
                <span className="font-[Poppins] cursor-pointer font-bold text-[25px] leading-[37.5px] tracking-[6px] text-[#002265]">
                    Raul</span>
                <span className="font-[Poppins] cursor-pointer font-normal text-[25px] leading-9 tracking-[6px] text-[#14279B]">
                    iqbal</span>
            </div>
            <div onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
            bg-[#0b132b] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
            transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 
            'top-[-490px]'} md:opacity-100`}>
                {links.map((link) => {
                    return ( 
                    <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                        <a  href={link.link} className="text-gray-600 
                        hover:text-green-300 duration-500"> {link.name} </a>
                    </li>)   
                })}
                <button className="bg-indigo-600 text-white font-[Poppins]
                py-2 px-6 rounded-xl md:ml-8 hover:bg-indigo-400 duration-500">
                Contact Me  
                </button>    
            </ul>
        </div>
    </nav>
    <div>Ducc</div>
    </>
  )
}

export default Navbar
