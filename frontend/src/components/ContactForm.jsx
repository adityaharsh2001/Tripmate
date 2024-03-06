import React from 'react';

const ContactForm = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="bg-gray-100 text-gray-500 w-full overflow-hidden"
             style={{maxWidth: "1000px"}}>
            <div className="md:flex w-full">
                <div className="w-full  py-10 bg-whitesmoke px-5 md:px-10">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-secondary">Have Questions? </h1>
                        <p>We are happy to talk to you</p>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                    </div>
                                    <input type="text"
                                           className="w-full -ml-10 px-4 py-2 rounded-lg outline-none focus:border-indigo-500"
                                           placeholder="John"/>
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                    </div>
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
                                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                    </div>
                                    <input type="email"
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
                                    <input type="email"
                                           className="w-full -ml-10 px-4 py-2 rounded-lg  border-gray-200 outline-none focus:border-indigo-500"
                                           placeholder="1234567890"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5 ">
                                <label htmlFor="" className="text-xs font-semibold px-1">Destination</label>
                                <div className="flex w-full relative">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                    </div>
                                    {/*make a input with dropdown icon*/}
                                    <div
                                        className="w-full bg-white -ml-10 px-4 py-1 flex items-center rounded-lg outline-none focus:border-indigo-500">
                                           <span className="flex items-center text-sm justify-between w-full">
                                                  Select Destination
                                           </span>
                                        <span onClick={() => setOpen(!open)}
                                              className="cursor-pointer material-symbols-outlined text-[1.4rem] text-gray-400">
                                                  expand_more
                                               </span>
                                    </div>
                                    {
                                        open && <div
                                            className="flex absolute top-8 left-0 right-0 w-full bg-white mt-2 rounded-lg px-4 py-2 flex-col items-start justify-start">
                                            <span className="py-1 text-gray-400">Himachal Pradesh</span>
                                            <span className="py-1 text-gray-400">Kerala</span>
                                            <span className="py-1 text-gray-400">Goa</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={'flex -mx-3 mb-10'}>
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Message</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <textarea
                                        className="w-full -ml-10 px-4 py-2 rounded-lg  border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="Type your message here"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button
                                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                                    SEND ENQUIRY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
