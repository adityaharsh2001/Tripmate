import React, {memo, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {usePopup} from "../context/PopUpContext";
import axios from "axios";
import clsx from "clsx";

const HamburgerMenu = ({navLinks, isMenuOpen, toggleMenu, categories}) => {
    const [open, setOpen] = useState(false);
    return (<div
        className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-0 bg-white/80 shadow backdrop-blur-lg z-50 w-full py-10 h-full flex flex-col items-start px-10 justify-between gap-5 transition-all duration-300 md:hidden`}>
        <div className="flex flex-col items-start mt-[80px] justify-start gap-5">
            {navLinks.map((link, index) => (
                <Link
                    key={index}
                    to={link.path}
                    onClick={toggleMenu}
                >
                    {link.name}
                </Link>
            ))}
            <div className={"flex flex-col items-start text-black justify-start gap-3"}>
                <div className={"flex items-center text-black justify-start gap-3"}>
                    <span>Categories</span>
                    <span
                        onClick={() => setOpen(!open)}
                        className={clsx("cursor-pointer material-symbols-outlined text-[1.4rem] text-gray-400",
                            open && "transform rotate-180")}>expand_more</span>
                </div>
                {open &&
                    <ul className="flex flex-col gap-2">
                        <li className="text-gray-900 px-5  text-sm cursor-pointer font-medium hover:text-primary">All</li>
                        {categories.map((category, index) => (
                            <Link key={index} to={`/explore?category=${category.name}`}>
                                <li key={index}
                                    onClick={toggleMenu}
                                    className="px-5 text-gray-900 text-sm cursor-pointer font-medium hover:text-primary">{category.name}</li>
                            </Link>))}
                    </ul>
                }
            </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center gap-5">
            <button
                className="cursor-pointer justify-center w-full [border:none] py-2 px-4 bg-white rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-gainsboro">
                <Link to={"/explore"}>
                    <b className="relative text-[0.88rem] leading-[120%] font-poppins text-secondary text-left">
                        Explore
                    </b>
                </Link>
                <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/images/work-1.svg"
                />
            </button>
            <button
                className="cursor-pointer justify-center w-full bg-primary [border:none] py-3 px-6 rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-mediumpurple">
                <b className="relative text-[0.88rem] leading-[120%] font-poppins text-white text-center">
                    Book Now
                </b>
            </button>
        </div>
    </div>);
};

const Header = memo(() => {
    const [categories, setCategories] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const {openPopup} = usePopup();
    const navLinks = [{name: "Home", path: "/"}, {name: "About", path: "/about-us"}, {
        name: "Contact", path: "/contact"
    }, {name: "Weekend Trips", path: "/weekend-trips"},];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getAllCategories = async () => {
        try {
            const response = await axios.get('/api/v1/packages/categories', {});
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    useEffect(() => {
        getAllCategories();
    }, []);
    return (<>
        <header
            className="z-[9999] fixed inset-x-0 top-0 mx-auto w-full text-poppins max-w-screen-md h-[65px] py-3 backdrop-blur md:top-6 md:rounded-3xl lg:max-w-screen-lg">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <a aria-current="page" className="flex items-center" href="/">
                            <img className="h-10 w-auto" src="/images/logo.png" alt=""/>
                            <p className="sr-only">Website Title</p>
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                        {navLinks.map((link, index) => (<Link
                            key={index}
                            to={link.path}
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                            {link.name}
                        </Link>))}
                        <div
                            className="inline-block relative rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                            <div className="flex items-center gap-2" onClick={() => setOpen(!open)}>
                                <span>Categories</span>
                                <span
                                    className="cursor-pointer material-symbols-outlined text-[1.4rem] text-gray-400">expand_more</span>
                            </div>
                            {open &&
                                <div className="absolute bg-white shadow-lg rounded-lg py-3 px-5 top-[50px] left-0">
                                    <ul className="flex flex-col gap-2">
                                        <li className="text-gray-900 text-sm cursor-pointer font-medium hover:text-primary">All</li>
                                        {categories.map((category, index) => (
                                            <Link key={index} to={`/explore?category=${category.name}`}>
                                                <li key={index}
                                                    className="text-gray-900 text-sm cursor-pointer font-medium hover:text-primary">{category.name}</li>
                                            </Link>))}
                                    </ul>
                                </div>}
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-3 md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="cursor-pointer flex items-center justify-center rounded-lg p-2 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex items-center justify-end gap-3">
                        <button
                            className="cursor-pointer [border:none] py-2 px-4 bg-white rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-gainsboro">
                            <Link to={"/explore"}>
                                <b className="relative text-[0.88rem] leading-[120%] font-poppins text-secondary text-left">
                                    Explore
                                </b>
                            </Link>
                            <img
                                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                                alt=""
                                src="/images/work-1.svg"
                            />
                        </button>
                        <button
                            onClick={openPopup}
                            className="cursor-pointer bg-primary [border:none] py-3 px-6 rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-mediumpurple">
                            <b className="relative text-[0.88rem] leading-[120%] font-poppins text-white text-left">
                                Book Now
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <HamburgerMenu navLinks={navLinks} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} categories={categories}/>
    </>);
});

export default Header;
