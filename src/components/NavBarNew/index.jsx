import React, { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import WalletBtn from "../WalletBtn";
import "./navbarNew.css";
import { GrDomain, GrGallery } from "react-icons/gr";
import { FaDiscord, FaTiktok, FaWallet } from "react-icons/fa";
import { BsArrowRightShort, BsFacebook, BsFillSunFill, BsGrid3X3, BsTwitter } from "react-icons/bs";
import { ImCamera } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import {
  AiFillEye,
  AiFillInstagram,
  AiFillSetting,
  AiFillYoutube,
  AiOutlineDash,
  AiOutlineMenu,
  AiOutlineReddit,
  AiOutlineRight,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiCreditCard, BiHeart, BiLogOutCircle, BiWorld } from "react-icons/bi";
import {
  MdColorLens,
  MdCreate,
  MdOutlineContentCopy,
  MdOutlineQueueMusic,
  MdSportsBaseball,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { metamask, DtoCLogoImg, avatar2 } from "../../img";
import { RiWallet3Line, RiSearchLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { Button, DropdownButton, Modal, Offcanvas } from "react-bootstrap";
import Profile from "../../pages/Profile";

const NavBarNew = ({ mode }) => {
  let [seclass, setSeclass] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState(false);
  const [toggleStart, setToggleStart] = useState(false);
  const [toggleStart1, setToggleStart1] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let location = useLocation();


  function CustomToggle({ children, eventKey, onClick }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) =>
      onClick({ state: !active, eventKey: eventKey })
    );


    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <Link
        to="#"
        aria-expanded={isCurrentEventKey ? "true" : "false"}
        className="nav-link"
        role="button"
        onClick={(e) => {
          decoratedOnClick(isCurrentEventKey);
        }}
      >
        {children}
      </Link>
    );
  }
  const ProfileDropdown = [
    { link: "/profile", label: "My Profile", logo: { CgProfile } },
    { link: "/", label: "Favorites", logo: { BiHeart } },
    { link: "/", label: "Watchlist", logo: { AiFillEye } },
    { link: "/", label: "My Collections", logo: { BsGrid3X3 } },
    { link: "/mint", label: "Create", logo: { MdCreate } },
    { link: "/", label: "Settings", logo: { AiFillSetting } },
    { link: "/", label: "Logout", logo: { BiLogOutCircle } },
    // { link: "/profile", label: "Profile" },
    // { link: "/mint", label: "Mint" },
  ];
  const dropdownUser = [
    { link: "/profile", label: "Profile" },
    { link: "/creatordashboard", label: "Creator Dashboard" },
    { link: "/myassets", label: "My Assets" },
  ];
  const changeTheme = () => {
    setSeclass(!seclass);
    mode(seclass);
    console.log(seclass);
    // setDark(!dark);
  };
  const walletStyle = {
    width: "32px",
    height: "32px",
    color: "black",
    paddingLeft: "5px",
    paddingRight: "5px",
  };

  const profileArr = [
    { title: "My Profile", icon: <CgProfile size={25} />, link: "/profile" },
    { title: "Favorites", icon: <BiHeart size={25} />, link: "/" },
    // { title: "Watchlist", icon: <AiFillEye size={25} /> , link : "/"},
    { title: "My Collections", icon: <BsGrid3X3 size={25} />, link: "/profile" },
    { title: "Create", icon: <MdCreate size={25} />, link: "/mint" },
    { title: "Settings", icon: <AiFillSetting size={25} />, link: "/settings" },
    { title: "Logout", icon: <BiLogOutCircle size={25} />, link: "/" },
  ]
  const SideBarArr = [
    { title: "Explore", icon: <CgProfile size={25} />, link: "/explore" },
    {
      title: "MarketPlace",
      subArr: [
        { title: "All Nfts", link: "/marketplace" },
        { title: "Collections", link: "/collections" },
      ]
    },
    { title: "LaunchPad", icon: <CgProfile size={25} />, link: "/launchpad" },
    {
      title: "Resource", subArr: [
        { title: "Learn", link: "" },
        { title: "Blog", link: "/blog" },
        { title: "News Letter", link: "" },
        { title: "Docs", link: "" },
        { title: "help Center", link: "" },
        { title: "Plateform Status", link: "" },
      ], icon: <BsGrid3X3 size={25} />, link: ""
    },
    { title: "My Profile", icon: <CgProfile size={25} />, link: "/profile" },
    { title: "Favorites", icon: <BiHeart size={25} />, link: "/" },
    // { title: "Watchlist", icon: <AiFillEye size={25} /> , link : "/"},
    { title: "My Collections", icon: <BsGrid3X3 size={25} />, link: "/profile" },
    { title: "Create", icon: <MdCreate size={25} />, link: "/mint" },
    { title: "Settings", icon: <AiFillSetting size={25} />, link: "/settings" },
    { title: "Logout", icon: <BiLogOutCircle size={25} />, link: "/" },
  ]
  const collection = "collections";
  // console.log(toggleStart);
  return (
    <>
      <Navbar className="body bg_white navStack" expand="lg">
        <Container style={{ margin: "0px", padding: "0px" }} className="">
          <div className="menuBar rounded" onClick={handleShow1}>
            <AiOutlineMenu size={25} className="mx-2 my-1" />
          </div>
          <Navbar.Brand className="logo-d2c d-flex align-item-center">
            <Link to="/">
              <img
                className="dtoc-logo mt-1"
                id="logo_js"
                src={DtoCLogoImg}
                alt="logo"
                style={{
                  width: "2.2rem", height: "2.2rem",
                }}
              />
            </Link>
            <h2 className="pt-2 ps-2" style={{ color: "#cc2714" }}>DtoC</h2>
          </Navbar.Brand>
          <AiOutlineSearch size={25} className="searchBtn"
            onClick={() => handleShow()}
          />


          {/* </div> */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className ="toggleBtn" /> */}
          <Navbar id="basic-avbar-nav" >
            <Nav className="me-5">
              {/* {menu.map((menu) => (
              ))} */}
              <Nav.Link className="explore_origin">
                <Link className="color_black" to={"/explore"}>
                  Explore
                </Link>
              </Nav.Link>
              {/* <div className="explore_toggle"> */}
              <div
                className=" explore_toggle space-y-20 p-3"
                style={{
                  background: "#f5faf7",
                  width: "14em",
                  borderRadius: "12px",
                  position: "absolute",
                  top: "4.3em",
                  left: "20.6em",
                  zIndex: "999",
                }}
                id="dfsa"

              >
                <div className="d-flex flex-column" id="dfsa">
                  {/* <hr /> */}
                  <Link
                    className="d-flex align-item-center text-sm pb-2"
                    to="/"
                  >
                    <BsGrid3X3 className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> All NFTs</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <MdColorLens className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> Art</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <AiFillEye className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> Collectibles</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <GrDomain className="text-dark" size={24} />
                    <h6 className="ms-4 pt-1 text-dark"> Domain Name</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <MdOutlineQueueMusic className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> Music</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <ImCamera className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> Photography</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <MdSportsBaseball className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> Sports</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <BiCreditCard className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> Tranding Cards</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <FaWallet className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> Utility</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    <BiWorld className="text-dark" size={25} />
                    <h6 className="ms-4 pt-1 text-dark"> Virtual World</h6>
                  </Link>
                </div>
              </div>


              {/* </div> */}
              <Nav.Link className="marketplace_origin">
                <Link className="color_black" to={"/marketplace"}>
                  MarketPlace
                </Link>
                <div
                  className="marketplace_toggle space-y-20 p-3"
                  style={{
                    textDecoration: "none"
                  }}
                  id="dfsa"
                >
                  <div className="d-flex flex-column">
                    {/* <hr /> */}
                    <Link
                      className="d-flex border-bottom align-item-center text-sm pb-2"
                      to="/marketplace"
                    >
                      <h6 className="ms-4 pt-1"> All Nft</h6>
                    </Link>
                    <Link
                      className="d-flex mt-2 align-item-center text-sm pb-2"
                      to="/collections"
                    >
                      <h6 className="ms-4 pt-1"> Collections</h6>
                    </Link>

                  </div>
                </div>
              </Nav.Link>
              <Nav.Link className="collection_origin">
                <Link className="color_black" to="/launchpad">
                  LaunchPad
                </Link>

              </Nav.Link>
              {/* <div> */}
              <Nav.Link className="resource_origin">
                <div
                  className="color_black resource_origin"
                  style={{ cursor: "pointer" }}
                >
                  Resources
                </div>
              </Nav.Link>
              <div
                className="resource_toggledata space-y-20 p-3"
                style={{
                  textDecoration: "none"
                }}
                id="dfsa"
              >
                <div className="d-flex flex-column">
                  {/* <hr /> */}
                  <Link
                    className="d-flex align-item-center text-sm pb-2"
                    to="/"
                  >
                    {/* <BsGrid3X3 className="text-dark" size={25} /> */}
                    <h6 className="ms-4 pt-1"> Learn</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/blog"
                  >
                    {/* <MdOutlineQueueMusic className="text-dark" size={25} /> */}
                    <h6 className="ms-4 pt-1"> Blog</h6>
                  </Link>

                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    {/* <MdSportsBaseball className="text-dark" size={25} /> */}
                    <h6 className="ms-4 pt-1"> News Letter</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    {/* <ImCamera className="text-dark" size={25} /> */}
                    <h6 className="ms-4 pt-1 "> Docs</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    {/* <MdColorLens className="text-dark" size={25} /> */}
                    <h6 className="ms-4 pt-1 "> Help Center</h6>
                  </Link>
                  <Link
                    className="border-top d-flex align-item-center text-sm py-2"
                    to="/"
                  >
                    {/* <AiFillEye className="text-dark" size={25} /> */}
                    <h6 className="ms-4 pt-1 "> Plateform Status</h6>
                  </Link>

                  <div className="border-top d-flex align-items-center justify-content-evenly">
                    <Link
                      className="d-flex align-item-center text-sm py-2"
                      to="/"
                    >
                      <BsTwitter className="text-dark" size={21} />
                      {/* <h6 className="ms-4 pt-1 text-dark"> Tranding Cards</h6> */}
                    </Link>
                    <Link
                      className="d-flex align-item-center text-sm py-2"
                      to="/"
                    >
                      <AiFillInstagram className="text-dark" size={21} />
                      {/* <h6 className="ms-4 pt-1 text-dark"> Utility</h6> */}
                    </Link>
                    <Link
                      className="d-flex align-item-center text-sm py-2"
                      to="/"
                    >
                      <FaDiscord className="text-dark" size={23} />
                      {/* <h6 className="ms-4 pt-1 text-dark"> Virtual World</h6> */}
                    </Link>
                    <Link
                      className="d-flex align-item-center text-sm py-2"
                      to="/"
                    >
                      <AiFillYoutube className="text-dark" size={23} />
                      {/* <h6 className="ms-4 pt-1 text-dark"> Virtual World</h6> */}
                    </Link>
                    <Link
                      className="d-flex align-item-center text-sm py-2"
                      to="/"
                    >
                      <BsFacebook className="text-dark" size={21} />
                      {/* <h6 className="ms-4 pt-1 text-dark"> Virtual World</h6> */}
                    </Link>
                  </div>
                </div>
              </div>

            </Nav>
            <div className="main_search">
              <div className="form_group has-search">
                <div>
                  <button className="fa fa-search form_control_feedback mb-2"></button>
                </div>
                <input
                  type="text"
                  className="form_control p-2 ps-5"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="resize">
              <div className="heaer__btns">
                <Link
                  to="/walletconnect"
                  className="bg-whte"
                  style={{cursor:"pointer"}}
                >
                  <RiWallet3Line className="" style={walletStyle} />
                  {/* Connect wallet */}
                </Link>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="d-flex mx-3 avator_origin align-item-center justify-content-between border-2 border rounded-pill m-0"
              >
                {/* <div className="price mt-2 ms-2">
                <span className="text-center">2.45 <strong>ETH</strong> </span>
              </div> */}
                <Link to="profile">
                  <img
                    className="avatar_org rounded-circle"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    src={avatar2}
                    alt="avatar"
                  />
                </Link>
              </div>
              <div
                className="avatar_popup avatar_Toggle1 space-y-20 p-3"
                // style={{

                // }}
                id="dfsa"

              >
                <div className="d-flex align-items-center p-2 justify-content-between">
                  <span> 13b9ebda035r13456... </span>
                  <MdOutlineContentCopy />
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ marginTop: "-0.2rem" }}
                >
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="17.6725"
                      cy="17.549"
                      rx="17.6725"
                      ry="17.549"
                      fill="url(#paint0_radial)"
                    />
                    <g clipPath="url(#clip0)">
                      <path
                        d="M17.8464 5.91772L17.6917 6.43055V21.3116L17.8464 21.4623L24.9309 17.3792L17.8464 5.91772Z"
                        fill="white"
                        fill-opacity="0.42"
                      />
                      <path
                        d="M17.8465 5.91772L10.762 17.3792L17.8465 21.4623V14.2395V5.91772Z"
                        fill="white"
                        fill-opacity="0.82"
                      />
                      <path
                        d="M17.8465 22.7702L17.7593 22.8739V28.1749L17.8465 28.4232L24.9353 18.6892L17.8465 22.7702Z"
                        fill="white"
                        fill-opacity="0.85"
                      />
                      <path
                        d="M17.8465 28.4231V22.7701L10.762 18.6891L17.8465 28.4231Z"
                        fill="white"
                        fill-opacity="0.47"
                      />
                      <path
                        d="M17.8464 21.4622L24.9309 17.3792L17.8464 14.2395V21.4622Z"
                        fill="white"
                        fill-opacity="0.63"
                      />
                      <path
                        d="M10.762 17.3791L17.8464 21.4622V14.2394L10.762 17.3791Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(18.7772) rotate(91.8025) scale(35.1156 35.3624)"
                      >
                        <stop stop-color="#31E7FA" />
                        <stop offset="0.526042" stop-color="#4477FF" />
                        <stop offset="1" stop-color="#DB74FF" />
                      </radialGradient>
                      <clipPath id="clip0">
                        <rect
                          width="14.1733"
                          height="22.5105"
                          fill="white"
                          transform="translate(10.762 5.91772)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h5 className="w-full align-items-center text-sm ms-3 font-bold text-green-500">
                    16.58 ETH
                  </h5>
                </div>
                <div className="d-flex flex-column">
                  {profileArr.map((data) => (<>
                    {data.title === "My Collections" ? (<>
                      <Link
                        className="border-top d-flex text-dark align-item-center text-sm py-2"
                        to={data.link}
                        style={{ textDecoration: "none" }}
                        onClick={<Profile eventKeys={collection} />}
                      >
                        {data.icon}
                        <h6 className="ms-4 pt-1"> {data.title}</h6>
                      </Link>
                    </>) : (<>
                      <Link
                        className="border-top d-flex text-dark align-item-center text-sm py-2"
                        to={data.link}
                      >
                        {data.icon}
                        <h6 className="ms-4 pt-1"> {data.title}</h6>
                      </Link>
                    </>)}
                  </>))}
                </div>
              </div>
              <div className="rounded-circle border-1 border-dark">
                {seclass === false ? (
                  <>
                    {/* <div className="rounded-circle border-1 bg-warning border-dark"> */}
                    <i
                      className="me-2 ri-sun-fill sun-sp"
                      style={{ cursor: "pointer", color: "yellow" }}
                      onClick={() => {
                        changeTheme(seclass);
                      }}
                    ></i>
                  </>
                ) : (
                  <>
                    <i
                      className="ri-moon-fill ps-2 moon-sp"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        changeTheme(seclass);
                      }}
                    ></i>
                  </>
                )}
              </div>
            </div>
          </Navbar>
          <div className="header__bs  wallet_header">
            <Link
              to="/walletconnect"
              className="bg-wite"
              style={{cursor:"pointer"}}
            >
              <RiWallet3Line className="" style={walletStyle} />
              {/* Connect wallet */}
            </Link>
          </div>
          {/* </Navbar.Brand> */}
        </Container>
        {show === true ? (<>

          {/* <div> */}
          <Modal show={show} onHide={handleClose}>
            {/* <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
              <div className="main_seach">
                <div className="form_group has-search">
                  <button className="fa fa-search form_control_feedback"></button>
                  <input
                    type="text"
                    className="form_control"
                    placeholder="Search"
                  />
                </div>
              </div>  </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal></>)
          : null}
        <Offcanvas id="dfsa offcanvas" style={{ width: "70%", height: "100vh" }} className="body offcanvas" show={show1} onHide={handleClose1}>
          <Offcanvas.Header className="ofbody" closeButton>
            <Link to="/">
              <img
                className="dtoc-lgo"
                id="logo_js"
                src={DtoCLogoImg}
                alt="logo"
                style={{
                  width: "3rem", height: "3rem",
                }}
              />
            </Link>
          </Offcanvas.Header>
          <Offcanvas.Body className="offbody">
            <div
              className="avatar_popp avatar_Tggle">
              <div className="d-flex flex-column">
                {SideBarArr.map((data) => (<>
                  {data.title === "MarketPlace" ? 
                    (<div className="border-bottom" style={{padding:"1rem 0rem"}}>
                    <div className="ms-4">
                      <div onClick={() => (setToggleStart(!toggleStart), setToggleStart1(false))}>
                      {data.title}
                        {toggleStart === true ?
                          <RiArrowDropDownLine size={23} className="ms-1" />
                          :
                          <AiOutlineRight size={13} className="ms-2" />}
                      </div>
                      <div className={` ${toggleStart === true ? "" : null} rounded`} style={{ width: "95%" }}>
                        {
                          toggleStart === true ? (<>
                            {data.subArr.map((sub) => (
                              (<>
                                <Link
                                  className="d-flex align-item-center my-2 px-0 linkStyle text-sm"
                                  to={sub.link}
                                  onClick={() => (setToggleStart(!toggleStart), handleClose1())}
                                  // closeButton
                                  // onClick={handleClose1()}
                                >
                                  <span className="ms-4 pt-1 border-bottom border-2">{sub.title}</span>
                                </Link>
                              </>)
                            ))}
                          </>) : null
                        }
                      </div>
                    </div>
                  </div>) 
                    : data.title === "Resource" ? (<div className="border-bottom" style={{ padding: "1rem 0rem" }}>
                      <div className="ms-4">
                        <div onClick={() => (setToggleStart1(!toggleStart1), setToggleStart(false))}>
                          {data.title}
                          {toggleStart1 === true ?
                            <RiArrowDropDownLine size={23} className="ms-1" />
                            :
                            <AiOutlineRight size={13} className="ms-2" />}
                        </div>
                        <div className={` ${toggleStart1 === true ? "" : null} rounded`} style={{ width: "95%" }}>
                          {
                            toggleStart1 === true ? (<>
                              {data.subArr.map((sub) => (
                                (<>
                                  <Link
                                    className="d-flex align-item-center my-2 px-0 linkStyle text-sm"
                                    to={sub.link}
                                    onClick={() => (setToggleStart1(!toggleStart1), handleClose1())}
                                  // closeButton
                                  // onClick={handleClose1()}
                                  >
                                    <span className="ms-4 pt-1 border-bottom border-2">{sub.title}</span>
                                  </Link>
                                </>)
                              ))}
                            </>) : null
                          }
                        </div>
                      </div>
                    </div>) : (<>
                    <Link
                      className="d-flex border-bottom align-item-center linkStyle text-sm py-2"
                      to={data.link}
                        closeButton
                        onClick={handleClose1}
                    >
                      {/* {data.icon} */}
                      <span className="ms-4 pt-1" stylr={{fontWeight :"900"}}> {data.title}</span>
                    </Link>
                    
                  </>)}
                  
                </>))}


                <div className="ms-3 p-2 d-flex align-item-center">
                  <div>
                    <span>Night Mode </span>
                  </div>
                  <div className="pb-3 rounded-circle border-1 border-dark" style={{ marginTop: "-5px" }}>
                    {seclass === false ? (
                      <>
                        {/* <div className="rounded-circle border-1 bg-warning border-dark"> */}
                        <i
                          className="me-2 ri-sun-fill sun-sp"
                          style={{ cursor: "pointer", color: "yellow" }}
                          onClick={() => {
                            changeTheme(seclass);
                          }}
                        ></i>
                      </>
                    ) : (
                      <>
                        <i
                          className="ri-moon-fill ps-2 moon-sp"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            changeTheme(seclass);
                          }}
                        ></i>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div>

              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <div>
          
        </div>
      </Navbar>
      {/* <div id="dfsa"> */}

      {/* </div> */}
    </>
  );
};
export default NavBarNew;
