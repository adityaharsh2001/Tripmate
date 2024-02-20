const PackageCard = ({price, Name, Place, Description}) => {
    return (
        <div className="flex flex-col items-center pb-7 w-[350px] bg-white bg-opacity-90">
            <img
                alt={"Name"}
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b452511ba659f8b7730174ff5084ec52d9921acf3cfd2e828bb1e8566cc994d?apiKey=541b99f033084413ad47876370bcfa8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b452511ba659f8b7730174ff5084ec52d9921acf3cfd2e828bb1e8566cc994d?apiKey=541b99f033084413ad47876370bcfa8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b452511ba659f8b7730174ff5084ec52d9921acf3cfd2e828bb1e8566cc994d?apiKey=541b99f033084413ad47876370bcfa8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b452511ba659f8b7730174ff5084ec52d9921acf3cfd2e828bb1e8566cc994d?apiKey=541b99f033084413ad47876370bcfa8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b452511ba659f8b7730174ff5084ec52d9921acf3cfd2e828bb1e8566cc994d?apiKey=541b99f033084413ad47876370bcfa8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b452511ba659f8b7730174ff5084ec52d9921acf3cfd2e828bb1e8566cc994d?apiKey=541b99f033084413ad47876370bcfa8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b452511ba659f8b7730174ff5084ec52d9921acf3cfd2e828bb1e8566cc994d?apiKey=541b99f033084413ad47876370bcfa8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b452511ba659f8b7730174ff5084ec52d9921acf3cfd2e828bb1e8566cc994d?apiKey=541b99f033084413ad47876370bcfa8c&"
                className="self-stretch w-full aspect-[1.45]"
            />
            <div className="mt-5 text-xl text-black">
                {Place}
            </div>
            <div className="mt-2.5 text-slate-600 text-opacity-70">
                {Description}
            </div>
            {/*rating*/}
            {/*<div className="flex gap-4 justify-center self-center mt-8 w-56 max-w-full">*/}
            {/*    {[1, 2, 3, 4, 5].map((star) => (*/}
            {/*        <img width="28" height="28" src="https://img.icons8.com/fluency/48/star--v1.png"*/}
            {/*             alt="star--v1"/>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="flex gap-5 justify-between mt-12 p-5 w-full whitespace-nowrap text-slate-600">
                <div>15,000</div>
                <div className="flex gap-1.5 justify-between">
                    <div className="grow">7 Days Trip</div>
                </div>
            </div>
        </div>
    );
};


export default PackageCard;
