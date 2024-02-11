import {memo} from "react";

const ExploreTop = memo(() => {
    return (
        <>
            <div
                className="self-stretch flex flex-row items-start justify-between py-[4rem] px-20 box-border gap-[1.25rem] max-w-full text-left text-[1.44rem] text-secondary font-urbanist">
                <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full">
                    <b className="relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1.13rem] mq450:leading-[1.38rem]">
                        Top Destination
                    </b>
                    <h1 className="m-0 relative text-[2.75rem] font-bold font-inherit text-grey-scale-black">
                        Explore top destination
                    </h1>
                </div>
                <div className="flex flex-row items-start justify-start gap-[2rem]">
                    <button
                        className="cursor-pointer p-[2.38rem] bg-white h-[6.25rem] w-[6.25rem] rounded-81xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-grey-scale-black-10">
                        <div
                            className="h-[6.25rem] w-[6.25rem] relative rounded-81xl bg-white box-border hidden border-[1px] border-solid border-grey-scale-black-10"/>
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/arrowleft-1.svg"
                        />
                    </button>
                    <button
                        className="cursor-pointer [border:none] p-[2.38rem] bg-primary h-[6.25rem] w-[6.25rem] rounded-81xl shadow-[0px_181px_51px_rgba(0,_0,_0,_0),_0px_116px_46px_rgba(0,_0,_0,_0.01),_0px_65px_39px_rgba(0,_0,_0,_0.04),_0px_29px_29px_rgba(0,_0,_0,_0.06),_0px_7px_16px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.08)] flex flex-row items-center justify-center box-border">
                        <div
                            className="h-[6.25rem] w-[6.25rem] relative rounded-81xl bg-primary [transform:_rotate(180deg)] hidden"/>
                        <img
                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 object-contain z-[1]"
                            alt=""
                            src="/arrowleft-2.svg"
                        />
                    </button>
                </div>
            </div>
            <div
                className="w-full px-20 flex flex-row items-start justify-start box-border max-w-full text-left text-[0.98rem] text-dimgray-200 font-urbanist">
                <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                    <img
                        className="h-[6.66rem] w-[6.69rem] absolute my-0 mx-[!important] top-[-3.12rem] right-[10.44rem] overflow-hidden shrink-0"
                        alt=""
                        src="/objects-1.svg"
                    />
                    <div
                        className="flex-1 overflow-hidden flex flex-row flex-wrap items-center justify-between gap-[1.25rem] max-w-full z-[1]">
                        <div
                            className="h-[24.25rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
                            <img
                                className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"
                                loading="eager"
                                alt=""
                                src="/frame-17@2x.png"
                            />
                            <div
                                className="self-stretch h-[4.69rem] flex flex-col items-start justify-start gap-[0.57rem]">
                                <div className="self-stretch flex-1 relative font-medium">
                                    Magnificent Shimla Manali Dharamshala Dalhousie Tour
                                </div>
                                <b className="self-stretch h-[1.75rem] relative text-[1.47rem] inline-block text-black mq450:text-[1.19rem]">
                                    Himachal Pradesh
                                </b>
                            </div>
                        </div>
                        <div
                            className="h-[23.06rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
                            <img
                                className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/frame-17-1@2x.png"
                            />
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.57rem]">
                                <a
                                    className="self-stretch relative [text-decoration:underline] font-medium text-[inherit]"
                                    href="https://www.sbgtourism.com/tour/mussoorie-package-from-delhi"
                                    target="_blank"
                                >
                                    Mussoorie Tour Package
                                </a>
                                <b className="self-stretch h-[1.75rem] relative text-[1.47rem] inline-block text-black mq450:text-[1.19rem]">{`Uttarakhand `}</b>
                            </div>
                        </div>
                        <div
                            className="h-[23.06rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
                            <img
                                className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/frame-17-2@2x.png"
                            />
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.57rem]">
                                <div className="self-stretch relative font-medium">Jaipur</div>
                                <b className="self-stretch relative text-[1.47rem] text-black mq450:text-[1.19rem]">
                                    Rajasthan
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default ExploreTop;
