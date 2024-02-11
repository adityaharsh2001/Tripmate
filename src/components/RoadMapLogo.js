import { memo, useMemo } from "react";

const RoadMapLogo = memo(({ propAlignSelf, propFlex, propMarginLeft }) => {
  const roadMapLogoStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      marginLeft: propMarginLeft,
    };
  }, [propAlignSelf, propFlex, propMarginLeft]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-start gap-[1.63rem] max-w-full text-left text-[1.24rem] text-dimgray-200 font-poppins mq1100:flex-wrap"
      style={roadMapLogoStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border min-w-[25rem] max-w-full shrink-0 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.44rem] shrink-0">
          <img
            className="self-stretch h-[25.33rem] relative rounded-[26.41px] max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-17-3@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] shrink-0 mq750:gap-[2rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1.25rem] mq450:flex-wrap">
                  <div className="w-[8.09rem] relative font-medium inline-block shrink-0">
                    Manali, India
                  </div>
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.69rem]">
                    <div className="relative font-medium">Feb 27, 2023</div>
                    <div className="h-[0.57rem] w-[0.57rem] relative rounded-[50%] bg-gray" />
                    <div className="relative font-medium">8 min read</div>
                  </div>
                </div>
                <b className="self-stretch relative text-[1.86rem] text-black mq450:text-[1.5rem]">
                  A Wonderful Journey to Manali
                </b>
              </div>
              <div className="self-stretch h-[4.5rem] relative font-medium text-black whitespace-pre-wrap inline-block">{`I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.81rem] text-royalblue-200">
              <div className="relative font-semibold">Read Full Post</div>
              <input
                className="m-0 h-[1.44rem] w-[1.44rem] relative overflow-hidden shrink-0"
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border min-w-[25rem] max-w-full shrink-0 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.44rem] shrink-0">
          <img
            className="self-stretch h-[25.33rem] relative rounded-[26.41px] max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-17-3@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] shrink-0 mq750:gap-[2rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1.25rem] mq450:flex-wrap">
                  <div className="w-[8.09rem] relative font-medium inline-block shrink-0">
                    Manali, India
                  </div>
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.69rem]">
                    <div className="relative font-medium">Feb 27, 2023</div>
                    <div className="h-[0.57rem] w-[0.57rem] relative rounded-[50%] bg-gray" />
                    <div className="relative font-medium">8 min read</div>
                  </div>
                </div>
                <b className="self-stretch relative text-[1.86rem] text-black mq450:text-[1.5rem]">
                  A Wonderful Journey to Manali
                </b>
              </div>
              <div className="self-stretch h-[4.5rem] relative font-medium text-black whitespace-pre-wrap inline-block">{`I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.81rem] text-royalblue-200">
              <div className="relative font-semibold">Read Full Post</div>
              <input
                className="m-0 h-[1.44rem] w-[1.44rem] relative overflow-hidden shrink-0"
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RoadMapLogo;
