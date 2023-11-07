import React from "react";
import {
  badge,
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
} from "../../img";
import { RiHeart3Fill, RiHistoryLine } from "react-icons/ri";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../../config";

import NFTMarketplace from '../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ItemDetails from "../../pages/ItemDetails";
import { ThingsProvider } from "../../hooks/Context";
import "./maket.css";
import { Button, Offcanvas } from "react-bootstrap";

import { BsFilter } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { BrowserView, MobileView } from "react-device-detect";
let rpcEndpoint = null;
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL;
}
const Card = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterNft, setFilterNft] = useState([]);

  useEffect(() => {
    loadNFTs();
  }, []);
  const chk = () => {
    console.log()
  }
  /*
    useEffect(() => {
      getNfts(filterCategory);
    }, [filterCategory]);
  
    const getNfts = async (category) => {
      const provider = new ethers.providers.JsonRpcProvider();
      await provider.ready;
      const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
      const marketContract = new ethers.Contract(
        nftmarketaddress,
        Market.abi,
        provider
      );
      let data;
       data = await marketContract.fetchMarketItems();
        let items = await Promise.all(
          data.map(async (i) => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId);
            const meta = await axios.get(tokenUri);
            let price = ethers.utils.formatUnits(i.price.toString(), "ether");
            let item = {
              price,
              itemId: i.itemId.toNumber(),
              seller: i.seller,
              owner: i.owner,
              image: meta.data.image,
              name: meta.data.name,
              description: meta.data.description,
              category: meta.data.category,
            };
            return item;
          })
        );
        setFilterNft(items);
      if (category != "All") {
        const jk = filterNft.filter((i) => filterCategory === i.category);
        setNfts(jk);
        setLoadingState("loaded");
      }else {
        setNfts(items);
        setLoadingState("loaded");
      }
    };
  */

    async function loadNFTs() {
      /* create a generic provider and query for unsold market items */
      const provider = new ethers.providers.JsonRpcProvider()
      const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
      const data = await contract.fetchMarketItems()
  
      /*
      *  map over items returned from smart contract and format 
      *  them as well as fetch their token metadata
      */
      const items = await Promise.all(data.map(async i => {
        const tokenUri = await contract.tokenURI(i.tokenId)
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        }
        return item
      }))
      setNfts(items)
      setLoadingState('loaded') 
    }
    
  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }

  const route = useNavigate();

  const detailsView = (nft) => {
    console.log(nft)
    var iitemId = nft.tokenId;
    console.log(iitemId)
    route("/itemdetails", { state: { id: iitemId } });
  };
  const listOne1 = [
    // { link: "#", label: "All", icon: "" },
    { link: "#", label: "Games", icon: "ri-gamepad-line" },
    { link: "#", label: "Art", icon: "ri-brush-line" },
    { link: "#", label: "Trading Cards", icon: "ri-stock-line" },
    { link: "#", label: "Music", icon: "ri-music-line" },
    { link: "#", label: "Domain Names", icon: "ri-global-line" },
    { link: "#", label: "Memes", icon: "ri-emotion-laugh-line" },
    { link: "#", label: "Collectibles", icon: "ri-layout-4-line" },
  ];
  const listOne = [
    { link: "#", label: "All", icon: "" },
    { link: "#", label: "Games", icon: "ri-gamepad-line" },
    { link: "#", label: "Art", icon: "ri-brush-line" },
    { link: "#", label: "Trading Cards", icon: "ri-stock-line" },
    { link: "#", label: "Music", icon: "ri-music-line" },
    { link: "#", label: "Domain Names", icon: "ri-global-line" },
    { link: "#", label: "Memes", icon: "ri-emotion-laugh-line" },
    { link: "#", label: "Collectibles", icon: "ri-layout-4-line" },
  ];
  const Filter = [
    { id: 1, label: "All" },
    { id: 2, label: "Art" },
    { id: 3, label: "Graphics" },
    { id: 4, label: "Video" },
    { id: 5, label: "others" },
  ];
  const dropdown = [
    { link: "#", label: "Action" },
    { link: "#", label: "Another action" },
    { link: "#", label: "Something else here" },
  ];

  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="m-5 mt-20 px-20 py-10 text-3xl"> No items in marketplace </h1>;
  return (
    <>
 <div className="filterCheck fffwq border-b searchArt">
        <div className="container">
          <div className="d-flex justify-content-center">
            {/* <div className="d-flex align-items-center w-100" id="filter">
              <select
                name="category"
                id="category"
                onChange={(e) => setFilterCategory(e.target.value)}
                className=""
              >
                {listOne.map((filter) => (
                  <option value={filter.label}>{filter.label}</option>
                ))}
              </select>
            </div> */}

            <div style={{ marginLeft:"15%"}} className="align-items-center w-100" >
              <ul className="menu_categories  space-x-20">
                <li>
                  <Link to="#" className="color_brand">
                    <span> All </span>
                  </Link>
                </li>
                {listOne1.map((list) => (
                  <li>
                    <Link to={list.link}>
                      <i className={list.icon}></i> <span> {list.label} </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Marketplace_container_card">

        <div onClick={handleShow} className="px-3 me-2 fs-4 align-item-center justify-content-end filterCheckBtn" id="filterCheckBtn" style={{ right: "0" }}>
          <div className="me-3">
            <BsFilter size={25} />
          </div>
          <span>
            Filter
          </span>
        </div>
        <Offcanvas style={{ height: "100%" }} show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fs-3" style={{ marginLeft: "45%" }}>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <div>
              {listOne.map((list) => (
                <div onClick={handleClose} className="mx-5">
                  <Link to={list.link} className="fs-4 textDeco-none my-3 d-flex align-item-center justify-content-bwtween" style={{ textDecoration: "none" }}>
                    <i className={list.icon} style={{ marginTop: "3px", marginRight: "10px" }}></i>
                    <span > {list.label} </span>
                  </Link>
                </div>
              ))}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="section mt-10">
          <div className="section__head">
            <h2 className="section__title mb-20">Artworks</h2>
            {
              <BrowserView>

                {/* <div className="row justify-content-between align-items-center">
                 
                  <div className="col-lg-auto">
                    <div className="d-flex align-items-center w-100" >
                      <span className="color_text w-100 txt_sm d-none d-sm-block">
                        Categories:
                      </span>
                      <select
                        name="category"
                        id="category"
                        onChange={(e) => setFilterCategory(e.target.value)}
                        // style={{backgroundColor:"white"}}
                        className="serachArt border-1 w-100 bg-white border rounded-pill"
                      >
                        {Filter.map((filter) => (
                          <option className="searchArt"
                            // style={{ backgroundColor: "white" }}
                            value={filter.label}>{filter.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="d-flex space-x-10 align-items-center sm:mt-20 mb-20">
                      <span className="color_text txt_sm"> SORT BY: </span>
                      <div className="dropdown">
                        <button
                          className="btn btn-dark btn-sm dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Recent Active
                        </button>
                        <div className="dropdown-menu searchArt">
                          {dropdown.map((drop) => (
                            <Link className="dropdown-item" to={drop.link}>
                              {drop.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row justify-content-between align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <span className="color_text mt-3 me-3 txt_sm d-none d-sm-block mb-20" style={{minWidth:"5rem"}}>
                        FILTER BY:
                      </span>
                      <select
                        name="category"
                        id="category"
                        className="menu_categories p-2 border-1 w-100 bg-white border rounded-lg"
                      >
                        <option> Filter</option>
                        {Filter.map((filter) => (
                          <option className="searchArt space-x-10"
                            // style={{ backgroundColor: "white" }}
                            value={filter.label}>{filter.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      {<BrowserView style={{ minWidth: "5rem" }}>
                        <span className="color_text txt_sm "> SORT BY: </span>
                      </BrowserView>}
                      <div className="dropdown w-100">
                        
                        <select
                          name="category"
                          id="category"
                          // onChange={(e) => setFilterCategory(e.target.value)}
                          // style={{backgroundColor:"white"}}
                          className="menu_categories p-2 border-1 w-100 bg-white border rounded-lg"
                        >
                          <option> Sort</option>
                          {dropdown.map((filter) => (
                            <option className="searchArt space-x-10"
                              // style={{ backgroundColor: "white" }}
                              value={filter.label}>{filter.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </BrowserView>
            }

            {<MobileView>
              <div className="row justify-content-between align-items-center">

                <div className="col-6 filterDrop">

                  <select
                    name="category"
                    id="category"
                    onChange={(e) => setFilterCategory(e.target.value)}
                    // style={{backgroundColor:"white"}}
                    className="serachArt border-1 p-2 w-100 bg-white border rounded-lg"
                  >
                    <option className="d-flex border-2 border align-item-center justify-content-center">
                      {/* <div>
                      </div> */}
                      {/* <span className="fs-5 ms-2">
                        Filter
                      </span> */}

                      Filter
                    </option>
                    {Filter.map((filter) => (
                      <option className="searchArt"
                        // style={{ backgroundColor: "white" }}
                        value={filter.label}>{filter.label}</option>
                    ))}
                  </select>
                  {/* <div onClick={handleShow1} className="d-flex align-item-center justify-content-center" >
                    <div>
                      <BsFilter size={25} />
                    </div>
                    <span className="fs-5 ms-2">
                      Filter
                    </span>
                  </div> */}
                </div>

                {/* <Offcanvas style={{ height: "100%" }} show={show1} placement={'bottom'} onHide={handleClose1}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="fs-3" style={{ marginLeft: "35%" }}>Filter12</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                  <div>
                    {Filter.map((list) => (
                      <div onClick={handleClose1} className="mx-5 w-100">
                        <Link to="" className="fs-4 w-100 textDeco-none my-3 d-flex align-item-center justify-content-between" style={{ textDecoration: "none" }}>
                          <span style={{ marginLeft: "25%" }} > {list.label} </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Offcanvas.Body>
              </Offcanvas> */}
                <div className="col-6 sortDrop">
                  <select
                    name="category"
                    id="category"
                    onChange={(e) => setFilterCategory(e.target.value)}
                    // style={{backgroundColor:"white"}}
                    className="serachArt border-1 p-2 w-100 bg-white border rounded-lg"
                  >
                    <option className="d-flex align-item-center justify-content-center">
                      {/* <div>
                      </div> */}
                      {/* <span className="fs-5 ms-2">
                        Filter
                      </span> */}

                      Sort
                    </option>
                    {dropdown.map((list) => (
                      <option className="searchArt"
                        // style={{ backgroundColor: "white" }}
                        value={list.label}>
                        {list.label}
                      </option>
                    ))}
                  </select>

                  {/* <div onClick={handleShow2} className="d-flex align-item-center justify-content-center" >
                    <div>
                      <BiSortAlt2 size={23} />
                    </div>
                    <span className="fs-5 ms-2">
                      Sort
                    </span>
                  </div> */}
                </div>
                {/* <Offcanvas style={{ height: "100%" }} show={show2} placement={'bottom'} onHide={handleClose2} {...props}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="fs-3" style={{ marginLeft: "45%" }}>Filter12</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                  <div>
                    {dropdown.map((list) => (
                      <div onClick={handleClose2} className="mx-5">
                        <Link to={list.link} className="fs-4 textDeco-none my-3 d-flex align-item-center justify-content-bwtween" style={{ textDecoration: "none" }}>
                          <span > {list.label} </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Offcanvas.Body>
              </Offcanvas>    */}
              </div>
            </MobileView>}
          </div>
          <div className="row mb-30_reset">
            {nfts.map((nft, i) => (
              <>
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="card__item four">
                    <div
                      className="card_body space-y-10 cur"
                    >
                      <div className="creators space-x-10">
                        <div className="avatars space-x-3">
                          <Link to="#">
                            <img
                              src={nft.imageavatar}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="#">
                            <p className="avatars_name txt_xs">
                              {card.img1Label}
                            </p>
                          </Link>
                        </div>
                        <div className="avatars space-x-3">
                          <Link to="#">
                            <img
                              src={card.img2}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="#">
                            <p className="avatars_name txt_xs">
                              {card.img2Label}
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="card_head">
                        <img src={nft.image} alt="item img" />
                        <Link to={"#"} className="likes space-x-3">
                          <i className="ri-heart-3-fill"></i>
                          <span className="txt_sm">{card.span}</span>
                        </Link>
                      </div>
                      <h6 className="card_title">{nft.name}</h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm">{card.footerText}</p>
                          </div>
                          <Link to={"#"} className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span className="color_green txt_sm">
                                {nft.price} ETH
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className={card.newLine}></div>
                        <div className="d-flex align-items-center space-x-10 justify-content-between">
                          <div className="d-flex align-items-center space-x-5">
                            <i className={card.icon2}></i>
                            <Link
                              to={"#"}
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm view_history"
                                style={{ width: "auto" }}
                              >
                                {card.footerPara}
                              </p>
                            </Link>
                          </div>
                          <button
                            className="btn btn-sm btn-primary btn-grad"
                            onClick={() => detailsView(nft)}
                          >
                            View
                          </button>
                          <button
                            className="btn btn-sm btn-primary btn-grad"
                            onClick={() => buyNft(nft)}
                          >
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
