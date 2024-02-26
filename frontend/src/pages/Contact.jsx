import React from 'react'
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
const Contact = () => {
    return (
        <div className={'bg-white'}>
            <Banner {...{Head: "Let's Get In Touch"}}/>
            <grid className="grid grid-cols-3 max-md:grid-cols-1 gap-4 max-md:gap-0">
                <div className="max-w-full max-md:h-[400px] w-full">
                    <iframe
                        style={{
                            border: "0",
                            // filter: "grayscale(100%) invert(92%) contrast(83%)" ,
                        }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.8912818994213!2d77.1225493!3d28.871851600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dabeb78c6d521%3A0xe95b5288afaaacf9!2sShree%20Makhan%20Bhog!5e0!3m2!1sen!2sin!4v1708327882752!5m2!1sen!2sin"
                        width="100%" height="100%"  allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex flex-col py-10 gap-4 text-base px-4 items-center justify-center">
                    <div className="flex flex-col gap-4 text-base">
                        <h1 className="text-2xl font-bold">Meet Us</h1>
                        <div className="flex flex-col gap-2">
                            <span className={"flex gap-2"}>
                                <span className={'font-bold text-primary'}><i className="fa fa-map-marker"/></span>
                                <span>
                                    Main G.T Karnal Road Kundli Near Makhan Bhog Sonipat(Haryana)
                                </span>
                            </span>

                            <span className="flex gap-2 flex-wrap">
                                <span className={'font-bold text-primary'}>  <i className="fa fa-phone"/> </span>
                                    <a href="tel:+919876543210">
                                        <span className="whitespace-nowrap">+91 98765 43210,</span>
                                    </a>
                                    <a href="tel:+919876543210">
                                        <span className=" whitespace-nowrap">+91 98765 43210,</span>
                                    </a>
                                    <a href="tel:+919876543210">
                                        <span className=" whitespace-nowrap">+91 98765 43210</span>
                                    </a>
                                </span>
                            <span className={'flex gap-2'}>
                                <span className={'font-bold text-primary'}>  <i className="fa fa-envelope"/> </span>
                                <a href="mailto:contact@yourtripmate.in">
                                    <span>
                                        contact@yourtripmate.in
                                    </span>
                                </a>
                            </span>

                        </div>
                    </div>
                </div>
                <div>
                    <ContactForm/>
                </div>
            </grid>
        </div>
    )
}
export default Contact
