import React, {useEffect} from 'react'
import axios from "axios";
import {toast} from "react-hot-toast";

const Popup = ({open, setOpen, categories, packageData = null}) => {
    const [price, setPrice] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [featured, setFeatured] = React.useState(false);
    const [category, setCategory] = React.useState('');
    const [images, setImage] = React.useState('');
    const [featuredImage, setSetFeaturedImage] = React.useState('');
    const [bannerImage, setBannerImage] = React.useState('');
    const [openCategory, setOpenCategory] = React.useState(false);
    const [fields, setFields] = React.useState([{
        heading: '', description: [''], type: {
            type: String, enum: ['bullet', 'text'], default: '',
        },
    }]);
    const [tourPlan, setTourPlan] = React.useState([{
        day: '', title: '', description: [''],
    }]);
    const setPackageData = async () => {
        if (packageData) {
            setPrice(packageData.price);
            setName(packageData.name);
            setDescription(packageData.description);
            setFeatured(packageData.featured);
            setCategory(packageData.category);
            setImage(packageData.images);
            setSetFeaturedImage(packageData.featuredImage);
            setBannerImage(packageData.bannerImage);
            setTourPlan(packageData.tourPlan);
            setFields(() => {
                return [...packageData.fields.map((field) => {
                    return {
                        heading: field.heading,
                        description: [...field.description],
                        type: field.description.length > 1 ? 'bullet' : 'text'
                    }
                })]
            });
        }
    }
    useEffect(() => {
        setPackageData();
    }, [packageData]);

    const uploadSingleImage = async (e, type) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('image', e.target.files[0]);
            const res = await axios.post('https://admintm.geekyadi.dev/api/v1/packages/upload/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                }
            });
            toast('Featured image uploaded successfully', {
                icon: '🎉'
            });
            // setSetFeaturedImage(res.data.location);
            if (type === 'featured') {
                setSetFeaturedImage(res.data.location);
            }
            if (type === 'banner') {
                setBannerImage(res.data.location);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    const uploadImages = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            for (let i = 0; i < e.target.files.length; i++) {
                formData.append('images', e.target.files[i])
            }
            const res = await axios.post('https://admintm.geekyadi.dev/api/v1/packages/upload/images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                }
            });
            toast('Image uploaded successfully', {
                icon: '🎉'
            });
            setImage(res.data.location);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    const handleCreateProduct = async (e) => {
        try {
            e.preventDefault();
            const payload = {
                name, description, price, fields, tourPlan, category, featured, images, featuredImage, bannerImage
            };
            e.preventDefault();
            await axios.post('https://admintm.geekyadi.dev/api/v1/packages/packages', payload, {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                }
            });
            setOpen(false);
            toast('Product created successfully', {
                icon: '🎉'
            });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
    const handleFieldChange = (index, key, value, i) => {
        e.preventDefault();
        const updatedFields = [...fields];
        if (key === 'description') {
            updatedFields[index][key][i] = value;
        } else {
            updatedFields[index][key] = value;
        }
        setFields(updatedFields);
    };
    const tourPlanChange = (index, key, value, i) => {
        e.preventDefault();
        const updatedFields = [...tourPlan];
        if (key === 'description') {
            updatedFields[index][key][i] = value;
        } else {
            updatedFields[index][key] = value;
        }
        setTourPlan(updatedFields);
    }
    const deletePackage = async (e) => {
        try {
            e.preventDefault();
            await axios.delete(`https://admintm.geekyadi.dev/api/v1/packages/package/${packageData.id}`, {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                }
            });
            setOpen(false);
            toast('Product deleted successfully', {
                icon: '🎉'
            });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const updatePackage = async (e) => {
        try {
            e.preventDefault();
            const payload = {
                name, description, price, fields, tourPlan, category, featured, images, featuredImage, bannerImage
            };
            e.preventDefault();
            await axios.patch(`https://admintm.geekyadi.dev/api/v1/packages/package/${packageData.id}`, payload, {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                }
            });
            setOpen(false);
            toast('Product updated successfully', {
                icon: '🎉'
            });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (<> {open && (<div id="crud-modal" tabIndex={-1} aria-hidden="true"
                              className="overflow-y-auto overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-[80vw] max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div
                    className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create New
                        Product</h3>

                    <button
                        onClick={(e) => confirm('Are you sure you want to delete this package?') && deletePackage(e)}
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="crud-modal">
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                    <button onClick={() => setOpen(false)} type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span onClick={() => setOpen(false)} className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="p-4 md:p-5">
                    <div className="col-span-2">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Name
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={packageData?.name || "Enter product name"}
                            required=""
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Price
                        </label>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            name="price"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder={packageData?.price || "Enter product price"}
                            required=""
                        />
                    </div>
                    <div className="flex gap-2 py-2 items-start justify-start">
                        <label
                            htmlFor="featured"
                            className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Featured
                        </label>
                        <input
                            onChange={(e) => setFeatured(e.target.checked)}
                            type="checkbox"
                            name="featured"
                            id="featured"
                            className={"mt-1"}
                            checked={featured}
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                               htmlFor="file_input">Upload file</label>

                        {featuredImage ? (<img src={featuredImage} alt="Featured Image"
                                               className="w-20 h-20 p-4 object-cover"/>) : null}
                        <input
                            onChange={(e) => uploadSingleImage(e, 'featured')}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help" id="file_input" type="file"/>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG,
                            PNG,
                            JPG or GIF.</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                               htmlFor="multiple_files">Upload Gallery Images</label>

                        {images ? (<div className="flex flex-wrap gap-4">
                            {images.map((image, index) => (<img key={index} src={image} alt="Gallery Image"
                                                                className="w-20 h-20 p-4 object-cover"/>))}
                        </div>) : null}
                        <input
                            onChange={uploadImages}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="multiple_files" type="file" multiple/>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                               htmlFor="banner_image">Upload Banner Image</label>
                        {bannerImage ? (<img src={bannerImage} alt="Banner Image"
                                             className="w-20 h-20 p-4 object-cover"/>) : null

                        }
                        <input
                            onChange={(e) => uploadSingleImage(e, 'banner')}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="banner_image" type="file"/>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Destination</label>
                        <div className="flex w-full relative">
                            <div
                                className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                            <div onClick={() => setOpenCategory(!openCategory)}
                                 className="w-full bg-white -ml-10 px-4 py-1 flex cursor-pointer items-center rounded-lg outline-none bg-gray-50 border border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                           <span className="flex items-center text-sm justify-between w-full">
                                                  Select Destination
                                           </span>
                                <span
                                    className="cursor-pointer material-symbols-outlined text-[1.4rem] text-gray-400">
                                                  expand_more
                                               </span>
                            </div>
                            {openCategory && <div
                                className="flex absolute top-8 left-0 right-0 w-full mt-2 rounded-lg px-4 py-2 flex-col items-start justify-start bg-white border border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                {categories.map((category, index) => (<div key={index}
                                                                           className="flex items-center w-full gap-2 cursor-pointer hover:bg-gray-500 p-2 rounded-lg"
                                                                           onClick={() => {
                                                                               setCategory(category.name);
                                                                               setOpenCategory(false);
                                                                           }}>
                                    <span>{category.name}</span>
                                </div>))}
                            </div>}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Product Description
                        </label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write product description here"
                            defaultValue={packageData?.description || "Enter product description"}
                        />
                    </div>
                    {/* Dynamic fields */}
                    {fields?.map((field, index) => (<div key={index} className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor={`heading-${index}`}
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Field
                                Heading</label>
                            <input
                                onChange={(e) => handleFieldChange(index, 'heading', e.target.value)}
                                type="text"
                                name={`heading-${index}`}
                                id={`heading-${index}`}
                                value={field.heading}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter field heading"
                                required=""
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor={`description-${index}`}
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Field
                                Description</label>
                            {field.type === 'bullet' ? (field.description.map((description, i) => (
                                <div key={i} className="flex gap-2 items-center">
                                    <input
                                        onChange={(e) => handleFieldChange(index, 'description', e.target.value, i)}
                                        type="text"
                                        name={`description-${index}-${i}`}
                                        id={`description-${index}-${i}`}
                                        value={description}
                                        className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter bullet point"
                                        required=""
                                    />
                                    <button onClick={() => {
                                        const updatedFields = [...fields];
                                        updatedFields[index].description.push('');
                                        setFields(updatedFields);
                                    }} type="button"
                                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <i className="fa fa-plus me-1 -ms-1"/>
                                        Add
                                    </button>
                                    <button onClick={() => {
                                        const updatedFields = [...fields];
                                        updatedFields[index].description.splice(i, 1);
                                        setFields(updatedFields);
                                    }} type="button"
                                            className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <i className="fa fa-trash me-1 -ms-1"/>
                                        Remove
                                    </button>
                                </div>))) : (<textarea
                                onChange={(e) => handleFieldChange(index, 'description', e.target.value, 0)}
                                id={`description-${index}`}
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
                                                        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write product description here"
                                defaultValue={""}
                            />)}
                        </div>
                        <div className="flex justify-between gap-5 col-span-2">
                            <button onClick={() => {
                                const updatedFields = [...fields];
                                updatedFields.splice(index, 1);
                                setFields(updatedFields);
                            }} type="button"
                                    className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <i className="fa fa-trash me-1 -ms-1"/>
                                Remove Field
                            </button>
                        </div>
                    </div>))}
                    {tourPlan?.map((plan, index) => (<div key={index} className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor={`day-${index}`}
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day</label>
                            <input
                                onChange={(e) => tourPlanChange(index, 'day', e.target.value)}
                                type="text"
                                name={`day-${index}`}
                                id={`day-${index}`}
                                value={plan.day}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter field heading"
                                required=""
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor={`title-${index}`}
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input
                                onChange={(e) => tourPlanChange(index, 'title', e.target.value)}
                                type="text"
                                name={`title-${index}`}
                                id={`title-${index}`}
                                value={plan.title}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter title"
                                required=""
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor={`description-${index}`}
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            {plan.description.map((description, i) => (<div key={i} className="flex gap-2 items-center">
                                <input
                                    onChange={(e) => tourPlanChange(index, 'description', e.target.value, i)}
                                    type="text"
                                    name={`description-${index}-${i}`}
                                    id={`description-${index}-${i}`}
                                    value={description}
                                    className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter bullet point"
                                    required=""
                                />
                                <button onClick={() => {
                                    const updatedFields = [...tourPlan];
                                    updatedFields[index].description.push('');
                                    setTourPlan(updatedFields);
                                }} type="button"
                                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <i className="fa fa-plus me-1 -ms-1"/>
                                    Add
                                </button>
                                <button onClick={() => {
                                    const updatedFields = [...tourPlan];
                                    updatedFields[index].description.splice(i, 1);
                                    setTourPlan(updatedFields);
                                }} type="button"
                                        className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <i className="fa fa-trash me-1 -ms-1"/>
                                    Remove
                                </button>
                            </div>))}
                        </div>
                        <div className="flex justify-between gap-5 col-span-2">
                            <button onClick={() => {
                                const updatedFields = [...tourPlan];
                                updatedFields.splice(index, 1);
                                setTourPlan(updatedFields);
                            }} type="button"
                                    className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <i className="fa fa-trash me-1 -ms-1"/>
                                Remove Field
                            </button>
                        </div>
                    </div>))}
                    <div className={'flex justify-between gap-5 mt-5'}>
                        <button
                            type={'button'}
                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clipRule="evenodd"/>
                            </svg>
                            <select
                                onChange={(e) => {
                                    const updatedFields = [...fields];
                                    updatedFields.push({
                                        heading: '', description: [''], type: e.target.value
                                    });
                                    setFields(updatedFields);
                                }}
                                id="field-type"
                                className="bg-transparent border-none"
                            >
                                <option value="text">Text</option>
                                <option value="bullet">Bullet</option>
                            </select>
                        </button>
                        <button
                            type={'button'}
                            onClick={() => {
                                const updatedFields = [...tourPlan];
                                updatedFields.push({day: '', title: '', description: ['']});
                                setTourPlan(updatedFields);
                            }}
                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clipRule="evenodd"/>
                            </svg>
                            Add a Day
                        </button>
                        <button onClick={packageData ? updatePackage : handleCreateProduct}
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clipRule="evenodd"/>
                            </svg>
                            {packageData ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>)}
    </>);
};

export default Popup;
