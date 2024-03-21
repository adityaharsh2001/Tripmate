import React from 'react'

const PackageForm = ({categories}) => {
    const [open, setOpen] = React.useState(false);
    const [Fullname, setFullname] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [Mobile, setMobile] = React.useState('')
    const [Guests, setGuests] = React.useState(1)
    const [Destination, setDestination] = React.useState('')

    const increment = () => {
        setGuests(Guests + 1)
    }
    const decrement = () => {
        if (Guests > 1) {
            setGuests(Guests - 1)
        }
    }
    const ConstructWhatsappMessage = () => {
        return `Hello, Am ${Fullname} and I want to book a tour for ${Guests} guests to ${Destination}`
    }
    return (
        <div className="bg-gray-100 text-gray-500 w-full overflow-hidden">
            <div className="md:flex w-full">
                <div className="w-full  py-10 bg-whitesmoke px-5 md:px-10">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-secondary">Reach Out to Us</h1>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Full Name</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                    </div>
                                    <input type="text"
                                           onChange={(e) => setFullname(e.target.value)}
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
                                             onChange={(e) => setEmail(e.target.value)}
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
                                             onChange={(e) => setMobile(e.target.value)}
                                           className="w-full -ml-10 px-4 py-2 rounded-lg  border-gray-200 outline-none focus:border-indigo-500"
                                           placeholder="1234567890"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex max-md:flex-col items-center justify-center -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">
                                    Guests</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                    </div>
                                    <div
                                        className="w-full -ml-10 py-2 rounded-lg outline-none focus:border-indigo-500">
                                        <div className="relative flex items-center">
                                            <button type="button" id="decrement-button"
                                                    onClick={decrement}
                                                    data-input-counter-decrement="counter-input"
                                                    className="flex-shrink-0 bg-white inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                -
                                            </button>
                                            <input type="text" id="counter-input" data-input-counter
                                                   className="flex-shrink-0 text-gray-400 border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                                   placeholder="" value={Guests} required/>
                                            <button type="button" id="increment-button"
                                                    onClick={increment}
                                                    data-input-counter-increment="counter-input"
                                                    className="flex-shrink-0 bg-white bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-3 mb-5 ">
                                <label htmlFor="" className="text-xs font-semibold px-1">Destination</label>
                                <div className="flex w-full relative">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                    </div>
                                    <div
                                        className="w-full bg-white -ml-10 px-4 py-1 flex items-center rounded-lg outline-none focus:border-indigo-500">
                                           <span className="flex items-center text-sm justify-between w-full">
                                                  <span>{Destination || 'Select Destination'}</span>
                                           </span>
                                        <span onClick={() => setOpen(!open)}
                                              className="cursor-pointer material-symbols-outlined text-[1.4rem] text-gray-400">
                                                  expand_more
                                               </span>
                                    </div>
                                    {
                                        open && <div
                                            className="flex absolute top-8 left-0 right-0 w-full bg-white mt-2 rounded-lg px-4 py-2 flex-col items-start justify-start">
                                            {
                                                categories?.map((category, index) => (
                                                    <div key={index}
                                                         onClick={() => {
                                                             setDestination(category.name)
                                                             setOpen(false)
                                                         }}
                                                         className="cursor-pointer w-full py-1 hover:bg-gray-100">
                                                        {category.name}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                                <a
                                    href={`https://wa.me/+918700045647?text=${ConstructWhatsappMessage()}`}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <button
                                        className="cursor-pointer block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                                        Book Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PackageForm
