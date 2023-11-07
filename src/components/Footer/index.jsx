import React from "react";
import './footer.css'
import {DtoCLogoImg} from "../../img"
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { RiFacebookLine, RiMessengerLine, RiWhatsappLine, RiYoutubeLine } from 'react-icons/ri';
    
 const Footer = () => {
  const socialIcons = [
    { link: "#", icon: "ri-facebook-line" },
    { link: "#", icon: "ri-discord-line" },
    { link: "#", icon: "ri-instagram-line" },
    { link: "#", icon: "ri-youtube-line" },
  ];
  const liOne = [
    { link: "#", label: "Home" },
    { link: "#", label: "About Us" },
    { link: "/contactus", label: "Contact Us" },
    { link: "/submit_request", label: "Submit Request" },
    { link: "/ranking", label: "Ranking" },
    { link: "#", label: "Market Place" },
  ];
  const liTwo = [
    { link: "#", label: "Profile" },
    { link: "/creators", label: "Creators" },
    { link: "/myassets", label: "My Assets" },
    { link: "#", label: "Colletctions" },
    { link: "#", label: "Activity" },
  ];
  const liThree = [
    { link: "#", label: "Upload Types" },
    { link: "#", label: "Upload" },
    { link: "#", label: "Connect Wallet" },
    { link: "#", label: "Item Details" },
  ];
  return (
    <>
      <footer className="footer__1">
        <div className="mx-5">
          <div className="row">
            <div className="col-lg-6 space-y-20">
              <div className="footer__logo">
                <Link to="/">
                  <img
                    src={DtoCLogoImg}
                    alt="logo"
                    id="logo_js_f"
                    className="footerLogo"
                  />
                </Link>
              </div>
              <p className="footer__text">
                D2C is a shared liquidity NFT market smart contract
              </p>
              <div>
                <ul className="footer__social space-x-10 mb-40">
                  {socialIcons.map((icons, i) => (
                    <li key={i}>
                      <Link to={icons.link}>
                        <i className={icons.icon} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title footer-title-sp">D2C</h6>
              <ul className="footer__list">
                  {liOne.map((list, i)=>
                  <li key={i}>
                      <Link to={list.link}>{list.label}</Link>
                  </li>
                  )}
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title footer-title-sp">Assets</h6>
              <ul className="footer__list">
                  {liTwo.map((list, i)=> (
                    <li key={i}>
                      <Link to={list.link}>{list.label}</Link>
                  </li>
                  )
                  )}
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title footer-title-sp">Company</h6>
              <ul className="footer__list">
                  {liThree.map((list, i)=>
                    <li key={i}>
                      <Link to={list.link}>{list.label}</Link>
                  </li>
                  )}
              </ul>
            </div>
          </div>
          <p className="copyright text-center">
            Copyright © 2022. Created with love by D2C.
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer
