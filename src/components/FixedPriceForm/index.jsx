import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import { useNavigate } from "react-router-dom";
import { marketplaceAddress } from "../../config";

import {client} from "../../ipfsConfig"

import NFTMarketplace from '../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

import useFullPageLoader from "../../hooks/useFullPageLoader";

import "./Fixed.css";
import { Link } from "react-router-dom";
const FixedPriceForm = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    category: "",
    description: "",
  });
  const router = useNavigate();
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(
        file, 
        {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://dtoc.infura-ipfs.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  async function uploadToIPFS() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl
    })
    try {
      const added = await client.add(data)
      const url = `https://dtoc.infura-ipfs.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      return url
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function listNFTForSale() {
    const url = await uploadToIPFS()
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    /* next, create the item */
    const price = ethers.utils.parseUnits(formInput.price, 'ether')
    let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()
    let transaction = await contract.createToken(url, price,
       { value: listingPrice })
    await transaction.wait()
   
    router('/')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <testTabs/>
      <div className="hero__upload">
        <div className="Mint_container_card">
          <div className="space- bg-white px-3 pt-3" style={{borderRadius:"1rem"}}>
            <h2 className="title al-center tehite">Create Your NFT</h2>
            <p className="sp-bottom al-center text-ite">
              Enter price to allow user instantly purchase your NFT
            </p>
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
                    <p className="color_text">PNG, GIF, WEBP.</p>
                  </div>
                  <div className="space-y-20">
                    <p className="color_text">or choose a file</p>
                    {fileUrl && (
                      <img className="rounded mt-4" width="350" src={fileUrl} />
                    )}
                    <Link to="" className="btn btn-grad btn-grad">
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
                    <div className="space-y-10">
                      <span className="nameInput">Category</span>
                      <select
                        name="category"
                        id="category"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            category: e.target.value,
                          })
                        }
                      >
                        <option value="">select a category</option>
                        <option value="Art">Art</option>
                        <option value="Graphics">Graphics</option>
                        <option value="Video">Video</option>
                        <option value="others">others</option>
                      </select>
                    </div>
                    <div className="space-y-10">
                      <span className="variationInput">Price</span>
                      <input
                        type="text"
                        className="form-select custom-select"
                        aria-label="Default select example"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            price: e.target.value,
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
                  onClick={listNFTForSale}
                  className="btn btn-primary btn-grad btn-md btn-upload"
                >
                  Create NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loader}
    </>
  );
};
export default FixedPriceForm;
