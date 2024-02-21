import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            mobileNumber: '',
            email: '',
            numberOfPersons: '',
            destination: '',
            departureDate: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            mobileNumber: Yup.string()
                .matches(/^[0-9]{10}$/, 'Invalid mobile number')
                .required('Mobile number is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            numberOfPersons: Yup.number()
                .min(1, 'Must be at least 1 person')
                .required('Number of persons is required'),
            destination: Yup.string()
                .required('Destination is required'),
            departureDate: Yup.date()
                .min(new Date(), 'Departure date must be in the future')
                .required('Departure date is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form className="w-full max-w-lg bg-whitesmoke p-10 rounded-lg mx-auto mt-10 text-secondary text-[1.44rem] font-poppins"
              onSubmit={formik.handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                           htmlFor="grid-name">
                        Name
                    </label>
                    <input
                        className={`appearance-none block w-full ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-200'} bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-name"
                        type="text"
                        placeholder="John Doe"
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <p className="text-red-500 text-[12px] italic">{formik.errors.name}</p>
                    ) : null}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                           htmlFor="grid-mobile-number">
                        Mobile
                    </label>
                    <input
                        className={`appearance-none block w-full ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'border-red-500' : 'border-gray-200'} bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-mobile-number"
                        type="text"
                        placeholder="1234567890"
                        {...formik.getFieldProps('mobileNumber')}
                    />
                    {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                        <p className="text-red-500 text-[12px] italic">{formik.errors.mobileNumber}</p>
                    ) : null}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                           htmlFor="grid-email">
                        Email
                    </label>
                    <input
                        className={`appearance-none block w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-200'} bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-email"
                        type="email"
                        placeholder="example@example.com"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <span className="text-red-500 text-[12px] italic">{formik.errors.email}</span>
                    ) : null}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2 whitespace-nowrap"
                        htmlFor="grid-number-of-persons">
                        No of person
                    </label>
                    <input
                        className={`appearance-none block w-full ${formik.touched.numberOfPersons && formik.errors.numberOfPersons ? 'border-red-500' : 'border-gray-200'} bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-number-of-persons"
                        type="number"
                        placeholder="5"
                        {...formik.getFieldProps('numberOfPersons')}
                    />
                    {formik.touched.numberOfPersons && formik.errors.numberOfPersons ? (
                        <p className="text-red-500 text-[12px] italic">{formik.errors.numberOfPersons}</p>
                    ) : null}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                           htmlFor="grid-destination">
                        Destination
                    </label>
                    <input
                        className={`appearance-none block w-full ${formik.touched.destination && formik.errors.destination ? 'border-red-500' : 'border-gray-200'} bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-destination"
                        type="text"
                        placeholder="Destination"
                        {...formik.getFieldProps('destination')}
                    />
                    {formik.touched.destination && formik.errors.destination ? (
                        <p className="text-red-500 text-[12px] italic">{formik.errors.destination}</p>
                    ) : null}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                           htmlFor="grid-departure-date">
                        Departure Dates
                    </label>
                    <input
                        className={`appearance-none block w-full ${formik.touched.departureDate && formik.errors.departureDate ? 'border-red-500' : 'border-gray-200'} bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-departure-date"
                        type="date"
                        {...formik.getFieldProps('departureDate')}
                    />
                    {formik.touched.departureDate && formik.errors.departureDate ? (
                        <p className="text-red-500 text-[12px] italic">{formik.errors.departureDate}</p>
                    ) : null}
                </div>
            </div>
            <button
                className="cursor-pointer bg-primary [border:none] py-3 px-6 rounded-81xl border-[1px] border-solid border-light flex flex-row items-center justify-start gap-[1rem] hover:bg-mediumpurple">
                <b className="relative text-[0.88rem] leading-[120%] font-poppins text-white text-left">
                    Book Now
                </b>
            </button>
        </form>
    );
};

export default ContactForm;
