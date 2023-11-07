import React from 'react'

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../../config";

import NFTMarketplace from '../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

import { Link, useNavigate } from "react-router-dom";


const MyActivity = () => {
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
      var iitemId = nft.itemId;
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
          No activity found
          <div className="row mb-30_reset"></div>
        </div>
      </div>
    </div>
  )
}
export default MyActivity