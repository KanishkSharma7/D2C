import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../../config";

import NFTMarketplace from '../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

import { Link, useNavigate } from "react-router-dom";

const MyAssets = (props) => {
  // props.set(true);
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    const data = await marketplaceContract.fetchMyNFTs()

    const items = await Promise.all(data.map(async i => {
      const tokenURI = await marketplaceContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenURI)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        tokenURI
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }

  const navigate = useNavigate();

  const detailsView = (nft) => {
    console.log(nft)
    console.log(nft.tokenId)
    var iitemId = nft.tokenId;
    navigate("/itemdetails", { state: { id: iitemId } });
  };

  const listNFT = (nft) => {
    var nftId = nft.tokenId;
    var nftURI = nft.tokenURI;
    navigate("/resell-nft", {state: {id:nftId, tokenURI:nftURI}})
  }
  
  if (loadingState === "loaded" && !nfts.length)
    return (
      <h1 className="sp-top sp-bottom2x py-10 px-20 text-3xl">
        No assets owned
      </h1>
    );

  console.log(nfts);
  return (
    <div className="sp-top sp-bottom2x">
      <div className="container">
        <div className="p-4">
          <h2 className="text-2xl py-2">My NFT</h2>
          {nfts.map((nft, i) => (
            <>
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div className="card__item three">
                  <div className="card_body space-y-10 cur">
                    <div className="card_head">                      
                        <img src={nft.image} alt="item img" />                      
                      <a href={"#"} className="likes space-x-3">
                        <i className="ri-heart-3-fill"></i>
                        <span className="txt_sm">{"#"}</span>
                      </a>
                    </div>
                    <h6 className="card_title">                      
                        {nft.name}
                    </h6>
                    <div className="card_footer d-block space-y-10">
                      <div className="card_footer justify-content-between">                       
                          <p className="txt_sm">
                            Price:{" "}
                            <span className="color_green txt_sm">
                              {nft.price} ETH
                            </span>
                          </p>
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
                        <button
                          className="btn btn-sm btn-primary"
                          data-toggle="modal"
                          data-target="#popup_bid"
                          onClick={() => listNFT(nft)}
                        >
                          List to Markeplace
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="row mb-30_reset"></div>
        </div>
      </div>
    </div>
  );
};
export default MyAssets;
