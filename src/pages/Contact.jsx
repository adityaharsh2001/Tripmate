import React from 'react'
import ContactUs from "../components/ContactUs";
import Banner from "../components/Banner";

const Contact = () => {
    return (
        <>
            <Banner {...{Head: "Let's Get In Touch"}}/>
            <grid className="grid grid-cols-1 gap-4 p-4">
                <div className="px-4">
                </div>
            </grid>
        </>
    )
}
export default Contact
