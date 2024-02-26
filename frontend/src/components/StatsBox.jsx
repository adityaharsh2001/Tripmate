import { memo } from "react";

const StatsBox = memo(
  ({ stats, desc }) => {
    return (
      <div className="self-stretch flex flex-row items-start justify-between text-left md:text-center py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1rem] text-orange font-poppins">
        <div className="flex-1 rounded-13xl bg-white box-border flex flex-col items-start justify-start p-5 gap-[1rem] border-[1px] border-solid border-grey-scale-black-10">
          <b className="relative leading-[120%]">
            {stats}
          </b>
          <div className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black">
            {desc}
          </div>
        </div>
      </div>
    );
  }
);

export default StatsBox;
