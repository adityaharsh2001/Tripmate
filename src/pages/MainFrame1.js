const MainFrame1 = () => {
  return (
    <footer className="w-full relative flex flex-row items-center justify-center py-[0rem] px-[10.31rem] box-border gap-[9.56rem] tracking-[normal] text-left text-[1.44rem] text-grey-scale-black-50 font-poppins mq1125:gap-[9.56rem] mq1125:pl-[5.13rem] mq1125:pr-[5.13rem] mq1125:box-border mq450:gap-[9.56rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1350:flex-wrap">
      <div className="h-[20.88rem] w-[21.75rem] flex flex-col items-start justify-start gap-[4rem] min-w-[21.75rem] max-w-full mq800:min-w-full mq450:gap-[4rem] mq1350:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] min-h-[16.5rem] shrink-0 mq450:gap-[2rem]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
            <img
              className="h-[4.38rem] w-[4.38rem] relative object-cover"
              alt=""
              src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"
            />
          </button>
          <i className="self-stretch h-[9.31rem] relative leading-[160%] inline-block font-thin shrink-0 mq450:text-[1.13rem] mq450:leading-[1.81rem]">
            <p className="m-0">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots
            </p>
            <p className="m-0">
              in a piece of classical Latin literature from 45 BC.
            </p>
          </i>
        </div>
        <div className="w-[10rem] flex flex-row items-start justify-between gap-[1.25rem]">
          <img
            className="h-[2rem] w-[2rem] relative min-h-[2rem]"
            loading="eager"
            alt=""
            src="/group.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative min-h-[2rem]"
            loading="eager"
            alt=""
            src="/group-13.svg"
          />
          <img
            className="h-[2rem] w-[2rem] relative min-h-[2rem]"
            loading="eager"
            alt=""
            src="/group-83.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-between py-[1.25rem] px-[0rem] box-border min-w-[36.44rem] gap-[1.25rem] max-w-full text-[1.13rem] text-grey-scale-black-75 font-body mq800:flex-wrap mq1125:min-w-full">
        <div className="flex flex-col items-start justify-start gap-[2rem]">
          <b className="relative text-[1.44rem] leading-[120%] font-poppins text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
            Company
          </b>
          <div className="relative leading-[160%]">About</div>
          <div className="relative leading-[160%]">Career</div>
          <div className="relative leading-[160%]">Mobile</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[2rem]">
          <b className="relative text-[1.44rem] leading-[120%] font-poppins text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
            Contact
          </b>
          <div className="relative leading-[160%]">Why Travlog?</div>
          <div className="relative leading-[160%]">Partner with us</div>
          <div className="relative leading-[160%]">FAQ’s</div>
          <div className="relative leading-[160%]">Blog</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[2rem]">
          <b className="relative text-[1.44rem] leading-[120%] font-poppins text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
            Meet Us
          </b>
          <div className="relative leading-[160%] whitespace-nowrap">
            +00 92 1234 56789
          </div>
          <div className="relative leading-[160%] whitespace-nowrap">
            info@travlog.com
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[160%]">
              205. R Street, New York
            </div>
            <div className="relative leading-[160%]">BD23200</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFrame1;
