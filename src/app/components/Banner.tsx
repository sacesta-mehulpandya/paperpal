"use client";
import Image from "next/image";

export default function Banner() {
    return (
        <>
            <header className="bg-navy flex text-white justify-center items-center max-lg:flex-col gap-2 max-lg:py-2">

                <div className="flex justify-center items-center max-md:flex-col gap-2">
                    <img src="copilot-transparent-icon.svg" alt=""
                         className="max-lg:fixed  shrink-0 z-10 object-cover"/>
                    <p className=" mr-[18px] lg:text-lg md:text-lg font-bold sm:text-sm text-center">
                        Introducing Generative AI for Academics
                    </p>
                    <div className="flex justify-center items-center">
                        <img src="copilot-icon-blue.svg" alt="" className="mr-1 shrink-0"/><span
                        className="lg:text-lg md:text-lg font-bold sm:text-sm"
                    >Paperpal Copilot
            <sup
                className="text-[7px]  font-bold text-slate-800 bg-white py-[0.5px] px-[1.5px] rounded-[2.5px]"
            >BETA</sup
            ></span
                    >
                    </div>
                </div>
                <div className="ml-[68px] shrink-0 max-lg:ml-0">
                    <button className="flex justify-center items-center">
          <span className="text-sm btn-clr font-bold text-center ">Learn More </span><img src="arrow-icon-blue.svg" alt="" className="ml-[6px] font-bold mt-1"/>
                    </button>
                </div>
            </header>

        </>
    );
}
