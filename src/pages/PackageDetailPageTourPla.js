import FormContainer from "../components/FormContainer";

const PackageDetailPageTourPla = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[4.88rem] box-border gap-[5.88rem] tracking-[normal] mq750:gap-[5.88rem] mq1050:gap-[5.88rem]">
      <div className="w-[19.88rem] h-[8.81rem] relative bg-white hidden z-[2]" />
      <main className="self-stretch flex flex-col items-center justify-start gap-[3.69rem] max-w-full shrink-0 mq750:gap-[3.69rem]">
        <section className="self-stretch flex flex-row items-center justify-center relative bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[1.25rem] text-darkslategray-200 font-poppins">
          <img
            className="self-stretch w-[120rem] relative max-h-full object-cover hidden min-h-[47.94rem] max-w-full z-[0]"
            alt=""
            src="/rectangle-19290@2x.png"
          />
          <div className="flex-1 flex flex-col items-center justify-start pt-[4rem] px-[4rem] pb-[9.69rem] box-border relative gap-[9.31rem] max-w-full lg:gap-[9.31rem] lg:pl-[2rem] lg:pr-[2rem] lg:box-border mq750:gap-[9.31rem] mq450:gap-[9.31rem] mq450:pt-[1.69rem] mq450:pb-[4.13rem] mq450:box-border mq1050:pt-[2.63rem] mq1050:pb-[6.31rem] mq1050:box-border">
            <div className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray1-400 z-[2]" />
            <header className="w-[79.88rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-center text-[1.98rem] text-white font-volkhov">
              <div className="h-[3.25rem] w-[13.88rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-row items-start justify-start relative">
                  <b className="h-[2.56rem] relative capitalize inline-block whitespace-nowrap z-[3]">
                    Travel
                  </b>
                  <img
                    className="h-[2.38rem] w-[6.16rem] absolute my-0 mx-[!important] right-[-1.66rem] bottom-[-1.44rem] overflow-hidden shrink-0 object-contain z-[4]"
                    loading="eager"
                    alt=""
                    src="/arrow-05@2x.png"
                  />
                </div>
              </div>
              <div className="w-[30rem] flex flex-row items-start justify-start gap-[1.94rem] max-w-full text-left text-[1.06rem] font-poppins mq750:gap-[1.94rem] mq1050:w-[12.44rem]">
                <div className="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1.25rem] mq1050:hidden">
                  <div className="relative font-medium z-[3]">Home</div>
                  <div className="relative font-medium z-[3]">About</div>
                  <div className="flex flex-row items-end justify-start gap-[0.69rem]">
                    <div className="relative font-medium z-[3]">Services</div>
                    <div className="h-[0.75rem] w-[0.75rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
                      <img
                        className="w-[0.73rem] h-[0.47rem] relative z-[1]"
                        alt=""
                        src="/r-street-new-york-b-d-frame.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative font-medium whitespace-nowrap z-[3]">
                  Upcomming Packages
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[1.13rem] pb-[1.25rem] pr-[1.69rem] pl-[1.63rem] bg-salmon rounded-3xs shadow-[0px_20px_35px_rgba(223,_105,_81,_0.15)] flex flex-row items-center justify-center whitespace-nowrap z-[3] hover:bg-firebrick">
                <img
                  className="h-[3.63rem] w-[9.5rem] relative rounded-3xs hidden"
                  alt=""
                  src="/rectangle-12.svg"
                />
                <div className="relative text-[1.06rem] font-medium font-poppins text-white text-left z-[1]">
                  Get in Touch
                </div>
              </button>
            </header>
            <FormContainer />
          </div>
          <div className="w-[83rem] my-0 mx-[!important] absolute bottom-[-3.62rem] left-[17.31rem] bg-whitesmoke flex flex-row items-center justify-between py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[1.25rem] max-w-full z-[3] lg:flex-wrap lg:pl-[0.06rem] lg:pt-[0.06rem] lg:pb-[0.06rem] lg:box-border">
            <div className="self-stretch w-[83rem] relative bg-whitesmoke hidden max-w-full" />
            <div className="bg-whitesmoke flex flex-row items-center justify-start pt-[3.5rem] pb-[3.44rem] pr-[4.38rem] pl-[4.25rem] gap-[0.88rem] z-[5]">
              <div className="h-[8.81rem] w-[19.88rem] relative bg-whitesmoke hidden" />
              <img
                className="h-[1.63rem] w-[1.63rem] relative overflow-hidden shrink-0 z-[6]"
                loading="eager"
                alt=""
                src="/biinfocircle.svg"
              />
              <h3 className="m-0 h-[1.88rem] relative text-inherit tracking-[0.1em] capitalize font-bold font-inherit inline-block z-[6] mq450:text-[1rem]">
                Information
              </h3>
            </div>
            <div className="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] gap-[0.88rem]">
              <img
                className="h-[1.63rem] w-[1.63rem] relative overflow-hidden shrink-0 z-[5]"
                loading="eager"
                alt=""
                src="/uilcalender.svg"
              />
              <h3 className="m-0 h-[1.88rem] relative text-inherit tracking-[0.1em] capitalize font-bold font-inherit inline-block z-[5] mq450:text-[1rem]">
                Tour Plan
              </h3>
            </div>
            <div className="w-[43.25rem] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq750:flex-wrap">
              <div className="w-[19.88rem] bg-whitesmoke flex flex-row items-center justify-center pt-[3.5rem] px-[1.25rem] pb-[3.44rem] box-border gap-[0.88rem] min-w-[19.88rem] z-[5] mq750:flex-1">
                <div className="h-[8.81rem] w-[19.88rem] relative bg-whitesmoke hidden" />
                <img
                  className="h-[1.63rem] w-[1.63rem] relative overflow-hidden shrink-0 z-[6]"
                  loading="eager"
                  alt=""
                  src="/akariconslocation.svg"
                />
                <h3 className="m-0 h-[1.88rem] relative text-inherit tracking-[0.1em] capitalize font-bold font-inherit inline-block z-[6] mq450:text-[1rem]">
                  Location
                </h3>
              </div>
              <div className="flex-1 bg-whitesmoke flex flex-row items-center justify-center pt-[3.5rem] px-[1.25rem] pb-[3.44rem] box-border gap-[0.88rem] min-w-[15.19rem] max-w-full z-[6]">
                <div className="h-[8.81rem] w-[23.38rem] relative bg-whitesmoke hidden max-w-full" />
                <img
                  className="h-[1.63rem] w-[1.63rem] relative overflow-hidden shrink-0 z-[7]"
                  loading="eager"
                  alt=""
                  src="/clarityimagegalleryline.svg"
                />
                <h3 className="m-0 relative text-inherit tracking-[0.1em] capitalize font-bold font-inherit z-[7] mq450:text-[1rem]">
                  Gallery
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[87.88rem] flex flex-row items-start justify-start py-[0rem] pr-[3.63rem] pl-[1.25rem] box-border max-w-full text-left text-[1.98rem] text-darkslateblue font-poppins lg:pr-[1.81rem] lg:box-border">
          <div className="flex-1 bg-white shadow-[0px_4px_48px_12px_rgba(0,_0,_0,_0.09)] flex flex-col items-start justify-start pt-[4.63rem] px-[4.19rem] pb-[4.75rem] box-border relative gap-[7.44rem] max-w-full lg:pt-[3rem] lg:pb-[3.06rem] lg:box-border mq450:gap-[7.44rem] mq450:pt-[1.25rem] mq450:pb-[1.31rem] mq450:box-border mq1050:gap-[7.44rem] mq1050:pt-[1.94rem] mq1050:px-[2.06rem] mq1050:pb-[2rem] mq1050:box-border">
            <div className="w-[83rem] h-[101.81rem] relative bg-white shadow-[0px_4px_48px_12px_rgba(0,_0,_0,_0.09)] hidden max-w-full z-[0]" />
            <div className="w-[43.63rem] flex flex-col items-start justify-start gap-[1.63rem] max-w-full">
              <b className="h-[2.56rem] relative capitalize inline-block font-volkhov z-[1] mq750:text-[1.56rem] mq450:text-[1.19rem]">
                Tour Plan
              </b>
              <div className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.44rem] box-border max-w-full text-[1.25rem] text-white">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="w-[39.56rem] flex flex-row flex-wrap items-center justify-start gap-[2.19rem] max-w-full mq750:gap-[2.19rem]">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[17.13rem]">
                      <div className="rounded-4xs bg-salmon flex flex-row items-center justify-center pt-[0.56rem] pb-[0.5rem] pr-[0.94rem] pl-[0.75rem] z-[1]">
                        <div className="h-[2.94rem] w-[2.94rem] relative rounded-4xs bg-salmon hidden" />
                        <b className="h-[1.88rem] relative tracking-[0.1em] capitalize inline-block z-[1] mq450:text-[1rem]">
                          01
                        </b>
                      </div>
                      <div className="rounded-4xs bg-salmon flex flex-row items-center justify-center pt-[0.56rem] pb-[0.5rem] pr-[0.75rem] pl-[0.63rem] z-[1]">
                        <div className="h-[2.94rem] w-[2.94rem] relative rounded-4xs bg-salmon hidden" />
                        <b className="h-[1.88rem] relative tracking-[0.1em] capitalize inline-block z-[1] mq450:text-[1rem]">
                          02
                        </b>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[2.06rem] min-w-[22.31rem] max-w-full text-darkslateblue mq750:gap-[2.06rem] mq750:min-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <h3 className="m-0 h-[1.88rem] relative text-inherit capitalize font-semibold font-inherit inline-block z-[1] mq450:text-[1rem]">
                          Day 1: Departure
                        </h3>
                        <div className="self-stretch relative text-[1rem] capitalize z-[1]">
                          Qui tempore voluptate qui quia commodi rem praesentium
                          alias et voluptates officia sed molestiae sint et
                          voluptas quos. Qui harum repudiandae galisum dolorem
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.94rem] gap-[0.94rem] text-[0.88rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                          <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                          <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                            5 Star Accommodation
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                          <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                          <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                            Breakfast
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                          <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                          <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                            5 Star Accommodation
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                          <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                          <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                            Breakfast
                          </div>
                        </div>
                      </div>
                      <h3 className="m-0 relative text-inherit capitalize font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-[1rem]">
                        Day 2: Visiting Zurich, Geneva and Zermatt
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="w-[38.38rem] relative text-[1rem] capitalize text-darkslateblue inline-block max-w-full z-[1]">
                  Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                  fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                  justo, rhoncus ut, imperdiet.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[2.06rem] max-w-full text-[0.88rem] mq750:gap-[2.06rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.94rem] max-w-full">
                  <div className="w-[21.31rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        5 Star Accommodation
                      </div>
                    </div>
                  </div>
                  <div className="w-[15.13rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border">
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        Breakfast
                      </div>
                    </div>
                  </div>
                  <div className="w-[21.31rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        5 Star Accommodation
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[1.25rem] text-white">
                    <div className="w-[12.19rem] flex flex-row items-end justify-between gap-[1.25rem]">
                      <div className="rounded-4xs bg-salmon flex flex-row items-center justify-center pt-[0.56rem] pb-[0.5rem] pr-[0.75rem] pl-[0.63rem] z-[1]">
                        <div className="h-[2.94rem] w-[2.94rem] relative rounded-4xs bg-salmon hidden" />
                        <b className="h-[1.88rem] relative tracking-[0.1em] capitalize inline-block z-[1] mq450:text-[1rem]">
                          03
                        </b>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] text-[0.88rem] text-darkslateblue">
                        <div className="flex flex-col items-start justify-start gap-[3.5rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                            <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                            <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                              Breakfast
                            </div>
                          </div>
                          <h3 className="m-0 relative text-[1.25rem] capitalize font-semibold font-inherit z-[1] mq450:text-[1rem]">
                            Day 3: Rest
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end max-w-full text-[1rem] text-darkslateblue">
                      <div className="w-[38.38rem] relative capitalize inline-block shrink-0 max-w-full z-[1]">
                        Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate
                        eget, arcu. In enim justo, rhoncus ut, imperdiet.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[21.31rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                  <div className="flex flex-col items-start justify-start gap-[0.94rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        5 Star Accommodation
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        Breakfast
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[0.06rem] h-[19.13rem] absolute my-0 mx-[!important] top-[11.25rem] left-[5.69rem] box-border z-[2] border-r-[1px] border-dashed border-salmon" />
            <div className="w-[0.06rem] h-[19.13rem] absolute my-0 mx-[!important] top-[31.81rem] left-[5.69rem] box-border z-[2] border-r-[1px] border-dashed border-salmon" />
            <div className="w-[0.06rem] h-[19.13rem] absolute my-0 mx-[!important] bottom-[30.25rem] left-[5.69rem] box-border z-[2] border-r-[1px] border-dashed border-salmon" />
            <div className="w-[0.06rem] h-[19.13rem] absolute my-0 mx-[!important] bottom-[10.69rem] left-[5.69rem] box-border z-[2] border-r-[1px] border-dashed border-salmon" />
            <div className="w-[43.63rem] flex flex-col items-end justify-start max-w-full text-[1.25rem] text-white">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[2.25rem] max-w-full mq750:gap-[2.25rem]">
                <div className="flex flex-col items-start justify-start gap-[16.63rem]">
                  <div className="rounded-4xs bg-salmon flex flex-row items-center justify-center pt-[0.56rem] pb-[0.5rem] pr-[0.69rem] pl-[0.63rem] z-[1]">
                    <div className="h-[2.94rem] w-[2.94rem] relative rounded-4xs bg-salmon hidden" />
                    <b className="h-[1.88rem] relative tracking-[0.1em] capitalize inline-block z-[1] mq450:text-[1rem]">
                      04
                    </b>
                  </div>
                  <div className="rounded-4xs bg-salmon flex flex-row items-center justify-center pt-[0.56rem] pb-[0.5rem] pr-[0.69rem] pl-[0.63rem] z-[1]">
                    <div className="h-[2.94rem] w-[2.94rem] relative rounded-4xs bg-salmon hidden" />
                    <b className="h-[1.88rem] relative tracking-[0.1em] capitalize inline-block z-[1] mq450:text-[1rem]">
                      05
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[3.38rem] min-w-[25rem] max-w-full text-[0.88rem] text-darkslateblue mq750:gap-[3.38rem] mq750:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[0.94rem] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[0.5rem] max-w-full text-[1.25rem]">
                      <h3 className="m-0 relative text-inherit capitalize font-semibold font-inherit z-[1] mq450:text-[1rem]">
                        Day 4: Historical Tour
                      </h3>
                      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-[1rem]">
                        <img
                          className="h-[26.25rem] w-[41.88rem] absolute my-0 mx-[!important] right-[-35.19rem] bottom-[-16.06rem] object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src="/273-1@2x.png"
                        />
                        <div className="flex-1 relative capitalize inline-block max-w-full z-[2]">
                          Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim.
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        5 Star Accommodation
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        Breakfast
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        5 Star Accommodation
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="h-[0.38rem] w-[0.38rem] relative rounded-[50%] bg-black z-[1]" />
                      <div className="h-[1.31rem] relative capitalize inline-block z-[1]">
                        Breakfast
                      </div>
                    </div>
                  </div>
                  <h3 className="m-0 h-[1.88rem] relative text-[1.25rem] capitalize font-semibold font-inherit inline-block z-[1] mq450:text-[1rem]">
                    Day 5: Return
                  </h3>
                </div>
              </div>
              <div className="w-[38.38rem] h-[4.56rem] relative text-[1rem] capitalize text-darkslateblue inline-block shrink-0 max-w-full z-[2]">
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium.
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch flex flex-row flex-wrap items-center justify-center py-[0rem] px-[10.31rem] box-border gap-[9.56rem] max-w-full shrink-0 text-left text-[1.44rem] text-grey-scale-black-50 font-poppins mq750:gap-[9.56rem] mq750:pl-[2.56rem] mq750:pr-[2.56rem] mq750:box-border mq1050:gap-[9.56rem] mq1050:pl-[5.13rem] mq1050:pr-[5.13rem] mq1050:box-border">
        <div className="h-[20.88rem] w-[21.75rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq450:gap-[4rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] min-h-[16.5rem] shrink-0 mq450:gap-[2rem]">
            <div className="flex flex-row items-center justify-start">
              <img
                className="h-[4.38rem] w-[4.38rem] relative object-cover"
                loading="eager"
                alt=""
                src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"
              />
            </div>
            <h2 className="m-0 self-stretch h-[9.31rem] relative text-inherit leading-[160%] inline-block italic font-thin font-inherit shrink-0 mq450:text-[1.13rem] mq450:leading-[1.81rem]">
              <p className="m-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots
              </p>
              <p className="m-0">
                in a piece of classical Latin literature from 45 BC.
              </p>
            </h2>
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
              src="/group-11.svg"
            />
            <img
              className="h-[2rem] w-[2rem] relative min-h-[2rem]"
              loading="eager"
              alt=""
              src="/group-81.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-between py-[1.25rem] px-[0rem] box-border min-w-[44.25rem] gap-[1.25rem] max-w-full text-[1.13rem] text-grey-scale-black-75 font-body lg:min-w-full mq750:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <h2 className="m-0 relative text-[1.44rem] leading-[120%] font-bold font-poppins text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
              Company
            </h2>
            <div className="relative leading-[160%]">About</div>
            <div className="relative leading-[160%]">Career</div>
            <div className="relative leading-[160%]">Mobile</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <h2 className="m-0 relative text-[1.44rem] leading-[120%] font-bold font-poppins text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
              Contact
            </h2>
            <div className="relative leading-[160%]">Why Travlog?</div>
            <div className="relative leading-[160%]">Partner with us</div>
            <div className="relative leading-[160%]">FAQ’s</div>
            <div className="relative leading-[160%]">Blog</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <h2 className="m-0 relative text-[1.44rem] leading-[120%] font-bold font-poppins text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">
              Meet Us
            </h2>
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
    </div>
  );
};

export default PackageDetailPageTourPla;
