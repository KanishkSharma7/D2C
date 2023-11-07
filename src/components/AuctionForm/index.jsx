import React from 'react'
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import { useNavigate } from "react-router";
import { marketplaceAddress } from "../../config";
import NFTMarketplace from '../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import useFullPageLoader from "../../hooks/useFullPageLoader"
import "./Auction.css";
import { Link } from 'react-router-dom';
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const AuctionForm = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    name: "",
    description: "",
  });
  const navigate = useNavigate();
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <div className="hero__upload">
        <div className="Mint_container_card">
      <div className="space-">
            <h2 className="title al-center  text-white">Create Your NFT</h2>
            <p className="sp-bottom al-center  text-white">Allow other users to make bids on your NFT</p>
      </div>
      <div className="box in__upload mb-120">
        <div className="row">
          <div className="col-lg-6">
            <div className="left__part space-y-40 md:mb-20 upload_file">
              <div className="space-y-20">
                <img
                  className="icon"
                  src="assets/img/icons/upload.svg"
                  alt=""
                />
                <h5>Drag and drop your file</h5>
                <p className="color_text">
                  PNG, GIF, WEBP.
                </p>
              </div>
              <div className="space-y-20">
                <p className="color_text">or choose a file</p>
                {fileUrl && (
                  <img className="rounded mt-4" width="350" src={fileUrl} />
                )}
                <Link to="#" className="btn btn-primary btn-grad ">
                  {" "}
                  Browse files{" "}
                    </Link>
                <input type="file" onChange={onChange} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group space-y-10">
              <div className="space-y-20">
                <div className="space-y-10">
                  <span className="nameInput">Title</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e. g. `D2C design art`"
                    onChange={(e) =>
                      updateFormInput({
                        ...formInput,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-10">
                  <span className="nameInput">
                    Description{" "}
                    <span className="color_text">(optional) </span>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e. g. `D2C design art`"
                    onChange={(e) =>
                      updateFormInput({
                        ...formInput,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <p className="color_black">
              <span className="color_text text-bold"> Service fee : </span>
              2.5%
            </p>
            <button
              onClick={"createMarket"}
                  className="btn btn-primary btn-grad btn-md btn-upload"
            >
              Create Auction
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
export default AuctionForm