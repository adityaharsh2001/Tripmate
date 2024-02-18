import {memo} from "react";

const PackageCard = ({price, Name, Place}) => {
    return (
        <div
            className="w-full max-w-80 text-left relative rounded-13xl cursor-pointer duration-500 hover:scale-105 overflow-hidden">
            <img
                src="/image-3@2x.png"
                alt="Product" className=" shadow-m hover:shadow-xl w-full h-80 object-cover rounded-13xl"/>
            <div className="flex items-center absolute top-0 left-0 bg-white rounded-br-xl p-4">
                <span className="text-lg font-semibold text-black cursor-auto">₹ {price}/person</span>
            </div>
            <div className="w-72 px-4 flex flex-col gap-2">
                <div className="text-gray-200 mr-3 text-[12px] mt-2">{Name}</div>
            </div>
            <div className="text-lg px-4 font-bold text-black truncate block capitalize">{Place}</div>
        </div>
    );
};


export default PackageCard;
