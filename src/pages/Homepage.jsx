import React, {useEffect, useState} from "react";
import Hero from "../components/Hero";
import ExploreTop from "../components/ExploreTop";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Popup from "../components/Popup";
const Homepage = () => {

    return (
        <div className={"text-secondary mt-[150px] font-poppins"}>
            <Hero/>
            <Partners/>
            <ExploreTop/>
            <Stats/>
            <Features/>
            <Testimonials/>
        </div>
    );
};

export default Homepage;
