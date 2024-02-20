import React from 'react'

const HeroSearch = () => {
    return (
        <div
            className="mx-auto absolute text-poppins max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:-bottom-10 md:rounded-3xl lg:max-w-screen-lg">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-end gap-10">
                        <div className={"flex items-center text-black justify-start gap-3"}>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
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
                            <div className="flex flex-col items-start justify-start">
                                <p className="font-bold">Location</p>
                                <div className="flex items-center justify-start">
                                    <span className="text-gray-400">Where do you want to go?</span>
                                </div>
                            </div>
                        </div>
                        <div className={"flex items-center text-black justify-start gap-3"}>
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_674_143)">
                                    <path
                                        d="M21.6665 3.75004H20.5832V1.58337H18.4165V3.75004H7.58317V1.58337H5.4165V3.75004H4.33317C3.1415 3.75004 2.1665 4.72504 2.1665 5.91671V23.25C2.1665 24.4417 3.1415 25.4167 4.33317 25.4167H21.6665C22.8582 25.4167 23.8332 24.4417 23.8332 23.25V5.91671C23.8332 4.72504 22.8582 3.75004 21.6665 3.75004ZM21.6665 5.91671V9.16671H4.33317V5.91671H21.6665ZM4.33317 23.25V11.3334H21.6665V23.25H4.33317Z"
                                        fill="#425E6F"/>
                                    <path opacity="0.3" d="M4.3335 5.92749H21.6668V9.16666H4.3335V5.92749Z"
                                          fill="#425E6F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_674_143">
                                        <rect width="26" height="26" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="flex flex-col items-start justify-start">
                                <p className="font-bold">Date</p>
                                <div className="flex items-center justify-start">
                                    <span className="text-gray-400">Choose a Date</span>
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <div className={"flex items-center text-black justify-start gap-3"}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="26" height="26" fill="url(#pattern0)"/>
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_674_162" transform="scale(0.0416667)"/>
                                    </pattern>
                                    <image id="image0_674_162" width="24" height="24"
                                           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABTklEQVR4nO2SsUrDYBDHO7jo4ODg7BMUnHRQk++qUrHFyam56yB0y12KDyBSBN/GybG2b5KCi1BdtHvK5UvEStPQpINIDw7yffnn/7vcXaXyrwJIIs1T5CNoBcdFz7mAsllZA2AVLSq6IPBnALDeorIzAJLIIH8Acs/15OD8prtzeN3dBOLqqgDP9Za/nafLBCxKQ/zkOHcb+o2L/hWQDA3xJE7kAXhBszDAkLyfebe7qjfIj5k6lIdSLXJt5fP+bgLEY32uITcKA4BkaLU8tqbW3EXf0UHH9ygvS7eo0elsJdovWylX1dSQvBmSE33ntGUPSEaA/Lk0oJ5sjgXISM30nIJjc+Qw1s8BvOYBaujvJwMeJCZhCpkxt+3r/wZc5EEM8X2s9YLm9z1yGPd+xlwitx1c5s1yYegqZhaD3Ctlnoauom5LMhMdfP9n5VP+bHJtNTzPPwAAAABJRU5ErkJggg=="/>
                                </defs>
                            </svg>
                            <div className="flex flex-col items-start justify-start">
                                <p className="font-bold">Guest</p>
                                <div className="flex items-center justify-start">
                                    <span className="text-gray-400">Add Guests</span>
                                </div>
                            </div>
                        </div>
                        <button
                            className="cursor-pointer bg-primary [border:none] py-3 px-6 rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-mediumpurple">
                            <b className="relative text-[0.88rem] leading-[120%] font-poppins text-white text-left">
                                Search
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSearch
