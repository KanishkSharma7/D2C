import React, { useEffect } from "react";
import Cards from "../../components/Cards";
import {
  item9,
  item14,
  item13,
  item15,
  item16,
  avatar3,
  item10,
  item11,
  item12,
  avatar2,
  item17,
  item18,
  item19,
  item20,
  avatar1,
} from "../../img";
import PageTitle from "../../components/PageTitle";
import { BrowserView, MobileView } from "react-device-detect";
import "./marketplace.css";
import { Link } from "react-router-dom";
const Marketplace = (props) => {
  props.set(true);
  // props.set1(false)
  const dropdown = [
    { link: "#", label: "Action" },
    { link: "#", label: "Another action" },
    { link: "#", label: "Something else here" },
  ];
  const menu_categories = [
    { id: "switch7", label: "Toggle", span: "Has list price" },
    { id: "switch8", label: "Toggle", span: "Has open offer" },
    { id: "switch9", label: "Toggle", span: "Owned by creator" },
    { id: "switch10", label: "Toggle", span: "Has sold" },
  ];
  const collection = [
    {
      link: "#",
      img1: item9,
      img2: item10,
      img3: item11,
      img4: item12,
      icon: "ri-heart-3-fill",
      heading: "Creative Art collection",
      span: "2.1k",
      label: "5 items · Created by",
      img5: avatar2,
      name: "@william_jamy...",
    },
    {
      link: "#",
      img1: item13,
      img2: item14,
      img3: item15,
      img4: item16,
      icon: "ri-heart-3-fill",
      heading: "Colorful Abstract Painting",
      span: "3.5k",
      label: "7 items · Created by",
      img5: avatar3,
      name: "@alexis_fenn...",
    },
    {
      link: "#",
      img1: item17,
      img2: item18,
      img3: item19,
      img4: item20,
      icon: "ri-heart-3-fill",
      heading: "Modern Art collection",
      span: "7.2k",
      label: "2 items · Created by",
      img5: avatar1,
      name: "@Joshua_Bren...",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="body">
        <div className="overflow-hidden">
          <PageTitle title="NFT Marketplace" />
          <Cards />
          <div className="Marketplace_container">
            <div className="section mt-10">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
                <div className="row justify-content-between align-items-center">
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
                        <span className="color_text txt_sm "> SORT BY: </span>
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
              </div>

              <div className="row justify-content-center mb-30_reset sp-bottom">
                {collection.map((list) => (
                  <div className="col-lg-4 col-md-6 col-sm-8 ">
                    <div className="collections space-y-10 mb-30">
                      <Link to="404-4.html">
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
                          <Link to="Collections.html">{list.heading}</Link>
                        </h5>
                        <Link to="#" className="likes space-x-3">
                          <i className={list.icon}></i>
                          <span className="txt_md">{list.span}</span>
                        </Link>
                      </div>

                      <div className="creators space-x-10">
                        <span className="color_text txt_md"> {list.label}</span>
                        <div className="avatars space-x-5">
                          <Link to="Profile.html">
                            <img
                              src={list.img5}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                        </div>
                        <Link to="Profile.html">
                          <p className="avatars_name txt_sm pt-3"> {list.name} </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
