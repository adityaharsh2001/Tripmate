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

const Homepage = () => {
    const {isOpen, closePopup} = usePopup();
    const [categories, setCategories] = useState([{}])
    const [featuredPackages, setFeaturedPackages] = useState([{}])
    const getCategory = async () => {
        try {
            const response = await axios.get(`https://admintm.geekyadi.dev/api/v1/packages/categories`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            setCategories(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    const getFeaturedPackages = async () => {
        try {
            const response = await axios.get(`https://admintm.geekyadi.dev/api/v1/packages/featured`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            setFeaturedPackages(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getCategory()
        getFeaturedPackages()
    }, [])
    return (
        <div className={"text-secondary font-poppins"}>
            <Popup isOpen={isOpen} closePopup={closePopup}/>
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
