import React, { useEffect } from "react";
import { RiHeart3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CollectionProfile from "./collectionProfile";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar6,
  avatar5,
  item1,
  item10,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
} from "../../img";
import "./collections.css";
import PageTitle from "../../components/PageTitle";
import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdMore } from "react-icons/io";
function Collections(props) {
  props.set(true);
  const filter = [
    { id: "switch1", label: "Toggle", span: "Has list price" },
    { id: "switch2", label: "Toggle", span: "Has open offer" },
    { id: "switch3", label: "Toggle", span: "Owned by creator" },
    { id: "switch4", label: "Toggle", span: "Has sold" },
  ];
  const menu_categories = [
    { id: "switch7", label: "Toggle", span: "Has list price" },
    { id: "switch8", label: "Toggle", span: "Has open offer" },
    { id: "switch9", label: "Toggle", span: "Owned by creator" },
    { id: "switch10", label: "Toggle", span: "Has sold" },
  ];
  const dropdown = [
    { link: "#", label: "Action" },
    { link: "#", label: "Another action" },
    { link: "#", label: "Something else here" },
  ];
  const collection = [
    {
      img1: item1,
      img2: item2,
      img3: item3,
      img4: item4,
      icon: avatar1,
      heading: "Creative Art collection",
      p: "2.1k",
      label: "5 items· Created by",
      name: "@william_jamy...",
    },
    {
      img1: item5,
      img2: item6,
      img3: item7,
      img4: item8,
      icon: avatar2,
      heading: "Colorful Abstract collection",
      p: "3.5k",
      label: "7 items · Created by",
      name: "@alexis_fenn...",
    },
    {
      img1: item2,
      img2: item6,
      img3: item3,
      img4: item7,
      icon: avatar3,
      heading: "Creative Art collection",
      p: "2.1k",
      label: "5 items· Created by",
      name: "@william_jamy...",
    },

    {
      img1: item1,
      img2: item2,
      img3: item3,
      img4: item4,
      icon: avatar4,
      heading: "Fantasy Art collection",
      p: "2.1k",
      label: "5 items· Created by",
      name: "@william_jamy...",
    },
    {
      img1: item5,
      img2: item6,
      img3: item7,
      img4: item8,
      icon: avatar5,
      heading: "Pop Art collection",
      p: "3.5k",
      label: "7 items · Created by",
      name: "@alexis_fenn...",
    },
    {
      img1: item2,
      img2: item6,
      img3: item3,
      img4: item7,
      icon: avatar3,
      heading: "Contemporary Art collection",
      p: "7.2k",
      label: "2 items· Created by",
      name: "@william_jamy...",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageTitle title="Artwork Collections" />
      {/* <div className="filters bg_white border-b py-20">
        <div className="container">
          
        </div>
      </div> */}
      <div className="section">
        <div className="Collection_container_card">
          <div classname="section">
            <div className="">
              Create, curate, and manage collections of unique NFTs to share and sell.
              <AiOutlineInfoCircle size={20} className="ms-1" />
            </div>
            <div className="d-flex align-item-center">
              <button className="border-none bg-primary bg-grad my-3 btn-lg" style={{maxHeight:"52px", borderRadius: "5px", color: "white", fontWeight: "500" }}>
                <Link to="/collectionProfile"
                style={{textDecoration:"none", color: "white", fontWeight: "500"}}>
                Create A Collection
              </Link>
              </button>
              <div className="h-100 d-flex align-item-center justify-centent-center m-3">
                <div className="h-100 border pt-1" style={{ minHeight: "52px", borderRadius: "6px", cursor: "pointer" }}>
                  <IoMdMore size={24} className="my-2" />
                </div>
                
              </div>
            </div>
            <div>

            </div>
          </div>
          <div className="row mt-20 sp-bottom justify-content-between align-items-center">
            <div className="col-6">
              <div className="d-flex align-items-center">
                <span className="color_text mt-3 me-3 txt_sm d-none d-sm-block mb-20" style={{ minWidth: "5rem" }}>
                  FILTER BY:
                </span>
                <select
                  name="category"
                  id="category"
                  // onChange={(e) => setFilterCategory(e.target.value)}
                  // style={{backgroundColor:"white"}}
                  className="menu_categories border-1 p-2 w-100 h-50 bg-white border rounded-lg"
                >
                  <option> Filter</option>
                  {menu_categories.map((filter) => (
                    <option className="searchArt space-x-10"
                      // style={{ backgroundColor: "white" }}
                      value={filter.label}>{filter.span}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                {<BrowserView style={{ minWidth: "5rem" }}>
                  <span className="color_text txt_sm"> SORT BY: </span>
                </BrowserView>}
                <div className="dropdown w-100">
                  {/* <button
                          className="btn btn-dark btn-sm dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Recent Active
                        </button> */}
                  <select
                    name="category"
                    id="category"
                    // onChange={(e) => setFilterCategory(e.target.value)}
                    // style={{backgroundColor:"white"}}
                    className="menu_categories p-2 border-1 w-100 bg-white border rounded-lg"
                  >
                    <option> Sort</option>
                    {dropdown.map((filter) => (
                      <option className="searchArt space-x-10"
                        // style={{ backgroundColor: "white" }}
                        value={filter.label}>{filter.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-30_reset">
            {collection.map((list) => (
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="collections space-y-10 mb-30">
                  <Link to="#">
                    <div className="collections_item">
                      <div className="images-box space-y-10">
                        <div className="top_imgs">
                          <img src={list.img1} alt="" />
                          <img src={list.img2} alt="" />
                          <img src={list.img3} alt="" />
                        </div>
                        <img src={list.img4} alt="" />
                      </div>
                    </div>
                  </Link>

                  <div className="collections_footer justify-content-between">
                    <h5 className="collection_title">
                      <Link to="#">{list.heading}</Link>
                    </h5>
                    <Link to="#" className="likes space-x-3">
                      <RiHeart3Fill />
                      <span className="txt_md">{list.p}</span>
                    </Link>
                  </div>
                  <div className="creators space-x-10">
                    <span className="color_text txt_md">{list.label}</span>
                    <div className="avatars space-x-5">
                      <Link to="#">
                        <img
                          src={list.icon}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </Link>
                    </div>
                    <Link to="#">
                      <p className="avatars_name pt-3 txt_sm">{list.name}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;
