import React from 'react';
import clsx from "clsx";

const ContactForm = ({className, categories}) => {
    const [open, setOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const [Name, setName] = React.useState("");
    const [Mobile, setMobile] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Message, setMessage] = React.useState("");

    const ConstructWhatsappMessage = () => {
        let message = `Hello, I am ${Name}, I would like to make an enquiry about ${selectedCategory.name} package. My mobile number is ${Mobile} and my email is ${Email}. ${Message}`;
        return message;
    }

    return (
        <div className={"bg-gray-100 text-gray-500 w-full overflow-hidden"}
             style={{maxWidth: "1000px"}}>
            <div className="md:flex w-full">
                <div className={clsx("w-full py-10 px-5 md:px-10", className || "bg-whitesmoke")}>
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-secondary">Have Questions? </h1>
                        <p>We are happy to talk to you</p>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <div className="relative">
                                    <input type="email"
                                           onChange={(e) => setName(e.target.value)}
                                           className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                           placeholder="Enter name"/>
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <svg className="flex-shrink-0 size-4 text-gray-500"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                            <circle cx="12" cy="7" r="4"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/*mobile*/}
                            <div className="w-1/2 px-3 mb-5">
                                <div className="relative">
                                    <input type="mobile"
                                           onChange={(e) => setMobile(e.target.value)}
                                           className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                           placeholder="Enter mobile"/>
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <img width="16" height="16"
                                             src="https://img.icons8.com/parakeet-line/48/phone.png" alt="phone"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <div className="relative">
                                    <input type="email"
                                           onChange={(e) => setEmail(e.target.value)}
                                           className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                           placeholder="Enter email"/>
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <img width="16" height="16"
                                             src="https://img.icons8.com/fluency-systems-regular/48/new-post.png"
                                             alt="new-post"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5 ">
                                <div className="flex w-full relative border-b-2 border-gray-200">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    </div>
                                    <div
                                        onClick={() => setOpen(!open)}
                                        className="cursor-pointer w-full bg-white -ml-10 px-2 py-1 flex items-center border-solid border-b-2 border-gray-200">
                                        <img width="16" height="16" src="https://img.icons8.com/dotty/80/marker.png"
                                             alt="marker"/>

                                        <p className="flex items-center text-sm justify-between w-full">
                                            &nbsp; {selectedCategory.name || "Select Category"}
                                        </p>
                                        <span
                                            className="cursor-pointer material-symbols-outlined text-[1.4rem] text-gray-400">
                                                  expand_more
                                        </span>
                                    </div>
                                    {
                                        open && <div
                                            className="flex absolute top-8 left-0 right-0 w-full !bg-white mt-2 rounded-lg px-4 py-2 flex-col items-start justify-start shadow-lg !z-[99]">
                                            {categories.map((category, index) => (
                                                <div key={index}
                                                     onClick={() => {
                                                         setSelectedCategory(category);
                                                         setOpen(false);
                                                     }}
                                                     className="cursor-pointer text-gray-900 text-sm font-medium hover:text-primary">{category.name}</div>
                                            ))}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={'flex -mx-3 mb-10'}>
                            <div className="w-full px-3 mb-5">
                                <div className="relative">
                                    <textarea
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="peer pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm "
                                        placeholder="Enter Message"/>
                                    <div
                                        className="absolute inset-y-0 start-0 pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <img width="16" height="16"
                                             src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png"
                                             alt="speech-bubble-with-dots--v1"/>
                                    </div>
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
                                        className="cursor-pointer block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                                        SEND ENQUIRY
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
