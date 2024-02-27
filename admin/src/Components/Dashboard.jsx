import React, {useEffect, useState} from 'react';
import Popup from './Popup.jsx';
import axios from 'axios';
import CategoryPopup from './CategoryPopup.jsx';
import PackageDetailsPopup from './PackageDetailsPopup.jsx';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [openCategory, setOpenCategory] = useState(false);
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [openPackage, setOpenPackage] = useState(false);

    const getAllCategories = async () => {
        try {
            const response = await axios.get('http://localhost:3000/v1/packages/categories', {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                },
            });
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const getAllPackages = async () => {
        try {
            const response = await axios.get('http://localhost:3000/v1/packages/packages', {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                },
            });
            setPackages(response.data);
        } catch (error) {
            console.error('Error fetching packages:', error);
        }
    };

    useEffect(() => {
        getAllCategories();
        getAllPackages();
    }, []);

    const handlePackageClick = (packageData) => {
        setSelectedPackage(packageData);
        setOpenPackage(true);
    };

    return (
        <>
            <div className="antialiased bg-gray-50 dark:bg-gray-900">
                <main
                    className="p-4 flex flex-col items-center w-[calc(100% - 72px)] justify-between h-auto pt-20 gap-5">
                    <div className="w-full">
                        <div className="flex items-center w-full justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Categories</h2>
                            <button
                                type="button"
                                onClick={() => setOpenCategory(true)}
                                className="cursor-pointer flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                                Add Category
                            </button>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {categories.map((category, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{category.description}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="w-full">
                        <div className="flex items-center w-full justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Packages</h2>
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="cursor-pointer flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                                Add Package
                            </button>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {packages.map((pack, index) => (
                                <tr key={index} onClick={() => handlePackageClick(pack)} className="cursor-pointer">
                                    <td className="px-6 py-4 whitespace-nowrap">{pack.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{pack.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{pack.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            <CategoryPopup open={openCategory} setOpen={setOpenCategory}/>
            {openPackage && selectedPackage && (
                <PackageDetailsPopup packageData={selectedPackage} setOpen={setOpenPackage}/>
            )}
            <Popup open={open} setOpen={setOpen} categories={categories} />
        </>
    );
};

export default Dashboard;
