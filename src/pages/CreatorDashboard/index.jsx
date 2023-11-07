import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { marketplaceAddress } from "../../config";

import NFTMarketplace from '../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

import { Link } from "react-router-dom";

const CreatorDashboard = (props) => {
  // props.setNav(true)
  // props.set(true);
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    const data = await contract.fetchItemsListed()

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
      }
      return item
    }))

    setNfts(items)
    setLoadingState('loaded') 
  }
  async function detailsView(nft) {
    alert("coming Soon");
  }
  if (loadingState === "loaded" && !nfts.length)
    return (
      <h1 className="container sp-top sp-bottom2x py-10 px-20 text-3xl">
        No assets created
      </h1>
    );
    
  return (
    <div className="sp-top sp-bottom2x">
      <div className="container">
        <div className="p-4">
          <h2 className="text-2xl py-2">Items Created</h2>
          <div className="row mb-30_reset">
            {nfts.map((nft, i) => (
              <>
                <div key={i} className="col-xl-4 col-lg-6 col-md-6 ">
                  <div className="card__item three">
                    <div className="card_body space-y-10">
                      <div className="creators space-x-10">
                        <div className="avatars space-x-3">
                          <Link to="">
                            <img
                              src={nft.imageavatar}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="card_head">
                        <Link to="/itemdetails">
                          <img src={nft.image} alt="item img" />
                        </Link>
                        <Link to={"#"} className="likes space-x-3">
                          <i className="ri-heart-3-fill"></i>
                          <span className="txt_sm">{"#"}</span>
                        </Link>
                      </div>
                      <h6 className="card_title">
                        <Link className="color_black" to="Item-details.html">
                          {nft.name}
                        </Link>
                      </h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <Link to={"#"} className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span className="color_green txt_sm">
                                {nft.price} ETH
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="d-flex align-items-center space-x-10 justify-content-between">
                          <button
                            className="btn btn-sm btn-primary"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            onClick={() => detailsView(nft)}
                          >
                            View
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
        {/*
          Sold NFT List 

          <div className="px-4">
          {Boolean(sold.length) && (
            <div>
              <h2 className="text-2xl py-2">Items sold</h2>
              <div className="row mb-30_reset">
                {sold.map((nft, i) => (
                  <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="card__item three">
                      <div className="card_body space-y-10">
                        <div className="card_head">
                          <img src={nft.image} />
                          <Link to={"#"} className="likes space-x-3">
                            <i className="ri-heart-3-fill"></i>
                            <span className="txt_sm">{"#"}</span>
                          </Link>
                        </div>
                        <div className="card_footer d-block space-y-10">
                          <div className="card_footer justify-content-between">
                            <Link to={"#"} className="">
                              <p className="txt_sm">
                                Price:{" "}
                                <span className="color_green txt_sm">
                                  {nft.price} ETH
                                </span>
                              </p>
                            </Link>
                          </div>
                          <div className="d-flex align-items-center space-x-10 justify-content-between">
                            <button
                              className="btn btn-sm btn-primary"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              onClick={() => detailsView(nft)}
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        */}
        
      </div>
    </div>
  );
};
export default CreatorDashboard;
