import FilterByTypeOfPlaceContainer from "../components/FilterByTypeOfPlaceContainer";
import ManaliCard from "../components/ManaliCard";

const MainFrame = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[40.38rem] box-border gap-[5rem] tracking-[normal] mq1050:gap-[5rem] mq450:gap-[5rem]">
      <section className="self-stretch flex flex-col items-center justify-start pt-[4.81rem] pb-[16.06rem] pr-[3.13rem] pl-[1.25rem] box-border relative gap-[12.81rem] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-[5rem] text-white font-poppins lg:gap-[12.81rem] lg:pr-[1.56rem] lg:box-border mq1050:pt-[3.13rem] mq1050:pb-[10.44rem] mq1050:box-border mq450:gap-[12.81rem] mq450:pt-[2rem] mq450:pb-[6.81rem] mq450:box-border mq750:gap-[12.81rem]">
        <img
          className="w-[108rem] relative max-h-full object-cover hidden max-w-full z-[0]"
          alt=""
          src="/image-14@2x.png"
        />
        <div className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] bg-gray1-300 z-[1]" />
        <header className="w-[81.75rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.44rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[1.06rem] text-white font-poppins">
          <div className="flex-1 [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-center justify-between py-[0.38rem] pr-[1.25rem] pl-[22.5rem] box-border mix-blend-normal gap-[1.25rem] max-w-full z-[2] lg:pl-[11.25rem] lg:box-border mq450:pl-[1.25rem] mq450:box-border mq750:pl-[5.63rem] mq750:box-border">
            <div className="h-[4.38rem] w-[4.38rem] hidden flex-row items-center justify-center bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[4.38rem] w-[4.38rem] relative object-cover hidden"
                alt=""
                src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[3.25rem] max-w-full mq750:hidden mq750:gap-[3.25rem]">
              <div className="relative font-medium">Home</div>
              <div className="relative font-medium">About</div>
              <div className="relative font-medium">Services</div>
              <div className="relative font-medium whitespace-nowrap">
                Upcomming Packages
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[1.13rem] px-[1.13rem] pb-[1.25rem] bg-primary h-[3.63rem] w-[9.69rem] rounded-3xs shadow-[0px_20px_35px_rgba(223,_105,_81,_0.15)] flex flex-row items-center justify-center box-border relative gap-[0.63rem] whitespace-nowrap hover:bg-mediumpurple">
              <img
                className="h-[3.63rem] w-[9.69rem] relative rounded-3xs hidden z-[0]"
                alt=""
                src="/rectangle-12.svg"
              />
              <b className="absolute my-0 mx-[!important] top-[1.13rem] left-[1.63rem] text-[1.06rem] inline-block font-poppins text-white text-left z-[1]">
                Get in Touch
              </b>
            </button>
          </div>
        </header>
        <h1 className="m-0 w-[87.63rem] h-[18rem] relative text-inherit font-extrabold font-inherit inline-block max-w-full z-[2] mq1050:text-[2.5rem] mq450:text-[1.5rem]">
          Explore India's wonders with our curated travel packages, each journey
          a new adventure.
        </h1>
      </section>
      <section className="flex flex-col items-start justify-start py-[0rem] px-[1.25rem] box-border gap-[7.44rem] max-w-full text-left text-[1.5rem] text-dimgray-200 font-poppins mq450:gap-[7.44rem] mq750:gap-[7.44rem]">
        <div className="w-[57rem] flex flex-col items-start justify-start gap-[3rem] max-w-full mq450:gap-[3rem]">
          <div className="self-stretch rounded-61xl box-border flex flex-row items-center justify-between py-[1.31rem] px-[2.88rem] min-h-[4.88rem] gap-[1.25rem] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-wrap mq750:pl-[1.44rem] mq750:pr-[1.44rem] mq750:box-border">
            <input
              className="w-[25.75rem] [border:none] [outline:none] font-medium font-poppins text-[1.5rem] bg-[transparent] h-[1.81rem] relative text-darkgray-100 text-center inline-block max-w-full mq450:text-[1.19rem]"
              placeholder="Search for places, hotels or restaurants"
              type="text"
            />
            <img
              className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
              alt=""
              src="/akariconssearch.svg"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.88rem] max-w-full">
            <FilterByTypeOfPlaceContainer
              filterByTypeOfPlace="Filter by type of place"
              allTypes="All Types"
            />
            <FilterByTypeOfPlaceContainer
              filterByTypeOfPlace="Sort by"
              allTypes="Most Popular"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-start max-w-full mq450:gap-[5rem] mq750:gap-[5rem]">
          <div className="w-[95rem] overflow-x-auto shrink-0 flex flex-row flex-wrap items-start justify-start gap-[1.56rem_1.31rem] min-h-[175.63rem] max-w-full">
            <ManaliCard />
            <ManaliCard />
            <ManaliCard />
            <div className="w-[30.63rem] shrink-0 flex flex-col items-start justify-start gap-[1.75rem]">
              <img
                className="self-stretch h-[28.25rem] relative rounded-13xl max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-171@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.88rem]">
                <b className="self-stretch h-[1.81rem] relative inline-block mq450:text-[1.19rem]">
                  Manali
                </b>
                <h3 className="m-0 self-stretch h-[2.69rem] relative text-[2.25rem] font-bold font-inherit text-black inline-block mq1050:text-[1.81rem] mq450:text-[1.38rem]">{`Himachal Pradesh `}</h3>
              </div>
            </div>
            <ManaliCard />
            <ManaliCard />
            <ManaliCard />
            <ManaliCard />
            <ManaliCard />
            <ManaliCard />
            <ManaliCard />
            <ManaliCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFrame;
