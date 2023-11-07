import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { metamask, DtoCLogoImg } from "../../img";
import { RiWallet3Line, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../Connectors";

const WalletBtn = () => {
  const {
    authenticate,
    isWeb3Enable,
    isAuthenticated,
    user,
    enableWeb3,
    Moralis,
  } = useMoralis();

  let add;
  const { activate, deactivate, account } = useWeb3React();
  const [walletAddress, setWalletAddress] = useState();

  const walletConnect = () => {
    authenticate().then(function (user) {
      add = user.get("ethAddress");
      console.log(add);
      localStorage.setItem("WalletAddress", add);
    });
  };
  const connectMetamskWallet = async () => {
    // Check if MetaMask is installed on user's browser
    if (window.ethereum) {
      alert("Getting MetaMask Wallet Address...");
      activate(injected);
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      let wallet = accounts[0];
      setWalletAddress(wallet);
      localStorage.setItem("WalletAddress", wallet);
      // alert(wallet);
    } else alert("install MetaMask");
  };
  const walletStyle = {
    width: "32px",
    height: "25px",
    color: "white",
    paddingLeft: "5px",
    paddingRight: "5px",
  };
  /*
  useEffect(() => {
    if (!isWeb3Enable && isAuthenticated) {
      enableWeb3({ provider: "walletconnect", chainId: 56 });
      console.log("web3 activated");
    }
  }, [isWeb3Enable, isAuthenticated, enableWeb3]);
*/
  return (
    <>
      <div class="header__btns">
        <Link
          to="/walletconnect"
          className="btn-grad btn-sm btn
          btn-color-white"
        >
          <RiWallet3Line style={walletStyle} />
          Connect wallet
        </Link>
      </div>
      {/*    <button
          className="metamask-wallet-connect"
          id="connectbtn"
          onClick={connectMetamskWallet}
        >
          <img width="45" src={metamask} alt="metamask" />
        </button>*/}
    </>
  );
};
export default WalletBtn;
