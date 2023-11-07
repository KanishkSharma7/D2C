import React from "react";
import "./loader.css";
//import { arktologoImg } from "../../img";
import { Puff } from "react-loader-spinner";

const LoaderSpiner = () => {
  return (
    <div className="fp-container">
      <div className="fp-loader">
        <Puff type="Puff" color="#00BFFF" height={200} width={200} />
      </div>
      <p className="fp-loader-txt">
        Your Transcation is going to init please wait for the Transcation
        complete,
        <br /> Please Check your Metamask.
      </p>
    </div>
  );
};
export default LoaderSpiner;
