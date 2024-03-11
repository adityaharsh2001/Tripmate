import React, {useEffect, useRef, useState} from 'react';

const Popup = ({isOpen, closePopup, categories}) => {
    const popupRef = useRef(null);
    const [open, setOpen] = useState(isOpen);
    const [openCategory, setOpenCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [NoOfGuests, setNoOfGuests] = useState(1);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, closePopup]);

    const increment = () => {
        setNoOfGuests(NoOfGuests + 1);
    }
    const decrement = () => {
        if (NoOfGuests > 1) {
            setNoOfGuests(NoOfGuests - 1);
        }
    }

    const ConstructWhatsappMessage = () => {
        return `Hello, I am interested in booking a tour to ${selectedCategory?.name} for ${NoOfGuests} guests. My name is ${FirstName} ${LastName}. My email is ${Email} and my mobile number is ${Mobile}.`
    }
    return (
        <>
            {isOpen && (<div
                className="min-w-screen fixed m-auto left-0 top-0 bottom-0 right-0 z-[999] min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" ref={popupRef}
                     style={{maxWidth: "1000px"}}>
                    {/*//make a close button*/}
                    <div className="relative md:flex w-full">
                        <div className="absolute top-5 right-5">
                            <button onClick={closePopup}
                                    className="text-3xl cursor-pointer bg-transparent font-semibold text-gray-500 hover:text-gray-600">
                                &times;
                            </button>
                        </div>
                        <div className="hidden md:block w-1/2 bg-white py-10 px-10">
                            <img src={"/images/Traveling-rafiki.svg"} alt="image"
                                 className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-full md:w-1/2 py-10 bg-whitesmoke px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-secondary">Book Now</h1>
                                <p>Enter Details to Book your tour</p>
                            </div>
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                                        <div className="flex">
                                            <div
                                                className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text"
                                                   onChange={(e) => setFirstName(e.target.value)}
                                                   className="w-full -ml-10 px-4 py-2 rounded-lg outline-none focus:border-indigo-500"
                                                   placeholder="John"/>
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                        <div className="flex">
                                            <div
                                                className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text"
                                                   onChange={(e) => setLastName(e.target.value)}
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
                                                   onChange={(e) => setEmail(e.target.value)}
                                                   className="w-full -ml-10 px-4 py-2 rounded-lg  border-gray-200 outline-none focus:border-indigo-500"
                                                   placeholder="johnsmith@example.com"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Mobile</label>
                                        <div className="flex">
                                            <div
                                                className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="mobile"
                                                   onChange={(e) => setMobile(e.target.value)}
                                                   className="w-full -ml-10 px-4 py-2 rounded-lg  border-gray-200 outline-none focus:border-indigo-500"
                                                   placeholder="1234567890"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3 mb-10">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">No of Guests</label>
                                        <div className="flex">
                                            <div
                                                className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <div
                                                className="w-full -ml-10 py-2 rounded-lg outline-none focus:border-indigo-500">
                                                <div className="relative flex items-center">
                                                    <button type="button" id="decrement-button"
                                                            onClick={decrement}
                                                            data-input-counter-decrement="counter-input"
                                                            className="flex-shrink-0 bg-white inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                        -
                                                    </button>
                                                    <input type="text" id="counter-input" data-input-counter
                                                           className="flex-shrink-0 text-gray-400 border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                                           placeholder="" value={NoOfGuests} required/>
                                                    <button type="button" id="increment-button"
                                                            onClick={increment}
                                                            data-input-counter-increment="counter-input"
                                                            className="flex-shrink-0 bg-white bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full px-3 mb-5 ">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Destination</label>
                                        <div className="flex w-full relative">
                                            <div
                                                className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <div
                                                className="w-full bg-white -ml-10 px-4 py-1 flex items-center rounded-lg outline-none focus:border-indigo-500">
                                           <span className="flex items-center text-sm justify-between w-full">
                                                  {selectedCategory?.name || "Select Category"}
                                           </span>
                                                <span onClick={() => setOpenCategory(!openCategory)}
                                                      className="cursor-pointer material-symbols-outlined text-[1.4rem] text-gray-400">
                                                  expand_more
                                               </span>
                                            </div>
                                            {
                                                openCategory && <div
                                                    className="flex absolute top-8 left-0 right-0 w-full bg-white mt-2 rounded-lg px-4 py-2 flex-col items-start justify-start">
                                                    {
                                                        categories?.map((category, index) => (
                                                            <div key={index} className="flex items-center gap-3">
                                                                <span onClick={() => {
                                                                    setSelectedCategory(category);
                                                                    setOpenCategory(!openCategory);
                                                                }}
                                                                      className="cursor-pointer text-sm font-medium hover:text-primary">{category.name}</span>

                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <a
                                            href={`https://wa.me/+918700045647?text=${ConstructWhatsappMessage()}`}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <button
                                                className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">BOOK
                                                NOW
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </>
    );
};

export default Popup;
