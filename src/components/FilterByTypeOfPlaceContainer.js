import { memo } from "react";

const FilterByTypeOfPlaceContainer = memo(
  ({ filterByTypeOfPlace, allTypes }) => {
    return (
      <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[17.94rem] max-w-full text-center text-[1.5rem] text-black font-poppins">
        <div className="relative font-medium mq450:text-[1.19rem]">
          {filterByTypeOfPlace}
        </div>
        <div className="self-stretch h-[4.88rem] rounded-61xl box-border flex flex-row items-center justify-between py-[1.31rem] px-[2.88rem] gap-[1.25rem] whitespace-nowrap border-[1px] border-solid border-darkgray-200">
          <div className="relative font-medium">{allTypes}</div>
          <img
            className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0"
            alt=""
            src="/materialsymbolskeyboardarrowdownrounded.svg"
          />
        </div>
      </div>
    );
  }
);

export default FilterByTypeOfPlaceContainer;
