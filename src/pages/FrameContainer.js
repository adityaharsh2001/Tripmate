import CardContainer from "../components/CardContainer";
import CardWithImagesAndText from "../components/CardWithImagesAndText";
import ManaliForm from "../components/ManaliForm";
import FormFooterManali from "../components/FormFooterManali";
import FooterCardForm from "../components/FooterCardForm";

const FrameContainer = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[4.94rem] box-border gap-[8.75rem] tracking-[normal] text-left text-[2.63rem] text-white font-poppins mq450:gap-[8.75rem] mq1125:gap-[8.75rem]">
      <div className="self-stretch h-[69.81rem] flex flex-col items-center justify-start py-[4.81rem] pr-[0rem] pl-[0.06rem] box-border relative max-w-full mq450:h-auto">
        <div className="w-full my-0 mx-[!important] absolute h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] grid flex-row items-start justify-start max-w-full grid-cols-[repeat(3,_minmax(432px,_1fr))] mq800:grid-cols-[minmax(432px,_1fr)] mq1350:[grid-row-gap:20px] mq1350:justify-center mq1350:grid-cols-[repeat(2,_minmax(432px,_749px))]">
          <CardContainer
            imageCaption="/image-1@2x.png"
            tripDescription="Fun Trip to the Hawa mahal, Rajasthan "
          />
          <CardContainer
            imageCaption="/image-2@2x.png"
            tripDescription="Unmissable places to visit on your next Travel to Mussoorie"
            propGap="unset"
            propRowGap="20px"
            propMinWidth="16.63rem"
          />
          <div className="flex flex-col items-center justify-start min-h-[69.81rem] max-w-full">
            <div className="self-stretch h-[69.81rem] relative">
              <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                <img
                  className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
                  alt=""
                  src="/image-3@2x.png"
                />
                <div className="absolute top-[0rem] left-[0rem] bg-gray1-200 w-full h-full z-[1]" />
              </div>
            </div>
            <div className="w-[32.81rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[2.81rem] max-w-full z-[1] mt-[-12.12rem] mq450:flex-wrap mq800:gap-[2.81rem]">
              <h2 className="m-0 h-[9.38rem] flex-1 relative text-inherit font-semibold font-inherit inline-block min-w-[13.31rem] max-w-full mq450:text-[1.56rem] mq800:text-[2.13rem]">
                Fun fact about Manali
              </h2>
              <img
                className="h-[4.75rem] w-[4.75rem] relative overflow-hidden shrink-0"
                alt=""
                src="/materialsymbolsarrowforwardrounded.svg"
              />
            </div>
          </div>
        </div>
        <h1 className="my-0 mx-[!important] w-[75.75rem] h-[12rem] absolute top-[22.94rem] left-[calc(50%_-_606px)] text-[5rem] font-extrabold font-inherit text-center inline-block z-[1] mq450:text-[1.5rem] mq800:text-[2.5rem]">
          Travel Stories from different people
        </h1>
        <div className="w-[82.81rem] h-[4.38rem] [backdrop-filter:blur(4px)] overflow-hidden shrink-0 flex flex-row items-center justify-between py-[0rem] pr-[3.75rem] pl-[1.25rem] box-border mix-blend-normal gap-[1.25rem] max-w-full z-[1] mq800:w-[52.81rem] mq1350:pr-[1.88rem] mq1350:box-border">
          <div className="self-stretch w-[4.38rem] flex flex-row items-center justify-center bg-[url('/public/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-[4.38rem] w-[4.38rem] relative object-cover hidden"
              alt=""
              src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"
            />
          </div>
          <nav className="m-0 w-[30rem] flex flex-row items-start justify-start py-[1.25rem] pr-[0.06rem] pl-[0rem] box-border gap-[3.25rem] max-w-full text-left text-[1.06rem] text-white font-poppins mq800:hidden mq800:gap-[3.25rem]">
            <div className="relative font-medium">Home</div>
            <div className="relative font-medium">About</div>
            <div className="relative font-medium">Services</div>
            <div className="relative font-medium whitespace-nowrap">
              Upcomming Packages
            </div>
          </nav>
          <button className="cursor-pointer [border:none] pt-[1.13rem] pb-[1.25rem] pr-[1.5rem] pl-[1.63rem] bg-primary h-[3.63rem] w-[9.69rem] rounded-3xs shadow-[0px_20px_35px_rgba(223,_105,_81,_0.15)] flex flex-row items-center justify-center box-border relative gap-[0.63rem] whitespace-nowrap hover:bg-mediumpurple">
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
      </div>
      <main className="w-[97.5rem] flex flex-col items-center justify-start pt-[0rem] px-[1.25rem] pb-[9.06rem] box-border gap-[4.13rem] max-w-full text-left text-[1.5rem] text-dimgray-200 font-poppins mq450:gap-[4.13rem] mq800:gap-[4.13rem] mq800:pb-[1.63rem] mq800:box-border mq1350:pb-[2.5rem] mq1350:box-border">
        <section className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full text-left text-[3rem] text-black font-poppins">
          <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq800:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
              <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.81rem] mq800:text-[2.38rem]">
                Top Travel Sories
              </h1>
              <div className="relative text-[1.5rem] font-medium text-darkslategray-100 mq450:text-[1.19rem]">
                Explore our latest stories from our active users
              </div>
            </div>
            <button className="cursor-pointer p-[1.25rem] bg-[transparent] w-[14.44rem] rounded-[40px] box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-royalblue-200 hover:bg-royalblue-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue-100">
              <div className="h-[1.81rem] relative text-[1.5rem] font-semibold font-poppins text-royalblue-200 text-left inline-block">
                View All Stories
              </div>
            </button>
          </div>
          <div className="flex flex-col items-start justify-start pt-[12.31rem] px-[0rem] pb-[0rem] box-border max-w-full ml-[-95rem]">
            <div className="w-[95rem] overflow-x-auto flex flex-row flex-wrap items-start justify-start pt-[0rem] px-[0rem] pb-[19.88rem] box-border max-w-full mq800:pb-[3.56rem] mq800:box-border mq1125:pb-[5.5rem] mq1125:box-border mq1350:pb-[8.44rem] mq1350:box-border">
              <div className="w-[95rem] shrink-0 flex flex-row items-start justify-start gap-[2rem]">
                <CardWithImagesAndText
                  image10="/image-10@2x.png"
                  image30="/image-30@2x.png"
                  manali="Manali "
                  minRead="6 min read"
                />
                <CardWithImagesAndText
                  image10="/image-10-1@2x.png"
                  image30="/image-31@2x.png"
                  manali="Manali"
                  minRead="4 min read"
                  propBackgroundImage="url('/image-10-1@2x.png')"
                  propWidth="11.38rem"
                  propWidth1="37.63rem"
                />
              </div>
              <ManaliForm />
              <ManaliForm propPadding="105.63rem 0rem 0rem" />
              <FormFooterManali />
              <FormFooterManali propPadding="211.25rem 0rem 0rem" />
            </div>
          </div>
        </section>
        <div className="w-[30.13rem] flex flex-row flex-wrap items-center justify-start gap-[2rem] max-w-full mq800:gap-[2rem]">
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/materialsymbolskeyboardarrowleft.svg"
          />
          <div className="flex-1 flex flex-row items-start justify-center gap-[1rem] min-w-[14.38rem] max-w-full mq450:flex-wrap">
            <div className="flex-[0.4118] rounded-lg bg-royalblue-200 flex flex-col items-center justify-center py-[0.88rem] px-[1.38rem] box-border min-w-[3.56rem] max-w-[3.63rem] text-white mq450:flex-1">
              <b className="h-[1.81rem] relative inline-block mq450:text-[1.19rem]">
                1
              </b>
            </div>
            <div className="flex-[0.4118] rounded-lg box-border flex flex-col items-center justify-center py-[0.88rem] px-[1.31rem] min-w-[3.56rem] max-w-[3.63rem] border-[1px] border-solid border-dimgray-200 mq450:flex-1">
              <div className="h-[1.81rem] relative font-medium inline-block mq450:text-[1.19rem]">
                2
              </div>
            </div>
            <div className="flex-[0.3529] rounded-lg box-border flex flex-col items-center justify-center py-[0.88rem] px-[1.38rem] min-w-[3.56rem] max-w-[3.63rem] border-[1px] border-solid border-dimgray-200 mq450:flex-1">
              <div className="h-[1.81rem] relative font-medium inline-block mq450:text-[1.19rem]">
                3
              </div>
            </div>
            <div className="flex-[0.4118] rounded-lg box-border flex flex-col items-center justify-center py-[0.88rem] px-[1.31rem] min-w-[3.56rem] max-w-[3.63rem] border-[1px] border-solid border-dimgray-200 mq450:flex-1">
              <div className="h-[1.81rem] relative font-medium inline-block mq450:text-[1.19rem]">
                4
              </div>
            </div>
            <button className="cursor-pointer py-[0.88rem] px-[0.69rem] bg-[transparent] flex-1 rounded-lg box-border flex flex-col items-center justify-center min-w-[3.56rem] max-w-[3.63rem] min-h-[3.56rem] border-[1px] border-solid border-dimgray-200">
              <img
                className="w-[2.13rem] h-[0.5rem] relative"
                alt=""
                src="/group-14.svg"
              />
            </button>
          </div>
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 object-contain"
            alt=""
            src="/materialsymbolskeyboardarrowleft-1.svg"
          />
        </div>
      </main>
      <FooterCardForm
        itemCode="/group-14.svg"
        imageCode="/group-81.svg"
        propFlexWrap="unset"
        propMinWidth="21.75rem"
        propMinWidth1="36.44rem"
      />
    </div>
  );
};

export default FrameContainer;
