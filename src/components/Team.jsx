import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

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
    const controls = useAnimation();
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {duration: 0.5},
            });
        }
    }, [controls, inView]);

    return (
        <div className="w-full px-10 mt-10 md:px-20 text-secondary text-[1.44rem]">
            <div className="mx-auto grid max-w-7xl gap-x-8 xl:grid-cols-3">
                <div ref={ref} className="flex flex-col py-5 max-md:mt-10 max-md:max-w-full"
                     animate={controls}
                     initial={{opacity: 0, y: 50}}>
                    <div
                        className="flex flex-col items-start justify-start py-[1.25rem] box-border gap-[1rem] max-w-full">
                        <b className="w-[9.94rem] relative tracking-[0.2em] leading-[120%] uppercase inline-block ">
                            Meet Our Leadership
                        </b>
                        <p className="text-base leading-7 text-black max-md:max-w-full">
                            We are a travel agency with 5 years of experience in Group Trip and Customise trips, for
                            Solo, Friends, Couple, corporate, Families and all, our Expert team provides you a budget
                            friendly package and will also provide an unforgettable experience…Have questions ? our
                            experienced team are always happy to talk to you

                        </p>
                    </div>
                </div>
                <ul role="list" className="grid items-center gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <motion.li key={person.name}
                                   ref={ref}
                                   animate={controls}
                                   initial={{opacity: 0, y: 50}}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt=""/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-primary">{person.role}</p>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
