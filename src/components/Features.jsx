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
            transition={{ duration: 0.6 }}
            className="p-10 md:p-20 h-full mb-10 text-secondary font-poppins mt-[40px] flex max-md:flex-col items-start justify-between gap-[2rem] max-w-full mq750:gap-[4rem] mq450:gap-[4rem]"
        >
            <motion.div 
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                transition={{ duration: 0.6 }}
            className="flex flex-col max-md:w-full w-[50%] items-start justify-center gap-[2rem] mq750:gap-[2rem]">
                <div className="flex flex-col items-start justify-center gap-[1rem]">
                    <motion.b
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={variants}
                        transition={{ duration: 0.6 , delay: 0.2}}
                        className="relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1rem] mq450:leading-[1.38rem]">
                        Key features
                    </motion.b>
                    <motion.h1 
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={variants}
                        transition={{ duration: 0.6 , delay: 0.3}}
                    className="relative text-[2.75rem] leading-[120%] font-bold font-inherit text-grey-scale-black">
                        What We Provide?
                    </motion.h1>
                </div>
                <div className="text-[1rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
                    <motion.p
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={variants}
                        transition={{ duration: 0.6 , delay: 0.4}}
                    className="m-0">
                        We Will Provides our best to best, we are here not only for one time earn from you, we promised we will give our best to you, so after trip ends, others ko bhi hume hi suggest karein, and also we want more Clients by your reference so just no worry about our service.
                    </motion.p>
                </div>
            </motion.div>
            <div
                className="md:w-[590px] text-left md:text-left w-full flex flex-col gap-3 items-center justify-center max-w-full text-grey-scale-black"
            >
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{ duration: 0.6 , delay: 0.6}}
                    className="rounded-13xl text-left md:text-left w-full bg-white flex flex-row items-center justify-center py-[1rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full"
                >
                    <div className="rounded-13xl bg-orange flex flex-row items-center justify-center p-[1.63rem]">
                        <div className="p-2 relative rounded-4xl bg-orange hidden"/>
                        <span className="material-symbols-outlined text-[2rem] text-white">currency_rupee</span>
                    </div>
                    <div className="flex-1 flex flex-col items-cente justify-cente  gap-[0.5rem] max-w-full">
                        <b className="relative leading-[120%] mq450:text-[1rem] text-lg">
                            Affordable Prices And Peak Enjoyment
                        </b>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{ duration: 0.6 , delay: 0.7}}
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
                        <b className="relative leading-[120%] mq450:text-[1rem] text-lg">
                            Daily Departures from the Heart of Delhi
                        </b>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={variants}
                    transition={{ duration: 0.6 , delay: 0.8}}
                    className=" rounded-13xl text-left w-full md:text-left bg-white flex lex-row items-center justify-center py-[1rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full"
                >
                    <div className="rounded-13xl bg-[#f85e9f] flex flex-row items-center justify-center p-[1.63rem]">
                        <div className="p-2 relative rounded-4xl bg-orange hidden"/>
                        <span className="material-symbols-outlined text-white text-[2rem]">group</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-[0.5rem] max-w-full">
                        <b className="relative leading-[120%] mq450:text-[1rem] text-lg">
                            Collective Excursions
                        </b>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
});

export default Features;
