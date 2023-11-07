import React, { useEffect } from "react";
import Slider from "../../components/Slider";
import {
  // badge,
  inhero,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  Logo_illustrstion,
  oneSvg,
  twoSvg,
  threeSvg,
} from "../../img";
import { Link } from "react-router-dom";
import "./home.css";
import Carouselw from "./Carousel";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const Home = (props) => {
  props.set(true);
  props.set1(false);
  const listOne = [
    { link: "#", label: "Games", icon: "ri-gamepad-line" },
    { link: "#", label: "Art", icon: "ri-brush-line" },
    { link: "#", label: "Trading Cards", icon: "ri-stock-line" },
    { link: "#", label: "Music", icon: "ri-music-line" },
    { link: "#", label: "Domain Names", icon: "ri-global-line" },
    { link: "#", label: "Memes", icon: "ri-emotion-laugh-line" },
    { link: "#", label: "Collectibles", icon: "ri-layout-4-line" },
  ];
  const dropdown = [
    { link: "#", label: "Action" },
    { link: "#", label: "Another action" },
    { link: "#", label: "Something else here" },
  ];
  const card = [
    {
      link: "#",
      img1: avatar1,
      img1Label: "@mickel_fenn",
      img2: avatar2,
      img2Label: "@danil_pannini",
      img3: item1,
      icon1: "ri-heart-3-fill",
      span: "1.2k",
      title: "Colorful Abstract Painting",
      footerText: "4 in stock",
      price: "2.45 ETH",
      newLine: "hr",
      icon2: "ri-history-line",
      footerPara: "View History",
      button: "Place Bid",
    },

    {
      link: "#",
      img1: avatar3,
      img1Label: "@mazanov_sky",
      img2: avatar4,
      img2Label: "@mucky_fennouni",
      img3: item2,
      icon1: "ri-heart-3-fill",
      span: "13.2k",
      title: "The girl with the firefly",
      footerText: "12 in stock",
      price: "2.55 ETH",
      newLine: "hr",
      icon2: "ri-history-line",
      footerPara: "View History",
      button: "Place Bid",
    },

    {
      link: "#",
      img1: avatar5,
      img1Label: "@jimmy_dom",
      img2: avatar6,
      img2Label: "@kristian_sefroui",
      img3: item3,
      icon1: "ri-heart-3-fill",
      span: "1.2k",
      title: "Dodo hide the seek",
      footerText: "6 in stock",
      price: "2.45 ETH",
      newLine: "hr",
      icon2: "ri-history-line",
      footerPara: "View History",
      button: "Place Bid",
    },

    {
      link: "#",
      img1: avatar1,
      img1Label: "@Alvin_nov",
      img2: avatar7,
      img2Label: "@mucky_holiman",
      img3: item4,
      icon1: "ri-heart-3-fill",
      span: "4.1k",
      title: "Liquid Forest Princess",
      footerText: "34 in stock",
      price: "0.55 ETH",
      newLine: "hr",
      icon2: "ri-history-line",
      footerPara: "View History",
      button: "Place Bid",
    },

    {
      link: "#",
      img1: avatar8,
      img1Label: "@stivan_rominok",
      img2: avatar9,
      img2Label: "@danil_pan",
      img3: item5,
      icon1: "ri-heart-3-fill",
      span: "6.4k",
      title: "Spider Eyes Modern Art",
      footerText: "7 in stock",
      price: "1.45 ETH",
      newLine: "hr",
      icon2: "ri-history-line",
      footerPara: "View History",
      button: "Place Bid",
    },

    {
      link: "#",
      img1: avatar10,
      img1Label: "@mazanov_sky",
      img2: avatar11,
      img2Label: "@mucky_art",
      img3: item6,
      icon1: "ri-heart-3-fill",
      span: "13.2k",
      title: "Synthwave Painting",
      footerText: "2 in stock",
      price: "0.055 ETH",
      newLine: "hr",
      icon2: "ri-history-line",
      footerPara: "View History",
      button: "Place Bid",
    },

    {
      link: "#",
      img1: avatar12,
      img1Label: "@jimmy_dom",
      img2: avatar5,
      img2Label: "@kristian_fel",
      img3: item7,
      icon1: "ri-heart-3-fill",
      span: "1.6k",
      title: "Contemporary Abstract",
      footerText: "34 in stock",
      price: "0.95 ETH",
      newLine: "hr",
      icon2: "ri-history-line",
      footerPara: "View History",
      button: "Place Bid",
    },

    {
      link: "#",
      img1: avatar13,
      img1Label: "@Alvin_nov",
      img2: avatar14,
      img2Label: "@mucky_art",
      img3: item8,
      icon1: "ri-heart-3-fill",
      span: "11.5k",
      title: "Valkyrie Abstract Art",
      footerText: "9 in stock",
      price: "3.55 ETH",
      newLine: "hr",
      icon2: "ri-history-line",
      footerPara: "View History",
      button: "Place Bid",
    },
  ];
  const collection = [
    {
      link: "#",
      img1: item9,
      img2: item10,
      img3: item11,
      img4: item12,
      icon: "ri-heart-3-fill",
      heading: "Creative Art collection",
      span: "2.1k",
      label: "5 items · Created by",
      img5: avatar2,
      name: "@william_jamy...",
    },
    {
      link: "#",
      img1: item13,
      img2: item14,
      img3: item15,
      img4: item16,
      icon: "ri-heart-3-fill",
      heading: "Colorful Abstract Painting",
      span: "3.5k",
      label: "7 items · Created by",
      img5: avatar3,
      name: "@alexis_fenn...",
    },
    {
      link: "#",
      img1: item17,
      img2: item18,
      img3: item19,
      img4: item20,
      icon: "ri-heart-3-fill",
      heading: "Modern Art collection",
      span: "7.2k",
      label: "2 items · Created by",
      img5: avatar1,
      name: "@Joshua_Bren...",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="body">
        <BrowserView>
        <div className="hero__1 sec-one-bg destopView">
          <div className="homeCon">
            <div className="row align-items-center ">
              <div className="col-lg-6 ">
                <div className="hero__left space-y-20">
                  <h1 className="hero__title">Direct to Creator</h1>
                  <h2>Discover digital art and collect NFTs</h2>
                  <p className="hero__text txt">
                    D2C is a shared liquidity NFT market smart contract which is
                    used by multiple websites to provide the users the best
                    possible experience.
                  </p>
                  <div className="space-x d-flex flex-column flex-md-row sm:space-y-20">
                    <Link className="btn btn-primary btn-grad" to="/marketplace">
                      View market
                    </Link>
                    <Link className="btn btn-primary btn-grad" to="/mint">
                      Create Your NFT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid w-full"
                  id="img_js"
                  src={inhero}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        </BrowserView>
        <MobileView>
        <div className="">
          <Carouselw />
        </div>
        </MobileView>
        <div className="mt-10">
          <Slider />
          <div className="container">
            <div className="section__head">
              <div className="d-md-flex  sm:space-y-20 space-x-20 justify-content-between align-items-center">
                <h2 className="section__title text-center">Explore</h2>
                <div className="dblock">
                <div className="dropdown text-center">
                  <button
                    className="btn btn-white btn-sm dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    All
                  </button>
                  <div className="dropdown-menu">
                    {listOne.map((drop) => (
                      <Link  className="dropdown-item" to={drop.link}>
                        <span> {drop.label} </span>
                        {/* {drop.label} */}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* <ul className="menu_categories space-x-20">
                  <li>
                    <Link to="#" className="color_brand">
                      <span> All </span>
                    </Link>
                  </li>
                  {listOne.map((list) => (
                    <li>
                      <Link to={list.link}>
                        <i className={list.icon}></i>{" "}
                      </Link>
                    </li>
                  ))}
                </ul> */}
                <div className="dropdown text-center">
                  <button
                    className="btn btn-white btn-sm dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                      
                  >
                    Recent Active
                  </button>
                    <div className="dropdown-menu">
                    {dropdown.map((drop) => (
                      <Link className="dropdown-item" to={drop.link}>
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                </div>
                </div>
                {/* <div className="d-flex align-items-center justify-content-between dblox"> */}
                  
                  <ul className="menu_categories space-x-20 dlock1">
                  <li>
                    <Link to="#" className="color_brand">
                      <span> All </span>
                    </Link>
                  </li>
                  {listOne.map((list) => (
                    <li>
                      <Link to={list.link}>
                        <i className={list.icon}></i>{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="dropdown text-center dlock1">
                    <button
                      className="btn btn-white btn-sm dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Recent Active
                    </button>
                  <div className="dropdown-menu xzsa" style={{ zIndex: "999" }}>
                      {dropdown.map((drop) => (
                        <Link className="dropdown-item" to={drop.link}>
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                {/* </div> */}

              </div>
            </div>

            <div className="row" style={{ zIndex: "1" }}>
              {card.map((card) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" style={{ zIndex: "1" }}>
                  <div className="card__item four" style={{ zIndex: "1" }}>
                    <div className="card_body space-y-10">
                      <div className="creators space-x-10">
                        <div className="avatars space-x-3">
                          <Link to="Profile">
                            <img
                              src={card.img1}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="Profile" className="mt-3">
                            <p className="avatars_name txt_xs">
                              {card.img1Label}
                            </p>
                          </Link>
                        </div>
                        <div className="avatars space-x-3">
                          <Link to="Profile">
                            <img
                              src={card.img2}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="Profile" className="mt-3">
                            <p className="avatars_name txt_xs">
                              {card.img2Label}
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="card_head">
                        <Link to="Item-details">
                          <img src={card.img3} alt="item img" />
                        </Link>
                        <Link to={card.link} className="likes space-x-3">
                          <i className={card.icon1}></i>
                          <span className="txt_sm">{card.span}</span>
                        </Link>
                      </div>
                      <h6 className="card_title">
                        <Link className="color_black" to="Item-details">
                          {card.title}
                        </Link>
                      </h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm">{card.footerText}</p>
                          </div>
                          <Link to={card.link} className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span className="color_green txt_sm">
                                {card.price}
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className={card.newLine}></div>
                        <div className="d-flex align-items-center space-x-10 justify-content-between">
                          <div className="d-flex align-items-center space-x-5">
                            <i className={card.icon2}></i>
                            <Link
                              to={card.link}
                              data-toggle="modal"
                              data-target="#popup_history"
                              // className=""
                            >
                              <p
                                className="color_text pt-3 txt_sm view_history"
                                style={{ width: "auto" }}
                              >
                                {card.footerPara}
                              </p>
                            </Link>
                          </div>
                          <Link
                            className="btn btn-sm btn-primary btn-grad"
                            to={card.link}
                            data-toggle="modal"
                            data-target="#popup_bid"

                          >
                            {card.button}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center">
              <Link to="/marketplace" className="btn btn-sm btn-white">
                <i className="ri-restart-line"></i>
                View all items
              </Link>
            </div>
          </div>
        </div>

        <div className="section mt-100">
          <div className="container">
            <div className="section__head">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="section__title"> Collections</h2>
                <Link to="/collections" className="btn btn-dark btn-sm">
                  View All
                </Link>
              </div>
            </div>
            <div className="row justify-content-center mb-30_reset">
              {collection.map((list) => (
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="collections space-y-10 mb-30">
                    <Link to="/collectionsdetails">
                      <div className="collections_item">
                        <div className="images-box space-y-10">
                          <div className="top_imgs">
                            <img src={list.img1} alt="" />
                            <img src={list.img2} alt="" />
                            <img src={list.img3} alt="" />
                          </div>
                          <img src={list.img4} alt="" />
                        </div>
                      </div>
                    </Link>
                    <div className="collections_footer justify-content-between">
                      <h5 className="collection_title">
                        <Link to="Collections">{list.heading}</Link>
                      </h5>
                      <button className="likes space-x-3 btn-like">
                        <i className={list.icon}></i>
                        <span className="txt_md">{list.span}</span>
                      </button>
                    </div>

                    <div className="creators space-x-10">
                      <span className="color_text txt_md"> {list.label}</span>
                      <div className="avatars space-x-5">
                        <Link to="Profile">
                          <img
                            src={list.img5}
                            alt="Avatar"
                            className="avatar avatar-sm"
                          />
                        </Link>
                      </div>
                      <Link to="Profile" className="pt-3">
                        <p className="avatars_name txt_sm">{list.name}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="call2action">
          <div className="container">
            <div className="row justify-content-between align-items-center sm:space-y-20">
              <div className="col-md-6">
                <div className="space-y-20">
                  <h1 className="text-white">
                    Start your own collection today
                  </h1>
                  <p className="color_text section__text">
                    D2C is a shared liquidity NFT market smart contract which is
                    used by multiple websites to provide the users the best
                    possible experience.
                  </p>
                  <Link to="/marketplace" className="btn btn-grad btn-primary">
                    Start Collecting
                  </Link>
                </div>
              </div>
              <div className="col-md-auto">
                <img
                  className="img-fluid img__logo"
                  src={Logo_illustrstion}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container sp-bottom2x">
          <div className="logos__wrap">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-auto col-md-12">
                <h3 className="section__title md:mb-20 text-left d-flex justify-content-center">
                  Loved by the community
                </h3>
              </div>
              <div className="col-lg-auto col-md-12">
                <div className="d-flex flex-column flex-md-row justify-content-center space-x-20 sm:space-x-0 sm:space-y-20 align-items-center">
                  <img src={oneSvg} alt="" />
                  <img src={twoSvg} alt="" />
                  <img src={threeSvg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
