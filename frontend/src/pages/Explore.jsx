import SearchComponent from "../components/Search";
import PackageCard from "../components/PackageCard";

const Explore = () => {
    return (
        <div className="flex flex-col pb-12 justify-start items-start !font-poppins">
            <div
                className="flex overflow-hidden relative flex-col justify-center px-0.5 w-full max-h-[500px] text-white max-md:max-w-full">
                <img
                    alt={"Explore top destination"}
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c243c524be39cee86f92c6e5c256e0723e590a8f84d46cfddf7e6d881a73dbb?apiKey=541b99f033084413ad47876370bcfa8c&"
                    className="object-cover absolute inset-0 size-full"
                />
                <div
                    className="flex relative justify-center items-center px-16 pb-12 w-full h-full bg-black bg-opacity-30 max-md:px-5 max-md:max-w-full">
                    <div
                        className="text-[2.75rem] pt-56 mx-auto mt-7 mb-44 w-full font-extrabold text-center max-md:pt-10 max-md:mb-10 max-md:max-w-full max-md:text-4xl">
                        Explore India's wonders with our curated travel packages, each
                        journey a new adventure.
                    </div>
                </div>
            </div>
            {" "}
            <div className="flex md:px-20 px-10  items-start justify-center gap-10 w-full">
                <div className="flex flex-col items-start mt-10 justify-center gap-5 w-1/3">
                    <div clasName="flex text-sm flex-col px-4 bg-primary items-center justify-center gap-5 w-full">
                        <span className={"font-bold"}>Destination</span>
                        <div className="flex flex-col items-start justify-center mt-5 gap-5 w-full">
                            <input type={'checkbox'} id={'manali'} name={'manali'} value={'manali'}/>
                            <input type={'checkbox'} id={'manali'} name={'manali'} value={'manali'}/>
                            <input type={'checkbox'} id={'manali'} name={'manali'} value={'manali'}/>
                            <input type={'checkbox'} id={'manali'} name={'manali'} value={'manali'}/>
                        </div>
                    </div>
                    <div clasName="flex flex-col px-4 bg-primary items-center justify-center gap-5 w-full">
                        <span className={"font-bold"}>Number of People</span>
                        <div className="flex flex-col items-start justify-center mt-5 gap-5 w-full">
                            <input type={'checkbox'} id={'manali'} name={'manali'} value={'manali'}/>
                            <input type={'checkbox'} id={'manali'} name={'manali'} value={'manali'}/>
                            <input type={'checkbox'} id={'manali'} name={'manali'} value={'manali'}/>
                            <input type={'checkbox'} id={'manali'} name={'manali'} value={'manali'}/>
                        </div>
                    </div>
                </div>
                <div
                    className="flex w-full items-center justify-between self-center mt-10 flex-wrap gap-[20px] max-md:mt-10 max-md:max-w-full">
                    <PackageCard Place={"Manali"} price={200} Name={"Manali, Kasol, Atal Tunnel"}/>
                    <PackageCard Place={"Manali"} price={200} Name={"Manali, Kasol, Atal Tunnel"}/>
                    <PackageCard Place={"Manali"} price={200} Name={"Manali, Kasol, Atal Tunnel"}/>
                    <PackageCard Place={"Manali"} price={200} Name={"Manali, Kasol, Atal Tunnel"}/>
                    <PackageCard Place={"Manali"} price={200} Name={"Manali, Kasol, Atal Tunnel"}/>
                    <PackageCard Place={"Manali"} price={200} Name={"Manali, Kasol, Atal Tunnel"}/>
                </div>
            </div>
        </div>
    );
};

export default Explore;
