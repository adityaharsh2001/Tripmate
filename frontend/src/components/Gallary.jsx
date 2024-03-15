import React, { useState } from 'react';

const Gallery = ({ packageData }) => {
    const [activeImage, setActiveImage] = useState(null);

    const openPopup = (image) => {
        setActiveImage(image);
    };

    const closePopup = () => {
        setActiveImage(null);
    };

    return (
        <div className="flex flex-col self-center px-9 py-12 bg-white w-full">
            <ul className="gallery">
                {
                    packageData?.images?.map((image, index) => (
                        <li key={index} onClick={() => openPopup(image)}>
                            <img src={image} alt=""/>
                        </li>
                    ))
                }
            </ul>
            {activeImage && (
                <div
                    className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={closePopup}
                >
                    <img src={activeImage} alt="" className="cursor-pointer max-w-full max-h-full" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
