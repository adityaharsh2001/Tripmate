import { memo } from "react";

const ManaliCard = memo(() => {
  return (
    <div className="w-[30.63rem] shrink-0 flex flex-col items-start justify-start gap-[1.75rem] text-left text-[1.5rem] text-dimgray-200 font-urbanist">
      <img
        className="self-stretch h-[28.25rem] relative rounded-13xl max-w-full overflow-hidden shrink-0 object-cover"
        loading="eager"
        alt=""
        src="/frame-171@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.88rem]">
        <div className="self-stretch h-[1.81rem] relative font-medium inline-block mq450:text-[1.19rem]">
          Manali
        </div>
        <h3 className="m-0 self-stretch h-[2.69rem] relative text-[2.25rem] font-bold font-inherit text-black inline-block mq1050:text-[1.81rem] mq450:text-[1.38rem]">{`Himachal Pradesh `}</h3>
      </div>
    </div>
  );
});

export default ManaliCard;
