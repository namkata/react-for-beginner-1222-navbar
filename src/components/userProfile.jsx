import React from "react";
import user from "../assets/user.jpg";

const UserProfile = ({toggle}) => {
    return (
        <div
            className={`flex gap-5 item-centers ${toggle ? "bg-none transition-all duration-300 delay-200 p-2" : "bg-white rounded-xl p-2"}`}>
            <div className="min-w-[3.5rem] h-[3.5rem]">
                <img src={user} className="w-full h-full rounded-full object-cover" alt="profile"/>
            </div>
            <div className={toggle ? "opacity-0 delay-200" : ""}>
                <h3 className="text-xl">Nam Tran</h3>
                <span className="text-[0.75rem] opacity-60">nam.tran@kyanon.digital</span>
            </div>
        </div>
    )
}
export default UserProfile;