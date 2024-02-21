import {memo, useState} from "react";
import {motion} from "framer-motion";
import StatsBox from "./StatsBox";

const Stats = memo(() => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollY(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    const scale = 1 + scrollY * 0.00001; // Adjust the scale factor as needed

    return (
        <motion.div style={{scale}}
                    className="flex-1 w-full p-5 md:p-10 relative h-full flex flex-col md:flex-row items-center gap-10 text-[1.2rem] justify-center gap-[8rem]  max-w-full">
            <img
                className="md:w-[400px] relative md:object-cover max-md:max-w-full max-md:w-[50%] max-md:h-[300px] max-md:object-cover max-md:object-center max-md:rounded-13xl max-md:overflow-hidden max-md:shrink-0 max-md:z-[1]"
                loading="eager"
                alt=""
                src="/images/stats.svg"
            />
            <div className="max-w-full md:max-w-[50%] flex flex-col items-center justify-center box-border gap-[1rem]">
                <div className="self-stretch flex flex-col gap-[0.5rem] items-center justify-between">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                        <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Your Trip Mate
                        </b>
                        <h1 className="m-0 self-stretch relative text-[2rem] leading-[120%] font-bold font-inherit text-grey-scale-black md:text-xl lg:text-2xl xl:text-3xl">
                            We will helping you to fulfil your dream destination
                        </h1>
                        <div className="text-[1rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                            <p className="">
                                We understand that every traveler's preferences are unique, and their needs vary when it
                                comes to travel experiences. That's why we're dedicated to crafting bespoke packages
                                tailored specifically to your individual requirements. Your dream journey awaits,
                                designed just for you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-xl text-orange grid grid-cols-2 gap-5">
                    <StatsBox stats="25+" desc="Iteneraries"/>
                    <StatsBox stats="50+" desc="Destinations"/>
                    <StatsBox stats="12K+" desc="Happy Travelers"/>
                    <StatsBox stats="9k+" desc="Successful Trips"/>
                </div>
            </div>
        </motion.div>
    );
});

export default Stats;
