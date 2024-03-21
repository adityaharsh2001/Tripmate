const {useNavigate} = require("react-router-dom");
const PackageCard = ({featuredPackage}) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center w-[250px] bg-white rounded-2xl cursor-pointer" onClick={() => navigate(`/package-details?id=${featuredPackage.id}`)}>
            <img
                alt={"Name"}
                loading="lazy"
                srcSet={featuredPackage?.featuredImage}
                className="self-stretch w-full aspect-[1.45] object-cover rounded-t-2xl"
            />
            <div className="mt-5 px-5 text-center text-xl text-black">
                {featuredPackage?.name}
            </div>
            <div className="mt-2.5 px-5 text-slate-600 text-opacity-70">
                {featuredPackage?.cardDescription}
            </div>
            <div className="flex gap-5 justify-between p-5 w-full whitespace-nowrap text-slate-600">
                <div> &#8377; {featuredPackage?.price}</div>
                <div className="flex gap-1.5 justify-between">
                    <div className="grow">{featuredPackage?.duration}</div>
                </div>
            </div>
        </div>
    );
};


export default PackageCard;
