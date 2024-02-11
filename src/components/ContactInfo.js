import { memo } from "react";

const ContactInfo = memo(() => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between py-[4rem] px-[10.31rem] box-border gap-[1.25rem] max-w-full text-left text-[1.44rem] text-secondary font-urbanist mq750:pl-[5.13rem] mq750:pr-[5.13rem] mq750:box-border mq1100:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
      <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full">
        <b className="relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1.13rem] mq450:leading-[1.38rem]">
          Top Destination
        </b>
        <h1 className="m-0 relative text-[2.75rem] leading-[120%] font-bold font-inherit text-grey-scale-black mq750:text-[2.19rem] mq750:leading-[2.63rem] mq450:text-[1.63rem] mq450:leading-[2rem]">
          Explore top destination
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start gap-[2rem]">
        <button className="cursor-pointer p-[2.38rem] bg-white h-[6.25rem] w-[6.25rem] rounded-81xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-grey-scale-black-10">
          <div className="h-[6.25rem] w-[6.25rem] relative rounded-81xl bg-white box-border hidden border-[1px] border-solid border-grey-scale-black-10" />
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/arrowleft-1.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] p-[2.38rem] bg-primary h-[6.25rem] w-[6.25rem] rounded-81xl shadow-[0px_181px_51px_rgba(0,_0,_0,_0),_0px_116px_46px_rgba(0,_0,_0,_0.01),_0px_65px_39px_rgba(0,_0,_0,_0.04),_0px_29px_29px_rgba(0,_0,_0,_0.06),_0px_7px_16px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.08)] flex flex-row items-center justify-center box-border">
          <div className="h-[6.25rem] w-[6.25rem] relative rounded-81xl bg-primary [transform:_rotate(180deg)] hidden" />
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 object-contain z-[1]"
            alt=""
            src="/arrowleft-2.svg"
          />
        </button>
      </div>
    </div>
  );
});

export default ContactInfo;
