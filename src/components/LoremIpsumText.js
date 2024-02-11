import { memo } from "react";

const LoremIpsumText = memo(
  ({ frameWithImage, holidayPackage, frame, luxuryHotel }) => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[2rem] text-left text-[2.19rem] text-orange font-urbanist mq450:flex-wrap mq450:gap-[2rem]">
        <div className="flex-1 rounded-13xl bg-white box-border flex flex-col items-center justify-start py-[2rem] px-[1.94rem] gap-[1rem] min-w-[9.63rem] border-[1px] border-solid border-grey-scale-black-10">
          <b className="relative leading-[120%] mq750:text-[1.75rem] mq750:leading-[2.13rem] mq450:text-[1.31rem] mq450:leading-[1.56rem]">
            {frameWithImage}
          </b>
          <div className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black">
            {holidayPackage}
          </div>
        </div>
        <div className="flex-1 rounded-13xl bg-white box-border flex flex-col items-center justify-start p-[2rem] gap-[1rem] min-w-[9.63rem] border-[1px] border-solid border-grey-scale-black-10">
          <b className="relative leading-[120%] mq750:text-[1.75rem] mq750:leading-[2.13rem] mq450:text-[1.31rem] mq450:leading-[1.56rem]">
            {frame}
          </b>
          <div className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black">
            {luxuryHotel}
          </div>
        </div>
      </div>
    );
  }
);

export default LoremIpsumText;
