import {memo} from "react";
import Services from "./services";
import HeroSearch from "./Hero-Search";

const Hero = memo(() => {
    return (<div
        className="w-full relative items-center h-screen md:h-[calc(100vh-60px)] md:flex-row flex-col text-center md:text-left text-[4.31rem] py-10 text-secondary font-poppins md:px-20 px-4 max-w-[100vw]
             flex justify-center gap-3 md:justify-between">
        <div className="flex w-full text-left max-h-full flex-col items-center justify-center">
            <div
                className="flex flex-row items-center justify-between">
                <div
                    className="flex flex-col items-center md:items-start justify-between gap-[2rem]">
                    <div
                        className="m-0 w-full relative md:text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 text-[2.5rem]">
                        <p className="m-0">
                            <span className="text-black">{`Travel `}</span>
                            <span>top destination</span>
                            <span className="text-black">{` `}</span>
                        </p>
                        <p className="m-0 text-black">in India</p>
                    </div>
                    <div
                        className="relative text-[1.13rem] w-full leading-[160%] font-body text-grey-scale-black-50 inline-block">
                        <p className="m-0">
                            We always make our customer happy by providing
                        </p>
                        <p className="m-0">{`as many choices as possible `}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img className={"w-full md:w-[35vw]"} src={"/hero.svg"} alt={"hero"}/>
        </div>
        <HeroSearch/>
    </div>);
});

export default Hero;