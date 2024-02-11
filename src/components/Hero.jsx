import {memo} from "react";
import Services from "./services";

const Hero = memo(() => {
    return (
        <div className="flex w-full h-screen flex-col items-start justify-start text-left text-[4.31rem] text-secondary font-urbanist">
            <div className="w-full p-20 max-w-[100vw] flex-wrap flex justify-between">
                <div className="flex flex-col items-start justify-start">
                    <div
                        className="flex  flex-row items-center justify-start">
                        <div
                            className="flex flex-col items-start justify-start gap-[2.69rem]">
                            <button
                                className="cursor-pointer [border:none] py-[1rem] px-[2rem] bg-white rounded-81xl shadow-[0px_856px_240px_rgba(0,_0,_0,_0),_0px_548px_219px_rgba(0,_0,_0,_0.01),_0px_308px_185px_rgba(0,_0,_0,_0.04),_0px_137px_137px_rgba(0,_0,_0,_0.06),_0px_34px_75px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.07)] flex flex-row items-center justify-start gap-[1rem] hover:bg-gainsboro">
                                <b className="relative text-[0.88rem] leading-[120%] font-urbanist text-secondary text-left">
                                    Explore
                                </b>
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                                    alt=""
                                    src="/work-1.svg"
                                />
                            </button>
                            <h1 className="m-0 w-[37.31rem] relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-[140%] shrink-0 mq750:text-[3.44rem] mq750:leading-[4.13rem] mq450:text-[2.56rem] mq450:leading-[3.13rem]">
                                <p className="m-0">
                                    <span className="text-black">{`Travel `}</span>
                                    <span>top destination</span>
                                    <span className="text-black">{` `}</span>
                                </p>
                                <p className="m-0 text-black">in India</p>
                            </h1>
                            <div
                                className="h-[3.63rem] relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                                <p className="m-0">
                                    We always make our customer happy by providing
                                </p>
                                <p className="m-0">{`as many choices as possible `}</p>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[1rem]">
                                <button
                                    className="cursor-pointer [border:none] py-[1rem] pr-[1.81rem] pl-[2rem] bg-primary rounded-81xl shadow-[0px_126px_35px_rgba(0,_0,_0,_0),_0px_81px_32px_rgba(0,_0,_0,_0.01),_0px_45px_27px_rgba(0,_0,_0,_0.05),_0px_20px_20px_rgba(0,_0,_0,_0.09),_0px_5px_11px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumpurple">
                                    <b className="relative text-[0.88rem] leading-[120%] font-urbanist text-light text-left">
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
                                    <b className="relative text-[0.88rem] leading-[120%] font-urbanist text-dark text-left">{`Showcase`}</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                   <img src={"/hero.svg"} alt={"hero"} />
                </div>
            </div>
        </div>
    );
});

export default Hero;