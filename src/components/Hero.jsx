import {motion, AnimatePresence} from "framer-motion";
import HeroSearch from "./Hero-Search";

const HeroSection = () => {
    return (
        <div className="flex flex-col h-screen items-center px-10 md:px-20 justify-start gap-10 text-[42px]">
            <div className="w-full flex items-center justify-center">
                <AnimatePresence>
                    <motion.div
                        className="flex w-full text-left max-h-full flex-col items-center justify-center"
                    >
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col items-center justify-between gap-[2rem]">
                                <div
                                    className="m-0 w-full relative md:text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 text-[2.5rem]">
                                    <p className="m-0">
                                        <span className="text-black">{`Travel `}</span>
                                        <span>top destination</span>
                                        <span className="text-black">{` `}</span>
                                    </p>
                                    <p className="m-0 text-black">in India</p>
                                </div>
                                <div
                                    className="relative text-[1.13rem] w-full leading-[160%] font-body text-grey-scale-black-50 inline-block">
                                    <p className="m-0">
                                        We always make our customer happy by providing
                                    </p>
                                    <p className="m-0">{`as many choices as possible `}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -50}}
                        transition={{duration: 0.6}}
                        className="flex w-full items-center justify-center"
                    >
                        <img className="w-full md:w-[35vw]" src="/images/hero.svg" alt="hero"/>
                    </motion.div>
                </AnimatePresence>
            </div>
            <HeroSearch/>
        </div>
    );
};

export default HeroSection;
