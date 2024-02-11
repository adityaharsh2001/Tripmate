import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/modules";
import "swiper/swiper-bundle.css";

const slides = [];

for (let i = 0; i < 12; i++) {
    slides.push(
        <SwiperSlide key={`slide-${i}`} style={{listStyle: "none"}}>
            <div className="slide">
                <h3>{i}</h3>
            </div>
        </SwiperSlide>
    );
}
const Services = () => {
    return (
        <div className="px-20 self-stretch flex flex-row items-start justify-end max-w-full text-[1.44rem]">
            <div className="flex flex-row items-start justify-start relative max-w-full">
                <div
                    className="absolute my-0 mx-[!important] top-[-15.69rem] right-[13.81rem] rounded-[50%] bg-goldenrod [filter:blur(500px)]"/>
                <div
                    className="flex flex-row items-center justify-start [row-gap:20px] max-w-full z-[1] mq1275:flex-wrap">
                    <div
                        className="flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1rem] min-w-[27.75rem] max-w-full mq750:min-w-full mq1275:flex-1">
                        <b className="w-[9.94rem] relative tracking-[0.2em] leading-[120%] uppercase inline-block pr-[1.25rem] mq450:text-[1.13rem] mq450:leading-[1.38rem]">
                            Services
                        </b>
                        <h1 className="m-0 self-stretch relative text-[2.75rem] leading-[120%] font-bold font-inherit text-grey-scale-black mq750:text-[2.19rem] mq750:leading-[2.63rem] mq450:text-[1.63rem] mq450:leading-[2rem]">
                            Our top value categories for you
                        </h1>
                    </div>
                    <Swiper
                        id="swiper"
                        virtual
                        slidesPerView={1}
                        // slidesPerColumn={2}
                        // slidesPerColumnFill="row"
                        spaceBetween={10}
                        // slidesPerGroup={2}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false
                        // }}
                        // loop
                        onReachEnd={() => {
                            console.log("reach end");
                            const tmp = slides.unshift();
                            slides.push(tmp);
                        }}
                        navigation
                        pagination
                        style={{width: "100%", height: "100%"}}
                        modules={[Navigation, Pagination, Autoplay, Virtual]}
                    >
                        <SwiperSlide>
                            <div
                                className="w-[21.88rem] rounded-13xl bg-white shrink-0 flex flex-col items-center justify-start p-[4rem] box-border gap-[4rem] max-w-full mq450:gap-[4rem] mq450:py-[2.63rem] mq450:px-[1.25rem] mq450:box-border">
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
                                        className="self-stretch h-[5.44rem] relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                                        What looked like a small patch of purple grass, above five
                                        feet.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div
                                className="w-[21.88rem] rounded-13xl bg-white shrink-0 flex flex-col items-center justify-start p-[4rem] box-border gap-[4rem] max-w-full mq450:gap-[4rem] mq450:py-[2.63rem] mq450:px-[1.25rem] mq450:box-border">
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
                                        className="self-stretch h-[5.44rem] relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                                        What looked like a small patch of purple grass, above five
                                        feet.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div
                                className="w-[21.88rem] rounded-13xl bg-white shrink-0 flex flex-col items-center justify-start p-[4rem] box-border gap-[4rem] max-w-full mq450:gap-[4rem] mq450:py-[2.63rem] mq450:px-[1.25rem] mq450:box-border">
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
                                        className="self-stretch h-[5.44rem] relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                                        What looked like a small patch of purple grass, above five
                                        feet.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Services
