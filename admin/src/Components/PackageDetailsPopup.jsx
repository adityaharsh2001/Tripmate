import React from 'react';

const PackageDetailsPopup = ({packageData, setOpen}) => {
    return (
        <div className="absolute px-10 py-20 inset-0 m-auto flex items-center justify-center z-50 bg-gray-900 bg-opacity-50
        transition-opacity duration-300">
            <div className="bg-white h-[80vh] overflow-auto images rounded-lg p-8 max-w-lg w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold mb-4">Package Details</h2>

                    <button onClick={() => setOpen(false)}
                            className="text-gray-600 hover:text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <p><strong>Name:</strong> {packageData.name}</p>
                    <p><strong>Description:</strong> {packageData.description}</p>
                    <p><strong>Price:</strong> {packageData.price}</p>
                    <p><strong>Category:</strong> {packageData.category}</p>
                    <p><strong>Featured:</strong> {packageData.featured ? 'Yes' : 'No'}</p>
                    <div>
                        <strong>Fields:</strong>
                        <ul className="list-disc pl-4">
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
                        <ul className="grid grid-cols-3 gap-4">
                            {packageData.images.map((image, index) => (
                                <li key={index}>
                                    <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto"/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p><strong>Featured Image:</strong> {packageData.featuredImage}</p>
                    <div>
                        <strong>Tour Plan:</strong>
                        <ul className="list-disc pl-4">
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
