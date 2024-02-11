import ProfileCardContainer from "../components/ProfileCardContainer";

const AboutUsPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[3.13rem] tracking-[normal] mq900:gap-[3.13rem]">
      <section className="self-stretch flex flex-col items-center justify-start pt-[4.81rem] pb-[16.44rem] pr-[3.69rem] pl-[1.25rem] box-border relative gap-[8.25rem] bg-[url('/public/rectangle-19290@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[9.84rem] text-white font-yesteryear mq900:gap-[8.25rem] mq900:pt-[3.13rem] mq900:pb-[10.69rem] mq900:box-border mq1275:gap-[8.25rem] mq1275:pr-[1.81rem] mq1275:box-border mq450:gap-[8.25rem] mq450:pt-[2rem] mq450:pb-[6.94rem] mq450:box-border">
        <img
          className="w-[120rem] relative max-h-full object-cover hidden max-w-full z-[0]"
          alt=""
          src="/rectangle-19290@2x.png"
        />
        <img
          className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src="/team-cards-row@2x.png"
        />
        <div className="w-[80.31rem] [backdrop-filter:blur(4px)] overflow-hidden flex flex-row items-start justify-between py-[0.38rem] pr-[1.25rem] pl-[22.5rem] box-border mix-blend-normal gap-[1.25rem] max-w-full z-[3] mq900:pl-[5.63rem] mq900:box-border mq1275:pl-[11.25rem] mq1275:box-border mq450:pl-[1.25rem] mq450:box-border">
          <div className="h-[4.38rem] w-[4.38rem] hidden flex-row items-center justify-center bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-[4.38rem] w-[4.38rem] relative object-cover hidden"
              alt=""
              src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"
            />
          </div>
          <div className="w-[30rem] flex flex-col items-start justify-start pt-[0.44rem] px-[0rem] pb-[0rem] box-border max-w-full mq900:w-[0rem]">
            <nav className="m-0 self-stretch flex flex-row items-end justify-between py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1.25rem] text-left text-[1.06rem] text-white font-poppins mq900:hidden">
              <div className="relative font-medium">Home</div>
              <div className="relative font-medium">About</div>
              <div className="relative font-medium">Services</div>
              <div className="flex flex-col items-center justify-end pt-[0.75rem] px-[0rem] pb-[0rem] relative">
                <img
                  className="w-[0.73rem] h-[0.47rem] absolute my-0 mx-[!important] top-[0rem] left-[1rem] z-[2]"
                  loading="eager"
                  alt=""
                  src="/r-street-new-york-b-d-frame.svg"
                />
                <div className="relative font-medium whitespace-nowrap">
                  Upcomming Packages
                </div>
              </div>
            </nav>
          </div>
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
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.63rem] pl-[0rem] box-border max-w-full">
          <div className="flex flex-col items-center justify-center relative max-w-full">
            <div className="relative leading-[13.98rem] z-[2] mq900:text-[3.94rem] mq900:leading-[8.38rem] mq450:text-[2.44rem] mq450:leading-[5.56rem]">
              About Us
            </div>
            <b className="h-[1.69rem] absolute my-0 mx-[!important] top-[0.81rem] right-[13.13rem] text-[1.13rem] tracking-[0.1em] uppercase inline-block font-poppins text-seashell z-[3]">
              Read
            </b>
          </div>
        </div>
      </section>
      <section className="w-[103.94rem] flex flex-row items-start justify-start pt-[0rem] pb-[5.13rem] pr-[0rem] pl-[1.25rem] box-border max-w-full text-left text-[1.13rem] text-salmon font-poppins mq900:pb-[3.31rem] mq900:box-border">
        <div className="w-[96rem] flex flex-row items-center justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.13rem] max-w-full mq1275:flex-wrap">
          <div className="w-[39.94rem] flex flex-col items-start justify-start pt-[1.63rem] px-[0rem] pb-[0rem] box-border min-w-[39.94rem] max-w-full mq900:min-w-full mq1275:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.94rem] max-w-full mq900:gap-[1.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.13rem] max-w-full shrink-0">
                <b className="h-[1.69rem] relative tracking-[0.1em] uppercase inline-block">
                  Promotion
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.19rem] max-w-full text-[3.13rem] text-darkslateblue font-volkhov">
                  <h1 className="m-0 self-stretch h-[8.88rem] relative text-inherit leading-[4.44rem] font-bold font-inherit whitespace-pre-wrap inline-block shrink-0 mq900:text-[2.5rem] mq900:leading-[3.56rem] mq450:text-[1.88rem] mq450:leading-[2.69rem]">
                    We Provide You Best Sightseeing Tours
                  </h1>
                  <div className="w-[35.88rem] relative text-[1rem] leading-[1.63rem] font-poppins text-black inline-block max-w-full">
                    Et labore harum non nobis ipsum eum molestias mollitia et
                    corporis praesentium a laudantium internos. Non quis eius
                    quo eligendi corrupti et fugiat nulla qui soluta recusandae
                    in maxime quasi aut ducimus illum aut optio quibusdam!
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[0.69rem] pb-[1.25rem] pr-[2.38rem] pl-[0.31rem] bg-salmon rounded-3xs shadow-[0px_20px_35px_rgba(223,_105,_81,_0.15)] flex flex-row items-start justify-start whitespace-nowrap hover:bg-firebrick">
                <div className="relative text-[1.04rem] font-semibold font-poppins text-white text-center">
                  View Packages
                </div>
              </button>
            </div>
          </div>
          <div className="h-[39.88rem] flex-1 relative min-w-[34.88rem] max-w-full mq900:min-w-full">
            <img
              className="absolute top-[0rem] left-[0rem] w-[53.68rem] h-[36.69rem] object-contain"
              alt=""
              src="/bg-style@2x.png"
            />
            <div className="absolute top-[1.63rem] left-[4.44rem] w-[38.25rem] h-[38.25rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-dashed border-salmon" />
              <img
                className="absolute top-[1.81rem] left-[1.81rem] rounded-[50%] w-[34.63rem] h-[34.63rem] object-cover z-[2]"
                loading="eager"
                alt=""
                src="/ellipse-626@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.56rem] box-border max-w-full mq900:pb-[2.31rem] mq900:box-border">
        <div className="flex-1 flex flex-row items-center justify-center p-[15.25rem] box-border relative bg-cover bg-no-repeat bg-[top] max-w-full mq900:py-[9.94rem] mq900:px-[7.63rem] mq900:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <img
            className="w-[120rem] relative max-h-full object-cover hidden max-w-full z-[0]"
            alt=""
            src="/rectangle-19353@2x.png"
          />
          <img
            className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/christine-beckam@2x.png"
          />
          <div className="w-[6.63rem] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[0.38rem] px-[0.38rem] pb-[0.5rem] box-border z-[2]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[5.81rem] flex-1 relative">
              <div className="absolute top-[1.25rem] left-[1.25rem] bg-white w-[3.44rem] h-[3.44rem]" />
              <img
                className="absolute top-[-0.02rem] left-[-0.02rem] w-full h-full z-[1]"
                alt=""
                src="/vector-11.svg"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="w-[108.25rem] flex flex-row items-start justify-start pt-[0rem] px-[1.25rem] pb-[5.69rem] box-border max-w-full text-left text-[1.13rem] text-salmon font-poppins mq1275:pb-[3.69rem] mq1275:box-border mq450:pb-[2.38rem] mq450:box-border">
        <div className="w-[108.25rem] flex flex-col items-center justify-start gap-[6.69rem] max-w-[102%] shrink-0 mq900:gap-[6.69rem] mq450:gap-[6.69rem]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1600:flex-wrap">
            <img
              className="w-[34.75rem] relative max-h-full object-cover max-w-full mq1600:flex-1"
              loading="eager"
              alt=""
              src="/aboutusimg2-1@2x.png"
            />
            <div className="w-[60.88rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.13rem] box-border min-w-[60.88rem] max-w-full mq1275:min-w-full mq1600:flex-1">
              <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full mq900:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[7.13rem] px-[0rem] pb-[0rem] box-border max-w-full mq900:pt-[4.63rem] mq900:box-border mq900:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6.19rem] max-w-full mq900:gap-[6.19rem] mq450:gap-[6.19rem]">
                    <div className="w-[36.19rem] flex flex-col items-start justify-start gap-[0.13rem] max-w-full">
                      <b className="h-[1.69rem] relative tracking-[0.1em] uppercase inline-block">
                        Trend
                      </b>
                      <h1 className="m-0 relative text-[3.13rem] leading-[4.44rem] font-bold font-volkhov text-darkslateblue mq900:text-[2.5rem] mq900:leading-[3.56rem] mq450:text-[1.88rem] mq450:leading-[2.69rem]">
                        Our Popular Tour Plans
                      </h1>
                      <div className="self-stretch h-[3.38rem] relative text-[1rem] leading-[1.63rem] text-black inline-block shrink-0">
                        Et labore harum non nobis ipsum eum molestias mollitia
                        et corporis praesentium a laudantium. Et labore harum
                        non nobis ipsum eum molestias mollitia et corporis
                        praesentium a laudantium.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.19rem] pl-[0rem] gap-[1.25rem] text-center text-[2.5rem] text-dimgray-300 mq900:flex-wrap">
                      <div className="h-[12.44rem] w-[9.69rem] flex flex-col items-center justify-start gap-[1rem]">
                        <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                          <div className="self-stretch flex-1 relative rounded-[50%] bg-white shadow-[1px_4px_12px_rgba(0,_0,_0,_0.25)_inset]" />
                          <div className="self-stretch flex-[0.7484] flex flex-row items-center justify-start py-[0rem] pr-[2.44rem] pl-[0rem] ml-[-9.69rem]">
                            <div className="self-stretch flex-1 relative rounded-[50%] [background:linear-gradient(133.89deg,_#10e7ff,_#8437ff)] [transform:_rotate(-90deg)] z-[1]" />
                            <div className="h-[3.75rem] relative flex items-center justify-center z-[2] ml-[-7.31rem] mq900:text-[2rem] mq450:text-[1.5rem]">
                              78%
                            </div>
                          </div>
                        </div>
                        <b className="h-[1.69rem] relative text-[1.13rem] tracking-[0.1em] uppercase inline-block text-darkslateblue text-left">
                          Vacations
                        </b>
                      </div>
                      <div className="h-[15.31rem] w-[9.69rem] flex flex-col items-center justify-start gap-[1rem]">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                            <div className="h-[3.75rem] relative flex items-center justify-center z-[2] mq900:text-[2rem] mq450:text-[1.5rem]">
                              55%
                            </div>
                            <div className="self-stretch h-[9.69rem] relative rounded-[50%] [background:linear-gradient(133.89deg,_#ffb47d,_#ff4098)] [transform:_rotate(-90deg)] z-[1] mt-[-6.69rem]" />
                          </div>
                          <div className="self-stretch h-[9.75rem] relative rounded-[50%] bg-white shadow-[1px_4px_12px_rgba(0,_0,_0,_0.25)_inset] mt-[-9.75rem]" />
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.81rem] pl-[0.38rem] text-left text-[1.13rem] text-darkslateblue">
                          <b className="h-[1.69rem] relative tracking-[0.1em] uppercase inline-block">
                            Honeymoon
                          </b>
                        </div>
                      </div>
                      <div className="h-[15.31rem] w-[11.06rem] flex flex-col items-center justify-start gap-[1rem]">
                        <div className="self-stretch flex-1 flex flex-col items-end justify-start py-[0rem] pr-[0.63rem] pl-[0.75rem]">
                          <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                            <div className="h-[3.75rem] relative flex items-center justify-center z-[2] mq900:text-[2rem] mq450:text-[1.5rem]">
                              30%
                            </div>
                            <div className="self-stretch h-[9.69rem] relative rounded-[50%] [background:linear-gradient(133.89deg,_#d820f9,_#7202ff)] [transform:_rotate(-90deg)] z-[1] mt-[-6.69rem]" />
                          </div>
                          <div className="self-stretch h-[9.75rem] relative rounded-[50%] bg-white shadow-[1px_4px_12px_rgba(0,_0,_0,_0.25)_inset] mt-[-9.75rem]" />
                        </div>
                        <b className="h-[1.69rem] relative text-[1.13rem] tracking-[0.1em] uppercase inline-block text-darkslateblue text-left">
                          Musical Events
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="h-[15.94rem] w-[21.25rem] relative object-cover max-w-full mq900:flex-1"
                  loading="eager"
                  alt=""
                  src="/image-919@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[23.88rem] flex flex-row items-start justify-start max-w-full">
            <b className="h-[1.69rem] relative tracking-[0.1em] uppercase inline-block">
              Explore more
            </b>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[14.13rem] box-border max-w-full text-left text-[3rem] text-blue-900 font-body mq900:pb-[6rem] mq900:box-border mq1275:pb-[9.19rem] mq1275:box-border">
        <div className="flex-1 rounded-[2.67px] [background:linear-gradient(180deg,_#fff,_rgba(243,_244,_244,_0.94)_50.5%,_rgba(255,_255,_255,_0.94))] flex flex-col items-center justify-start pt-[5.33rem] px-[0rem] pb-[5.31rem] box-border mix-blend-normal min-h-[64.06rem] max-w-full shrink-0 mq900:pt-[2.25rem] mq900:pb-[2.25rem] mq900:box-border mq1275:pt-[3.44rem] mq1275:pb-[3.44rem] mq1275:box-border">
          <div className="w-[109.17rem] flex flex-col items-start justify-center py-[0rem] px-[1.25rem] box-border gap-[5.33rem] max-w-full mq900:gap-[5.33rem] mq450:gap-[5.33rem]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[1.33rem] max-w-full">
              <h1 className="m-0 w-[56rem] relative text-inherit tracking-[-0.01em] leading-[125%] font-extrabold font-inherit flex items-center max-w-full mq900:text-[2.38rem] mq900:leading-[3rem] mq450:text-[1.81rem] mq450:leading-[2.25rem]">
                Our Team
              </h1>
              <div className="self-stretch relative text-[1.67rem] leading-[150%] text-gray-500 mq450:text-[1.31rem] mq450:leading-[2rem]">
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-full mq900:gap-[2.67rem]">
              <div className="w-[106.63rem] overflow-x-auto flex flex-row items-start justify-start py-[0rem] pr-[0.13rem] pl-[0rem] box-border gap-[2.67rem] max-w-full mq900:gap-[2.67rem]">
                <ProfileCardContainer
                  name1="Bonnie Green"
                  fontAwesomefacebookF="/fontawesomefacebookf.svg"
                  fontAwesometwitter="/fontawesometwitter.svg"
                  fontAwesomedribbble="/fontawesomedribbble.svg"
                  fontAwesomegithub="/fontawesomegithub.svg"
                />
                <ProfileCardContainer
                  name1="Thomas Lean"
                  fontAwesomefacebookF="/fontawesomefacebookf-1.svg"
                  fontAwesometwitter="/fontawesometwitter-1.svg"
                  fontAwesomedribbble="/fontawesomedribbble-1.svg"
                  fontAwesomegithub="/fontawesomegithub-1.svg"
                  propWidth="30.67rem"
                />
                <ProfileCardContainer
                  name1="Jese Leos"
                  fontAwesomefacebookF="/fontawesomefacebookf-2.svg"
                  fontAwesometwitter="/fontawesometwitter-2.svg"
                  fontAwesomedribbble="/fontawesomedribbble-2.svg"
                  fontAwesomegithub="/fontawesomegithub-2.svg"
                  propWidth="30.67rem"
                />
                <ProfileCardContainer
                  name1="Leslie Livingston"
                  fontAwesomefacebookF="/fontawesomefacebookf.svg"
                  fontAwesometwitter="/fontawesometwitter.svg"
                  fontAwesomedribbble="/fontawesomedribbble.svg"
                  fontAwesomegithub="/fontawesomegithub.svg"
                  propWidth="30.67rem"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem] box-border max-w-full text-center text-[1.13rem] text-salmon font-poppins">
        <div className="flex-1 [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.1),_rgba(223,_105,_81,_0.15))] [backdrop-filter:blur(25px)] flex flex-col items-start justify-start pt-[7.81rem] pb-[0rem] pr-[0.19rem] pl-[0rem] box-border relative gap-[5.94rem] max-w-full mq900:gap-[5.94rem] mq900:pt-[5.06rem] mq900:box-border mq1275:gap-[5.94rem] mq450:pt-[3.31rem] mq450:box-border">
          <div className="self-stretch h-[48rem] relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.1),_rgba(223,_105,_81,_0.15))] [backdrop-filter:blur(25px)] hidden z-[0]" />
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <div className="w-[39.94rem] flex flex-col items-center justify-start gap-[0.13rem] max-w-full">
              <b className="h-[1.69rem] relative tracking-[0.1em] uppercase inline-block z-[1]">
                Promotion
              </b>
              <h1 className="m-0 self-stretch h-[8.88rem] relative text-[3.13rem] leading-[4.44rem] font-bold font-volkhov text-darkslateblue inline-block shrink-0 z-[1] mq900:text-[2.5rem] mq900:leading-[3.56rem] mq450:text-[1.88rem] mq450:leading-[2.69rem]">
                See What Our Clients Say About Us
              </h1>
            </div>
          </div>
          <div className="w-[7.5rem] h-[7.5rem] absolute my-0 mx-[!important] bottom-[19.81rem] left-[56.19rem] rounded-[50%] z-[2] flex items-center justify-center">
            <img
              className="w-full h-full z-[2] object-contain absolute left-[0.38rem] top-[0.88rem] [transform:scale(1.45)]"
              loading="eager"
              alt=""
              src="/ellipse-624@2x.png"
            />
          </div>
          <div className="w-[78.69rem] flex flex-row items-end justify-between gap-[1.25rem] max-w-full text-[0.76rem] text-black mq1275:flex-wrap mq1275:justify-center">
            <div className="h-[18.06rem] w-[18.75rem] relative [transform:_rotate(-90deg)] z-[1]" />
            <div className="w-[35.56rem] flex flex-col items-start justify-start min-h-[23.56rem] max-w-full mq1275:min-h-[auto]">
              <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.69rem] pl-[0rem] box-border gap-[2rem] max-w-full mq900:gap-[2rem]">
                <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                  <div className="self-stretch rounded-mid bg-white flex flex-col items-center justify-start pt-[5.75rem] pb-[2.06rem] pr-[4.5rem] pl-[4.56rem] box-border relative gap-[0.81rem] max-w-full z-[1] mq900:pl-[2.25rem] mq900:pr-[2.25rem] mq900:box-border">
                    <div className="w-[33.63rem] h-[17.31rem] relative rounded-mid bg-white hidden max-w-full z-[0]" />
                    <div className="self-stretch flex flex-col items-center justify-center relative max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                        <div className="h-[7.13rem] flex-1 relative tracking-[0.05em] leading-[1.53rem] inline-block max-w-full z-[2]">
                          Vel officiis dolor ea illo aut eligendi ullam non
                          laudantium magnam et recusandae molestiae sit iure
                          unde aut voluptate quaerat. Id sunt provident quo
                          possimus impedit vel doloremque obcaecati qui ullam
                          consectetur et ipsum omnis.
                        </div>
                        <img
                          className="h-[5.13rem] w-[5.13rem] absolute my-0 mx-[!important] top-[-2.56rem] left-[-1.87rem] overflow-hidden shrink-0 z-[3]"
                          loading="eager"
                          alt=""
                          src="/ridoublequotesl.svg"
                        />
                      </div>
                      <img
                        className="w-[0.75rem] h-[0.75rem] absolute my-0 mx-[!important] right-[8.13rem] bottom-[0.38rem] overflow-hidden shrink-0 object-contain z-[3]"
                        alt=""
                        src="/ridoublequotesl-1@2x.png"
                      />
                    </div>
                    <b className="relative tracking-[0.05em] leading-[1.53rem] z-[2]">
                      Christine Beckam - Designer
                    </b>
                    <div className="w-[3.88rem] h-[3.88rem] absolute my-0 mx-[!important] top-[6.38rem] right-[-1.94rem] z-[2]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-dimgray-100 shadow-[0px_20px_35px_rgba(115,_115,_115,_0.15)] w-full h-full" />
                      <div className="absolute top-[1.6rem] left-[1.19rem] w-[1.71rem] h-[0.6rem] z-[1]">
                        <div className="absolute top-[0rem] left-[1.41rem] rounded-12xl bg-white w-[0.43rem] h-[0.08rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
                        <div className="absolute top-[0.56rem] left-[1.36rem] rounded-12xl bg-white w-[0.43rem] h-[0.06rem] [transform:_rotate(-45deg)] [transform-origin:0_0] z-[1]" />
                        <div className="absolute top-[0.28rem] left-[0rem] rounded-12xl bg-white w-[1.69rem] h-[0.06rem] z-[2]" />
                      </div>
                    </div>
                    <img
                      className="w-[3.88rem] h-[3.88rem] absolute my-0 mx-[!important] top-[6.38rem] left-[-1.94rem] object-contain z-[2]"
                      loading="eager"
                      alt=""
                      src="/navigation@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
                  <div className="flex flex-row items-start justify-start gap-[1.06rem]">
                    <div className="h-[0.13rem] w-[1.96rem] relative rounded-20xl bg-white z-[1]" />
                    <div className="h-[0.13rem] w-[1.96rem] relative rounded-20xl bg-salmon z-[1]" />
                    <div className="h-[0.13rem] w-[1.96rem] relative rounded-20xl bg-white z-[1]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full text-left text-[1.5rem] text-grey-scale-black font-abel">
        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] px-[10.31rem] box-border gap-[9.56rem] min-h-[28.31rem] max-w-full mq900:gap-[9.56rem] mq900:pl-[2.56rem] mq900:pr-[2.56rem] mq900:box-border mq1275:gap-[9.56rem] mq1275:pl-[5.13rem] mq1275:pr-[5.13rem] mq1275:box-border mq450:gap-[9.56rem] mq1600:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4rem] min-w-[31rem] max-w-full mq1275:min-w-full mq450:gap-[4rem]">
            <div className="w-[17.38rem] flex flex-col items-start justify-start gap-[2rem] mq450:gap-[2rem]">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <img
                  className="h-[2.5rem] w-[2.5rem] relative min-h-[2.5rem]"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="relative leading-[2.5rem] mq450:text-[1.19rem] mq450:leading-[2rem]">
                  Travlog
                </div>
              </div>
              <i className="self-stretch h-[11.56rem] relative text-[1.44rem] leading-[160%] inline-block font-thin font-poppins text-grey-scale-black-50 mq450:text-[1.13rem] mq450:leading-[1.81rem]">
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
          <div className="w-[42.31rem] flex flex-row items-start justify-between min-w-[42.31rem] gap-[1.25rem] max-w-full text-[1.13rem] text-grey-scale-black-75 font-body mq900:flex-wrap mq1275:min-w-full mq1600:flex-1">
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
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
