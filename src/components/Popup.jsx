import React, { useRef, useEffect } from 'react';

const Popup = ({ onClose }) => {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div>
            <div
                className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50"
                onClick={onClose}
            ></div>
            <div
                ref={popupRef}
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center"
            >
                <div className="relative bg-white rounded-lg shadow-md w-full max-w-md">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-xl font-semibold text-gray-900">Submit Request</h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
                            onClick={onClose}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4">
                        <form className="space-y-4" action="#">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white text-gray-900 placeholder-gray-500 border-opacity-50 focus:outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white text-gray-900 placeholder-gray-500 border-opacity-50 focus:outline-none"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-900">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    autoComplete="tel"
                                    required
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white text-gray-900 placeholder-gray-500 border-opacity-50 focus:outline-none"
                                    placeholder="123-456-7890"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="people" className="block text-sm font-medium text-gray-900">
                                    Number of People
                                </label>
                                <input
                                    type="number"
                                    id="people"
                                    name="people"
                                    min="1"
                                    required
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white text-gray-900 placeholder-gray-500 border-opacity-50 focus:outline-none"
                                    placeholder="1"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="destination" className="block text-sm font-medium text-gray-900">
                                    Destination
                                </label>
                                <input
                                    type="text"
                                    id="destination"
                                    name="destination"
                                    autoComplete="destination"
                                    required
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white text-gray-900 placeholder-gray-500 border-opacity-50 focus:outline-none"
                                    placeholder="Destination"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
