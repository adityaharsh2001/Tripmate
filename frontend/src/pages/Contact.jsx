import React from 'react'
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";

const Contact = ({categories}) => {
    return (<div className={'bg-white'}>
        <Banner {...{
            name: "Contact Us", bannerImage: "/images/contact.jpg"
        }}/>
        <grid className="flex gap-3 px-20 max-md:px-10 flex-col">
            <div className="flex flex-col py-10 gap-4  text-base px-4 items-center justify-center">
                <div className="flex flex-col gap-4 text-base">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <span className="flex flex-col items-center justify-start gap-2 flex-wrap">
                              <img width="60" height="60" src="https://img.icons8.com/carbon-copy/100/phone.png"
                                   alt="phone"/>
                                <span
                                    className={'flex flex-col gap-2 font-bold text-[24px] flex items-center justify-start'}>
                                    Phone
                                </span>
                                <p className={'flex flex-col gap-2 text-center flex items-center justify-start'}>
                                    Reach us directly at our helpline for prompt assistance and travel guidance.
                                </p>
                                    <p className={'flex flex-wrap gap-2 text-center text-secondary flex items-center justify-center'}>
                                        <a href="tel:+919876543210">
                                        <span className="whitespace-nowrap">+91 98765 43210,</span>
                                    </a>
                                    <a href="tel:+919876543210">
                                        <span className=" whitespace-nowrap">+91 98765 43210,</span>
                                    </a>
                                    <a href="tel:+919876543210">
                                        <span className=" whitespace-nowrap">+91 98765 43210</span>
                                    </a>
                                    </p>
                                </span>
                        <span className={'flex flex-col items-center justify-start gap-2'}>
                           <img width="60" height="60" src="https://img.icons8.com/carbon-copy/100/new-post--v1.png"
                                alt="new-post--v1"/>
                                <span
                                    className={'flex flex-col gap-2 font-bold text-[24px] flex items-center justify-start'}>
                                    Email
                                </span>
                                <p className={'flex flex-col gap-2 text-center flex items-center justify-start'}>
                                    Drop us a mail at our email address for any queries or feedback.
                                </p>

                                <a href="mailto:contact@yourtripmate.in" className={'text-secondary'}>
                                        contact@yourtripmate.in
                                </a>
                            </span>
                        <span className={'flex flex-col items-center justify-start gap-2'}>
                            <img width="60" height="60" src="https://img.icons8.com/carbon-copy/100/address.png" alt="address"/>
                                <span
                                    className={'flex flex-col gap-2 font-bold text-[24px] flex items-center justify-start'}>
                                    Address
                                </span>
                                    <p className={'flex flex-col gap-2 text-center flex items-center justify-start'}>
                                        Main G.T Karnal Road Kundli Near Makhan Bhog Sonipat(Haryana)
                                    </p>
                                 <a href="#map" className={'text-secondary'}>
                                    <span>View on Map</span>
                                </a>
                            </span>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-4 text-base px-4 items-center justify-center'}>
                <ContactForm className={"bg-none"} categories={categories}/>
            </div>
            <div className="max-w-full mb-10 max-md:h-[400px] w-full">
                <iframe
                    style={{
                        border: "0",
                    }}
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.8912818994213!2d77.1225493!3d28.871851600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dabeb78c6d521%3A0xe95b5288afaaacf9!2sShree%20Makhan%20Bhog!5e0!3m2!1sen!2sin!4v1708327882752!5m2!1sen!2sin"
                    width="100%" height="400px" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </grid>
    </div>)
}
export default Contact
