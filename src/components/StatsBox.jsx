import { memo } from "react";

const StatsBox = memo(
  ({ frameWithImage, holidayPackage, frame, luxuryHotel }) => {
    return (
      <div className="self-stretch flex flex-row items-center justify-between text-left md:text-center py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1rem] text-orange font-poppins">
        <div className="flex-1 rounded-13xl bg-white box-border flex flex-col items-center justify-start p-5 gap-[1rem] border-[1px] border-solid border-grey-scale-black-10">
          <b className="relative leading-[120%]">
            {frameWithImage}
          </b>
          <div className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black">
            {holidayPackage}
          </div>
        </div>
        <div className="flex-1 rounded-13xl bg-white box-border flex flex-col items-center justify-start p-5 gap-[1rem] border-[1px] border-solid border-grey-scale-black-10">
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

export default StatsBox;
