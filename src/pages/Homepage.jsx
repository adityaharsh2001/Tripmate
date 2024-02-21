import Header from "../components/Header";
import Hero from "../components/Hero";
import ExploreTop from "../components/ExploreTop";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Services from "../components/services";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

const Homepage = () => {
    return (
        <div className={"text-secondary font-poppins"}>
            <Hero/>
            <Partners/>
            <ExploreTop/>
            {/*<Stats/>*/}
            <Features/>
            <Testimonials/>
        </div>
    );
};

export default Homepage;
