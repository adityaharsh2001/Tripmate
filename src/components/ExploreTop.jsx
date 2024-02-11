import {memo} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    HashNavigation,
    Autoplay,
    Virtual,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import clsx from "clsx";

const ExploreTop = memo(() => {
    const slides = [];
    for (let i = 0; i < 5; i++) {
        slides.push(
            <SwiperSlide>
                <div
                    className="w-72 text-left relative rounded-xl duration-500 ">
                    <img
                        src="/image-3@2x.png"
                        alt="Product" className=" shadow-m hover:shadow-xl h-72 w-72 object-cover rounded-xl"/>
                    <div className="flex items-center absolute top-0 left-0 bg-white rounded-br-xl p-4">
                        <span className="text-lg font-semibold text-black cursor-auto">₹149/person</span>
                    </div>
                    <div className="w-72 flex flex-col gap-2">
                        <div className="text-gray-200 mr-3 text-[12px] mt-2">Magnificent Shimla Manali Dharamshala
                            Dalhousie Tour
                        </div>
                        <div className="text-lg font-bold text-black truncate block capitalize">Himachal Pradesh</div>
                    </div>
                </div>
            </SwiperSlide>
        );
    }
    return (
        <div className={"md:min-h-screen"}>
            <div
                className="self-stretch flex flex-row items-start justify-between py-[4rem] px-20 box-border gap-[1.25rem] max-w-full text-left text-[1.44rem] text-secondary font-poppins">
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
            <div
                className="w-full px-20 flex flex-row items-center justify-center box-border max-w-full text-left text-[0.98rem] text-dimgray-200 font-poppins">
                <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        navigation = {
                            {
                                nextEl: ".next",
                                prevEl: ".prev",
                            }
                        }
                        className={clsx("w-full", "max-w-full")}
                        modules={[Navigation, Pagination, HashNavigation, Autoplay, Virtual]}
                    >
                        {slides}
                    </Swiper>
                </div>
            </div>
        </div>
);
});

export default ExploreTop;
