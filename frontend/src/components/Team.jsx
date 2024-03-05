import React, {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

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
            <div className="mx-auto grid gap-x-8 xl:grid-cols-2">
                <div ref={ref} className="flex flex-col py-5 max-md:mt-10 max-md:max-w-full"
                     animate={controls}
                     initial={{opacity: 0, y: 50}}>
                    <div className="row">
                        <div className="box box--left">
                            <div className="box__inner">
                                <a href="#">
                                    <img src="/images/g1.jpeg" alt=""/>
                                </a>
                            </div>
                        </div>

                        <div className="box box--right">
                            <div className="box__inner">
                                <a href="#">
                                    <img src="/images/g2.jpeg" alt=""/>
                                </a>
                            </div>
                        </div>

                        <div className="box box--left box--small">
                            <div className="box__inner">
                                <a href="#">
                                    <img src="/images/g3.jpeg" alt=""/>
                                </a>
                            </div>
                        </div>

                        <div className="box box--right box--small">
                            <div className="box__inner">
                                <a href="#">
                                    <img src="/images/g4.jpeg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref} className="flex flex-col py-5 items-center justify-center  max-md:mt-10 max-md:max-w-full"
                     animate={controls}
                     initial={{opacity: 0, y: 50}}>
                    <div
                        className="flex flex-col items-start justify-start py-[1.25rem] box-border gap-[1rem] max-w-full">
                        <b className="relative tracking-[0.2em] leading-[120%] uppercase inline-block ">
                            About Your Tripmate
                        </b>
                        <p className="text-base leading-7 text-black max-md:max-w-full">
                            We are a travel agency with 5 years of experience in Group Trip and Customise trips, for
                            Solo, Friends, Couple, corporate, Families and all, our Expert team provides you a budget
                            friendly package and will also provide an unforgettable experience…Have questions ? our
                            experienced team are always happy to talk to you
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
