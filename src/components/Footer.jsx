import React from 'react'

const Footer = () => {
    return (<div className="flex flex-col px-10 py-5 bg-white text-black max-md:px-5">
        <div
            className="flex gap-10 justify-between items-center md:items-start pr-6 text-base leading-8 max-md:flex-wrap max-md:pr-5 max-md:max-w-full max-sm:flex max-sm:flex-col max-sm:mx-auto max-sm:">
            <div className="flex flex-col leading-8 max-w-[300px] max-md:max-w-full max-sm:self-center">
                <img
                    alt={"Your Tripmate"}
                    loading="lazy"
                    src="/images/logo.png"
                    className="ml-5 aspect-square w-[70px] max-md:ml-2.5"
                />
                <div className="max-md:mt-10 max-md:max-w-full">
                    This is your trusted travel companion, and let
                    us transform your travel dreams into reality.
                    With passion, dedication,and a commit
                    ment to excellence,
                </div>
            </div>
            <div className="flex flex-col mt-2 whitespace-nowrap w-full basis-0">
                <div className={"font-bold"}>COMPANY</div>
                <div className={"flex mt-2 flex-col gap-2"}>
                    <div>About Us</div>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                    <div>Help Center</div>
                </div>
            </div>
            <div className="flex flex-col mt-2 w-full basis-0">
                <div className={"font-bold"}>CONTACT</div>
                <div className={"flex mt-2 flex gap-4"}>
                    <div className="flex whitespace-nowrap gap-2 flex-col items-start">
                        <div>+91 8816970543</div>
                        <div>+91 870004564</div>
                        <div>+91 8178804316</div>
                        <a href="mailto:contact@yourtripmate.in ">
                            contact@yourtripmate.in
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">

                        <div>Main G.T Karnal Road Kundli Near Makhan Bhog Sonipat(Haryana)</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-2 w-full basis-0">
                <div className={"font-bold"}>FOLLOW</div>
                <div className={"flex mt-2 gap-2"}>
                    <img alt={"facebook"} src="/images/fontawesomefacebookf.svg" className="w-6 h-6"/>
                    {/*<img alt={"instagram"} src="/fontawesomeinstagram.svg" className="w-6 h-6"/>*/}
                    <img alt={"twitter"} src="/images/fontawesometwitter.svg" className="w-6 h-6"/>
                </div>
            </div>
        </div>
        <div className="self-start w-full text-base max-md:mt-10 max-md:max-w-full">
            <span className="text-black">Copyright © 2023 Your Tripmate&nbsp;</span>
        </div>
    </div>)
}
export default Footer
