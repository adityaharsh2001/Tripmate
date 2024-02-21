import { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Testimonials from "./Testimonials";

const Features = memo(() => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    // Animation variants
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    };

    // Trigger animation when in view
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div
            className="p-10 md:p-20 h-full mb-10 text-secondary font-poppins mt-[40px] flex max-md:flex-col items-start justify-between gap-[2rem] max-w-full mq750:gap-[4rem] mq450:gap-[4rem]"
        >
            <div className="flex flex-col max-md:w-full w-[50%] items-start justify-center gap-[2rem] mq750:gap-[2rem]">
                <div className="flex flex-col items-start justify-center gap-[1rem]">
                    <b className="relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1rem] mq450:leading-[1.38rem]">
                        Key features
                    </b>
                    <h1 className="relative text-[2.75rem] leading-[120%] font-bold font-inherit text-grey-scale-black">
                        We offer best services
                    </h1>
                </div>
                <div className="text-[1rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                    <p className="">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature
                    </p>
                    <p className="">from 45 BC.</p>
                </div>
            </div>
            <div
                className="md:w-[590px] text-left md:text-left w-full flex flex-col gap-3 items-center justify-center max-w-full text-grey-scale-black"
            >
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{ duration: 0.6 }}
                    className="rounded-13xl text-left md:text-left w-full bg-white flex flex-row items-center justify-center py-[1rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full"
                >
                    <div className="rounded-13xl bg-orange flex flex-row items-center justify-center p-[1.63rem]">
                        <div className="p-2 relative rounded-4xl bg-orange hidden" />
                        <img
                            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]"
                            loading="eager"
                            alt=""
                            src="/images/location-2.svg"
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-cente justify-cente  gap-[0.5rem] max-w-full">
                        <b className="relative leading-[120%] mq450:text-[1rem] text-xl">
                            We offer best services
                        </b>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{ duration: 0.6 }}
                    className=" rounded-13xl text-left  w-full md:text-left bg-white flex flex-row items-center justify-center py-[1rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full"
                >
                    <div className="rounded-13xl bg-yellow flex flex-row items-center justify-center p-[1.63rem]">
                        <div className="p-2 relative rounded-4xl bg-orange hidden" />
                        <img
                            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]"
                            loading="eager"
                            alt=""
                            src="/images/calendar-1.svg"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-[0.5rem] max-w-full">
                        <b className="relative leading-[120%] mq450:text-[1rem] text-xl">
                            Batches Every Day
                        </b>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{ duration: 0.6 }}
                    className=" rounded-13xl text-left w-full md:text-left bg-white flex lex-row items-center justify-center py-[1rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full"
                >
                    <div className="rounded-13xl bg-[#f85e9f] flex flex-row items-center justify-center p-[1.63rem]">
                        <div className="p-2 relative rounded-4xl bg-orange hidden" />
                        <img
                            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]"
                            loading="eager"
                            alt=""
                            src="/images/ticket-1.svg"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-[0.5rem] max-w-full">
                        <b className="relative leading-[120%] mq450:text-[1rem] text-xl">
                            Get Discount Price
                        </b>
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

export default Features;
