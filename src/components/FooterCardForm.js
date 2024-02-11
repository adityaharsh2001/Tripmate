import { memo, useMemo } from "react";

const FooterCardForm = memo(
  ({ itemCode, imageCode, propFlexWrap, propMinWidth, propMinWidth1 }) => {
    const frameFooterStyle = useMemo(() => {
      return {
        flexWrap: propFlexWrap,
      };
    }, [propFlexWrap]);

    const imageContainerStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);

    const infoCircleRectangleStyle = useMemo(() => {
      return {
        minWidth: propMinWidth1,
      };
    }, [propMinWidth1]);

    return (
      <footer
        className="self-stretch flex flex-row flex-wrap items-center justify-center py-[0rem] px-[10.31rem] box-border gap-[9.56rem] max-w-full shrink-0 text-left text-[1.44rem] text-grey-scale-black-50 font-urbanist mq1050:gap-[9.56rem] mq1050:pl-[5.13rem] mq1050:pr-[5.13rem] mq1050:box-border mq750:gap-[9.56rem] mq750:pl-[2.56rem] mq750:pr-[2.56rem] mq750:box-border"
        style={frameFooterStyle}
      >
        <div
          className="h-[20.88rem] w-[21.75rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq450:gap-[4rem]"
          style={imageContainerStyle}
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] min-h-[16.5rem] shrink-0 mq450:gap-[2rem]">
            <div className="flex flex-row items-center justify-start">
              <img
                className="h-[4.38rem] w-[4.38rem] relative object-cover"
                loading="eager"
                alt=""
                src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"
              />
            </div>
            <i className="self-stretch h-[9.31rem] relative leading-[160%] inline-block font-thin shrink-0 mq450:text-[1.13rem] mq450:leading-[1.81rem]">
              <p className="m-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots
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
              src={itemCode}
            />
            <img
              className="h-[2rem] w-[2rem] relative min-h-[2rem]"
              loading="eager"
              alt=""
              src={imageCode}
            />
          </div>
        </div>
        <div
          className="flex-1 flex flex-row items-start justify-between py-[1.25rem] px-[0rem] box-border min-w-[44.25rem] gap-[1.25rem] max-w-full text-[1.13rem] text-grey-scale-black-75 font-body mq1225:min-w-full mq750:flex-wrap"
          style={infoCircleRectangleStyle}
        >
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <b className="relative text-[1.44rem] leading-[120%] font-urbanist text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
              Company
            </b>
            <div className="relative leading-[160%]">About</div>
            <div className="relative leading-[160%]">Career</div>
            <div className="relative leading-[160%]">Mobile</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <b className="relative text-[1.44rem] leading-[120%] font-urbanist text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
              Contact
            </b>
            <div className="relative leading-[160%]">Why Travlog?</div>
            <div className="relative leading-[160%]">Partner with us</div>
            <div className="relative leading-[160%]">FAQ’s</div>
            <div className="relative leading-[160%]">Blog</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <b className="relative text-[1.44rem] leading-[120%] font-urbanist text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
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
  }
);

export default FooterCardForm;
