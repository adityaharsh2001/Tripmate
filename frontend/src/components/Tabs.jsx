import { useState } from 'react';
import Information from "./Information";
import Gallary from "./Gallary";
import TourPlan from "./TourPlan";
const Tabs = ({ packageData }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabs = [
        { title: 'Information', content: <Information {...{ packageData }} />, logo: '/Information.svg'},
        { title: 'Tour Plan', content: <TourPlan {...{ packageData }} />, logo: '/TourPlanLogo.svg'},
        { title: 'Gallery', content: <Gallary {...{ packageData }} />, logo: '/GalleryLogo.svg'}
    ];

    return (
        <div className={"w-[80vw] relative top-[-8rem] shadow-2xl flex flex-col z-[40]"}>
            <div className={"w-full flex items-center justify-between"}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`flex cursor-pointer w-full p-10 max-md:p-5 gap-3 items-center justify-center ${
                            activeTab === index ? 'bg-white' : 'bg-[#F8F8F8]'
                        }`}
                    >
                        <img alt={""} src={tab.logo}/>
                        <span>{tab.title}</span>
                    </div>
                ))}
            </div>
            <div>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`${activeTab === index ? '' : 'hidden'}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
