import { useState } from "react";
import hero from "../image/heroImg 1.svg";

function Content(){
    //  flex justify-between flex-col-reverse
    return (
        <div className="mt-[46px] md:flex item-center justify-between bg-[#0b132b] py-24 md:px-[118px] px-[28]">
            <div className="flex flex-col gap-4 hover:text-green-300 duration-500">

            <h1 className="text-[35px] font-[Poppins] text-gray-600 font-semibold
            leading-[52.5px] tracking-[6px]">
                Hi !
            </h1 >
            <h1 className="text-[50px] font-[Poppins] text-gray-600 font-semibold
            leading-[75px] tracking-[6px]">
                I'm Muhamad Raul.
            </h1>    
            <h1 className="text-[50px] font-[Poppins] text-gray-600 font-semibold
            leading-[75px] tracking-[6px]">
                a Front-End Developer
            </h1>

            <h3 className="mt-[48px] font-[Poppins] text-gray-600 text-[23px] font-normal 
            leading-8 tracking-[1.5px]">
                Front-End devel oper based in Bekasi, Indonesian  
            </h3>
            <h3 className="font-[Poppins] text-gray-600 text-[23px] font-normal 
            leading-8 tracking-[1.5px]">
                I'am coding with a clean and beautiful problem
            </h3>
            <h3 className="font-[Poppins] text-gray-600 text-[23px] font-normal 
            leading-8 tracking-[1.5px]">
                solving in mind.
            </h3>  
            </div>

            <div className="pr-[180px] place-items-center">
                <img src={hero} className="w-[451.72px] h-[467px]"></img>
            </div>              
        </div>
    )
}

export default Content;