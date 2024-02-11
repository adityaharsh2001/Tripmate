import { memo, useMemo } from "react";

const TopNavBar = memo(
  ({
    topNavBarTop,
    topNavBarPosition,
    textFramePadding,
    getInTouchFramePadding,
    destinationFrameIconLeft,
  }) => {
    const topNavBarStyle = useMemo(() => {
      return {
        top: topNavBarTop,
        position: topNavBarPosition,
      };
    }, [topNavBarTop, topNavBarPosition]);

    const textFrameStyle = useMemo(() => {
      return {
        padding: textFramePadding,
      };
    }, [textFramePadding]);

    const getInTouchFrameStyle = useMemo(() => {
      return {
        padding: getInTouchFramePadding,
      };
    }, [getInTouchFramePadding]);

    const destinationFrameIconStyle = useMemo(() => {
      return {
        left: destinationFrameIconLeft,
      };
    }, [destinationFrameIconLeft]);

    return (
      <header
        className="w-[80.31rem] [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-start justify-between py-[0.38rem] pr-[1.25rem] pl-[22.5rem] box-border mix-blend-normal gap-[1.25rem] top-[0] z-[99] sticky max-w-full text-left text-[1.06rem] text-white font-urbanist mq450:pl-[1.25rem] mq450:box-border mq1225:pl-[11.25rem] mq1225:box-border mq750:pl-[5.63rem] mq750:box-border"
        style={topNavBarStyle}
      >
        <div className="h-[4.38rem] w-[4.38rem] hidden flex-row items-center justify-center bg-cover bg-no-repeat bg-[top]">
          <img
            className="h-[4.38rem] w-[4.38rem] relative object-cover hidden"
            alt=""
            src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"
          />
        </div>
        <div
          className="w-[30rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border max-w-full mq750:w-[0rem]"
          style={textFrameStyle}
        >
          <div className="self-stretch flex flex-row items-end justify-between py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1.25rem] mq750:hidden">
            <div className="relative font-medium">Home</div>
            <div className="relative font-medium">About</div>
            <div className="relative font-medium">Services</div>
            <div
              className="flex flex-col items-center justify-end pt-[0.69rem] px-[0rem] pb-[0rem] relative"
              style={getInTouchFrameStyle}
            >
              <img
                className="w-[0.73rem] h-[0.47rem] absolute my-0 mx-[!important] top-[0rem] left-[3.38rem] z-[1]"
                loading="eager"
                alt=""
                src="/r-street-new-york-b-d-frame.svg"
                style={destinationFrameIconStyle}
              />
              <div className="relative font-medium whitespace-nowrap">
                Upcomming Packages
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[1.13rem] px-[1.13rem] pb-[1.25rem] bg-primary h-[3.63rem] w-[9.69rem] rounded-3xs shadow-[0px_20px_35px_rgba(223,_105,_81,_0.15)] flex flex-row items-center justify-center box-border relative gap-[0.63rem] whitespace-nowrap hover:bg-mediumpurple">
          <img
            className="h-[3.63rem] w-[9.69rem] relative rounded-3xs hidden z-[0]"
            alt=""
            src="/rectangle-12.svg"
          />
          <b className="absolute my-0 mx-[!important] top-[1.13rem] left-[1.63rem] text-[1.06rem] inline-block font-urbanist text-white text-left z-[1]">
            Get in Touch
          </b>
        </button>
      </header>
    );
  }
);

export default TopNavBar;
