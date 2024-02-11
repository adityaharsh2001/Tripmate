import {memo} from "react";
import Testimonials from "./Testimonials";

const Features = memo(() => {
    return (<div className={"p-10 md:p-20 h-fit flex md:flex-row items-center flex-col mt-[40px] md:h-screen"}>
        <div className="flex flex-col h-fit items-center justify-between box-border  text-secondary font-poppins">
            <div
                className="self-stretch flex flex-col items-center justify-between gap-[2rem] max-w-full mq750:gap-[4rem] mq450:gap-[4rem]">
                <div className="self-stretch flex flex-col items-center justify-center gap-[2rem] mq750:gap-[2rem]">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
                        <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1.13rem] mq450:leading-[1.38rem]">
                            Key features
                        </b>
                        <h1 className="m-0 self-stretch relative text-[2.75rem] leading-[120%] font-bold font-inherit text-grey-scale-black">
                            We offer best services
                        </h1>
                    </div>
                    <div className="text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                        <p className="m-0">
                            Contrary to popular belief, Lorem Ipsum is not simply random
                            text. It has roots in a piece of classical Latin literature
                        </p>
                        <p className="m-0">from 45 BC.</p>
                    </div>
                </div>
                <div
                    className="self-stretch md:w-[590px] text-center md:text-left w-[400px] flex flex-col gap-3 items-center justify-center max-w-full text-grey-scale-black">
                    <div
                        className="self-stretch rounded-13xl text-center md:text-left bg-white flex flex-col md:flex-row items-center justify-center py-[1rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full">
                        <div
                            className="rounded-13xl bg-orange flex flex-row items-center justify-center p-[1.63rem]">
                            <div className="p-2 relative rounded-4xl bg-orange hidden"/>
                            <img
                                className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]"
                                loading="eager"
                                alt=""
                                src="/location-2.svg"
                            />
                        </div>
                        <div
                            className="flex-1 flex flex-col items-cente  justify-cente  gap-[0.5rem] max-w-full">
                            <b className="relative leading-[120%] mq450:text-[1.13rem] text-xl">
                                We offer best services
                            </b>
                            <div
                                className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50">
                                Lorem Ipsum is not simply random text
                            </div>
                        </div>
                    </div>
                    <div
                        className="self-stretch rounded-13xl text-center md:text-left bg-white flex flex-col md:flex-row items-center justify-center py-[1rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full">
                        <div
                            className="rounded-13xl bg-yellow flex flex-row items-center justify-center p-[1.63rem]">
                            <div className="p-2 relative rounded-4xl bg-orange hidden"/>
                            <img
                                className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]"
                                loading="eager"
                                alt=""
                                src="/calendar-1.svg"
                            />
                        </div>
                        <div
                            className="flex-1 flex flex-col items-cente  justify-cente  gap-[0.5rem] max-w-full">
                            <b className="relative leading-[120%] mq450:text-[1.13rem] text-xl">
                                Batches Every Day
                            </b>
                            <div
                                className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50">
                                Lorem Ipsum is not simply random text
                            </div>
                        </div>
                    </div>
                    <div
                        className="self-stretch rounded-13xl text-center md:text-left bg-white flex flex-col md:flex-row items-center justify-center py-[1rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full">
                        <div
                            className="rounded-13xl bg-[#f85e9f] flex flex-row items-center justify-center p-[1.63rem]">
                            <div className="p-2 relative rounded-4xl bg-orange hidden"/>
                            <img
                                className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]"
                                loading="eager"
                                alt=""
                                src="/ticket-1.svg"
                            />
                        </div>
                        <div
                            className="flex-1 flex flex-col items-cente  justify-cente  gap-[0.5rem] max-w-full">
                            <b className="relative leading-[120%] mq450:text-[1.13rem] text-xl">
                                Get Discount Price
                            </b>
                            <div
                                className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50">
                                Lorem Ipsum is not simply random text
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="h-fit w-full flex flex-row items-center p-4 justify-center box-border max-w-full">
            <img
                loading="eager"
                alt=""
                src="/features.svg"
                className={"max-w-[28rem] w-full relative object-cover mq1275:flex-1"}
            />
        </div>
    </div>);
});

export default Features;
