import { memo } from "react";

const TravelLogo = memo(() => {
  return (
    <div className="w-[79.13rem] flex flex-row items-start justify-start py-[0rem] pr-[2.44rem] pl-[1.25rem] box-border max-w-full text-left text-[0.98rem] text-dimgray-200 font-urbanist">
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[6.66rem] w-[6.69rem] absolute my-0 mx-[!important] top-[-3.12rem] right-[10.44rem] overflow-hidden shrink-0"
          alt=""
          src="/objects-1.svg"
        />
        <div className="flex-1 overflow-hidden flex flex-row flex-wrap items-center justify-between gap-[1.25rem] max-w-full z-[1]">
          <div className="h-[24.25rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
            <img
              className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src="/frame-17@2x.png"
            />
            <div className="self-stretch h-[4.69rem] flex flex-col items-start justify-start gap-[0.57rem]">
              <div className="self-stretch flex-1 relative font-medium">
                Magnificent Shimla Manali Dharamshala Dalhousie Tour
              </div>
              <b className="self-stretch h-[1.75rem] relative text-[1.47rem] inline-block text-black mq450:text-[1.19rem]">
                Himachal Pradesh
              </b>
            </div>
          </div>
          <div className="h-[23.06rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
            <img
              className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/frame-17-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.57rem]">
              <a
                className="self-stretch relative [text-decoration:underline] font-medium text-[inherit]"
                href="https://www.sbgtourism.com/tour/mussoorie-package-from-delhi"
                target="_blank"
              >
                Mussoorie Tour Package
              </a>
              <b className="self-stretch h-[1.75rem] relative text-[1.47rem] inline-block text-black mq450:text-[1.19rem]">{`Uttarakhand `}</b>
            </div>
          </div>
          <div className="h-[23.06rem] w-[19.95rem] flex flex-col items-start justify-start gap-[1.14rem]">
            <img
              className="self-stretch flex-1 relative rounded-[20.85px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/frame-17-2@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.57rem]">
              <div className="self-stretch relative font-medium">Jaipur</div>
              <b className="self-stretch relative text-[1.47rem] text-black mq450:text-[1.19rem]">
                Rajasthan
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TravelLogo;
