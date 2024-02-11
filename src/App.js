import {useEffect} from "react";
import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PackageDetailPageTourPla from "./pages/PackageDetailPageTourPla";
import PackageDetailPageTourGal from "./pages/PackageDetailPageTourGal";
import PackageDetailPageTourInf from "./pages/PackageDetailPageTourInf";
import AboutUsPage from "./pages/AboutUsPage";
import MainFrame from "./pages/MainFrame";
import MainFrame1 from "./pages/MainFrame1";
import FrameContainer from "./pages/FrameContainer";

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

            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route
                    path="/package-detail-page-tour-plan"
                    element={<PackageDetailPageTourPla/>}
                />
                <Route
                    path="/package-detail-page-tour-gallery"
                    element={<PackageDetailPageTourGal/>}
                />
                <Route
                    path="/package-detail-page-tour-information"
                    element={<PackageDetailPageTourInf/>}
                />
                <Route path="/about-us-page" element={<AboutUsPage/>}/>
                <Route path="/main-frame" element={<MainFrame/>}/>
                <Route path="/main-frame1" element={<MainFrame1/>}/>
                <Route path="/frame-container" element={<FrameContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
