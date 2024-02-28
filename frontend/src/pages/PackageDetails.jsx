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
    setSearch(location.search)

    const getPackage = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/v1/packages/package/${search.get('id')}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            setPackageData(response.data)
        } catch (e) {
            toast.error('Error fetching package')
        }
    }
    useEffect(() => {
        getPackage()
    }, [search])
    return (
        <div className="w-full relative font-poppins flex flex-col items-center justify-start gap-[3.81rem] tracking-[normal]">
        <Banner {...{packageData}}/>
        <Tabs {...{packageData}}/>
    </div>
    );
};

export default PackageDetails;
