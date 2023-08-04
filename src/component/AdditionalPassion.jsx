import fontEnd from "../image/Front-End.svg";
import backEnd from "../image/back-End.svg";
import uxUi from "../image/ux-ui.svg";

function AdditionalPassion(){
    
    return (
        <div className="mt-[0px] md:flex flex-col item-center justify-between bg-[#0b132b] py-24 md:px-[118px] px-7">
            <div className="text-center flex justify-center gap-4 py-[18px] pb-[38px]">
                <span className="text-[35px] font-[Poppins] font-normal
                leading-[52.5px] tracking-[4px] text-[#14279B]">
                    Additional 
                </span>
                <span className="text-[35px] font-[Poppins] font-semibold
                leading-[52.5px] tracking-[4px] text-[#002265]">
                    passions
                </span>
            </div>
            <div className="flex justify-center gap-[88px] pt-4">
                
                <div className="flex flex-col justify-center p-[28px] bg-white
                rounded-xl hover:text-green-300 duration-500 cursor-pointer">
                    <img src={fontEnd} className="mb-8"></img>
                    <h1 className="flex flex-row text-center mb-4 gap-[8px]">
                        <span className="font-[Poppins] font-semibold text-[25px]
                        leading-[37.5px] tracking-normal">
                            Font-End
                        </span> 
                        <span className="font-[Poppins] font-normal text-[25px]
                        leading-[37.5px] tracking-normal">
                            Developer
                        </span>
                    </h1>
                    <h3 className="text-center font-[Poppins] font-normal 
                    text-[18px] leading-[27px] tracking-normal">
                        (Sass, Bootstrap, Tailwind)
                    </h3>
                </div>

                <div className="flex flex-col justify-center p-[28px] bg-white
                rounded-xl hover:text-green-300 duration-500 cursor-pointer">
                    <img src={backEnd} className="mb-8"></img>
                    <h1 className="flex flex-row text-center mb-4 gap-[8px]">
                        <span className="font-[Poppins] font-semibold text-[25px]
                        leading-[37.5px] tracking-normal">
                            Font-End
                        </span> 
                        <span className="font-[Poppins] font-normal text-[25px]
                        leading-[37.5px] tracking-normal">
                            Developer
                        </span>
                    </h1>
                    <h3 className="text-center font-[Poppins] font-normal 
                    text-[18px] leading-[27px] tracking-normal">
                        (Sass, Bootstrap, Tailwind)
                    </h3>
                </div>

                <div className="flex flex-col justify-center p-[28px] bg-white
                rounded-xl hover:text-green-300 duration-500 cursor-pointer">
                    <img src={uxUi} className="mb-8"></img>
                    <h1 className="flex flex-row text-center mb-4 gap-[8px]">
                        <span className="font-[Poppins] font-semibold text-[25px]
                        leading-[37.5px] tracking-normal">
                            Font-End
                        </span> 
                        <span className="font-[Poppins] font-normal text-[25px]
                        leading-[37.5px] tracking-normal">
                            Developer
                        </span>
                    </h1>
                    <h3 className="text-center font-[Poppins] font-normal 
                    text-[18px] leading-[27px] tracking-normal">
                        (Sass, Bootstrap, Tailwind)
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default AdditionalPassion;