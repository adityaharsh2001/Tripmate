import {memo} from "react";

const Header = memo(() => {
    return (
        <header
            className="z-[9999] fixed inset-x-0 top-0 mx-auto w-full text-poppins max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <a aria-current="page" className="flex items-center" href="/">
                            <img className="h-10 w-auto" src="/logo.png" alt=""/>
                                <p className="sr-only">Website Title</p>
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                        <a aria-current="page"
                           className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                           href="#">Home</a>
                        <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                           href="#">About</a>
                        <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">Contact</a>
                        <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">Weekend Trips</a>
                    </div>
                    <div className="flex items-center justify-end gap-3">

                        <button
                            className="cursor-pointer [border:none] py-2 px-4 bg-white rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-gainsboro">
                            <b className="relative text-[0.88rem] leading-[120%] font-poppins text-secondary text-left">
                                Explore
                            </b>
                            <img
                                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                                alt=""
                                src="/work-1.svg"
                            />
                        </button>
                        <button
                            className="cursor-pointer bg-primary [border:none] py-3 px-6 rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-mediumpurple">
                            <b className="relative text-[0.88rem] leading-[120%] font-poppins text-white text-left">
                                Book Now
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
});

export default Header;
