const TourPlan = () => {
    return (
        <div className="flex flex-col  self-center px-20 py-12 bg-white w-full">
            <h1 className="section-title">Tour Plan</h1>
            <section className="timeline">
                <div className="timeline__block">
                    <div className="timeline__midpoint"></div>
                    <div className="timeline__content timeline__content--left">
                        <h3 className="timeline__year">Day 01</h3>
                        <div className="flex flex-row items-center justify-start">
                            <span className="text-base font-normal">DEPARTURE FROM DELHI TO MANALI</span>
                        </div>
                        <ul className="flex inside-point flex-col text-sm items-start justify-start ml-[-25px] gap-2">
                            <li>Delhi Reporting time - 5 :00 pm</li>
                            <li>Departure Time 6:30 pm</li>
                            <li>Chandigarh Pickup Timing 12:00 to 2:00 am</li>
                            <li>Reach Manali By next Morning 9am To 11:00 am</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline__block">
                    <div className="timeline__midpoint"></div>
                    <div className="timeline__content timeline__content--right">
                        <h3 className="timeline__year">Day 02</h3>
                        <div className="flex flex-col gap-2.5 mb-5">
                            <div className="flex flex-row items-center justify-start gap-2">
                                <span className="text-base font-normal">MANALI LOCAL SIGHTSEEING</span>
                            </div>
                            <ul className="flex inside-point flex-col text-sm items-start ml-[-25px] justify-start gap-2">
                                <li>Reach manali by 9 to 11 am, Check into Manali
                                    Hotel.
                                    Take Some rest (1-2Hrs) Then we proceed for sightseeing
                                </li>
                                <li>Places to visit - Hadimba Temple, Van vihar,
                                    monetstery club house vasisth temple jogni waterfall , Mall road, (high beat cafe
                                    old
                                    manali live show)
                                </li>
                                <li>A mini trek - Vasisth temple to jogni waterfall
                                    trek
                                    of 2-3km • Reach back to Hotel By evening,
                                </li>
                                <li>Meals - Dinner Overnight Stay in hotel</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline__block">
                    <div className="timeline__midpoint"></div>
                    <div className="timeline__content timeline__content--left">
                        <h3 className="timeline__year">Day 03</h3>
                        <div className="flex flex-col gap-2.5 mb-5">
                            <div className="flex flex-row items-center justify-start gap-2">
                                <span className="text-base font-normal">SOLANG VALLEY / ATAL TUNNEL</span>
                            </div>
                            <ul className="ml-[-25px] flex inside-point flex-col text-sm items-start justify-start gap-2">
                                <li>Wake up with the beatutifull sights infront of
                                    your
                                    eyes After Breakfast we will proceed for Sollang valley / Atal tunnel
                                </li>
                                <li>Enjoy Snow Activities, zippline, sking, etc. (at
                                    your
                                    own cost) Reach Back to Hotel By evening • Have delicious Dinner at Hotel
                                </li>
                                <li>Overnight Stay in manali Hotel • Meals - Dinner &
                                    Breakfast
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline__block">
                    <div className="timeline__midpoint"></div>
                    <div className="timeline__content timeline__content--left">
                        <h3 className="timeline__year">Day 04</h3>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <span className="text-base font-normal">KULLU | KASOL - DEPARTURE</span>
                        </div>
                        <ul className="flex px-10 inside-point text-sm flex-col items-start ml-[-25px] justify-start gap-2">
                            <li>Wake Up Have a delicious breakfast, Then checkout from
                                Hotel, and Proceed for Kullu & Kasol local sightseeing (manikaran if time permits) after
                                that will departed for delhi
                            </li>
                            <li>Pitstop at kullu for Paragliding & raffting ( own
                                cost) Overnight journey from kasol to delhi
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="timeline__block">
                    <div className="timeline__midpoint"></div>
                    <div className="timeline__content timeline__content--right">
                        <h3 className="timeline__year">Day 05</h3>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <span className="text-base font-normal">DELHI - HOME SWEET HOME</span>
                        </div>
                        <ul className="flex inside-point flex-col ml-[-25px] text-sm  items-start justify-start gap-2">
                            <li>Reach Delhi At Respective location by 05:00 am to
                                10:00 am
                            </li>
                            <li>End of the Trip With some beautiful sweets memories
                            </li>
                            <li>can never will be fade</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourPlan;
//
// <div className="flex flex-col  self-center px-20 py-12 bg-white w-full">
//     <ul className="vertical-ul">
//         <li className={"vertical-li text-xl flex flex-col gap-2.5 mb-5"}>
//             <div className="flex flex-row items-center justify-start gap-4">
//                 <span className="text-base font-normal">Day 1 : DEPARTURE FROM DELHI TO MANALI</span>
//             </div>
//             <ul className="flex px-10 inside-point flex-col items-start justify-start gap-2">
//                 <li className="text-base font-normal">Delhi Reporting time - 5 :00 pm</li>
//                 <li className="text-base font-normal">Departure Time 6:30 pm</li>
//                 <li className="text-base font-normal">Chandigarh Pickup Timing 12:00 to 2:00 am</li>
//                 <li className="text-base font-normal">Reach Manali By next Morning 9am To 11:00 am</li>
//             </ul>
//         </li>
//         <li className={"text-xl vertical-li"}>
//             <div className="flex flex-col gap-2.5 mb-5">
//                 <div className="flex flex-row items-center justify-start gap-4">
//                     <span className="text-base font-normal">Day 2 : MANALI LOCAL SIGHTSEEING</span>
//                 </div>
//                 <ol className="flex px-10 inside-point flex-col items-start justify-start gap-2">
//                     <li className="text-base font-normal">Reach manali by 9 to 11 am, Check into Manali Hotel.
//                         Take Some rest (1-2Hrs) Then we proceed for sightseeing
//                     </li>
//                     <li className="text-base font-normal">Places to visit - Hadimba Temple, Van vihar,
//                         monetstery club house vasisth temple jogni waterfall , Mall road, (high beat cafe old
//                         manali live show)
//                     </li>
//                     <li className="text-base font-normal">A mini trek - Vasisth temple to jogni waterfall trek
//                         of 2-3km • Reach back to Hotel By evening,
//                     </li>
//                     <li className="text-base font-normal">Meals - Dinner Overnight Stay in hotel</li>
//                 </ol>
//             </div>
//         </li>
//         <li className={"text-xl vertical-li"}>
//             <div className="flex flex-col gap-2.5 mb-5">
//                 <div className="flex flex-row items-center justify-start gap-4">
//                     <span className="text-base font-normal">Day 3 : SOLANG VALLEY / ATAL TUNNEL</span>
//                 </div>
//                 <ol className="flex px-10 inside-point flex-col items-start justify-start gap-2">
//                     <li className="text-base font-normal">Wake up with the beatutifull sights infront of your
//                         eyes After Breakfast we will proceed for Sollang valley / Atal tunnel
//                     </li>
//                     <li className="text-base font-normal">Enjoy Snow Activities, zippline, sking, etc. (at your
//                         own cost) Reach Back to Hotel By evening • Have delicious Dinner at Hotel
//                     </li>
//                     <li className="text-base font-normal">Overnight Stay in manali Hotel • Meals - Dinner &
//                         Breakfast
//                     </li>
//                 </ol>
//             </div>
//         </li>
//         <li className={"text-xl vertical-li"}>
//             <div className="flex flex-col gap-2.5 mb-5">
//                 <div className="flex flex-row items-center justify-start gap-4">
//                     <span className="text-base font-normal">Day 4 : KULLU | KASOL - DEPARTURE</span>
//                 </div>
//                 <ol className="flex px-10 inside-point flex-col items-start justify-start gap-2">
//                     <li className="text-base font-normal">Wake Up Have a delicious breakfast, Then checkout from
//                         Hotel, and Proceed for Kullu & Kasol local sightseeing (manikaran if time permits) after
//                         that will departed for delhi
//                     </li>
//                     <li className="text-base font-normal">Pitstop at kullu for Paragliding & raffting ( own
//                         cost) Overnight journey from kasol to delhi
//                     </li>
//                 </ol>
//             </div>
//         </li>
//         <li className={"text-xl vertical-li"}>
//             <div className="flex flex-col gap-2.5 relative mb-5">
//                 <div className="flex flex-row items-center justify-start gap-4">
//                     <span className="text-base font-normal">DELHI - HOME SWEET HOME</span>
//                 </div>
//                 <ol className="flex px-10 inside-point flex-col items-start justify-start gap-2">
//                     <li className="text-base font-normal">Reach Delhi At Respective location by 05:00 am to
//                         10:00 am
//                     </li>
//                     <li className="text-base font-normal">End of the Trip With some beautiful sweets memories
//                     </li>
//                     <li className="text-base font-normal">can never will be fade</li>
//                 </ol>
//             </div>
//         </li>
//     </ul>
// </div>
