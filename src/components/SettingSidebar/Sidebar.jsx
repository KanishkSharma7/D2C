import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./sidebar.css";
import { CgProfile } from 'react-icons/cg';
import { BsCurrencyDollar, BsListStars } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { MdLocalOffer } from 'react-icons/md';
import { GiCheckedShield } from 'react-icons/gi';
const Sidebar = () => {
    const sidebarItems = [
        { link: "/createprofile", title: "Profile", icon: <CgProfile /> },
        { link: "", title: "Featured items", icon: <BsListStars /> },
        { link: "", title: "Notifications", icon: <IoMdNotifications /> },
        { link: "", title: "Offers", icon: <MdLocalOffer /> },
        { link: "", title: "Account Supports", icon: <GiCheckedShield /> },
        {
            link: "", title: "Earnings", icon: <BsCurrencyDollar /> },

    ]
    return (
        <>
            <div className="container">
                <span className="header">SETTINGS</span>
                <div className="d-flex flex-column p-3">
                    {sidebarItems.map((data)=> (
                        <Link to={data.link} className="sidebarLink rounded-pill">
                            <span className="sidebarHead">
                                <span className="mx-3">
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
        </>
    )
}

export default Sidebar