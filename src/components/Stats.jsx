import { memo, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StatsBox from "./StatsBox";

const Stats = memo(() => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only plays once
    threshold: 0.5, // This specifies the percentage of the element's visibility required to trigger the animation
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="flex-1 w-full p-5 md:p-10 relative h-full flex flex-col md:flex-row items-center gap-10 text-[1.2rem] justify-center gap-[8rem] max-w-full"
    >
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
        src="/images/stats.svg"
        className="md:w-[500px] max:w-full relative md:object-cover max-md:max-w-full max-md:w-[50%] max-md:h-[300px] max-md:object-cover max-md:object-center max-md:rounded-13xl max-md:overflow-hidden max-md:shrink-0 max-md:z-[1]"
        loading="eager"
        alt=""
      />
      <div className="max-w-full md:max-w-[50%] flex flex-col items-center justify-center box-border gap-[1rem]">
        <div className="self-stretch flex flex-col gap-[0.5rem] items-center justify-between">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Your Trip Mate
            </b>
            <h1 className="m-0 self-stretch relative text-[2rem] leading-[120%] font-bold font-inherit text-grey-scale-black md:text-xl lg:text-2xl xl:text-3xl">
              We will helping you to fulfil your dream destination
            </h1>
            <div className="text-[1rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
              <p className="">
                We understand that every traveler's preferences are unique, and their needs vary when it comes to travel experiences. That's why we're dedicated to crafting bespoke packages tailored specifically to your individual requirements. Your dream journey awaits, designed just for you.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5 }}
          className="text-xl w-full text-orange grid grid-cols-2 gap-5"
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatsBox stats="25+" desc="Itineraries" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatsBox stats="50+" desc="Destinations" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatsBox stats="12K+" desc="Happy Travelers" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StatsBox stats="9k+" desc="Successful Trips" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

export default Stats;
