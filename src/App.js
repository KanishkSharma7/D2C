import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Creators from "./pages/Creators";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import Mint from "./pages/Mint";
import ItemDetails from "./pages/ItemDetails";
import CollectionsDetails from "./pages/CollectionsDetails";
import WalletConnect from "./pages/WalletConnect";
import { ethers } from "ethers";
import { MoralisProvider } from "react-moralis";
import CreatorDashboard from "./pages/CreatorDashboard";
import MyAssets from "./pages/MyAssets";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Ranking from "./pages/Ranking";
import CreateProfile from "./pages/CreateProfile";
import ResellNFT from "./pages/ResellNFT";
import NavBarNew from "./components/NavBarNew";
import { Blog } from "./pages/Blog";
import SubmitRequest from "./pages/sumbitRequest/submit_request";
import Artical from "./pages/Blog/Artical";
import { Contact } from "./pages/Contact/Contact";
import EditProfile from "./pages/Extra/EditProfile";
import LiveAuctions from "./pages/LiveAuction/LiveAuctions";
import Setting from "./pages/Settings";
import Watchlist from "./pages/WatchList";
import CollectionProfile from "./pages/Collections/collectionProfile";
import LaunchPad from "./pages/LaunchPad";
import LaunchNavBarNew from "./components/SubNavbar/launchNavbarNew";
import Explore from "./pages/Explore";
import Error404 from "./pages/Er404/index.jsx";
const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};
const morailsAppId = "NnEZqurZjdJIudrMcchSIc20hrhzhu3CiL4jmDr8";
const moralisServerURL = "https://py585x5efxon.usemoralis.com:2053/server";

function App() {
  const [nav, setNav] = useState(true);
  const [nav1, setNav1] = useState(false);
  let [theme, setTheme] = useState();
  const mode = (thememode) => {
    setTheme(thememode);
    console.log(thememode);
  };
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      <body className={theme ? "is__dark" : "uploadBg"} id="change-class">
        {/* <MoralisProvider appId={morailsAppId} serverUrl={moralisServerURL}> */}
        <Router>
          
          {nav1 === false && (nav ? (
            <>
              <NavBarNew mode={mode} />
            </>
          )
          : (
            <>
              <LaunchNavBarNew mode={mode} />
            </>
          ))
          }
          <Routes>
            <Route path="*" element={<Error404 set1={setNav1} />} />
            <Route path="/" element={<Home set={setNav} set1={setNav1} />} />
            <Route path="/marketplace" element={<Marketplace set={setNav}  />} />
            <Route path="/collections" element={<Collections set={setNav} />} />
            <Route path="/profile" element={<Profile set={setNav} />} />
            <Route path="/creators" element={<Creators set={setNav} />} />
            <Route path="/mint" element={<Mint set={setNav} />} />
            <Route path="/itemdetails" element={<ItemDetails set={setNav} />} />
            <Route path="/resell-nft" element={<ResellNFT set={setNav} />} />
            <Route path="/ranking" element={<Ranking set={setNav} />} />
            <Route path="/createprofile" element={<CreateProfile set={setNav}  />} />
            <Route
              path="/collectionsdetails"
              element={<CollectionsDetails set={setNav} />}
              />
            <Route path="/explore" element={<Explore set={setNav} />} />
            <Route path="/walletconnect" element={<WalletConnect set={setNav} />} />
            <Route path="/creatordashboard" element={<CreatorDashboard set={setNav} />} />
            <Route path="/myassets" element={<MyAssets set={setNav} />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy set={setNav} />} />
            <Route path="/blog" element={<Blog set={setNav} />} />
            <Route path="/submit_request" element={<SubmitRequest set={setNav} />} />
            <Route path="/artical" element={<Artical set={setNav} />} />
            <Route path="/contactus" element={<Contact set={setNav} />} />
            <Route path="/editprofile" element={<EditProfile set={setNav} />} />
            <Route path="/liveAuction" element={<LiveAuctions set={setNav} />} />
            <Route path="/settings" element={<Setting set={setNav} />}  />
            <Route path="/watchlist" element={<Watchlist set={setNav} />} />
            <Route path="/collectionProfile" element={<CollectionProfile set={setNav} />} />
            <Route path="/launchpad" element={<LaunchPad set={setNav} />} />
          </Routes>
          {nav1 === false &&
          <Footer />
          }
        </Router>
        {/* <Router>
            <Routes>
              {
                nav === false ? (<NavBarNew mode={mode} />) : (<LaunchNavBarNew mode={mode} />)
              }
            <Route path="/launchpad" element={<LaunchPad setNav={nav} />} />
            </Routes>
          </Router> */}
        {/* </MoralisProvider> */}
      </body>
    </>
  );
}

export default App;
