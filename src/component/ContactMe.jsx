import git from "../image/Git.svg";
import email from "../image/Email.svg";
import instagram from "../image/instagram.svg";
import tel from "../image/telpon.svg";
import vector from "../image/Vector.svg";

function ContactMe(){
    return (
        <>
        <div className="mt-[0px] md:flex flex-col item-center justify-between bg-[#0b132b] py-24 md:px-[0px] px-7">
            <div className="flex justify-center gap-4 py-[18px] pb-[38px]">
                <span className="text-[35px] font-[Poppins] font-normal
                leading-[52.5px] tracking-[4px] text-[#14279B]">
                    Contact  
                </span>
                <span className="text-[35px] font-[Poppins] font-semibold
                leading-[52.5px] tracking-[4px] text-[#002265]">
                    Me
                </span>
            </div>
            <div className="flex flex-row justify-center p-[28px] bg-[#0b132b]
            rounded-xl hover:text-green-300 duration-500 cursor-pointer gap-28">
                <div>
                    <img src={git}></img>
                </div>
                <div>
                    <img src={instagram}></img>
                </div>
                <div>
                    <img src={email}></img>
                </div>
                <div>
                    <img src={tel}></img>
                </div>
            </div>
            <div>
                <img src={vector} className="w-full h-full"></img>
            </div>
        </div>

        
        </>
    )
}

export default ContactMe;