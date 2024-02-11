import { memo } from "react";
import Testimonials from "./Testimonials";

const FAQBlog = memo(() => {
  return (
    <section className="w-[84rem] flex flex-row items-end justify-start pt-[0rem] pb-[10.44rem] pr-[0rem] pl-[1.25rem] box-border gap-[5.75rem] max-w-full shrink-0 text-left text-[1.44rem] text-secondary font-urbanist mq750:gap-[5.75rem] mq750:pb-[4.44rem] mq750:box-border mq1100:flex-wrap mq1100:pb-[6.81rem] mq1100:box-border mq450:gap-[5.75rem]">
      <div className="w-[33.75rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.06rem] box-border min-w-[33.75rem] max-w-full mq750:min-w-full mq1100:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[4rem] mq450:gap-[4rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq750:gap-[2rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase mq450:text-[1.13rem] mq450:leading-[1.38rem]">
                Key features
              </b>
              <h1 className="m-0 self-stretch relative text-[2.75rem] leading-[120%] font-bold font-inherit text-grey-scale-black mq750:text-[2.19rem] mq750:leading-[2.63rem] mq450:text-[1.63rem] mq450:leading-[2rem]">
                We offer best services
              </h1>
            </div>
            <div className="self-stretch h-[5.44rem] relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50 inline-block">
              <p className="m-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature
              </p>
              <p className="m-0">from 45 BC.</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full text-grey-scale-black">
            <div className="self-stretch rounded-13xl bg-white flex flex-row items-center justify-start py-[2rem] pr-[2.94rem] pl-[2rem] box-border gap-[2rem] max-w-full mq750:gap-[2rem] mq750:pr-[1.44rem] mq750:box-border mq450:flex-wrap">
              <div className="rounded-13xl bg-orange flex flex-row items-center justify-center p-[1.63rem]">
                <div className="h-[6.25rem] w-[6.25rem] relative rounded-13xl bg-orange hidden" />
                <img
                  className="h-[3rem] w-[3rem] relative overflow-hidden shrink-0 z-[1]"
                  loading="eager"
                  alt=""
                  src="/location-2.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[13.38rem] max-w-full">
                <b className="relative leading-[120%] mq450:text-[1.13rem] mq450:leading-[1.38rem]">
                  We offer best services
                </b>
                <div className="relative text-[1.13rem] leading-[160%] font-body text-grey-scale-black-50">
                  Lorem Ipsum is not simply random text
                </div>
              </div>
            </div>
            <Testimonials
              calendar1="/calendar-1.svg"
              batchesEveryDay="Batches Every Day "
              itHasRootsInAPieceOfClass="It has roots in a piece of classical"
            />
            <Testimonials
              calendar1="/ticket-1.svg"
              batchesEveryDay="Get discounted prices "
              itHasRootsInAPieceOfClass="Lorem Ipsum is not simply random text"
              propBorder="unset"
              propBackgroundColor="#f85e9f"
              propMinWidth="unset"
              propBackgroundColor1="#f85e9f"
              propMinWidth1="13.38rem"
            />
          </div>
        </div>
      </div>
      <div className="h-[53.19rem] flex-1 relative min-w-[28.13rem] max-w-full mq750:min-w-full">
        <img
          className="absolute top-[0rem] left-[15.31rem] w-[27.94rem] h-[17.13rem] overflow-hidden object-cover"
          loading="eager"
          alt=""
          src="/background@2x.png"
        />
        <img
          className="absolute top-[4.63rem] left-[0rem] rounded-481xl w-[27.69rem] h-[41.88rem] object-cover z-[1]"
          alt=""
          src="/header-box@2x.png"
        />
        <div className="absolute top-[22rem] left-[11.63rem] rounded-481xl w-[21.94rem] h-[31.19rem] z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.137)]"
            loading="eager"
            alt=""
            src="/rectangle-10@2x.png"
          />
        </div>
      </div>
    </section>
  );
});

export default FAQBlog;
