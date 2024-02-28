import {memo, useMemo} from "react";

const Banner = ({packageData}) => {

    return (
        <div
            className={`self-stretch flex flex-row items-center justify-center pt-[0.19rem] px-[0rem] pb-[0rem] box-border relative
            bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[1.25rem]
            text-darkslategray-200 font-poppins`}
            style={{
                backgroundImage: `url(${packageData?.bannerImage})`,
            }}
            >
            <div
                className="flex-1 flex flex-col items-center justify-start py-5 box-border relative gap-[7.88rem] max-w-full z-[1] mq850:gap-[7.88rem] mq850:pt-[3rem] mq850:pb-[6.13rem] mq850:box-border mq1225:gap-[7.88rem] mq450:gap-[7.88rem]">
                <div
                    className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray1-400 z-[1]"/>
                <div
                    className="flex flex-col items-center justify-between gap-[4.31rem] max-w-full text-left text-[1.13rem] text-seashell font-poppins">
                    <div
                        className="flex flex-col relative mt-20 items-center justify-center gap-[1.63rem] max-w-full text-center text-[5.84rem] text-white font-yesteryear"
                        style={{zIndex: 2}}
                    >
                        <div className="relative m-auto inline-block z-[3] mq750:text-[3.94rem] mq450:text-[2.44rem]">
                            {packageData?.name}
                        </div>
                        <div
                            className="w-[48.5rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
