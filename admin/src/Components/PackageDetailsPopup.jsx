import React from 'react';

const renderPackageData = (data, prefix = '') => {
    return Object.entries(data).map(([key, value]) => {
        const displayKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'object' && value !== null) {
            // If the value is an object and not null, recursively render its properties
            return renderPackageData(value, displayKey);
        } else {
            // If the value is not an object, display the key-value pair
            return (
                <p key={displayKey} className="text-sm text-gray-500">{`${displayKey}: ${value}`}</p>
            );
        }
    });
};

const PackageDetailsPopup = ({packageData, setOpen}) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <button onClick={() => setOpen(false)
                } className="close-button">Close
                </button>
                <h2>Package Details</h2>
                <div className="package-details">
                    <p><strong>Name:</strong> {packageData.name}</p>
                    <p><strong>Description:</strong> {packageData.description}</p>
                    <p><strong>Price:</strong> {packageData.price}</p>
                    <p><strong>Category:</strong> {packageData.category}</p>
                    <p><strong>Featured:</strong> {packageData.featured ? 'Yes' : 'No'}</p>
                    <div>
                        <strong>Fields:</strong>
                        <ul>
                            {packageData.fields.map((field, index) => (
                                <li key={index}>
                                    <p><strong>Heading:</strong> {field.heading}</p>
                                    <p><strong>Description:</strong> {field.description.join(', ')}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <strong>Images:</strong>
                        <ul>
                            {packageData.images.map((image, index) => (
                                <li key={index}>
                                    <img src={image} alt={`Image ${index + 1}`}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p><strong>Featured Image:</strong> {packageData.featuredImage}</p>
                    <div>
                        <strong>Tour Plan:</strong>
                        <ul>
                            {packageData.tourPlan.map((day, index) => (
                                <li key={index}>
                                    <p><strong>Day:</strong> {day.day}</p>
                                    <p><strong>Title:</strong> {day.title}</p>
                                    <p><strong>Description:</strong> {day.description.join(', ')}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetailsPopup;
