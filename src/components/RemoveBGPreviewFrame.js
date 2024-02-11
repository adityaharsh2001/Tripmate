import { memo } from "react";

const RemoveBGPreviewFrame = memo(() => {
  return (
    <div className="w-[83rem] my-0 mx-[!important] absolute bottom-[-4.25rem] left-[calc(50%_-_664px)] bg-whitesmoke flex flex-row items-center justify-start py-[0rem] px-[3.06rem] box-border gap-[14.31rem] max-w-full z-[5] text-left text-[1.25rem] text-darkslategray-200 font-poppins mq1225:flex-wrap">
      <div className="self-stretch w-[83rem] relative bg-whitesmoke hidden max-w-full" />
      <div className="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] gap-[0.88rem]">
        <img
          className="h-[1.63rem] w-[1.63rem] relative overflow-hidden shrink-0 z-[6]"
          loading="eager"
          alt=""
          src="/biinfocircle.svg"
        />
        <b className="h-[1.88rem] relative tracking-[0.1em] capitalize inline-block z-[6] mq450:text-[1rem]">
          Information
        </b>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.44rem] pl-[0rem] box-border gap-[2.94rem] max-w-full">
        <img
          className="self-stretch w-[0rem] relative max-h-full min-h-[8.81rem] z-[6]"
          loading="eager"
          alt=""
        />
        <div className="bg-whitesmoke flex flex-row items-center justify-start pt-[3.63rem] pb-[3.31rem] pr-[6.38rem] pl-[4.44rem] gap-[0.38rem] whitespace-nowrap z-[6]">
          <div className="h-[8.81rem] w-[19.88rem] relative bg-whitesmoke hidden" />
          <img
            className="h-[1.63rem] w-[1.63rem] relative overflow-hidden shrink-0 z-[7]"
            loading="eager"
            alt=""
            src="/uilcalender.svg"
          />
          <b className="h-[1.88rem] relative tracking-[0.1em] capitalize inline-block z-[7]">
            Tour Plan
          </b>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] gap-[0.88rem]">
        <img
          className="h-[1.63rem] w-[1.63rem] relative overflow-hidden shrink-0 z-[7]"
          alt=""
          src="/clarityimagegalleryline.svg"
        />
        <b className="relative tracking-[0.1em] capitalize z-[7] mq450:text-[1rem]">
          Gallery
        </b>
      </div>
    </div>
  );
});

export default RemoveBGPreviewFrame;
