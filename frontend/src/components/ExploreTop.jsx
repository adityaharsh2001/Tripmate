import {memo, useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, EffectCoverflow, Autoplay} from "swiper/modules";
import "swiper/swiper-bundle.css";
import clsx from "clsx";
import PackageCard from "./PackageCard";
import {useInView} from "react-intersection-observer";

const ExploreTop = ({featuredPackages}) => {
    const controls = useAnimation();
    const {ref, inView} = useInView();
    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1, y: 0, transition: {duration: 1, easing: "easeInOut"},
            });
        } else {
            controls.start({opacity: 0, y: 50, transition: {duration: 1, easing: "easeInOut", delay: 0.5}});
        }
    }, [controls, inView]);

    return (<>
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={controls}
            className="self-stretch py-10 flex flex-col md:flex-row items-center justify-between py-4 px-10 md:px-20 box-border gap-[1.25rem] max-w-full text-left  text-secondary font-poppins"
        >
            <div className="flex-col items-start w-full py-10  w-full text-center justify-start gap-[1rem] max-w-full">
                <h1 className="m-0 relative text-[32px] font-bold font-inherit text-grey-scale-black">
                    Weekend Trips
                </h1>
            </div>
            <div className="md:flex hidden flex-row items-start justify-start gap-[2rem]">
                <button
                    className="hover:bg-gainsboro cursor-pointer prev p-6 bg-white rounded-full box-border flex flex-row items-center justify-center border-[1px] border-solid border-grey-scale-black-10 hover:bg-gray-200">
                    <img alt="" src="/images/arrowleft-1.svg"/>
                </button>
                <button
                    className="hover:bg-mediumpurple next cursor-pointer [border:none] p-6 bg-primary rounded-81xl shadow-[0px_181px_51px_rgba(0,_0,_0,_0),_0px_116px_46px_rgba(0,_0,_0,_0.01),_0px_65px_39px_rgba(0,_0,_0,_0.04),_0px_29px_29px_rgba(0,_0,_0,_0.06),_0px_7px_16px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.08)] flex flex-row items-center justify-center box-border">
                    <img
                        className="relative overflow-hidden shrink-0 object-contain z-[1]"
                        alt=""
                        src="/images/arrowleft-2.svg"
                    />
                </button>
            </div>
        </motion.div>
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={controls}
            className="mx-auto px-10 md:px-20 left-0 right-0 relative"
        >
            <Swiper
                grabCursor={true}
                // centeredSlides={true}
                loop={true}
                // slidesPerView={'auto'}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    }, 640: {
                        slidesPerView: 2,
                    }, 768: {
                        slidesPerView: 3,
                    }, 1024: {
                        slidesPerView: 3,
                    }, 1280: {
                        slidesPerView: 4,
                    }
                }}
                spaceBetween={10}
                autoplay={{
                    delay: 2500, disableOnInteraction: false,
                }}
                pagination={{el: '.swiper-pagination', clickable: true}}
                navigation={{nextEl: '.next', prevEl: '.prev', clickable: true}}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full h-[100%] mx-auto left-0 relative"
            >
                {
                    featuredPackages.map((featuredPackage, i) => (
                        <SwiperSlide key={i} style={{width: "350px"}}>
                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                animate={controls}
                                transition={{duration: 1, delay: i * 0.5}}
                            >
                                <PackageCard
                                    {...{featuredPackage}}
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))
                }
                <div className="slider-controler">
                    <div className="swiper-pagination relative w-[15rem] mx-auto mt-10"/>
                </div>
            </Swiper>
        </motion.div>
    </>);
};

export default ExploreTop;
