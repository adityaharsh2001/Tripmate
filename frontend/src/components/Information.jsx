import * as React from "react";
import ContactForm from "./ContactForm";
import PackageForm from "./PackageForm";

function Information({packageData, categories}) {
    return (
        <div className="flex flex-col self-center px-9 py-12 bg-white w-full">
            <div className="flex gap-5 flex-col justify-between mt-7 max-w-full capitalize max-md:flex-wrap">
                <div className="flex-auto text-3xl font-bold text-indigo-950">
                    {packageData.name}
                </div>
                <div className="flex justify-start gap-5  text-left">
                    <div className="flex gap-5 text-3xl font-medium text-blue-600">
                        &#8377;  {packageData.price}
                    </div>
                    <div className="my-auto text-base text-zinc-500">Per Person</div>
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
                {
                    packageData.description
                }
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex items-start justify-start flex-col max-md:ml-0 max-md:w-full">
                        {packageData?.fields?.map((field, index) => (
                            <div key={index} className="flex max-md:flex-col items-center justify-center gap-10 my-auto">
                                <div className={"text-xl font-bold  text-blue-600 capitalize tracking-[2px]"}>{field.heading}</div>
                                <div className="text-base items-center justify-center leading-7 text-black">{field.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col mt-5 w-full">
                        <PackageForm categories={categories}/>
                    </div>
                </div>
            </div>
            <div
                className="mt-32 text-5xl font-bold leading-[71px] text-indigo-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                From our gallery
            </div>
            <div className="mt-8 text-base leading-7 text-black max-md:max-w-full">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
                aut magni nesciunt? Quo quidem neque iste expedita est dolor similique
                ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero
                nisi.{" "}
            </div>
            <div
                className="flex flex-wrap justify-center content-start items-center px-16 py-2.5 mt-12 mr-9 mb-4 max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[990px]">
                    <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-md:gap-0 max-md:grid-rows-2">
                        {
                            packageData?.images?.map((image, index) => (
                                <img
                                    key={index}
                                    loading="lazy"
                                    src={image}
                                    className="flex-1 w-full h-full aspect-[1.5]"
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;

