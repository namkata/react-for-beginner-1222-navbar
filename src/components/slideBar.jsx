import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import UserProfile from "./userProfile";
import MenuItem from "./menuItem";

const SlideBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
                <UserProfile toggle={toggle} />
                <MenuItem toggle={toggle} />
                <div
                    className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    <BiChevronLeft className={`${toggle ? "rotate-180" : ""} text-3xl transition-all duration`} />
                </div>
            </div>
            <div className={`container mx-auto body-container ${toggle ? "max-w-full" : ""} `}>
               <div className="flex justify-items-center ">
                   
               </div>
            </div>
        </>
    )
}
export default SlideBar;