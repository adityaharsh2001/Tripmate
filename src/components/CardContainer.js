import { memo, useMemo } from "react";

const CardContainer = memo(
  ({ imageCaption, tripDescription, propGap, propRowGap, propMinWidth }) => {
    const inputStyle = useMemo(() => {
      return {
        gap: propGap,
        rowGap: propRowGap,
      };
    }, [propGap, propRowGap]);

    const funTripToStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);

    return (
      <div className="flex flex-col items-center justify-start min-h-[69.81rem] max-w-full text-left text-[2.63rem] text-white font-urbanist">
        <div className="self-stretch h-[69.81rem] relative">
          <img
            className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
            alt=""
            src={imageCaption}
          />
          <div className="absolute top-[0rem] left-[0rem] bg-gray1-200 w-full h-full z-[1]" />
        </div>
        <div
          className="w-[32.81rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[2.81rem] max-w-full z-[2] mt-[-12.12rem] mq450:flex-wrap mq800:gap-[2.81rem]"
          style={inputStyle}
        >
          <h2
            className="m-0 h-[9.38rem] flex-1 relative text-inherit font-semibold font-inherit inline-block min-w-[13.19rem] max-w-full mq450:text-[1.56rem] mq800:text-[2.13rem]"
            style={funTripToStyle}
          >
            {tripDescription}
          </h2>
          <img
            className="h-[4.75rem] w-[4.75rem] relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/materialsymbolsarrowforwardrounded.svg"
          />
        </div>
      </div>
    );
  }
);

export default CardContainer;
