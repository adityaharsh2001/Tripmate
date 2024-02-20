import {memo} from "react";
import HeroSearch from "./Hero-Search";

const Hero = memo(() => {
    return (
        <div className="relative w-full top-0 flex h-[50vh] flex-col items-center justify-center">
            <div
                className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url(/Copy-of-Gallery1.jpg)",
                }}
            />
            <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"
            />
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
            <HeroSearch/>
        </div>
    );
});

export default Hero;