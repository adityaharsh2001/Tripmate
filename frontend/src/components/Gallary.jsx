import React from 'react'

const Gallary = ({packageData}) => {
    return (
        <div className="flex flex-col self-center px-9 py-12 bg-white w-full">
            <ul className="gallery">
                {
                    packageData?.images?.map((image, index) => (
                        <li key={index}>
                            <img src={image} alt=""/>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}
export default Gallary
