import { memo, useMemo } from "react";

const FormFooterManali = memo(({ propPadding }) => {
  const frameFooterManali1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="w-[95rem] shrink-0 flex flex-col items-start justify-start pt-[158.44rem] px-[0rem] pb-[0rem] box-border ml-[-95rem] text-left text-[1.5rem] text-dimgray-200 font-poppins"
      style={frameFooterManali1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[2rem] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.75rem] min-w-[30.25rem] max-w-full">
          <div className="self-stretch h-[30.69rem] relative rounded-13xl overflow-hidden shrink-0 bg-[url('/public/image-10@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
              alt=""
              src="/image-10@2x.png"
            />
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover z-[1]"
              alt=""
              src="/image-30@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.38rem] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq800:flex-wrap">
                  <div className="h-[1.81rem] w-[15.31rem] relative font-medium inline-block shrink-0 mq450:text-[1.19rem]">{`Manali `}</div>
                  <div className="flex flex-row items-center justify-start gap-[0.88rem]">
                    <div className="relative font-medium mq450:text-[1.19rem]">
                      Feb 27, 2023
                    </div>
                    <div className="h-[0.69rem] w-[0.69rem] relative rounded-[50%] bg-gray" />
                    <div className="h-[1.81rem] relative font-medium inline-block mq450:text-[1.19rem]">
                      6 min read
                    </div>
                  </div>
                </div>
                <h3 className="m-0 w-[30.63rem] h-[2.69rem] relative text-[2.25rem] font-bold font-inherit text-black inline-block max-w-full mq450:text-[1.38rem] mq800:text-[1.81rem]">
                  Best Time Manali
                </h3>
              </div>
              <div className="self-stretch h-[3rem] relative text-[1.24rem] font-medium text-black whitespace-pre-wrap inline-block">{`I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[1rem] text-royalblue-200">
              <div className="h-[1.81rem] relative font-semibold inline-block mq450:text-[1.19rem]">
                Read Full Post
              </div>
              <input
                className="m-0 h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0"
                type="checkbox"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.75rem] min-w-[30.25rem] max-w-full">
          <div className="self-stretch h-[30.69rem] relative rounded-13xl overflow-hidden shrink-0 bg-[url('/public/image-10-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
              alt=""
              src="/image-10-1@2x.png"
            />
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover z-[1]"
              alt=""
              src="/image-31@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq800:flex-wrap">
              <div className="h-[1.81rem] w-[11.38rem] relative font-medium inline-block shrink-0 mq450:text-[1.19rem]">
                Manali
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.88rem]">
                <div className="relative font-medium mq450:text-[1.19rem]">
                  Feb 27, 2023
                </div>
                <div className="h-[0.69rem] w-[0.69rem] relative rounded-[50%] bg-gray" />
                <div className="h-[1.81rem] relative font-medium inline-block mq450:text-[1.19rem]">
                  4 min read
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.13rem] box-border gap-[1.5rem] max-w-full text-[2.25rem] text-black">
              <h3 className="m-0 w-[37.63rem] h-[2.69rem] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.38rem] mq800:text-[1.81rem]">
                Best Time Manali
              </h3>
              <div className="self-stretch h-[3rem] relative text-[1.24rem] font-medium whitespace-pre-wrap inline-block">{`I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[1rem] text-royalblue-200">
              <div className="h-[1.81rem] relative font-semibold inline-block mq450:text-[1.19rem]">
                Read Full Post
              </div>
              <input
                className="m-0 h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0"
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FormFooterManali;
