import {memo} from "react";
import {
    Navigation, Pagination, HashNavigation, Autoplay, Virtual,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import clsx from "clsx";
import {Swiper, SwiperSlide} from "swiper/react";

const Testimonials = memo(() => {
            const slides = [];
            for (let i = 0; i < 5; i++) {
                slides.push(
                    <SwiperSlide>
                        <div
                            className="flex flex-col max-md:max-w-full max-sm:self-stretch max-sm:my-auto max-sm:mr-auto max-sm:w-full max-sm:h-screen">
                            <div
                                className="text-2xl font-bold leading-7 text-center text-pink-500 uppercase tracking-[4.6px] max-md:max-w-full">
                                Testimonials
                            </div>
                            <div
                                className="mt-4 font-bold text-center text-[2.75rem] text-gray-900 leading-[52.8px] max-md:max-w-full max-sm:self-stretch max-sm:text-[44pxx]">
                                Trust our clients
                            </div>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ed0606c55f9c96b8f2cd09c431f689f9a7e4870678ed421d2b2ad279d010fd?apiKey=541b99f033084413ad47876370bcfa8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ed0606c55f9c96b8f2cd09c431f689f9a7e4870678ed421d2b2ad279d010fd?apiKey=541b99f033084413ad47876370bcfa8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ed0606c55f9c96b8f2cd09c431f689f9a7e4870678ed421d2b2ad279d010fd?apiKey=541b99f033084413ad47876370bcfa8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ed0606c55f9c96b8f2cd09c431f689f9a7e4870678ed421d2b2ad279d010fd?apiKey=541b99f033084413ad47876370bcfa8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ed0606c55f9c96b8f2cd09c431f689f9a7e4870678ed421d2b2ad279d010fd?apiKey=541b99f033084413ad47876370bcfa8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ed0606c55f9c96b8f2cd09c431f689f9a7e4870678ed421d2b2ad279d010fd?apiKey=541b99f033084413ad47876370bcfa8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ed0606c55f9c96b8f2cd09c431f689f9a7e4870678ed421d2b2ad279d010fd?apiKey=541b99f033084413ad47876370bcfa8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ed0606c55f9c96b8f2cd09c431f689f9a7e4870678ed421d2b2ad279d010fd?apiKey=541b99f033084413ad47876370bcfa8c&"
                                className="self-center mt-16 w-32 max-w-full rounded-full aspect-square max-md:mt-10"
                            />
                            <div
                                className="mt-16 text-3xl font-bold leading-8 text-center text-gray-900 text-opacity-80 max-md:mt-10 max-md:max-w-full">
                                Mark Smith{" "}
                                <span className="text-2xl leading-7 text-gray-900">
              / Travel Enthusiast
            </span>
                            </div>
                            <div className="flex gap-4 justify-center self-center mt-8 w-56 max-w-full">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <img width="28" height="28" src="https://img.icons8.com/fluency/48/star--v1.png"
                                         alt="star--v1"/>
                                ))}
                            </div>
                            <div
                                className="mt-8 text-2xl italic font-thin leading-9 text-center text-gray-900 text-opacity-80 max-md:max-w-full">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots
                                <br/>
                                in a piece of classical Latin literature from 45 BC.
                            </div>
                        </div>
                    </SwiperSlide>
                );
            }

            return (
                <div
                    className="flex overflow-hidden md:px-20 w-full px-10 py-10 relative top-0 flex-col text-black justify-center">
                    <div
                        className="flex relative gap-0 items-center py-1">
                        <button
                            className="hover:bg-gainsboro cursor-pointer prev p-6 bg-white rounded-full box-border flex flex-row items-center justify-center border-[1px] border-solid border-grey-scale-black-10 hover:bg-gray-200">
                            <img alt="" src="/arrowleft-1.svg"/></button>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                            }}
                            navigation={
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
                        <button
                            className="hover:bg-mediumpurple next cursor-pointer [border:none] p-6 bg-primary rounded-81xl flex flex-row items-center justify-center box-border">
                            <img className="relative overflow-hidden shrink-0 object-contain z-[1]" alt=""
                                 src="/arrowleft-2.svg"/></button>
                    </div>
                </div>
            );
        }
    )
;

export default Testimonials;
