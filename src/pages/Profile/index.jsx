import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  avatar1,
  avatar10,
  avatar11,
  avatar12,
  avatar2,
  avatar3,
  avatar4,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar5,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  profile_bg,
} from "../../img";
import "./profile.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CreatorDashboard from "../CreatorDashboard";
import MyAssets from "../MyAssets";
import MyActivity from "../MyActivity";
import MyCollections from "../MyCollections";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy, MdCreate } from "react-icons/md";
import { useMoralis } from "react-moralis";

function Profile(props, { eventKeys }) {
  props.set(true);

  // const {
  //   authenticate,
  //   isWeb3Enable,
  //   isAuthenticated,
  //   user,
  //   enableWeb3,
  //   Moralis,  
  // } = useMoralis();

  console.log(props, props.eventKeys, eventKeys);
  const dropdown_popup = [
    { link: "#", icon: "ri-facebook-line" },
    { link: "#", icon: "ri-messenger-line" },
    { link: "#", icon: "ri-whatsapp-line" },
    { link: "#", icon: "ri-youtube-line" },
  ];
  const box = [
    { col: "col-6", span: "Collections", h4: "105" },
    { col: "col-6", span: "Creations", h4: "406" },
  ];
  const social = [
    { link: "#", icon: "ri-facebook-line", span: "facebook", label: "D2C" },
    // { link: "#", icon: "ri-messenger-line", span: "messenger",label: "D2C",},
    { link: "#", icon: "ri-instagram-line", span: "instagram", label: "D2C" },
    {
      link: "https://discord.gg/fdAgQz7YQn",
      icon: "ri-discord-line",
      span: "discord",
      label: "D2C",
    },
    { link: "#", icon: "ri-youtube-line", span: "youtube", label: "D2C" },
  ];

  const tab2 = [
    { eventKey: "Owned", title: "Owned", component: <MyAssets /> },
    { eventKey: "Created", title: "Created", component: <CreatorDashboard /> },
    {
      eventKey: "Collections",
      title: "Collections",
      component: <MyCollections />,
    },
    { eventKey: "Activity", title: "Activity", component: <MyActivity /> },
  ];
  const dropdown = [
    { link: "#", label: "Action" },
    { link: "#", label: "Another action" },
    { link: "#", label: "Something else here" },
  ];
  const [isCopied, setIsCopied] = useState(false);
  const codeSnippet = localStorage.getItem('WalletAddress');
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="body sp-ottom">
        <div className="mb-30">
          <div className="hero__profile">
            <div className="cover">
              <img src={profile_bg} alt="" />
            </div>
            <div className="infos">
              <div className="Profile_container_card">
                <div className="row flex-wrap align-items-center justify-content-between sm:space-y-50">
                  <div className="col-md-auto mr-20">
                    <div className="avatars d-flex space-x-20 align-items-center">
                      <div className="avatar_wrap">
                        <img
                          className="avatar avatar-lg"
                          src={avatar4}
                          alt="avatar"
                        />
                      </div>
                      <h5>@ayoub fennouni</h5>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="d-sm-flex flex-wrap align-items-center space-x-20 mb-20_reset d-sm-block">
                      <div className="mb-20">
                        <div className="copy">
                          <span className="color_text"> {codeSnippet} </span>

                          <CopyToClipboard
                            text={codeSnippet}
                            onCopy={onCopyText}
                          >
                            <span>
                              {isCopied ? "Copied!" : <MdContentCopy />}
                            </span>
                          </CopyToClipboard>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center space-x-20">
                        <div className="mb-20">
                          <Link to="#" className="btn btn-dark btn-sm">
                            Follow
                          </Link>
                        </div>
                        <div className="mb-20">
                          <div className="share">
                            <div className="icon">
                              <Link to="#">
                                <i className="ri-share-line"></i>
                              </Link>
                            </div>
                            <div className="dropdown__popup">
                              <ul className="space-y-10">
                                {dropdown_popup.map((drop) => (
                                  <li>
                                    <Link to={drop.link}>
                                      <i className={drop.icon}></i>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="mb-20 ">
                          <div className="more">
                            <div className="icon edit_settings_main" style={{ position: 'relative' }}>
                              {/* <Link to="#"> */}
                              <i className="ri-more-fill"></i>
                              {/* </Link> */}
                            </div>
                            <div className="edit_settings_Toggle" style={{ background: "#f5faf7", width: "12rem", borderRadius: "12px", position: 'absolute', top: "3rem", right: "-4rem" }}>

                              <div className="d-flex flex-column">
                                <Link className="text-center d-flex align-item-center justify-content-center text-sm py-2" to="/settings">
                                  <MdCreate className="text-dark" size={24} />
                                  <h6 className="ms-2 pt-1 text-center text-dark"> Edit Profile</h6>
                                </Link>
                              </div>
                            </div>
                            {/* <div className="dropdown__popup ">
                              <ul className="space-y-10">
                                <li>
                                  <Link to="#" className="space-x-10 d-flex">
                                    <i className="ri-flag-line"></i>
                                    <span> Report </span>
                                  </Link>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Profile_container_card">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-7 order-md-0 order-1">
              <div className="profile__sidebar">
                <div className="space-y-40">
                  <div className="space-y-10">
                    <h5 className="sp-top">About me</h5>
                    <div className="box space-y-20">
                      <p>
                        I make art with the simple goal of giving you something
                        pleasing to look at for a few seconds.
                      </p>
                      <div className="row">
                        {box.map((text) => (
                          <div className={text.col}>
                            <span className="txt_sm color_text">
                              {text.span}
                            </span>
                            <h4>{text.h4}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-10">
                    <h5>Follow me</h5>
                    <div className="box">
                      <ul className="social_profile space-y-10 overflow-hidden">
                        {social.map((socialicon) => (
                          <li>
                            <Link to={socialicon.link}>
                              <i className={socialicon.icon}></i>
                              <span className="color_text">
                                {socialicon.span}/
                              </span>
                              @{socialicon.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-center txt_sm mt-20 color_text">
                  Since 2022
                </p>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 order-md-1 order-0">
              <div className="profile__content">
                <div className="d-flex justify-content-between">
                  <div className="space-x-10">
                    <div className="row mb-30_reset">
                      <Tabs
                        defaultActiveKey="Created"
                        id="uncontrolled-tab-example"
                        className="justify-content-center gap-3 TabsBtn"
                      >
                        {tab2.map((tabs) => (
                          <Tab
                            eventKey={tabs.eventKey}
                            title={tabs.title}
                            className="tabBtn"
                          >
                            {tabs.component}
                          </Tab>
                        ))}
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
