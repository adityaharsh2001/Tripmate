import Header from "../components/Header";
import Hero from "../components/Hero";
import ExploreTop from "../components/ExploreTop";
import TravelLogo from "../components/TravelLogo";
import AboutCareerMobile from "../components/AboutCareerMobile";
import FAQBlog from "../components/FAQBlog";
import IMGFrame from "../components/IMGFrame";
import FrameTravelBlogContent from "../components/FrameTravelBlogContent";
import Services from "../components/services";

const Homepage = () => {
    return (
        <div className={"text-secondary font-urbanist"}>
            <Header/>
            <Hero/>
            <Services/>
            <ExploreTop/>
            {/*<AboutCareerMobile/>*/}
            {/*<FAQBlog/>*/}
            {/*<section*/}
            {/*    className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.75rem] box-border gap-[0.06rem] max-w-full shrink-0 text-left text-[2.48rem] text-black font-urbanist">*/}
            {/*    <div*/}
            {/*        className="flex flex-row items-start justify-start pt-[0rem] px-[1.25rem] pb-[4.56rem] box-border max-w-full shrink-0">*/}
            {/*        <div*/}
            {/*            className="flex-1 flex flex-row items-center justify-between py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq750:flex-wrap">*/}
            {/*            <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full shrink-0">*/}
            {/*                <b className="relative mq750:text-[2rem] mq450:text-[1.5rem]">*/}
            {/*                    Top Travel Sories*/}
            {/*                </b>*/}
            {/*                <div className="relative text-[1.24rem] font-medium text-darkslategray-100">*/}
            {/*                    Explore our latest stories from our active users*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <button*/}
            {/*                className="cursor-pointer pt-[1.06rem] pb-[1rem] pr-[1.25rem] pl-[1.69rem] bg-[transparent] rounded-[33.01px] flex flex-row items-center justify-end border-[0.8px] border-solid border-royalblue-200 hover:bg-royalblue-300 hover:box-border hover:border-[0.8px] hover:border-solid hover:border-royalblue-100">*/}
            {/*                <div*/}
            {/*                    className="relative text-[1.24rem] font-semibold font-urbanist text-royalblue-200 text-left">*/}
            {/*                    View All Stories*/}
            {/*                </div>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <IMGFrame/>*/}
            {/*    <FrameTravelBlogContent/>*/}
            {/*</section>*/}
            {/*<footer*/}
            {/*    className="w-full h-[22.5rem] flex flex-row items-center justify-between py-[0rem] px-[7.88rem] box-border gap-[1.25rem] text-left text-[1.44rem] text-grey-scale-black-50 font-urbanist">*/}
            {/*    <div*/}
            {/*        className="w-[21.75rem] flex flex-col items-start justify-start gap-[4rem] max-w-[calc(100%_-_726px)] shrink-0 mq750:hidden mq1275:max-w-full mq450:gap-[4rem]">*/}
            {/*        <div*/}
            {/*            className="self-stretch flex flex-col items-start justify-start gap-[2rem] min-h-[16.5rem] mq450:gap-[2rem]">*/}
            {/*            <div className="flex flex-row items-center justify-start">*/}
            {/*                <img*/}
            {/*                    className="h-[4.38rem] w-[4.38rem] relative object-cover"*/}
            {/*                    loading="eager"*/}
            {/*                    alt=""*/}
            {/*                    src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <i className="self-stretch h-[9.31rem] relative leading-[160%] inline-block font-thin shrink-0 mq450:text-[1.13rem] mq450:leading-[1.81rem]">*/}
            {/*                <p className="m-0">*/}
            {/*                    Contrary to popular belief, Lorem Ipsum is not simply random*/}
            {/*                    text. It has roots*/}
            {/*                </p>*/}
            {/*                <p className="m-0">*/}
            {/*                    in a piece of classical Latin literature from 45 BC.*/}
            {/*                </p>*/}
            {/*            </i>*/}
            {/*        </div>*/}
            {/*        <div className="w-[10rem] flex flex-row items-start justify-between gap-[1.25rem]">*/}
            {/*            <img*/}
            {/*                className="h-[2rem] w-[2rem] relative min-h-[2rem]"*/}
            {/*                loading="eager"*/}
            {/*                alt=""*/}
            {/*                src="/group.svg"*/}
            {/*            />*/}
            {/*            <img*/}
            {/*                className="h-[2rem] w-[2rem] relative min-h-[2rem]"*/}
            {/*                alt=""*/}
            {/*                src="/group-1.svg"*/}
            {/*            />*/}
            {/*            <img*/}
            {/*                className="h-[2rem] w-[2rem] relative min-h-[2rem]"*/}
            {/*                loading="eager"*/}
            {/*                alt=""*/}
            {/*                src="/group-8.svg"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className="flex flex-row items-start justify-start py-[1.25rem] pr-[1.81rem] pl-[0rem] box-border gap-[7.56rem] max-w-[calc(100%_-_368px)] text-[1.13rem] text-grey-scale-black-75 font-body mq750:gap-[7.56rem] mq750:max-w-full mq1100:flex-wrap mq1275:hidden mq450:gap-[7.56rem]">*/}
            {/*        <div className="flex flex-col items-start justify-start gap-[2rem]">*/}
            {/*            <b className="relative text-[1.44rem] leading-[120%] font-urbanist text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">*/}
            {/*                Company*/}
            {/*            </b>*/}
            {/*            <div className="relative leading-[160%]">About</div>*/}
            {/*            <div className="relative leading-[160%]">Career</div>*/}
            {/*            <div className="relative leading-[160%]">Mobile</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col items-start justify-start gap-[2rem]">*/}
            {/*            <b className="relative text-[1.44rem] leading-[120%] font-urbanist text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">*/}
            {/*                Contact*/}
            {/*            </b>*/}
            {/*            <div className="relative leading-[160%]">Why Travlog?</div>*/}
            {/*            <div className="relative leading-[160%]">Partner with us</div>*/}
            {/*            <div className="relative leading-[160%]">FAQ’s</div>*/}
            {/*            <div className="relative leading-[160%]">Blog</div>*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col items-start justify-start gap-[2rem]">*/}
            {/*            <b className="relative text-[1.44rem] leading-[120%] font-urbanist text-grey-scale-black mq450:text-[1.13rem] mq450:leading-[1.38rem]">*/}
            {/*                Meet Us*/}
            {/*            </b>*/}
            {/*            <div className="relative leading-[160%] whitespace-nowrap">*/}
            {/*                +00 92 1234 56789*/}
            {/*            </div>*/}
            {/*            <div className="relative leading-[160%] whitespace-nowrap">*/}
            {/*                info@travlog.com*/}
            {/*            </div>*/}
            {/*            <div className="flex flex-col items-start justify-start gap-[0.5rem]">*/}
            {/*                <div className="relative leading-[160%]">*/}
            {/*                    205. R Street, New York*/}
            {/*                </div>*/}
            {/*                <div className="relative leading-[160%]">BD23200</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    );
};

export default Homepage;
