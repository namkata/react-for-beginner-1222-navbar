import React from "react";
import {RxDashboard} from "react-icons/rx";
import {MdInsights} from "react-icons/md";
import {RiCouponLine} from "react-icons/ri";
import {FiUser, FiLogOut} from "react-icons/fi";
import {AiOutlineMessage} from "react-icons/ai";
import {BsFolder, BsWallet2} from "react-icons/bs";

export const listMenuItemData = [{
    id: 1, icon: <RxDashboard/>, text: "Dashboard",
}, {
    id: 2, icon: <MdInsights/>, text: "Sales Insights",
}, {
    id: 3, icon: <RiCouponLine/>, text: "Coupons",
}, {
    id: 4, icon: <FiUser/>, text: "Team Member",
}, {
    id: 5, icon: <AiOutlineMessage/>, text: "Messages",
}, {
    id: 6, icon: <BsFolder/>, text: "File Manager",
}, {
    id: 7, icon: <BsWallet2/>, text: "Wallet",
}, {
    id: 8, icon: <FiLogOut/>, text: "Logout",
},];
const MenuItem = ({toggle}) => {
    return (<div className="block justify-between">
        {listMenuItemData.map((data) => {
            return(
                <div
                    className="sidebar left-4 bottom-4" key={data.id}>
                    <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
                    <a className={`${
                        toggle ? "opacity-0 delay-200" : ""
                    } text-[1rem] text-brown whitespace-pre`} href={`/${data.text}`}>{data.text}</a>
                </div>
            );
        })}
    </div>)
}
export default MenuItem;