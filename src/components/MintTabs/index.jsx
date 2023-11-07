import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AuctionForm from "../AuctionForm";
import FixedPriceForm from "../FixedPriceForm";
import TimedAuctionForm from "../TimedAuctionForm";
import './minttabs.css';

const tab2 = [
  { eventKey: "Fixed", title: "Fixed", component: <FixedPriceForm /> },
  { eventKey: "Open", title: "Open", component: <AuctionForm /> },
  {
    eventKey: "Auction",
    title: "Auction",
    component:
      <TimedAuctionForm />
  }];
const MintTabs = () => {
  return (
    <>
      <div className="Mint_container_card p-0 m-0">
        <div className="m-0 p-0">
          <Tabs
            defaultActiveKey="Fixed"
            id="uncontrolled-tab-example"
            className="justify-content-center tabs-div"
          >
            {tab2.map((tabs) => (
            <Tab eventKey={tabs.eventKey} title={tabs.title}
              className="tab-btn m-2">
              {tabs.component}
            </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default MintTabs;
