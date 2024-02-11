import { memo } from "react";
import RoadMapLogo from "./RoadMapLogo";

const IMGFrame = memo(() => {
  return (
    <div className="w-[80.88rem] flex flex-row flex-wrap items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full shrink-0 text-left text-[1.24rem] text-dimgray-200 font-urbanist">
      <div className="flex-1 flex flex-col items-start justify-start pt-[45.69rem] pb-[0rem] pr-[0.06rem] pl-[0rem] box-border max-w-full shrink-0 mq750:pt-[19.31rem] mq750:box-border mq1275:pt-[29.69rem] mq1275:box-border">
        <RoadMapLogo />
      </div>
      <RoadMapLogo
        propAlignSelf="unset"
        propFlex="1"
        propMarginLeft="-78.44rem"
      />
    </div>
  );
});

export default IMGFrame;
