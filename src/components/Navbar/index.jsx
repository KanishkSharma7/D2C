import React, { useEffect, useState } from "react";
import "@lottiefiles/lottie-player";
import { metamask, DtoCLogoImg } from "../img/index";
import { RiWallet3Line, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import "./navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const NavBar = () => {
  const walletStyle = {
    width: "32px",
    height: "25px",
    color: "white",
    paddingLeft: "5px",
    paddingRight: "5px",
  };
  const menu = [
    { link: "/", label: "Home" },
    { link: "/marketplace", label: "Marketplace" },
    { link: "/collections", label: "Collections" },
    //{ link: "/creators", label: "Creators" },
    { link: "/mint", label: "Mint" },
  ];

  const dropdownUser = [
    { link: "/profile", label: "Profile" },
    { link: "/creatordashboard", label: "Creator Dashboard" },
    { link: "/myassets", label: "My Assets" },
  ];

  const {
    authenticate,
    isWeb3Enable,
    isAuthenticated,
    user,
    enableWeb3,
    Moralis,
  } = useMoralis();

  const walletConnect = () => {
    authenticate().then(function (user) {
      const add = user.get("ethAddress");
      console.log(add);
    });
  };

  useEffect(() => {
    if (!isWeb3Enable && isAuthenticated) {
      enableWeb3({ provider: "walletconnect", chainId: 56 });
      console.log("web3 activated");
    }
  }, [isWeb3Enable, isAuthenticated, enableWeb3]);

  let [seclass, setSeclass] = useState(true);
  const [theme, setTheme] = useState();
  const themeDark = () => {
    setSeclass(true);
  };
  const themeLight = () => {
    setSeclass(false);
  };
  const changeTheme = () => {
    setSeclass(!seclass)
   if(seclass === false){
     localStorage.removeItem('Theme')
   }
   else{
     localStorage.setItem('Theme', true)
   }
  };

  return (
    <>
      <body className={seclass ? "uploadBg" : "is__dark"} id="change-class">
        <div className="overflow-hidden">
          <Navbar className="bg_white" expand="lg">
            <Container>
              <Navbar.Brand>
                <Link to="/">
                  <img
                    className="dtoc-logo"
                    id="logo_js"
                    src={DtoCLogoImg}
                    alt="logo"
                  />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {menu.map((menu) => (
                    <Nav.Link>
                      <Link className="color_black" to={menu.link}>
                        {menu.label}
                      </Link>
                    </Nav.Link>
                  ))}
                  <Dropdown title="Explore" className="bg_white">
                    <Dropdown.Toggle variant="transparant">
                      Explore
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg_white">
                      {dropdownUser.map((item) => (
                        <Dropdown.Item className="bg_white">
                          <Link to={item.link}>{item.label}</Link>
                          <NavDropdown.Divider />
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
                <input type="text" placeholder="Search" />
                <button className="header__result">
                  <RiSearchLine />
                </button>
                <Link
                  to="/walletconnect"
                  className="btn-grad btn-pd  btn-color-white"
                >
                  <RiWallet3Line style={walletStyle} />
                  Connect wallet
                </Link>
                <button
                  className="metamask-wallet-connect"
                  id="connectbtn"
                  onClick={walletConnect}
                >
                  <img width="45" src={metamask} alt="metamask" />
                </button>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Dark Mode"
                    onChange={changeTheme}
                  />
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </body>
    </>
  );
};

export default NavBar;
