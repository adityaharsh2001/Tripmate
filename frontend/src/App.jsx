import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation,} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PackageDetails from "./pages/PackageDetails";
import AboutUsPage from "./pages/AboutUsPage";
import Explore from "./pages/Explore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { usePopup} from './context/PopUpContext';
import Popup from "./components/Popup";
import axios from "axios";

function App() {
    const location = useLocation();
    const pathname = location.pathname;
    const {isOpen, closePopup, openPopup} = usePopup();
    const [categories, setCategories] = useState([{}])
    const [featuredPackages, setFeaturedPackages] = useState([{}])
    const getCategory = async () => {
        try {
            const response = await axios.get(`/api/v1/packages/categories`,
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
            const response = await axios.get(`/api/v1/packages/featured`,
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
    useEffect(() => {
            const visited = localStorage.getItem('visited')
            console.log(visited)
            if (!visited) {
                setTimeout(() => {
                    openPopup()
                    localStorage.setItem('visited', 'true')
                }, 3000)
            }
        }
        , [])
    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/":
                title = "";
                metaDescription = "";
                break;
            case "/package-detail-page-tour-plan":
                title = "";
                metaDescription = "";
                break;
            case "/package-detail-page-tour-gallery":
                title = "";
                metaDescription = "";
                break;
            case "/package-detail-page-tour-information":
                title = "";
                metaDescription = "";
                break;
            case "/about-us-page":
                title = "";
                metaDescription = "";
                break;
            case "/main-frame":
                title = "";
                metaDescription = "";
                break;
            case "/main-frame1":
                title = "";
                metaDescription = "";
                break;
            case "/frame-container":
                title = "";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

    return (
        <>
            <Popup isOpen={isOpen} closePopup={closePopup} categories={categories}/>
            <div className={"App bg-whitesmoke"}>
                <Header/>
                <div className="bounce float flex flex-col gap-5 fixed bottom-10 right-10 z-50">
                    <a href="http://wa.me/8700045647?text=Hello%20I%20want%20to%20book%20a%20tour"
                       className={"bg-[#25d366] w-[50px] rounded-full p-4 flex items-center justify-center shadow-lg"}
                       target="_blank">
                        <i className="fa fa-whatsapp"/>
                    </a>
                    <a href="tel:393661273612"
                       className={"bg-primary text-white rounded-full p-4 flex items-center justify-center shadow-lg"}>
                        <i className="fa fa-phone"/>
                    </a>
                </div>
                <Routes>
                    <Route path="/" element={<Homepage categories={categories} featuredPackages={featuredPackages}/>}/>
                    <Route
                        path="/package-details"
                        element={<PackageDetails/>}
                    />
                    <Route path="/about-us" element={<AboutUsPage/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                    <Route path="/contact" element={<Contact categories={categories}/>}/>
                </Routes>
                <Footer/>
            </div>
        </>);
}

export default App;
