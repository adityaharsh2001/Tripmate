import { memo, useMemo } from "react";

const FormContainer = memo(({ propGap }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="flex flex-col items-start justify-start gap-[5.31rem] max-w-full text-left text-[1.13rem] text-seashell font-poppins mq750:gap-[5.31rem] mq1050:gap-[5.31rem]">
      <div className="w-[37.63rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <b className="h-[1.69rem] relative tracking-[0.1em] uppercase inline-block z-[3]">
          Explore
        </b>
      </div>
      <div
        className="flex flex-col items-end justify-start gap-[1.63rem] max-w-full text-center text-[9.84rem] text-white font-yesteryear"
        style={frameDiv1Style}
      >
        <div className="h-[0rem] relative inline-block z-[3] mq750:text-[3.94rem] mq450:text-[2.44rem]">
          Manali-Sissu Kasol
        </div>
        <div className="w-[48.5rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <img
            className="w-[27.13rem] relative max-h-full object-cover max-w-full z-[1]"
            loading="eager"
            alt=""
            src="/untitled1-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
});

export default FormContainer;
