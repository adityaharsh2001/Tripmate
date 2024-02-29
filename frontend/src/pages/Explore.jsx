import PackageCard from "../components/PackageCard";
import axios from "axios";
import {useEffect, useState} from "react";
import {useSearchParams, useNavigate} from "react-router-dom";

const Explore = () => {
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [packages, setPackages] = useState([]);
    const [search, setSearch] = useSearchParams();
    const navigate = useNavigate();

    const getAllCategories = async () => {
        try {
            const response = await axios.get(
                `https://admintm.geekyadi.dev/api/v1/packages/categories`,
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("token"))?.access
                                .token
                        }`,
                    },
                }
            );
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const getPackagesByCategory = async () => {
        try {
            const response = await axios.get(
                `https://admintm.geekyadi.dev/api/v1/packages/packages${window.location.search}`,
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("token"))?.access
                                .token
                        }`,
                    },
                }
            );
            setPackages(response.data);
        } catch (error) {
            console.error("Error fetching packages:", error);
        }
    };

    const handleCategoryChange = async (e, index) => {
        const selectedCategory = e.target.value;
        const isChecked = e.target.checked;

        let updatedCategories;
        if (isChecked) {
            updatedCategories = [...category, selectedCategory];
        } else {
            updatedCategories = category.filter(item => item !== selectedCategory);
        }

        setCategory(updatedCategories);
        const params = new URLSearchParams(search);
        params.delete("category");
        updatedCategories.forEach(cat => params.append("category", cat)); // Add updated categories
        setSearch(params);
        await getPackagesByCategory();
    };
    useEffect(() => {
        console.log("Category changed", window.location.search);
    }, [category]);
    useEffect(() => {
        // Set category state based on query parameter
        const categoryParam = search.get("category");
        if (categoryParam) {
            setCategory([categoryParam]);
        }

        getAllCategories();
        getPackagesByCategory();
    }, []);
    return (<div className="flex flex-col pb-12 justify-start items-start !font-poppins">
        <div
            className="flex overflow-hidden relative flex-col justify-center px-0.5 w-full max-h-[500px] text-white max-md:max-w-full">
            <img
                alt={"Explore top destination"}
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&"
                className="object-cover absolute inset-0 size-full"
            />
            <div
                className="flex relative justify-center items-center px-16 pb-12 w-full h-full bg-black bg-opacity-30 max-md:px-5 max-md:max-w-full">
                <div
                    className="text-[2.75rem] pt-56 mx-auto mt-7 mb-44 w-full font-extrabold text-center max-md:pt-10 max-md:mb-10 max-md:max-w-full max-md:text-4xl">
                    Explore India's wonders with our curated travel packages, each
                    journey a new adventure.
                </div>
            </div>
        </div>
        {" "}
        <div className="flex md:px-20 px-10  items-start justify-center gap-10 w-full">
            <div className="flex flex-col items-start mt-10 justify-center gap-5 w-1/3">
                <div clasName="flex text-sm flex-col px-4 bg-primary items-center justify-center gap-5 w-full">
                    <span className={"font-bold"}>Destination</span>
                    <div className="flex flex-col items-start justify-center mt-5 gap-5 w-full">
                        {categories.map((category, index) => (<div class="flex items-center gap-5">
                            <input type={'checkbox'} id={category.name} name={category.name}
                                   onChange={(e) => handleCategoryChange(e, index)}
                                   value={category.name}/>
                            <label for={category.name}>{category.name}</label>
                        </div>))}
                    </div>
                </div>
                <div clasName="flex flex-col px-4 bg-primary items-center justify-center gap-5 w-full">
                    <span className={"font-bold"}>Number of People</span>
                    <div className="flex flex-col items-start justify-center mt-5 gap-5 w-full">
                        <div class="flex items
                            -center gap-5">
                            <input type={'checkbox'} id={'1'} name={'1'} value={1}/>
                            <label for={'1'}>1</label>
                        </div>
                        <div class="flex items
                        -center gap-5">
                            <input type={'checkbox'} id={'2'} name={'2'} value={2}/>
                            <label for={'2'}>2</label>
                        </div>
                        <div class="flex items
                        -center gap-5">
                            <input type={'checkbox'} id={'3'} name={'3'} value={3}/>
                            <label for={'3'}>3</label>
                        </div>
                        <div class="flex items
                        -center gap-5">
                            <input type={'checkbox'} id={'4'} name={'4'} value={4}/>
                            <label for={'4'}>4</label>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex w-full items-center justify-between self-center mt-10 flex-wrap gap-[20px] max-md:mt-10 max-md:max-w-full">
                {packages.map((pack) => (<PackageCard featuredPackage={pack}/>))}
            </div>
        </div>
    </div>);
};

export default Explore;
