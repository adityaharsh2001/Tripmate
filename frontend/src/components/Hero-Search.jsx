import React, {useEffect, useState} from 'react'
import clsx from "clsx";
import {useNavigate} from "react-router";
import axios from "axios";

const HeroSearch = ({className}) => {
    const [categories, setCategories] = useState([{}])
    const navigate = useNavigate()
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
    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div className={clsx("flex items-center justify-center", className)}>
            <div
                className="text-poppins border w-fit border-gray-100 backdrop-blur py-3 text-sm rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center w-full justify-between md:gap-10 gap-4">
                            <div className={"flex items-center text-black justify-between gap-3"}>
                                <svg width="20" height="20" viewBox="0 0 34 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_674_133)">
                                        <path opacity="0.3"
                                              d="M16.9998 5.66663C13.0898 5.66663 9.9165 8.83996 9.9165 12.75C9.9165 16.7875 14.0532 22.9641 16.9998 26.7466C19.989 22.9358 24.0832 16.83 24.0832 12.75C24.0832 8.83996 20.9098 5.66663 16.9998 5.66663V5.66663ZM16.9998 16.2916C15.0448 16.2916 13.4582 14.705 13.4582 12.75C13.4582 10.795 15.0448 9.20829 16.9998 9.20829C18.9548 9.20829 20.5415 10.795 20.5415 12.75C20.5415 14.705 18.9548 16.2916 16.9998 16.2916Z"
                                              fill="#425E6F"/>
                                        <path
                                            d="M17.0002 2.83337C11.5177 2.83337 7.0835 7.26754 7.0835 12.75C7.0835 20.1875 17.0002 31.1667 17.0002 31.1667C17.0002 31.1667 26.9168 20.1875 26.9168 12.75C26.9168 7.26754 22.4827 2.83337 17.0002 2.83337ZM9.91683 12.75C9.91683 8.84004 13.0902 5.66671 17.0002 5.66671C20.9102 5.66671 24.0835 8.84004 24.0835 12.75C24.0835 16.83 20.0035 22.9359 17.0002 26.7467C14.0535 22.9642 9.91683 16.7875 9.91683 12.75Z"
                                            fill="#425E6F"/>
                                        <path
                                            d="M17.0002 16.2917C18.9562 16.2917 20.5418 14.706 20.5418 12.75C20.5418 10.794 18.9562 9.20837 17.0002 9.20837C15.0442 9.20837 13.4585 10.794 13.4585 12.75C13.4585 14.706 15.0442 16.2917 17.0002 16.2917Z"
                                            fill="#425E6F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_674_133">
                                            <rect width="34" height="34" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="flex gap-5 items-center justify-center">
                                    <p className="md:font-bold">Location</p>
                                    <div className="flex items-center justify-center">
                                        <select
                                            onChange={(e) => navigate(`/explore?category=${e.target.value}`)}
                                            className="bg-transparent border-none text-sm">
                                            <option value={"all"}>All</option>
                                            {categories.map((category, index) => (
                                                <option
                                                    key={index}
                                                    value={category.name}>{category.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="max-md:hidden cursor-pointer bg-primary [border:none] py-3 px-6 rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-mediumpurple">
                                <b className="relative text-[0.88rem] leading-[120%] font-poppins text-white text-left">
                                    Search
                                </b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSearch
