import { memo, useMemo } from "react";

const ProfileCardContainer = memo(
  ({
    name1,
    fontAwesomefacebookF,
    fontAwesometwitter,
    fontAwesomedribbble,
    fontAwesomegithub,
    propWidth,
  }) => {
    const roleStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    return (
      <div className="w-[24.63rem] rounded-[10.67px] bg-white shadow-[0px_26.7px_33.33px_-6.67px_rgba(0,_0,_0,_0.1),_0px_13.3px_13.33px_rgba(0,_0,_0,_0.04)] overflow-hidden shrink-0 flex flex-col items-start justify-start text-left text-[1.67rem] text-blue-900 font-body">
        <div className="self-stretch h-[17.33rem] flex flex-col items-start justify-start pt-[1.33rem] px-[1.33rem] pb-[0rem] box-border">
          <div className="self-stretch flex-1 rounded-[10.67px] overflow-hidden [transform:_rotate(180deg)]" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-[2rem] px-[1.33rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.33rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.83rem]">
              <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                <b className="self-stretch relative leading-[150%] mq450:text-[1.31rem] mq450:leading-[2rem]">
                  {name1}
                </b>
                <div
                  className="w-[22rem] relative text-[1.33rem] leading-[150%] font-medium text-gray-500 flex items-center mq450:text-[1.06rem] mq450:leading-[1.63rem]"
                  style={roleStyle}
                >
                  Senior Front-end Developer
                </div>
              </div>
              <div className="self-stretch h-[8rem] relative text-[1.33rem] leading-[150%] text-gray-500 inline-block mq450:text-[1.06rem] mq450:leading-[1.63rem]">
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1rem] mq450:justify-center">
              <img
                className="h-[1.83rem] w-[1.83rem] relative min-h-[1.81rem]"
                loading="eager"
                alt=""
                src={fontAwesomefacebookF}
              />
              <img
                className="h-[1.83rem] w-[1.83rem] relative min-h-[1.81rem]"
                loading="eager"
                alt=""
                src={fontAwesometwitter}
              />
              <img
                className="h-[1.83rem] w-[1.83rem] relative min-h-[1.81rem]"
                loading="eager"
                alt=""
                src={fontAwesomedribbble}
              />
              <img
                className="h-[1.83rem] w-[1.83rem] relative min-h-[1.81rem]"
                loading="eager"
                alt=""
                src={fontAwesomegithub}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ProfileCardContainer;
