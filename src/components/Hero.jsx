import {memo} from "react";
import Services from "./services";

const Hero = memo(() => {
    return (<div
        className="w-full items-center h-[calc(100vh-10px)] md:flex-row flex-col text-center md:text-left text-[4.31rem] py-10 text-secondary font-poppins md:px-20 px-4 max-w-[100vw]
             flex justify-between">
        <div className="flex w-full max-h-full flex-col items-start justify-start">
            <div
                className="flex flex-row items-center mq750:items-start justify-between">
                <div
                    className="flex flex-col items-center md:items-start justify-between gap-[2rem]">
                    <button
                        className="cursor-pointer [border:none] py-[1rem] px-[2rem] bg-white rounded-81xl
                        shadow-[0px_856px_240px_rgba(0,_0,_0,_0),_0px_548px_219px_rgba(0,_0,_0,_0.01),_0px_308px_185px_rgba(0,_0,_0,_0.04),_0px_137px_137px_rgba(0,_0,_0,_0.06),_0px_34px_75px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.07)] flex flex-row items-center justify-start gap-[1rem] hover:bg-gainsboro">
                        <b className="relative text-[0.88rem] leading-[120%] font-poppins text-secondary text-left">
                            Explore
                        </b>
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                            alt=""
                            src="/work-1.svg"
                        />
                    </button>
                    <h1 className="m-0 w-full max-w-[30rem] relative md:text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 text-[2.5rem]">
                        <p className="m-0">
                            <span className="text-black">{`Travel `}</span>
                            <span>top destination</span>
                            <span className="text-black">{` `}</span>
                        </p>
                        <p className="m-0 text-black">in India</p>
                    </h1>
                    <div
                        className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                        <p className="m-0">
                            We always make our customer happy by providing
                        </p>
                        <p className="m-0">{`as many choices as possible `}</p>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[1rem]">
                        <button
                            className="cursor-pointer [border:none] py-[1rem] pr-[1.81rem] pl-[2rem] bg-primary rounded-81xl shadow-[0px_126px_35px_rgba(0,_0,_0,_0),_0px_81px_32px_rgba(0,_0,_0,_0.01),_0px_45px_27px_rgba(0,_0,_0,_0.05),_0px_20px_20px_rgba(0,_0,_0,_0.09),_0px_5px_11px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumpurple">
                            <b className="relative text-[0.88rem] leading-[120%] font-poppins text-light text-left">
                                Get Started
                            </b>
                        </button>
                        <button
                            className="cursor-pointer py-[1rem] pr-[1.81rem] pl-[2rem] bg-white rounded-81xl flex flex-row items-center justify-start gap-[0.5rem] whitespace-nowrap border-[1px] border-solid border-light hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                            <img
                                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                                alt=""
                                src="/playcircle5-1.svg"
                            />
                            <b className="relative text-[0.88rem] leading-[120%] font-poppins text-dark text-left">{`Showcase`}</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>"
            <img className={"w-full md:w-[35vw]"} src={"/hero.svg"} alt={"hero"}/>
        </div>
    </div>);
});

export default Hero;