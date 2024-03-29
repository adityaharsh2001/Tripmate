import * as React from "react";
import PackageForm from "./PackageForm";
import ReactMardown from "react-markdown";

const ImagePopup = ({image, closePopup}) => {
    return (
        <div
            className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closePopup}
        >
            <img src={image} alt="" className="max-w-full max-h-full"/>
        </div>
    );
};

function Information({packageData, categories}) {
    const [activeImage, setActiveImage] = React.useState(null);
    React.useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".max-w-full")) {
                setActiveImage(null);
            }
        };

        if (activeImage) {
            document.addEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [activeImage]);
    const renderDescription = (description) => {
        //make all text bold that are inside *** ***
        const boldText = description.match(/\*\*\*(.*?)\*\*\*/g);
        if (boldText) {
            boldText.forEach((text) => {
                description = description.replace(text, `<b>${text.replace(/\*\*\*/g, "")}</b>`);
            });
        }
        return <div dangerouslySetInnerHTML={{__html: description}}/>;
    }

    const closePopup = () => {
        setActiveImage(null);
    };
    return (
            <div className="flex flex-col self-center px-9 py-12 bg-white w-full">
                <div className="flex gap-5 flex-col justify-between mt-7 max-w-full capitalize max-md:flex-wrap">
                    <div className="flex-auto text-3xl font-bold text-indigo-950">
                        <ReactMardown>{packageData.name}</ReactMardown>
                    </div>
                    <div className="flex justify-start gap-5  text-left">
                        <div className="flex gap-5 text-3xl font-medium text-blue-600">
                            &#8377;  <ReactMardown>{packageData.price}</ReactMardown>
                        </div>
                    </div>
                </div>
                <div
                    className="flex gap-5 mt-5 max-w-full text-base font-medium leading-7 text-center text-gray-500 whitespace-nowrap w-[210px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a32bdc706d0cd0fabed9323e4e1cc9d0fb01546f805b207d811e768e11333d7?apiKey=541b99f033084413ad47876370bcfa8c&"
                        className="flex-1 shrink-0 w-full aspect-[5.88]"
                    />
                    <div className="grow">(2.3k review)</div>
                </div>
                <div className="mt-11 text-base leading-7 text-black max-md:mt-10 max-md:max-w-full">
                    <ReactMardown>{
                        packageData.description
                    }</ReactMardown>
                </div>
                <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-center max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex items-start justify-start flex-col max-md:ml-0 max-md:w-full">
                            {packageData?.fields?.map((field, index) => (
                                <>
                                    <div key={index}
                                         className="flex max-md:flex-col mb-10 max-md:items-start max-md:justify-start items-center justify-center gap-3 md:gap-10 my-auto">
                                        <div
                                            className={"text-xl font-bold  text-blue-600 capitalize tracking-[2px]"}><ReactMardown>{field.heading}</ReactMardown></div>
                                        {field.description.length < 2 ?
                                            <div
                                                className="text-base items-center justify-center leading-7 text-black"><ReactMardown>{field.description[0]}</ReactMardown></div>
                                            :
                                            <ul className="flex flex-col gap-2.5 text-base items-start justify-start leading-7 text-black">
                                                {field.description.map((desc, index) => (
                                                    <li key={index}><ReactMardown>{desc}</ReactMardown></li>
                                                ))}
                                            </ul>
                                        }
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="flex flex-col mt-5 max-md:w-full w-1/2">
                            <PackageForm categories={categories}/>
                        </div>
                    </div>
                </div>
                <div
                    className="mt-32 text-5xl font-bold leading-[71px] text-indigo-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    From our gallery
                </div>
                <div
                    className="flex flex-wrap justify-center content-start items-center px-16 py-2.5 mt-12 mr-9 mb-4 max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex flex-col max-w-full w-[990px]">
                        <div
                            className="grid cursor-pointer grid-cols-4 gap-5 max-md:grid-cols-2 max-md:gap-0 max-md:grid-rows-2">
                            {
                                packageData?.images?.map((image, index) => (
                                    <img
                                        onClick={() => setActiveImage(image)}
                                        key={index}
                                        loading="lazy"
                                        src={image}
                                        className="flex-1 w-full h-full aspect-[1.5]"
                                    />
                                ))
                            }
                            {activeImage && <ImagePopup image={activeImage} closePopup={closePopup}/>}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Information;

