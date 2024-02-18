import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="bg-gray-100 text-secondary text-[1.44rem]">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="flex flex-col py-5 mt-36 max-md:mt-10 max-md:max-w-full">
                        <div
                            className="flex flex-col items-start justify-start py-[1.25rem] box-border gap-[1rem] max-w-full">
                            <b className="w-full relative tracking-[0.2em] leading-[120%] uppercase inline-block pr-[1.25rem]">
                                Visit Us
                            </b>
                            <h1 className="m-0 text-[2.5rem] leading-[120%] font-bold font-inherit text-grey-scale-black ">
                                Our Location and Hours of Operation
                            </h1>
                        </div>
                    </div>
                    <div className="mt-16 lg:mt-20 text-black text-sm">
                        <div className="flex flex-col">
                            <div className="rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                                    width="100%" height="480"
                                    loading="lazy"></iframe>
                            </div>
                            <div>
                                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                    <div className="px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                        <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                        <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                                        <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                                        <p className="mt-1 text-gray-600">Sunday: Closed</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                        <p className="mt-1 text-gray-600">Email: info@example.com</p>
                                        <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact
