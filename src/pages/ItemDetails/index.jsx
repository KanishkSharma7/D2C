import React, { useEffect, useState } from "react";
import {
  item2,
  avatar3,
  badge,
  avatar2,
  avatar1,
  ipfs,
  ether,
} from "../../img";
import Web3Modal from "web3modal";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import "./itemdetails.css";
import { useLocation } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";

import { marketplaceAddress } from "../../config";

import NFTMarketplace from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

const ItemDetails = (props) => {
  props.set(true);

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const [nfts, setNfts] = useState([]);
  const [myNfts, setMyNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  var [buyBtn, setBuyBtn] = useState(false);

  useEffect(() => {
    loadNFTs();
    loadmyNFTs();
  }, []);

  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    // const provider = new ethers.providers.JsonRpcProvider(
    //   "https://kovan.infura.io/v3/"
    // );
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      provider
    );
    const data = await contract.fetchMarketItems();

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    setNfts(items);
    console.log(nfts);
    setLoadingState("loaded");
  }

  async function loadmyNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await marketplaceContract.fetchMyNFTs();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenURI = await marketplaceContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenURI);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          tokenURI,
        };
        return item;
      })
    );
    setMyNfts(items);
    setLoadingState("loaded");
  }

  var nftData = nfts.filter((data) => data.tokenId === location.state.id);

  if (nftData.length === 0) {
    nftData = myNfts.filter((data) => data.tokenId === location.state.id);
    //setBuyBtn(true)
  }

  const dropone = [
    { link: "#", icon: "ri-facebook-line" },
    { link: "#", icon: "ri-messenger-line" },
    { link: "#", icon: "ri-whatsapp-line" },
    { link: "#", icon: "ri-youtube-line" },
  ];
  const droptwo = [{ link: "#", spdptw: "Report", icon: "ri-flag-line" }];
  const dropthree = [
    {
      bn: "View proof of authenticity",
      link1: "https://ipfs.io/",
      img1: ipfs,
      span1: "View on IPFS",
      icon1: "ri-external-link-line color_brand",
      link2: "https://etherscan.io/",
      img2: ether,
      span2: "View on Etherscan",
    },
  ];
  const dropdown = [
    { link: "#", label: "Action" },
    { link: "#", label: "Another action" },
    { link: "#", label: "Something else here" },
  ];
  const tab = [
    { cls: "nav-item", lab: "Details", link: "#tabs-1" },
    { cls: "nav-item", lab: "Bids", link: "#tabs-2" },
    { cls: "nav-item", lab: "History", link: "#tabs-3" },
  ];
  const creatorcard = [
    {
      image1: badge,
      image2: avatar1,
      p31: "Bid accepted",
      et: "1 ETH",
      a: "ayoub",
      date: "28/06/2021, 12:08",
    },
    {
      image1: badge,
      image2: avatar2,
      p31: "Bid accepted",
      et: "3 ETH",
      a: "monir",
      date: "22/05/2021, 12:08",
    },
  ];

  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        marketplaceAddress,
        NFTMarketplace.abi,
        signer
      );

      /* user will be prompted to pay the asking proces to complete the transaction */
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });
      await transaction.wait();
      navigate("/profile");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <div className="sp-bottom2x">
        <div className="container">
          <Link to="/marketplace" className="btn btn-white btn-sm my-40">
            Back to Marketplace
          </Link>
          {nftData.map((nft) => (
            <div className="item_details">
              <div className="row sm:space-y-20">
                <div className="col-lg-6">
                  <img className="item_img" src={nft.image} alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="space-y-20">
                    <h3>{nft.name}</h3>
                    <div className="d-flex justify-content-between">
                      <div className="space-x-10 d-flex align-items-center">
                        <p>1 of 1</p>
                        <Link to="#" className="likes space-x-3">
                          <i className="ri-heart-3-fill"></i>
                          <span className="txt_sm">2.1k</span>
                        </Link>
                      </div>
                      <div className="space-x-10 d-flex align-items-center">
                        <div className="share">
                          <div className="icon">
                            <Link to="#">
                              {" "}
                              <i className="ri-share-line"></i>
                            </Link>
                          </div>
                          {dropone.map((show) => (
                            <div className="dropdown__popup">
                              <ul className="space-y-10">
                                <li>
                                  <Link to={show.link}>
                                    {" "}
                                    <i className={show.icon}></i>{" "}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="more">
                          <div className="icon">
                            <Link to="#">
                              {" "}
                              <i className="ri-more-fill"></i>{" "}
                            </Link>
                          </div>
                          {droptwo.map((r) => (
                            <div className="dropdown__popup">
                              <ul className="space-y-10">
                                <li>
                                  <Link
                                    to={r.link}
                                    className="space-x-10 d-flex"
                                    data-toggle="modal"
                                    data-target="#popup_report"
                                  >
                                    <i className={r.icon}></i>
                                    <span>{r.spdptw}</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {dropthree.map((p) => (
                      <div className="dropdown">
                        <button
                          className="btn btn-white btn-sm dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {p.bn}
                        </button>
                        <div className="dropdown-menu">
                          <Link
                            className="dropdown-item"
                            to={p.link1}
                            target="_blank"
                          >
                            <span>
                              <img src={p.img1} width="20" alt="" />
                              {p.span1}
                            </span>
                            <i className={p.icon1}></i>
                          </Link>
                          <Link
                            className="dropdown-item"
                            to={p.link2}
                            target="_blank"
                          >
                            <span>
                              <img src={p.img2} width="20" alt="" />
                              {p.span2}
                            </span>
                            <i className={p.icon1}></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                    <div className="box">
                      <div className="space-y-20">
                        <div className="d-flex justify-content-between mb-30_reset">
                          <div className="dropdown d-none d-sm-block">
                            <button
                              className="btn btn-white btn-sm
                                        dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Recent Active
                            </button>
                            <div className="dropdown-menu mr-bottom">
                              {dropdown.map((drop) => (
                                <Link className="dropdown-item" to={drop.link}>
                                  {drop.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="hr"></div>
                        <Tabs
                          defaultActiveKey="Details"
                          id="uncontrolled-tab-example"
                          className="mb-3 d-flex justify-content-start gap-4 mb-30_reset"
                        >
                          <Tab
                            eventKey="Details"
                            title="Details"
                            className="tab-pane"
                          >
                            <p>{nft.description}</p>
                          </Tab>
                          <Tab eventKey="Bids" title="Bids">
                            <p>
                              No active bids yet. Be the first to make a bid!
                            </p>
                          </Tab>
                          <Tab
                            eventKey="History"
                            title="History"
                            className="space-y-20"
                          >
                            {creatorcard.map((c) => (
                              <div className="creator_item creator_card space-x-10">
                                <div className="avatars space-x-10">
                                  <div className="media">
                                    <div className="badge">
                                      <img src={c.image1} alt="" />
                                    </div>
                                    <Link to="Profile.html">
                                      <img
                                        src={c.image2}
                                        alt="Avatar"
                                        className="avatar avatar-md"
                                      />
                                    </Link>
                                  </div>
                                  <div>
                                    <p className="color_black">
                                      {c.p31}123
                                      <span className="color_brand">
                                        {c.et}
                                      </span>
                                      by{" "}
                                      <Link
                                        className="color_black txt_bold"
                                        to="Profile.html"
                                      >
                                        {c.a}
                                      </Link>
                                    </p>
                                    <span className="date color_text">
                                      {c.date}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                    <div className="numbers">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="space-y-5">
                            <p className="color_text">Price</p>
                            <h4>
                              {nft.price}
                              <span className="txt_sm color_text">ETH</span>
                            </h4>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="space-y-5">
                            <button
                              className={
                                buyBtn
                                  ? "disnone"
                                  : "btn btn-primary btn-lg sp-top"
                              }
                              onClick={() => buyNft(nft)}
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hr2"></div>
                    <div className="creators">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="avatars space-x-5">
                            <div className="media">
                              <Link to="#">
                                <img
                                  src={avatar3}
                                  alt="Avatar"
                                  className="avatar avatar-sm"
                                />
                              </Link>
                            </div>
                            <div>
                              <Link to="#">
                                <p className="avatars_name color_black">
                                  Owner:
                                  {nft.owner}
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemDetails;
