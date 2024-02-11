import { memo, useMemo } from "react";

const Testimonials = memo(
  ({
    calendar1,
    batchesEveryDay,
    itHasRootsInAPieceOfClass,
    propBorder,
    propBackgroundColor,
    propMinWidth,
    propBackgroundColor1,
    propMinWidth1,
  }) => {
    const testimonialsStyle = useMemo(() => {
      return {
        border: propBorder,
      };
    }, [propBorder]);

    const groupButtonStyle = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
        minWidth: propMinWidth,
      };
    }, [propBackgroundColor, propMinWidth]);

    const rectangleDivStyle = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor1,
      };
    }, [propBackgroundColor1]);

    const frameDivStyle = useMemo(() => {
      return {
        minWidth: propMinWidth1,
      };
    }, [propMinWidth1]);

    return (
      <div
        className="self-stretch rounded-13xl bg-white flex flex-row items-center justify-start p-[2rem] gap-[2rem] text-left text-[1.44rem] text-grey-scale-black font-urbanist border-[1px] border-solid border-grey-scale-black-10 mq750:gap-[2rem] mq450:flex-wrap"
        style={testimonialsStyle}
      >
        <button
          className="cursor-pointer [border:none] pt-[1.5rem] pb-[1.75rem] pr-[1.75rem] pl-[1.5rem] bg-yellow rounded-13xl flex flex-row items-center justify-center box-border min-w-[6.25rem] mq450:flex-1"
          style={groupButtonStyle}
        >
          <div
            className="h-[6.25rem] w-[6.25rem] relative rounded-13xl bg-yellow hidden"
            style={rectangleDivStyle}
          />
          <img
            className="h-[3rem] w-[3rem] relative overflow-hidden shrink-0 z-[1] mq450:flex-1"
            alt=""
            src={calendar1}
          />
        </button>
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[11.44rem]"
          style={frameDivStyle}
        >
          <b className="relative leading-[120%] mq450:text-[1.13rem] mq450:leading-[1.38rem]">
            {batchesEveryDay}
          </b>
          <div className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50">
            {itHasRootsInAPieceOfClass}
          </div>
        </div>
      </div>
    );
  }
);

export default Testimonials;
