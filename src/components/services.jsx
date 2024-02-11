import React from 'react'
import {Swiper, SwiperSlide,} from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual,
    EffectCoverflow
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import clsx from "clsx";

const slides = [];

for (let i = 0; i < 4; i++) {
    slides.push(
        <SwiperSlide>
            {({isActive, isPrev, isNext}) => (
                <div
                    className={clsx("w-full rounded-13xl bg-white flex flex-col items-center justify-between p-[2rem] box-border gap-[2rem] max-w-full transition-all duration-300",
                        isActive || isNext ? "bg-white" : "bg-transparent")
                    }>
                    <img
                        className="w-[4rem] h-[4rem] relative object-cover"
                        loading="eager"
                        alt=""
                        src="/destination-1@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-center justify-start gap-[2rem]">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-[1.38rem] mq450:leading-[1.69rem]">
                            Best Tour Guide
                        </h3>
                        <div
                            className="self-stretch relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                            What looked like a small patch of purple grass, above five
                            feet.
                        </div>
                    </div>
                </div>
            )}
        </SwiperSlide>
    );
}
const Services = () => {
    return (
        <div
            className="self-stretch h-screen flex flex-col md:flex-row items-center justify-start md:justify-end text-[1.44rem]">
            <div
                className="md:pl-20 p-10 flex flex-col items-start justify-start py-[1.25rem] box-border gap-[1rem] max-w-full">
                <b className="w-[9.94rem] relative tracking-[0.2em] leading-[120%] uppercase inline-block pr-[1.25rem]">
                    Services
                </b>
                <h1 className="m-0 text-[2.5rem] leading-[120%] font-bold font-inherit text-grey-scale-black ">
                    Our top value categories for you
                </h1>
            </div>
            <Swiper
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                spaceBetween={30}
                modules={[Autoplay, Virtual]}
                className={"md:w-full w-[1200px] p-10 right-0 md:max-w-[calc(100%-20rem)] md:p-0 flex flex-row items-center justify-start relative md:right-[-10rem]"}
            >
                {slides}
            </Swiper>
        </div>
    )
}
export default Services
