//make a hooke to detect click outside of an element

import { useEffect } from "react";

export const useDetectOutsideClick = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

//example of usage

// import React, { useRef, useState } from "react";
// import { useDetectOutsideClick } from "./useDetectOutsideClick";

// const Dropdown = () => {
//     const dropdownRef = useRef(null);
//     const [isActive, setIsActive] = useState(false);
//     useDetectOutsideClick(dropdownRef, () => setIsActive(false));

//     return (
//         <div className="menu-container">
//             <button onClick={() => setIsActive(!isActive)} className="menu-trigger">
//                 <span>User</span>
//             </button>
//             <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
//                 <ul>
//                     <li><a href="/">My Profile</a></li>
//                     <li><a href="/">My Orders</a></li>
//                     <li><a href="/">Logout</a></li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default Dropdown;

