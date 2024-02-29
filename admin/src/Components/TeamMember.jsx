import React, {useEffect, useState} from 'react'
import axios from "axios";
import {toast} from "react-hot-toast";
import {Input} from "postcss";

const TeamMember = ({open, setOpen, teamData = null}) => {
    console.log('teamData', teamData);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [designation, setDesignation] = useState('');

    const handleCreateTeamMember = async () => {
        try {
            const response = await axios.post('https://admintm.geekyadi.dev/api/v1/teams/', {
                name, image, designation,
            }, {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                },
            });
            if (response.status === 201) {
                toast.success('Team Member created successfully');
                setName('');
                setImage('');
                setDesignation('');
                setOpen(false);
            }
        } catch (error) {
            console.error('Error creating team member:', error);
            toast.error('Error creating team member');
        }
    }

    const updateTeamMember = async () => {
        try {
            const response = await axios.patch(`https://admintm.geekyadi.dev/api/v1/teams/team/${teamData.id}`, {
                name, image, designation,
            }, {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                },
            });
            if (response.status === 200) {
                toast.success('Team Member updated successfully');
                setName('');
                setImage('');
                setDesignation('');
                setOpen(false);
            }
        } catch (error) {
            console.error('Error updating team member:', error);
            toast.error('Error updating team member');
        }
    }

    const deleteTeamMember = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`https://admintm.geekyadi.dev/api/v1/teams/team/${teamData.id}`, {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                },
            });
            if (response.status === 200) {
                toast.success('Team Member deleted successfully');
                setName('');
                setImage('');
                setDesignation('');
                setOpen(false);
            }
        } catch (error) {
            console.error('Error deleting team member:', error);
            toast.error('Error deleting team member');
        }
    }

    const uploadSingleImage = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response = await axios.post('https://admintm.geekyadi.dev/api/v1/teams/upload/image', formData, {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access.token}`,
                },
            });
            if (response.status === 201) {
                setImage(response.data.location);
                toast.success('Image uploaded successfully');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Error uploading image');
        }
    }

    useEffect(() => {
        if (teamData) {
            setName(teamData.name);
            setImage(teamData.image);
            setDesignation(teamData.designation);
        }
    }, [teamData])
    return (
        <>
            {open &&
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
                                    {teamData ? 'Update' : 'Create'} Team Member
                                </h3>
                                <button onClick={(e) => deleteTeamMember(e)}
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
                                            placeholder={teamData?.name || 'Enter Category name'}
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className={"col-span-2"}>
                                    <label
                                        htmlFor="image"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Image
                                    </label>
                                    {
                                        teamData?.image &&
                                        <img src={teamData?.image} alt="team member image"
                                             className="w-20 h-20 rounded-lg"/>
                                    }
                                    <input
                                        onChange={(e) => uploadSingleImage(e)}
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
                                        Designation
                                    </label>
                                    <input
                                        onChange={(e) => setDesignation(e.target.value)}
                                        type="text"
                                        name="designation"
                                        id="designation"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder={teamData?.designation || 'Enter Team Member designation'}
                                        required=""
                                    />
                                </div>
                                <div className="flex justify-end mt-10">
                                    <button
                                        type="button"
                                        onClick={teamData ? updateTeamMember : handleCreateTeamMember}
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
                                        {teamData ? 'Update' : 'Create'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>)
}
export default TeamMember
