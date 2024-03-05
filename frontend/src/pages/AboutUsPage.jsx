import React, {useEffect} from "react";
import AboutsUsTestimonials from "../components/AboutsUsTestimonials";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import axios from "axios";
import toast from "react-hot-toast";
import Team from "../components/Team";

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
        <Team/>
        <AboutsUsTestimonials people={team}/>
    </motion.div>);
};

export default AboutUsPage;
