import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../../config";
import "./resellnft.css";

import NFTMarketplace from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResellNFT(props) {
  props.set(true);
  const [formInput, updateFormInput] = useState({ price: "", image: "" });

  const navigate = useNavigate();
  const location = useLocation();

  const { id, tokenURI } = location.state;
  const { image, price } = formInput;

  useEffect(() => {
    fetchNFT();
  }, [id]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function fetchNFT() {
    if (!tokenURI) return;
    const meta = await axios.get(tokenURI);
    updateFormInput((state) => ({ ...state, image: meta.data.image }));
  }

  async function listNFTForSale() {
    if (!price) return;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const priceFormatted = ethers.utils.parseUnits(formInput.price, "ether");
    let contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();

    listingPrice = listingPrice.toString();
    let transaction = await contract.resellToken(id, priceFormatted, {
      value: listingPrice,
    });
    await transaction.wait();

    navigate("/");
  }

  return (
    <div className="flex justify-center">
      <div className="hero__upload">
        <div className="container">
          <div className="space-y-20">
            <h2 className="title al-center">List Your NFT</h2>
            <p className="sp-bottom al-center">
              Enter price to allow user instantly purchase your NFT
            </p>
          </div>
          <div className="box in__upload mb-120">
            <div className="row">
              <div className="col-lg-6">
                <div className="left__part space-y-40 md:mb-20 upload_file">
                  <div className="space-y-20">
                    {image && (
                      <img className="rounded mt-4" width="400" height="auto" src={image} />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group space-y-10 sp-top">
                  <div className="space-y-20">
                    <div className="space-y-10">
                      <p className="al-center">Enter your Price</p>
                      <input
                        type="text"
                        className="form-select custom-select sp-bottom"
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
                <button
                  onClick={listNFTForSale}
                  className="btn btn-grad btn-list btn-upload"
                >
                  List NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
