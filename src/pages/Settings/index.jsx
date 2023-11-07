import React, { useState } from 'react'
// import Sidebar from '../../components/SettingSidebar/Sidebar'
import CreateProfile from '../CreateProfile';

import { Link } from 'react-router-dom';
// import "./sidebar.css";
import { CgProfile } from 'react-icons/cg';
import { BsCurrencyDollar, BsListStars } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { MdLocalOffer } from 'react-icons/md';
import { GiCheckedShield } from 'react-icons/gi';
import "./settings.css";
const Setting = (props) => {
    // props.set(true);
    const [isActive, setIsActive] = useState(false);
    const [componentNo, setComponentNo] = useState(1);
    const sidebarItems = [
        { link: "/settings", title: "Profile", icon: <CgProfile /> },
        { link: "", title: "Featured items", icon: <BsListStars /> },
        { link: "", title: "Notifications", icon: <IoMdNotifications /> },
        { link: "", title: "Offers", icon: <MdLocalOffer /> },
        { link: "", title: "Support", icon: <GiCheckedShield /> },
        {
            link: "", title: "Earnings", icon: <BsCurrencyDollar />
        },

    ]
    const handleClick = () => {
        setIsActive(current => !current);
    };
console.log(componentNo);
    return (
        <div className="dd d-flex align-item-center justify-content-start">
            <aside className="sidebar StickySidebar border-end border-1 scroller">
                {/* <Sidebar /> */}
                <div className="m-5">
                    <span className="header">Settings</span>
                    <div className="d-flex flex-column py-3">
                        {sidebarItems.map((data, i) => (
                            <Link        
                            to={data.link} onClick={()=>setComponentNo(i+1)} className="sidebarLink w-100 rounded-pill">
                                <span className="sidebarHead">
                                    <span className="mx-2" >
                                        {data.icon} 
                                    </span>
                                    <span>
                                        {data.title}
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>
            <div className="remainingPage">
                {componentNo === 1 || 2 || 3 || 4 || 5 ? <CreateProfile /> : null}
            </div>
        </div>
    )
}

export default Setting