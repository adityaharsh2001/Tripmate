import React from "react";

const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dries Vincent',
        role: 'Manager, Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        role: 'Frontend Engineer',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function Team() {
    return (
        <div className="w-full px-10 md:px-20 text-secondary text-[1.44rem]">
            <div className="mx-auto grid max-w-7xl gap-x-8 xl:grid-cols-3">
                <div className="flex flex-col py-5 max-md:mt-10 max-md:max-w-full">
                    <div
                        className="flex flex-col items-start justify-start py-[1.25rem] box-border gap-[1rem] max-w-full">
                        <b className="w-[9.94rem] relative tracking-[0.2em] leading-[120%] uppercase inline-block ">
                            Meet Our Leadership
                        </b>
                        <p className="mt-8 text-base leading-7 text-black max-md:max-w-full">
                            Et labore harum non nobis ipsum eum molestias mollitia et
                            corporis praesentium a laudantium internos. Non quis eius quo
                            eligendi corrupti et fugiat nulla qui soluta recusandae in
                            maxime quasi aut ducimus illum aut optio quibusdam!
                        </p>
                    </div>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt=""/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-primary">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}