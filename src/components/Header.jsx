import { memo } from "react";

const Header = memo(() => {
    return (
        <header
            className="w-full items-center px-20 flex pt-5 justify-between py-0 box-border text-black font-poppins">
                <div className="h-[4.38rem] bg-cover bg-no-repeat">
                    <img className="h-full w-full object-cover" alt=""
                         src="/img-20220906-104553-589--2-removebgpreview70x70-1@2x.png"/>
                </div>
                <nav className="flex items-center justify-start gap-[3.75rem]">
                    <div className="font-medium">Home</div>
                    <div className="font-medium">About</div>
                    <div className="font-medium">Services</div>
                    <div className="font-medium whitespace-nowrap">Upcoming Packages</div>
                </nav>
                <button
                    className="cursor-pointer [border:none] py-[1rem] pr-[1.81rem] pl-[2rem] bg-primary rounded-81xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumpurple">
                    <b className="relative text-[0.88rem] leading-[120%] font-poppins text-light text-left">
                        Get in Started
                    </b>
                </button>
        </header>
    );
});

export default Header;
