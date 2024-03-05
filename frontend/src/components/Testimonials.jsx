import React, {memo, useEffect, useRef, useState} from "react";
import "swiper/swiper-bundle.css";

const StarRating = () => {
    const [rating, setRating] = useState(0); // Initial rating state

    const handleStarClick = (index) => {
        //set and remove rating based on user click
        if (rating === index) {
            setRating(0);
        } else {
            setRating(index);
        }
    };

    return (
        <div className="flex items-center justify-center w-full gap-3 mb-10">
            {[1, 2, 3, 4, 5].map((i) => (
                <div className={`cursor-pointer ${i <= rating ? 'text-primary' : 'text-gray-400'}`}
                     onClick={() => handleStarClick(i)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_13624_2974)">
                            <path
                                d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                fill={i <= rating ? '#FBBF24' : 'rgba(251, 191, 36, 0.3)'}/>
                        </g>
                        <defs>
                            <clipPath id="clip0_13624_2974">
                                <rect width="30" height="30"
                                      fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            ))}
        </div>
    );
};

const Testimonials = memo(() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        rating: 0, review: '', name: ''
    });

    const popupRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });
    };

    const handleSubmitReview = (event) => {
        event.preventDefault();
        // Your logic to handle form submission
        console.log(formData);
        // Reset form data
        setFormData({
            rating: 0, review: '', name: ''
        });
        // Close modal
        setIsModalOpen(false);
    };
    return (<>
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
            <div className="">
                <h2 className="font-manrope font-bold text-[32px] leading-10 text-black mb-8 text-center">
                    Customer reviews &
                    rating</h2>
                <div className="flex">
                    <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
                        <div
                            className="grid grid-cols-12 h-full px-10 md:px-20 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
                            <div className="col-span-12 md:col-span-8 flex items-center">
                                <div
                                    className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                                    <div
                                        className="sm:pr-3 sm:border-r border-gray-200 flex items-center justify-center flex-col">
                                        <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.3</h2>
                                        <div className="flex items-center gap-3">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30" fill="none">
                                                    <g clip-path="url(#clip0_13624_2974)">
                                                        <path
                                                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                                            fill={i === 5 ? 'rgba(251, 191, 36, 0.3)' : '#FBBF24'}/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_13624_2974">
                                                            <rect width="30" height="30" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="font-normal text-lg leading-8 text-gray-400">46
                                            Ratings</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
                                <div className="flex items-center flex-col justify-center w-full h-full ">
                                    <button
                                        onClick={toggleModal}
                                        className="rounded-full px-6 py-4 bg-primary cursor-pointer font-semibold text-lg text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500">Write
                                        A Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
                    <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6">Most
                        helpful positive
                        review</h4>
                    <div className="flex sm:items-center flex-col sm:flex-row justify-between  mb-4">
                        <div className="flex items-center gap-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                     viewBox="0 0 30 30" fill="none">
                                    <g clip-path="url(#clip0_13624_2974)">
                                        <path
                                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                            fill={i === 5 ? 'rgba(251, 191, 36, 0.3)' : '#FBBF24'}/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13624_2974">
                                            <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            <h6 className="font-semibold text-lg leading-8 text-black">@john.doe</h6>
                            <p className="font-medium text-base leading-7 text-gray-400">Nov 01, 2023</p>
                        </div>
                    </div>

                    <p className="font-normal text-lg leading-8 text-gray-500 ">
                        I recently had the opportunity to explore Pagedone's UI design system, and it left a
                        lasting
                        impression on my workflow. The system seamlessly blends user-friendly features with
                        a robust set
                        of design components, making it a go-to for creating visually stunning and
                        consistent
                        interfaces.
                    </p>

                </div>
            </div>
        </div>
        {isModalOpen && (<div
            className="min-w-screen fixed m-auto left-0 top-0 bottom-0 right-0 z-[999] min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
                 style={{maxWidth: "500px"}} ref={popupRef}>
                <div className="md:flex w-full">
                    <div className="w-full py-10 bg-whitesmoke px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-secondary">Write A Review</h1>
                            <p>Your Review is Important to Use</p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Name</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text"
                                               className="w-full -ml-10 px-4 py-2 rounded-lg outline-none focus:border-indigo-500"
                                               placeholder="John"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email"
                                               className="w-full -ml-10 px-4 py-2 rounded-lg  border-gray-200 outline-none focus:border-indigo-500"
                                               placeholder="johnsmith@example.com"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Review</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-message-outline text-gray-400 text-lg"></i></div>
                                        <textarea
                                            className="w-full -ml-10 px-4 py-2 rounded-lg  border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Your Review"/>
                                    </div>
                                </div>
                            </div>
                            <StarRating/>
                            <button onClick={handleSubmitReview}
                                    className="w-full px-6 py-3 cursor-pointer rounded-81xl bg-primary text-white font-semibold text-lg">Submit
                                Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
    </>);
});

export default Testimonials;
