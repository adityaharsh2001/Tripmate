import React, {useEffect} from "react";
import Team from "../components/Team";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import axios from "axios";
import toast from "react-hot-toast";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

const AboutUsPage = () => {
    const [team, setTeam] = React.useState([]);
    const controls = useAnimation();
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1, y: 0, transition: {duration: 0.5},
            });
        }
    }, [controls, inView]);

    const getTeam = async () => {
        try {
            const response = await axios.get(`/api/v1/teams`);
            setTeam(response.data);
        } catch (e) {
            toast.error("Error fetching team");
        }
    }
    useEffect(() => {
        getTeam();
    }, []);
    return (<motion.div
        className="flex flex-col mt-[75px] text-secondary pb-10 justify-start items-start !font-poppins"
        animate={controls}
        initial={{opacity: 0, y: 50}}
        ref={ref}
    >
        <About/>
        <Team people={team}/>
        <div className="w-full h-1 py-10"/>
        <Testimonials/>
    </motion.div>);
};

export default AboutUsPage;
