import React, { useRef, useEffect } from "react";

function Index() {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = containerRef.current;

        if (!scrollContainer) return;

        const containerWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        let scrollLeft = 0;

        const scrollLoop = () => {
            scrollLeft++;
            if (scrollLeft >= containerWidth) {
                scrollLeft = 0;
            }
            scrollContainer.scrollLeft = scrollLeft;
        };

        const intervalId = setInterval(scrollLoop, 15);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="flex items-center justify-center gap-10 py-10 px-20" style={{overflowX: "hidden"}}>
                <div className={"flex items-start justify-start gap-[10rem] max-w-full"} style={{overflowX: "hidden"}} ref={containerRef}>
                    <div>
                        <img src="/partners/1.svg" alt="partner" style={{width: "100px", height: "60px", objectFit: "cover"}}/>
                    </div>
                    <div>
                        <img src="/partners/2.svg" alt="partner" style={{maxWidth: "50px"}}/>
                    </div>
                    <div>
                        <img src="/partners/3.svg" alt="partner" style={{width: "100px"}}/>
                    </div>
                    <div>
                        <img src="/partners/4.png" alt="partner" style={{width: "100px"}}/>
                    </div>
                    <div>
                        <img src="/partners/5.png" alt="partner" style={{maxWidth: "150px"}}/>
                    </div>
                    <div>
                        <img src="/partners/6.png" alt="partner" style={{maxWidth: "150px"}}/>
                    </div>
                    <div>
                        <img src="/partners/7.svg" alt="partner" style={{maxWidth: "100px"}}/>
                    </div>
                    <div>
                        <img src="/partners/8.svg" alt="partner" style={{maxWidth: "100px"}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
