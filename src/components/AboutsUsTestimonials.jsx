import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonialData = [
    {
        name: 'Jane Doe',
        role: 'Mobile dev',
        imageSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    {
        name: 'Andy Doe',
        role: 'Manager',
        imageSrc: 'https://randomuser.me/api/portraits/women/62.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    {
        name: 'Yanndy Doe',
        role: 'Mobile dev',
        imageSrc: 'https://randomuser.me/api/portraits/women/19.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
];

const TestimonialItem = ({ name, role, imageSrc, text }) => {
    return (
        <div
            className="aspect-auto p-8 w-full h-fit border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
            <div className="flex gap-4 w-full items-cente justify-start">
                <img className="w-12 h-12 rounded-full" src={imageSrc} alt="user avatar" width="200" height="200"
                     loading="lazy" />
                <div className={'flex flex-col gap-1'}>
                    <span className="text-lg font-medium text-gray-700">{name}</span>
                    <span className="text-sm text-gray-500">{role}</span>
                </div>
            </div>
            <p className="mt-8 text-base text-black">{text}</p>
        </div>
    );
};

const AboutsUsTestimonials = ({ testimonials = testimonialData }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 , delay: 0.5, ease: 'easeInOut' }
            });
        }
    }, [controls, inView]);

    return (
        <div className="text-gray-600 dark:text-gray-300 mt-8 text-[1.44rem]" id="reviews">
            <div className="mx-auto md:px-20 px-10">
                <div className="flex flex-col py-5 mt-36 max-md:mt-10 max-md:max-w-full">
                    <div
                        className="flex flex-col items-start justify-start py-[1.25rem] box-border gap-[1rem] max-w-full">
                        <b className="w-full relative tracking-[0.2em] leading-[120%] uppercase inline-block pr-[1.25rem]">
                            What People Say About Us
                        </b>
                        <h1 className="m-0 text-[2.5rem] leading-[120%] font-bold font-inherit text-grey-scale-black ">
                            Our top value experiences for you
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            ref={ref}
                            animate={controls}
                            initial={{ opacity: 0, y: 50 }}
                        >
                            <TestimonialItem
                                name={testimonial.name}
                                role={testimonial.role}
                                imageSrc={testimonial.imageSrc}
                                text={testimonial.text}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutsUsTestimonials;
