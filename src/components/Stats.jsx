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

    const scale = 1 + scrollY * 0.0002; // Adjust the scale factor as needed

    return (
        <motion.div style={{scale}} className="flex-1 w-full p-5 md:p-10 h-full flex flex-col md:flex-row items-center gap-10 text-[1.2rem] justify-center gap-[8rem]  max-w-full">
            <img
                className="md:w-[300px] md:relative md:object-cover"
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
                            We helping you find your dream location
                        </h1>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-xl text-orange">
                    <StatsBox frameWithImage="500+" holidayPackage="Holiday Package" frame="100"
                              luxuryHotel="4 ⭐️ Luxury Hotels"/>
                    <StatsBox frameWithImage="7" holidayPackage="Premium Airlines" frame="2k+"
                              luxuryHotel="Happy Customer"/>
                </div>
            </div>
        </motion.div>
    );
});

export default Stats;
