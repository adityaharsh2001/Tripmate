import React, {useEffect, useState} from "react";
import Hero from "../components/Hero";
import ExploreTop from "../components/ExploreTop";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Popup from "../components/Popup";
import {usePopup} from '../context/PopUpContext';
import Category from "../components/Catogeries";
import axios from "axios";

const Homepage = ({categories, featuredPackages}) => {
    return (
        <div className={"text-secondary font-poppins"}>
            <Hero/>
            <ExploreTop {...{featuredPackages}}/>
            <Category {...{categories}}/>
            <Stats/>
            <Features/>
            <Partners/>
            <Testimonials/>
        </div>
    );
};

export default Homepage;
