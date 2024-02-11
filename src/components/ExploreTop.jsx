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
    return (
        <div className={"h-screen"}>
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
                className="w-full px-20 flex flex-row items-center justify-center box-border max-w-full text-left text-[0.98rem] text-dimgray-200 font-urbanist">
                <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                    <img
                        className="h-[6.66rem] w-[6.69rem] absolute my-0 mx-[!important] top-[-3.12rem] right-[10.44rem] overflow-hidden shrink-0"
                        alt=""
                        src="/objects-1.svg"
                    />
                    <Swiper
                        centeredSlides={true}
                        spaceBetween={30}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        hashNavigation={{
                            watchState: true,
                        }}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next',
                        }}
                        loop={true}
                        modules={[Navigation, HashNavigation, Autoplay, Virtual]}
                    >
                        <SwiperSlide>
                            <div
                                className="md:h-[24.25rem] md:w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="md:h-[24.25rem] w-[10rem] md:w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="md:h-[24.25rem] w-[10rem] md:w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="md:h-[24.25rem] w-[10rem] md:w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
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
                        </SwiperSlide>

                    </Swiper>
                    {/*<Swiper*/}
                    {/*    spaceBetween={10}*/}
                    {/*    slidesPerView={3}*/}
                    {/*    navigation*/}
                    {/*    // pagination={{clickable: true}}*/}
                    {/*    loop={true}*/}
                    {/*    autoplay={{*/}
                    {/*        delay: 2500,*/}
                    {/*        disableOnInteraction: false,*/}
                    {/*    }}*/}
                    {/*    virtual*/}
                    {/*    className={clsx(*/}
                    {/*        "w-full",*/}
                    {/*    )}*/}
                    {/*>*/}
                    {/*    <SwiperSlide>*/}
                    {/*        <div*/}
                    {/*            className="h-[24.25rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">*/}
                    {/*            <img*/}
                    {/*                className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"*/}
                    {/*                loading="eager"*/}
                    {/*                alt=""*/}
                    {/*                src="/frame-17@2x.png"*/}
                    {/*            />*/}
                    {/*            <div*/}
                    {/*                className="self-stretch h-[4.69rem] flex flex-col items-start justify-start gap-[0.57rem]">*/}
                    {/*                <div className="self-stretch flex-1 relative font-medium">*/}
                    {/*                    Magnificent Shimla Manali Dharamshala Dalhousie Tour*/}
                    {/*                </div>*/}
                    {/*                <b className="self-stretch h-[1.75rem] relative text-[1.47rem] inline-block text-black mq450:text-[1.19rem]">*/}
                    {/*                    Himachal Pradesh*/}
                    {/*                </b>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </SwiperSlide>*/}
                    {/*    <SwiperSlide>*/}
                    {/*        <div*/}
                    {/*            className="h-[23.06rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">*/}
                    {/*            <img*/}
                    {/*                className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"*/}
                    {/*                alt=""*/}
                    {/*                src="/frame-17-1@2x.png"*/}
                    {/*            />*/}
                    {/*            <div className="self-stretch flex flex-col items-start justify-start gap-[0.57rem]">*/}
                    {/*                <a*/}
                    {/*                    className="self-stretch relative [text-decoration:underline] font-medium text-[inherit]"*/}
                    {/*                    href="https://www.sbgtourism.com/tour/mussoorie-package-from-delhi"*/}
                    {/*                    target="_blank"*/}
                    {/*                >*/}
                    {/*                    Mussoorie Tour Package*/}
                    {/*                </a>*/}
                    {/*                <b className="self-stretch h-[1.75rem] relative text-[1.47rem] inline-block text-black mq450:text-[1.19rem]">{`Uttarakhand `}</b>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </SwiperSlide>*/}
                    {/*    <SwiperSlide>*/}
                    {/*        <div*/}
                    {/*            className="h-[23.06rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">*/}
                    {/*            <img*/}
                    {/*                className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"*/}
                    {/*                alt=""*/}
                    {/*                src="/frame-17-2@2x.png"*/}
                    {/*            />*/}
                    {/*            <div className="self-stretch flex flex-col items-start justify-start gap-[0.57rem]">*/}
                    {/*                <div className="self-stretch relative font-medium">Jaipur</div>*/}
                    {/*                <b className="self-stretch relative text-[1.47rem] text-black mq450:text-[1.19rem]">*/}
                    {/*                    Rajasthan*/}
                    {/*                </b>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </SwiperSlide>*/}
                    {/*</Swiper>*/}
                </div>
            </div>
        </div>
    );
});

export default ExploreTop;
