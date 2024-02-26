import { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{duration: 0.6}}
            className="p-10 md:p-20 h-full mb-10 text-secondary font-poppins mt-[40px] flex max-md:flex-col items-start justify-between gap-[2rem] max-w-full mq750:gap-[4rem] mq450:gap-[4rem]"
        >
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                transition={{duration: 0.6}}
                className="flex flex-col max-md:w-full w-[50%] items-start justify-center gap-[2rem] mq750:gap-[2rem]">
                <div className="flex flex-col items-start justify-center gap-[1rem]">
                    <motion.b
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={variants}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1rem] mq450:leading-[1.38rem]">
                        Key features
                    </motion.b>
                    <motion.h1
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={variants}
                        transition={{duration: 0.6, delay: 0.3}}
                        className="relative text-[1.75rem] leading-[120%]  font-inherit text-grey-scale-black">
                        What We Provide?
                    </motion.h1>
                </div>
                <div className="text-[1rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                    <motion.p
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={variants}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="m-0">
                        We Will Provides our best to best, we are here not only for one time earn from you, we promised
                        we will give our best to you, so after trip ends, others ko bhi hume hi suggest karein, and also
                        we want more Clients by your reference so just no worry about our service.
                    </motion.p>
                </div>
            </motion.div>
            <div
                className="md:w-[80%] text-left font-normal md:text-left flex flex-col gap-2  items-center justify-center max-w-[490px] text-grey-scale-black">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{duration: 0.6, delay: 0.6}}
                    className="rounded-8xl text-left md:text-left w-full rounded-3xl bg-white flex flex-row items-center justify-center py-[0.8rem] pr-[1.8rem] pl-[1.4rem] box-border gap-[1.2rem] max-w-full"
                >
                    <div className="rounded-8xl bg-orange flex flex-row rounded-2xl items-center justify-center p-[1.2rem]">
                        <div className="p-1 relative rounded-3xl bg-orange hidden"/>
                        <span className="material-symbols-outlined  text-[1.4rem] text-white">currency_rupee</span>
                    </div>
                    <div className="flex-1 flex flex-col test-left items-start justify-start gap-[0.3rem] max-w-full">
                        <b className="relative leading-[110%] text-[0.9rem] ">
                            Affordable Prices And Peak Enjoyment
                        </b>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{duration: 0.6, delay: 0.7}}
                    className="rounded-8xl text-left w-full md:text-left rounded-3xl bg-white flex flex-row items-center justify-center py-[0.8rem] pr-[1.8rem] pl-[1.4rem] box-border gap-[1.2rem] max-w-full"
                >
                    <div className="rounded-8xl bg-yellow flex rounded-2xl flex-rowitems-start justify-start p-[1.2rem]">
                        <div className="p-1 relative rounded-3xl bg-orange hidden"/>
                        <img
                            className="h-[1.2rem] w-[1.2rem] relative overflow-hidden shrink-0 z-[1]"
                            loading="eager"
                            alt=""
                            src="/images/calendar-1.svg"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-[0.3rem] max-w-full">
                        <b className="relative leading-[110%] text-[0.9rem]">
                            Daily Departures from the Heart of Delhi
                        </b>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{duration: 0.6, delay: 0.8}}
                    className="rounded-8xl text-left w-full rounded-3xl md:text-left bg-white flex flex-row items-center justify-center py-[0.8rem] pr-[1.8rem] pl-[1.4rem] box-border gap-[1.2rem] max-w-full"
                >
                    <div className="rounded-8xl bg-[#f85e9f] flex  rounded-2xl flex-row items-start justify-start p-[1.2rem]">
                        <div className="p-1 relative rounded-3xl bg-orange hidden"/>
                        <span className="material-symbols-outlined text-white text-[1.4rem]">group</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-[0.3rem]">
                        <b className="relative leading-[110%] text-[0.9rem]">
                            Collective Excursions
                        </b>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    );
});

export default Features;
