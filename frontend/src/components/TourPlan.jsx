import * as React from "react";
import ReactMardown from "react-markdown";
const TourPlan = ({ packageData }) => {
    return (
        <div className="flex flex-col  self-center px-20 py-12 bg-white w-full">
            <h1 className="section-title">Tour Plan</h1>
            <section className="timeline">
                {
                    packageData.tourPlan?.map((day, index) => (
                        <div key={index} className="timeline__block">
                            <div className="timeline__midpoint"></div>
                            <div className={`timeline__content ${index % 2 === 0 ? 'timeline__content--left' : 'timeline__content--right'}`}>
                                <h3 className="timeline__year">Day <ReactMardown>{day.day}</ReactMardown></h3>
                                <div className="flex flex-col gap-2.5 mb-5">
                                    <div className="flex flex-row items-center justify-start gap-2">
                                        <span className="text-base font-normal"><ReactMardown>{day.title}</ReactMardown></span>
                                    </div>
                                    {
                                        day.description.length < 2 ? (
                                            <ul className="flex inside-point flex-col text-sm items-start justify-start gap-2">
                                                <li><ReactMardown>{day.description}</ReactMardown></li>
                                            </ul>
                                        ) : day.description.map((desc, index) => (
                                            <ul key={index} className="flex inside-point flex-col text-sm items-start justify-start gap-2">
                                                <li><ReactMardown>{desc}</ReactMardown></li>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default TourPlan;
