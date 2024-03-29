import React, {useEffect, useState} from 'react'
import axios from "axios";
import {toast} from "react-hot-toast";

const CategoryPopup = ({open, setOpen, categoryData = null}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [featured, setFeatured] = useState(false)
    const handleCreateCategory = async (e) => {
        try {
            e.preventDefault()
            if (!name || !description || !image) {
                toast.error('All fields are required')
                return
            }
            if (categoryData) {
                await axios.put(`/api/v1/packages/categories/${id}`, {
                        name,
                        description,
                        image,
                        featured
                    }, {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                        }
                    }
                )
                setOpen(false)
                toast('Category updated successfully', {
                    icon: '🎉'
                })
                return
            } else {
                await axios.post('/api/v1/packages/categories', {
                        name,
                        description,
                        image
                    }, {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                        }
                    }
                )
                setOpen(false)
                toast('Category created successfully', {
                    icon: '🎉'
                })
            }
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
    const uploadSingleImage = async (e) => {
        try {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            const res = await axios.post('/api/v1/packages/upload/image', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                }
            })
            setImage(res.data.location)
            toast('Image uploaded successfully', {
                icon: '🎉'
            })
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
    const setCategoryData = () => {
        setName(categoryData.name)
        setDescription(categoryData.description)
        setImage(categoryData.image)
    }

    const updateCategory = async () => {
        try {
            await axios.patch(`.
/api/v1/packages/categories/${categoryData.id}`, {
                name,
                description,
                image,
                featured
            }, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                }
            })
            setOpen(false)
            toast('Category updated successfully', {
                icon: '🎉'
            })
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }

    const deleteCategory = async (e) => {
        try {
            e.preventDefault()
            await axios.delete(`.
/api/v1/packages/categories/${categoryData.id}`, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                }
            })
            setOpen(false)
            toast('Category deleted successfully', {
                icon: '🎉'
            })
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }

    useEffect(() => {
        if (categoryData) {
            setCategoryData()
        }
    }, []);
    return (
        <>
            {
                open &&
                <div
                    id="crud-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative p-4 w-full max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div
                                className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Create A New Category
                                </h3>
                                <button onClick={(e) => deleteCategory(e)} type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                                <button
                                    onClick={() => setOpen(false)}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="crud-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
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
                                            placeholder="Type product name"
                                            required=""
                                            defaultValue={categoryData?.name || 'Enter Category name'}
                                        />
                                    </div>
                                    {/*featured*/}
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="featured"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Featured
                                        </label>
                                        <input
                                            onChange={(e) => setFeatured(e.target.checked)}
                                            type="checkbox"
                                            name="featured"
                                            id="featured"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type product name"
                                            required=""
                                            defaultValue={categoryData?.featured || 'Enter Category featured'}
                                        />
                                    </div>
                                    <div className={"col-span-2"}>
                                        <label
                                            htmlFor="image"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Image
                                        </label>
                                        {
                                            categoryData?.image &&
                                            <img src={categoryData?.image} alt="image"
                                                 className="w-20 h-20 rounded-lg"/>
                                        }
                                        <input
                                            onChange={uploadSingleImage}
                                            type="file"
                                            name="image"
                                            id="image"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type product name"
                                            required=""
                                        />
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
                                            defaultValue={categoryData?.description || 'Enter Category description'}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={categoryData ? updateCategory : handleCreateCategory}
                                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="me-1 -ms-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {categoryData ? 'Update' : 'Create'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default CategoryPopup
