import Banner from "../components/Banner";
import Tabs from "../components/Tabs";
import {useLocation, useSearchParams} from "react-router-dom";
import * as React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useEffect} from "react";

const PackageDetails = () => {
    const location = useLocation()
    const [search, setSearch] = useSearchParams()
    const [packageData, setPackageData] = React.useState({})
    const [categories, setCategories] = React.useState([{}])
    setSearch(location.search)

    const getPackage = async () => {
        try {
            const response = await axios.get(`/api/v1/packages/package/${search.get('id')}`,
            )
            setPackageData(response.data)
        } catch (e) {
            toast.error('Error fetching package')
        }
    }
    const getCategory = async () => {
        try {
            const response = await axios.get(`/api/v1/packages/categories`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            console.log(response.data)
            setCategories(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getPackage()
        getCategory()
    }, [search])

    return (
        <div
            className="w-full relative font-poppins flex flex-col items-center justify-start gap-[3.81rem] tracking-[normal]">
            <Banner {...{bannerImage: packageData.bannerImage, name: packageData.name}}/>
            <Tabs {...{packageData , categories}}/>
        </div>
    );
};

export default PackageDetails;
