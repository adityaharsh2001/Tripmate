import { memo } from "react";
import LoremIpsumText from "./LoremIpsumText";

const AboutCareerMobile = memo(() => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0.06rem] pb-[3.19rem] box-border max-w-full shrink-0 text-left text-[1.44rem] text-secondary font-urbanist mq750:pb-[2.06rem] mq750:box-border">
      <div className="flex-1 flex flex-row items-center justify-center gap-[2.63rem] max-w-full mq750:gap-[2.63rem] mq1275:flex-wrap">
        <img
          className="h-[35.94rem] w-[43.94rem] relative object-cover max-w-full mq1275:flex-1"
          loading="eager"
          alt=""
          src="/group-9238@2x.png"
        />
        <div className="w-[30.31rem] flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border gap-[4rem] min-w-[30.31rem] max-w-full mq750:gap-[4rem] mq750:min-w-full mq1275:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq450:gap-[2rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1.13rem] mq450:leading-[1.38rem]">
                Travel Point
              </b>
              <h1 className="m-0 self-stretch relative text-[2.75rem] leading-[120%] font-bold font-inherit text-grey-scale-black mq750:text-[2.19rem] mq750:leading-[2.63rem] mq450:text-[1.63rem] mq450:leading-[2rem]">
                We helping you find your dream location
              </h1>
            </div>
            <div className="self-stretch h-[5.44rem] relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[2.19rem] text-orange mq450:gap-[2rem]">
            <LoremIpsumText
              frameWithImage="500+"
              holidayPackage="Holiday Package"
              frame="100"
              luxuryHotel="Luxury Hotel"
            />
            <LoremIpsumText
              frameWithImage="7"
              holidayPackage="Premium Airlines"
              frame="2k+"
              luxuryHotel="Happy Customer"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutCareerMobile;
