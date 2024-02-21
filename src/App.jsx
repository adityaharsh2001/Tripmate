import {useEffect} from "react";
import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PackageDetails from "./pages/PackageDetails";
import AboutUsPage from "./pages/AboutUsPage";
import Explore from "./pages/Explore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/":
                title = "";
                metaDescription = "";
                break;
            case "/package-detail-page-tour-plan":
                title = "";
                metaDescription = "";
                break;
            case "/package-detail-page-tour-gallery":
                title = "";
                metaDescription = "";
                break;
            case "/package-detail-page-tour-information":
                title = "";
                metaDescription = "";
                break;
            case "/about-us-page":
                title = "";
                metaDescription = "";
                break;
            case "/main-frame":
                title = "";
                metaDescription = "";
                break;
            case "/main-frame1":
                title = "";
                metaDescription = "";
                break;
            case "/frame-container":
                title = "";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

    return (<div className={"App"}>
            <Header/>
            <a href="https://api.whatsapp.com/send?phone=393661273612." className="float bounce" target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route
                    path="/package-detail"
                    element={<PackageDetails/>}
                />
                <Route path="/about-us" element={<AboutUsPage/>}/>
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
