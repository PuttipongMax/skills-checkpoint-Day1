import sendpay from "../image/Sendpay.svg";
import eCommerce from "../image/E-commerce.svg";
import bLearning from "../image/B Learning.svg";

function Portfolio(){

    return(
        <div className="mt-[0px] md:flex flex-col item-center justify-between bg-[#0b132b] py-24 md:px-[118px] px-7">
            <div className="flex justify-center gap-4 py-[18px] pb-[38px]">
                <span className="text-[35px] font-[Poppins] font-normal
                leading-[52.5px] tracking-[4px] text-[#14279B]">
                    My 
                </span>
                <span className="text-[35px] font-[Poppins] font-semibold
                leading-[52.5px] tracking-[4px] text-[#002265]">
                    Portfolio
                </span>
            </div>
            <div className="flex flex-row justify-center p-[28px] bg-[#0b132b]
            rounded-xl hover:text-green-300 duration-500 cursor-pointer">
                <div>
                    <img src={sendpay}></img>
                </div>
                <div>
                    <img src={eCommerce}></img>
                </div>
                <div>
                    <img src={bLearning}></img>
                </div>
            </div>
        </div>
    )
}
        
export default Portfolio;