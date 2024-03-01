import PackageCard from "../components/PackageCard";
import axios from "axios";
import {useEffect, useState} from "react";
import HeroSearch from "../components/Hero-Search";
import Banner from "../components/Banner";
import {useLocation} from "react-router-dom";

const Explore = () => {
    const [categories, setCategories] = useState([]);
    const [packages, setPackages] = useState([]);
    const location = useLocation();
    const getPackagesByCategory = async () => {
        try {
            const response = await axios.get(
                `/api/v1/packages/packages${window.location.search}`,
            );
            setPackages(response.data);
        } catch (error) {
            console.error("Error fetching packages:", error);
        }
    };
    useEffect(() => {
        getPackagesByCategory();
    }, [location.search]);

    return (
        <div className="flex flex-col justify-start items-start pb-12 !font-poppins">
            <div className="flex relative flex-col w-full items-center justify-start gap-5">
                <Banner name={"Explore"} bannerImage={"/images/20008474_6230276.svg"}/>
                <HeroSearch className={"absolute -bottom-10 max-md:-bottom-5 px-5 mt-5 z-40"} categories={categories}/>
            </div>
            <div className="flex items-start px-10 md:px-20 h-[60vh] justify-center gap-10 w-full">
                <div
                    className="flex w-full items-center max-md:justify-center overflow-auto self-center mt-10 flex-wrap gap-[20px] max-md:mt-10 max-md:max-w-full">
                    {packages.map((pack) => (<PackageCard featuredPackage={pack}/>))}
                </div>
            </div>
        </div>);
};

export default Explore;
