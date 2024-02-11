import {memo} from "react";
import StatsBox from "./StatsBox";

const Stats = memo(() => {
    return (
            <div className="flex-1 w-full p-10 h-fit md:h-screen flex flex-row items-center justify-center gap-[2rem] flex-wrap max-w-full">
                <img
                    className="max-w-[40rem] w-full relative object-cover mq1275:flex-1"
                    loading="eager"
                    alt=""
                    src="/group-9238@2x.png"
                />
                <div
                    className="max-w-[30.31rem] w-full flex flex-col items-center justify-center box-border gap-[2rem]">
                    <div className="self-stretch flex flex-col gap-[0.5rem] items-center justify-between">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1.13rem] mq450:leading-[1.38rem]">
                                Your Trip Mate
                            </b>
                            <h1 className="m-0 self-stretch relative text-[2.75rem] leading-[120%] font-bold font-inherit text-grey-scale-black mq750:text-[2.19rem] mq750:leading-[2.63rem] mq450:text-[1.63rem] mq450:leading-[2rem]">
                                We helping you find your dream location
                            </h1>
                        </div>
                        <div
                            className="self-stretch relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC.
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[2.19rem] text-orange mq450:gap-[2rem]">
                        <StatsBox
                            frameWithImage="500+"
                            holidayPackage="Holiday Package"
                            frame="100"
                            luxuryHotel="4 ⭐️ Luxury Hotels"
                        />
                        <StatsBox
                            frameWithImage="7"
                            holidayPackage="Premium Airlines"
                            frame="2k+"
                            luxuryHotel="Happy Customer"
                        />
                    </div>
                </div>
            </div>
    );
});

export default Stats;
