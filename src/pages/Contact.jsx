import React from 'react'
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div className="bg-gray-100 text-secondary text-[1.44rem]">
            <div className="flex flex-col py-5 mt-36 max-md:mt-10 max-md:max-w-full">
                <div
                    className="flex flex-col px-10 md:px-20 items-start justify-start py-[1.25rem] box-border gap-[1rem] max-w-full">
                    <b className="w-full relative tracking-[0.2em] leading-[120%] uppercase inline-block pr-[1.25rem]">
                        Get in Touch
                    </b>
                    {/*Welcome to Your Tripamate, we are a travel agency with 5  years of experience in Group Trip and Customise trips, for Solo, Friends, Couple, corporate, Families and all, our Expert team provides you a budget friendly package and will also provide an unforgettable experience…Have questions ? our experienced team are always happy to talk to you*/}
                    <div className="text-base leading-7 text-black max-md:max-w-full">
                        <span className={'text-gray-600 dark:text-gray-300 font-bold'}>
                            Welcome to Your Tripamate </span>
                        <span className={'text-gray-600 dark:text-gray-300'}>
                            We are a travel agency with 5 years of experience in Group Trip and Customise trips, for Solo, Friends, Couple, corporate, Families and all, our Expert team provides you a budget friendly package and will also provide an unforgettable experience…Have questions ? our experienced team are always happy to talk to you
                        </span>
                    </div>
                    <div className="flex w-full justify-between d:gap-8 gap-0 mt-8 md:flex-row flex-col">
                        <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.8912818994213!2d77.1225493!3d28.871851600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dabeb78c6d521%3A0xe95b5288afaaacf9!2sShree%20Makhan%20Bhog!5e0!3m2!1sen!2sin!4v1708327882752!5m2!1sen!2sin"
                                width="100%" height="100%" style={{border: "0"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="flex flex-col gap-4 text-base">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
