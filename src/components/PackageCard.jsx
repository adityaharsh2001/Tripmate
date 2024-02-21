const PackageCard = ({price, Name, Place, Description}) => {
    return (
        <div className="flex flex-col items-center pb-7 w-[350px] bg-white rounded-2xl shadow-[0px_4px_16px_rgba(0,_0,_0,_0.1),_0px_4px_16px_rgba(0,_0,_0,_0.1)]">
            <img
                alt={"Name"}
                loading="lazy"
                srcSet="/images/rectangle-193251@2x.png"
                className="self-stretch w-full aspect-[1.45] object-cover rounded-t-2xl"
            />
            <div className="mt-5 text-xl text-black">
                {Place}
            </div>
            <div className="mt-2.5 text-slate-600 text-opacity-70">
                {Description}
            </div>
            <div className="flex gap-5 justify-between p-5 w-full whitespace-nowrap text-slate-600">
                <div>{price}</div>
                <div className="flex gap-1.5 justify-between">
                    <div className="grow">7 Days Trip</div>
                </div>
            </div>
        </div>
    );
};


export default PackageCard;
