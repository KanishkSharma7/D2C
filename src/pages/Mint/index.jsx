import React from "react";
import MintTabs from "../../components/MintTabs";
import "./mint.css";

const Mint = (props) => {
  props.set(true);

  return (
    <div className="bgs">
     <MintTabs/>
    </div>
  );
};
export default Mint;
