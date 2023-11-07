import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./walletconnect.css";
import {
  metamaskLogoImg,
  trustWalletLogoImg,
  walletConnectLogoImg,
} from "../../components/img";
import { BsArrowBarLeft } from "react-icons/bs";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../components/Connectors";
import { useMoralis } from "react-moralis";

const OurWalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState();
  const { activate, deactivate, account } = useWeb3React();
  const {
    authenticate,
    isWeb3Enable,
    isAuthenticated,
    user,
    enableWeb3,
    Moralis,
  } = useMoralis();

  const connectMetamskWallet = async () => {
    // Check if MetaMask is installed on user's browser
   /* if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
     // const chainId = await window.ethereum.request({ method: "eth_chainId" });
      // Check if user is connected to Mainnet
     // if (chainId !== "0x1") {
      //  alert("Please connect to Mainnet");
     // } else {
        let wallet = accounts[0];
        setWalletAddress(wallet);
     // }
    } else {
      alert("Please install Mask");
    }     */
    // Check if MetaMask is installed on user's browser
    if (window.ethereum) {
      activate(injected);
      alert("Getting MetaMask Wallet Address...");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      let wallet = accounts[0];
      setWalletAddress(wallet);
      localStorage.setItem('WalletAddress', wallet)
     // alert(wallet);
    } else alert("install MetaMask");
    
  };

  const connectWalletConnectWallet = async () => {
    //alert("install Wallet Connect");
  };

  const connectTrustWallet = async () => {
   // alert("install Trust Wallet");
  };
  /*useEffect(()=>{
    if(!isWeb3Enable && isAuthenticated){
      enableWeb3({provider: "walletconnect", chainId:56});
      console.log("web3 activated");
    }
  }, [isWeb3Enable, isAuthenticated, enableWeb3]);
  */
  const wallet = [
    {
      wName: "Metamask",
      wImg: metamaskLogoImg,
      desc: "A browser extension with great flexibility. The web's popular wallet",
      wOnClick: connectMetamskWallet,
    },
    {
      wName: "Wallet Connect",
      wImg: walletConnectLogoImg,
      desc: "Comming Soon",
      descMain: "Log in with Google,  Facebook, or other OAuth provider",
      wOnClick: connectWalletConnectWallet,
    },
    {
      wName: "Trust Wallet",
      wImg: "trustWalletLogoImg",
      desc: "Comming Soon",
      descMain: "Mobile Only",
      wOnClick: connectTrustWallet,
    },
  ];

  return (
    <>
      <div className="effectbg sp-bottom3x">
        <div className="container">
          <Link to="/" className=" mt-20 btn-custom">
            <BsArrowBarLeft size={18} />
            Back to home
          </Link>
          <div className="hero__wallets pt-100 pb-50">
            <div className="space-y-20 d-flex flex-column align-items-center">
              <div className="logo">
                <img src="assets/img/icons/logo.svg" alt="" />
              </div>
              <h2 className="text-center">
                Connect your wallet <br />
              </h2>
              <p className="text-center">
                Connect with one of available wallet providers or create a new
                wallet.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="wallets">
                <div className="row mb-20_reset">
                  {wallet.map((wallet) => (
                    <div className="col-lg-4">
                      <button
                        className="box box-width in__wallet space-y-10"
                        data-toggle="modal"
                        data-target="#popup_error"
                        onClick={wallet.wOnClick}
                      >
                        <div className="logo">
                          <img src={wallet.wImg} alt="logo_community" />
                        </div>
                        <h5 className="text-center">{wallet.wName}</h5>
                        <p className="text-center">{wallet.desc}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurWalletConnect;
