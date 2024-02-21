import {memo} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {
    Navigation, Pagination, EffectCoverflow, Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import clsx from "clsx";
import PackageCard from "./PackageCard";

const ExploreTop = memo(() => {
    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(<SwiperSlide style={{width: "300px"}}> {/* Adjust width as needed */}
            <PackageCard Place={"Manali, Himachal Pradesh"} price={200}
                         Description={"Travel and find happiness within yourself. Experience holidays in Manali, Kasol, Atal Tunnel"}/>
        </SwiperSlide>);
    }
    return (<>
            <div
                className="self-stretch flex flex-col md:flex-row items-center justify-between py-4 px-10 md:px-20 box-border gap-[1.25rem] max-w-full text-left text-[1.44rem] text-secondary font-poppins">
                <div className="flex-col items-start justify-start gap-[1rem] max-w-full">
                    <b className="relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1.13rem] mq450:leading-[1.38rem]">
                        Top Destination
                    </b>
                    <h1 className="m-0 relative text-[1.75rem] md:text-[2.75rem] font-bold font-inherit text-grey-scale-black">
                        Explore top destination
                    </h1>
                </div>
                <div className="md:flex hidden flex-row items-start justify-start gap-[2rem]">
                    <button
                        className="hover:bg-gainsboro cursor-pointer prev p-6 bg-white rounded-full box-border flex flex-row items-center justify-center border-[1px] border-solid border-grey-scale-black-10 hover:bg-gray-200">
                        <img
                            alt=""
                            src="/arrowleft-1.svg"
                        />
                    </button>
                    <button
                        className="hover:bg-mediumpurple next cursor-pointer [border:none] p-6 bg-primary rounded-81xl shadow-[0px_181px_51px_rgba(0,_0,_0,_0),_0px_116px_46px_rgba(0,_0,_0,_0.01),_0px_65px_39px_rgba(0,_0,_0,_0.04),_0px_29px_29px_rgba(0,_0,_0,_0.06),_0px_7px_16px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.08)] flex flex-row items-center justify-center box-border">
                        <img
                            className="relative overflow-hidden shrink-0 object-contain z-[1]"
                            alt=""
                            src="/arrowleft-2.svg"
                        />
                    </button>
                </div>
            </div>
            <div className="md:w-[40rem] mx-auto relative">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0, stretch: 0, depth: 100, modifier: 5.5,
                    }}
                    pagination={{el: '.swiper-pagination', clickable: true}}
                    navigation={{
                        nextEl: '.next', prevEl: '.prev', clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="w-[40rem] h-[100%] max-w-[100%] max-h-[100%] relative"
                >
                    {slides}
                    <div className="slider-controler">
                        <div className="swiper-pagination relative w-[15rem] mx-auto mt-10"/>
                    </div>
                </Swiper>
            </div>
        </>);
});

export default ExploreTop;
