import React, { useEffect } from "react";
import Team from "../components/Team";
import AboutsUsTestimonials from "../components/AboutsUsTestimonials";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactUs from "../components/ContactUs";

const AboutUsPage = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="flex flex-col text-secondary pb-10 justify-start items-start !font-poppins"
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            ref={ref}
        >
            <div className="flex overflow-hidden relative flex-col justify-center md:h-[50vh] px-0.5 w-full max-h-[500px] text-white max-md:max-w-full">
                <img
                    alt={"Explore top destination"}
                    loading="lazy"
                    srcSet="/images/about-us.jpeg"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative justify-center font-[Yesteryear] items-center w-full h-full bg-black bg-opacity-30 max-md:px-5 max-md:max-w-full">
                    <div className="text-[2.75rem] max-md:text-[1.5rem] max-md:leading-[120%] max-md:font-bold max-md:text-center max-md:mt-10">
                        About Us
                    </div>
                </div>
            </div>
            <div className="flex md:px-20 px-10 justify-center text-[1.44rem] items-center">
                <div className="m-auto w-full max-md:my-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col py-5 max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col items-start justify-start py-[1.25rem] box-border gap-[1rem] max-w-full">
                                    <b className="w-[9.94rem] relative tracking-[0.2em] leading-[120%] uppercase inline-block pr-[1.25rem]">
                                        Promotions
                                    </b>
                                    <h1 className="m-0 text-[2.5rem] leading-[120%] font-bold font-inherit text-grey-scale-black ">
                                        We Provide You Best Sightseeing Tours
                                    </h1>
                                    <p className="mt-8 text-base leading-7 text-black max-md:max-w-full">
                                        Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
                                    </p>
                                    <button className="cursor-pointer [border:none] py-2 px-4 bg-white rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-gainsboro">
                                        <b className="relative text-[0.88rem] leading-[120%] font-poppins text-secondary text-left">
                                            View Packages
                                        </b>
                                        <img
                                            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                                            alt=""
                                            src="/images/work-1.svg"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2531180b-37cf-4a38-9fd1-04884e97f125?apiKey=541b99f033084413ad47876370bcfa8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2531180b-37cf-4a38-9fd1-04884e97f125?apiKey=541b99f033084413ad47876370bcfa8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2531180b-37cf-4a38-9fd1-04884e97f125?apiKey=541b99f033084413ad47876370bcfa8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2531180b-37cf-4a38-9fd1-04884e97f125?apiKey=541b99f033084413ad47876370bcfa8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2531180b-37cf-4a38-9fd1-04884e97f125?apiKey=541b99f033084413ad47876370bcfa8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2531180b-37cf-4a38-9fd1-04884e97f125?apiKey=541b99f033084413ad47876370bcfa8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2531180b-37cf-4a38-9fd1-04884e97f125?apiKey=541b99f033084413ad47876370bcfa8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2531180b-37cf-4a38-9fd1-04884e97f125?apiKey=541b99f033084413ad47876370bcfa8c&"
                                className="grow w-full aspect-[1.41] max-md:mt-10 max-md:max-w-full max-sm:hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b3188c3fed788f252fb96fed27b1a9b6825fb8f1029f817dadb0ba5fd970689?apiKey=541b99f033084413ad47876370bcfa8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b3188c3fed788f252fb96fed27b1a9b6825fb8f1029f817dadb0ba5fd970689?apiKey=541b99f033084413ad47876370bcfa8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b3188c3fed788f252fb96fed27b1a9b6825fb8f1029f817dadb0ba5fd970689?apiKey=541b99f033084413ad47876370bcfa8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b3188c3fed788f252fb96fed27b1a9b6825fb8f1029f817dadb0ba5fd970689?apiKey=541b99f033084413ad47876370bcfa8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b3188c3fed788f252fb96fed27b1a9b6825fb8f1029f817dadb0ba5fd970689?apiKey=541b99f033084413ad47876370bcfa8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b3188c3fed788f252fb96fed27b1a9b6825fb8f1029f817dadb0ba5fd970689?apiKey=541b99f033084413ad47876370bcfa8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b3188c3fed788f252fb96fed27b1a9b6825fb8f1029f817dadb0ba5fd970689?apiKey=541b99f033084413ad47876370bcfa8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b3188c3fed788f252fb96fed27b1a9b6825fb8f1029f817dadb0ba5fd970689?apiKey=541b99f033084413ad47876370bcfa8c&"
                className="mt-20 w-full aspect-[2.86] max-md:mt-10 max-md:max-w-full"
            />
            <Team />
            <AboutsUsTestimonials />
            {/*<ContactUs />*/}
        </motion.div>
    );
};

export default AboutUsPage;
