import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Index() {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only plays once
    threshold: 0.5, // This specifies the percentage of the element's visibility required to trigger the animation
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
        controls.start("visible");
    } else {
        controls.start("hidden");
    }
}, [controls, inView]);

  return (
    <>
      <div className="grid px-10 py-10 md:px-20 grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="p-4 flex items-center justify-center"
        >
          <img
            src="/partners/1.svg"
            alt="partner"
            style={{ width: "100px", height: "60px", objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-4 flex items-center justify-center"
        >
          <img src="/partners/2.svg" alt="partner" style={{ maxWidth: "50px" }} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 flex items-center justify-center"
        >
          <img src="/partners/3.svg" alt="partner" style={{ maxWidth: "100px" }} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 flex items-center justify-center"
        >
          <img src="/partners/4.png" alt="partner" style={{ maxWidth: "100px" }} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-4 flex items-center justify-center"
        >
            <img src="/partners/5.png" alt="partner" style={{ maxWidth: "150px" }} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-4 flex items-center justify-center"
        >
            <img src="/partners/6.png" alt="partner" style={{ maxWidth: "150px" }} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-4 flex items-center justify-center"
        >
            <img src="/partners/7.svg" alt="partner" style={{ maxWidth: "100px" }} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="p-4 flex items-center justify-center"
        >
            <img src="/partners/8.svg" alt="partner" style={{ maxWidth: "100px" }} />
        </motion.div>
    
      </div>
    </>
  );
}

export default Index;
