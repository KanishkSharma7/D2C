import React from "react";
import {
  badge,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  Logo_illustrstion,
  oneSvg,
  twoSvg,
  threeSvg,
} from "../img/index";
import {
  RiGamepadLine,
  RiBrushLine,
  RiStockLine,
  RiMusicLine,
  RiGlobalLine,
  RiEmotionLaughLine,
  RiLayout4Line,
  RiHeart3Fill,
  RiHistoryLine,
  RiRestartLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <body class="body" style={{ backgroundColor: "#f3f3f3" }}>
        <div class="overflow-hidden">
          <div class="mt-100">
            <div class="container">
              <div class="section__head">
                <div
                  class="d-md-flex 
                                    sm:space-y-20
                                    space-x-20
                                    justify-content-between
                                    align-items-center"
                >
                  <h2 class="section__title text-center">Explore</h2>
                  <ul class="menu_categories space-x-20">
                    <li>
                      <Link to="" class="color_brand">
                        <span> All </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiGamepadLine /> <span> Games </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiBrushLine /> <span> Art </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiStockLine /> <span> Trading Cards </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiMusicLine /> <span> Music </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiGlobalLine /> <span> Domain Names </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiEmotionLaughLine /> <span> Memes </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiLayout4Line /> <span> Collectibles </span>
                      </Link>
                    </li>
                  </ul>
                  <div class="dropdown text-center">
                    <button
                      class="btn btn-white btn-sm dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Recent Active
                    </button>
                    <div class="dropdown-menu">
                      <Link class="dropdown-item" to="">
                        Action
                      </Link>
                      <Link class="dropdown-item" to="">
                        Another action
                      </Link>
                      <Link class="dropdown-item" to="">
                        Something else here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="card__item four">
                    <div class="card_body space-y-10">
                      <div class="creators space-x-10">
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar1}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@mickel_fenn</p>
                          </Link>
                        </div>
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar2}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@danil_pannini</p>
                          </Link>
                        </div>
                      </div>

                      <div class="card_head">
                        <Link to="tem-details.html">
                          <img
                            src={item1}
                            alt="item
                                                        img"
                          />
                        </Link>
                        <Link to="" class="likes space-x-3">
                          <RiHeart3Fill />
                          <span class="txt_sm">1.2k</span>
                        </Link>
                      </div>

                      <h6 class="card_title">
                        <Link class="color_black" to="tem-details.html">
                          Colorful Abstract Painting
                        </Link>
                      </h6>

                      <div class="card_footer d-block space-y-10">
                        <div class="card_footer justify-content-between">
                          <div class="creators">
                            <p class="txt_sm">4 in stock</p>
                          </div>
                          <Link to="" class="">
                            <p class="txt_sm">
                              Price:{" "}
                              <span class="color_green txt_sm">2.45 ETH</span>
                            </p>
                          </Link>
                        </div>

                        <div class="hr"></div>
                        <div
                          class="d-flex
                                                    align-items-center
                                                    space-x-10
                                                    justify-content-between"
                        >
                          <Link
                            class="btn btn-sm btn-primary"
                            to=""
                            data-toggle="modal"
                            data-target="#popup_bid"
                          >
                            Place Bid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="card__item four">
                    <div class="card_body space-y-10">
                      <div class="creators space-x-10">
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar3}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@mazanov_sky</p>
                          </Link>
                        </div>
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar4}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@mucky_fennouni</p>
                          </Link>
                        </div>
                      </div>
                      <div class="card_head">
                        <Link to="tem-details.html">
                          <img
                            src={item2}
                            alt="item
                                                        img"
                          />
                        </Link>
                        <Link to="" class="likes space-x-3">
                          <RiHeart3Fill />
                          <span class="txt_sm">13.2k</span>
                        </Link>
                      </div>

                      <h6 class="card_title">
                        <Link class="color_black" to="tem-details.html">
                          The girl with the firefly
                        </Link>
                      </h6>

                      <div class="card_footer d-block space-y-10">
                        <div class="card_footer justify-content-between">
                          <div class="creators">
                            <p class="txt_sm">12 in stock</p>
                          </div>
                          <Link to="" class="">
                            <p class="txt_sm">
                              Price:{" "}
                              <span class="color_green txt_sm">2.55 ETH</span>
                            </p>
                          </Link>
                        </div>
                        <div class="hr"></div>
                        <div
                          class="d-flex
                                                    align-items-center
                                                    space-x-10
                                                    justify-content-between"
                        >
                          <Link
                            class="btn btn-sm btn-primary"
                            to=""
                            data-toggle="modal"
                            data-target="#popup_bid"
                          >
                            Place Bid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="card__item four">
                    <div class="card_body space-y-10">
                      <div class="creators space-x-10">
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar5}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@jimmy_dom</p>
                          </Link>
                        </div>
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar6}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@kristian_sefroui</p>
                          </Link>
                        </div>
                      </div>
                      <div class="card_head">
                        <Link to="tem-details.html">
                          <img
                            src={item3}
                            alt="item
                                                        img"
                          />
                        </Link>
                        <Link to="" class="likes space-x-3">
                          <i class="ri-heart-3-fill"></i>
                          <span class="txt_sm">1.2k</span>
                        </Link>
                      </div>

                      <h6 class="card_title">
                        <Link class="color_black" to="tem-details.html">
                          Dodo hide the seek
                        </Link>
                      </h6>
                      <div class="card_footer d-block space-y-10">
                        <div class="card_footer justify-content-between">
                          <div class="creators">
                            <p class="txt_sm">6 in stock</p>
                          </div>
                          <Link to="" class="">
                            <p class="txt_sm">
                              Price:{" "}
                              <span class="color_green txt_sm">2.45 ETH</span>
                            </p>
                          </Link>
                        </div>
                        <div class="hr"></div>
                        <div
                          class="d-flex
                                                    align-items-center
                                                    space-x-10
                                                    justify-content-between"
                        >
                          <Link
                            class="btn btn-sm btn-primary"
                            to=""
                            data-toggle="modal"
                            data-target="#popup_bid"
                          >
                            Place Bid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="card__item four">
                    <div class="card_body space-y-10">
                      <div class="creators space-x-10">
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar1}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@Alvin_nov</p>
                          </Link>
                        </div>
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar7}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@mucky_holiman</p>
                          </Link>
                        </div>
                      </div>
                      <div class="card_head">
                        <Link to="tem-details.html">
                          <img
                            src={item4}
                            alt="item
                                                        img"
                          />
                        </Link>
                        <Link to="" class="likes space-x-3">
                          <i class="ri-heart-3-fill"></i>
                          <span class="txt_sm">4.1k</span>
                        </Link>
                      </div>

                      <h6 class="card_title">
                        <Link class="color_black" to="tem-details.html">
                          Liquid Forest Princess
                        </Link>
                      </h6>
                      <div class="card_footer d-block space-y-10">
                        <div class="card_footer justify-content-between">
                          <div class="creators">
                            <p class="txt_sm">34 in stock</p>
                          </div>
                          <Link to="" class="">
                            <p class="txt_sm">
                              Price:{" "}
                              <span class="color_green txt_sm">0.55 ETH</span>
                            </p>
                          </Link>
                        </div>
                        <div class="hr"></div>
                        <div
                          class="d-flex
                                                    align-items-center
                                                    space-x-10
                                                    justify-content-between"
                        >
                          <Link
                            class="btn btn-sm btn-primary"
                            to=""
                            data-toggle="modal"
                            data-target="#popup_bid"
                          >
                            Place Bid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="card__item four">
                    <div class="card_body space-y-10">
                      <div class="creators space-x-10">
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar8}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@stivan_rominok</p>
                          </Link>
                        </div>
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar9}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@danil_pan</p>
                          </Link>
                        </div>
                      </div>
                      <div class="card_head">
                        <Link to="tem-details.html">
                          <img
                            src={item5}
                            alt="item
                                                        img"
                          />
                        </Link>
                        <Link to="" class="likes space-x-3">
                          <i class="ri-heart-3-fill"></i>
                          <span class="txt_sm">6.4k</span>
                        </Link>
                      </div>

                      <h6 class="card_title">
                        <Link class="color_black" to="tem-details.html">
                          Spider Eyes Modern Art
                        </Link>
                      </h6>
                      <div class="card_footer d-block space-y-10">
                        <div class="card_footer justify-content-between">
                          <div class="creators">
                            <p class="txt_sm">7 in stock</p>
                          </div>
                          <Link to="" class="">
                            <p class="txt_sm">
                              Price:{" "}
                              <span class="color_green txt_sm">1.45 ETH</span>
                            </p>
                          </Link>
                        </div>
                        <div class="hr"></div>
                        <div
                          class="d-flex
                                                    align-items-center
                                                    space-x-10
                                                    justify-content-between"
                        >
                          <Link
                            class="btn btn-sm btn-primary"
                            to=""
                            data-toggle="modal"
                            data-target="#popup_bid"
                          >
                            Place Bid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="card__item four">
                    <div class="card_body space-y-10">
                      <div class="creators space-x-10">
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar10}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@mazanov_sky</p>
                          </Link>
                        </div>
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar11}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@mucky_art</p>
                          </Link>
                        </div>
                      </div>
                      <div class="card_head">
                        <Link to="tem-details.html">
                          <img
                            src={item6}
                            alt="item
                                                        img"
                          />
                        </Link>
                        <Link to="" class="likes space-x-3">
                          <i class="ri-heart-3-fill"></i>
                          <span class="txt_sm">13.2k</span>
                        </Link>
                      </div>

                      <h6 class="card_title">
                        <Link class="color_black" to="tem-details.html">
                          Synthwave Painting
                        </Link>
                      </h6>
                      <div class="card_footer d-block space-y-10">
                        <div class="card_footer justify-content-between">
                          <div class="creators">
                            <p class="txt_sm">2 in stock</p>
                          </div>
                          <Link to="" class="">
                            <p class="txt_sm">
                              Price:{" "}
                              <span class="color_green txt_sm">0.055 ETH</span>
                            </p>
                          </Link>
                        </div>
                        <div class="hr"></div>
                        <div
                          class="d-flex
                                                    align-items-center
                                                    space-x-10
                                                    justify-content-between"
                        >
                          <Link
                            class="btn btn-sm btn-primary"
                            to=""
                            data-toggle="modal"
                            data-target="#popup_bid"
                          >
                            Place Bid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="card__item four">
                    <div class="card_body space-y-10">
                      <div class="creators space-x-10">
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar12}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@jimmy_dom</p>
                          </Link>
                        </div>
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar5}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@kristian_fel</p>
                          </Link>
                        </div>
                      </div>
                      <div class="card_head">
                        <Link to="tem-details.html">
                          <img
                            src={item7}
                            alt="item
                                                        img"
                          />
                        </Link>
                        <Link to="" class="likes space-x-3">
                          <RiHeart3Fill />
                          <span class="txt_sm">1.6k</span>
                        </Link>
                      </div>

                      <h6 class="card_title">
                        <Link class="color_black" to="tem-details.html">
                          Contemporary Abstract
                        </Link>
                      </h6>
                      <div class="card_footer d-block space-y-10">
                        <div class="card_footer justify-content-between">
                          <div class="creators">
                            <p class="txt_sm">34 in stock</p>
                          </div>
                          <Link to="" class="">
                            <p class="txt_sm">
                              Price:{" "}
                              <span class="color_green txt_sm">0.95 ETH</span>
                            </p>
                          </Link>
                        </div>
                        <div class="hr"></div>
                        <div
                          class="d-flex
                                                    align-items-center
                                                    space-x-10
                                                    justify-content-between"
                        >
                          <Link
                            class="btn btn-sm btn-primary"
                            to=""
                            data-toggle="modal"
                            data-target="#popup_bid"
                          >
                            Place Bid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="card__item four">
                    <div class="card_body space-y-10">
                      <div class="creators space-x-10">
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar13}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@Alvin_nov</p>
                          </Link>
                        </div>
                        <div class="avatars space-x-3">
                          <Link to="rofile.html">
                            <img
                              src={avatar14}
                              alt="Avatar"
                              class="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_xs">@mucky_art</p>
                          </Link>
                        </div>
                      </div>
                      <div class="card_head">
                        <Link to="tem-details.html">
                          <img
                            src={item8}
                            alt="item
                                                        img"
                          />
                        </Link>
                        <Link to="" class="likes space-x-3">
                          <RiHeart3Fill />
                          <span class="txt_sm">11.5k</span>
                        </Link>
                      </div>

                      <h6 class="card_title">
                        <Link class="color_black" to="tem-details.html">
                          Valkyrie Abstract Art
                        </Link>
                      </h6>
                      <div class="card_footer d-block space-y-10">
                        <div class="card_footer justify-content-between">
                          <div class="creators">
                            <p class="txt_sm">9 in stock</p>
                          </div>
                          <Link to="" class="">
                            <p class="txt_sm">
                              Price:{" "}
                              <span class="color_green txt_sm">3.55 ETH</span>
                            </p>
                          </Link>
                        </div>
                        <div class="hr"></div>
                        <div
                          class="d-flex
                                                    align-items-center
                                                    space-x-10
                                                    justify-content-between"
                        >
                          <Link
                            class="btn btn-sm btn-primary"
                            to=""
                            data-toggle="modal"
                            data-target="#popup_bid"
                          >
                            Place Bid
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-center">
                <Link to="arketplace.html" class="btn btn-sm btn-white">
                  <RiRestartLine />
                  View all items
                </Link>
              </div>

              <div class="section mt-100">
                <div class="container">
                  <div class="section__head">
                    <div class="d-flex justify-content-between align-items-center">
                      <h2 class="section__title"> Collections</h2>
                      <Link to="/collections" class="btn btn-dark btn-sm">
                        View All
                      </Link>
                    </div>
                  </div>

                  <div class="row justify-content-center mb-30_reset">
                    <div class="col-lg-4 col-md-6 col-sm-8">
                      <div class="collections space-y-10 mb-30">
                        <Link to="04-4.html">
                          <div class="collections_item">
                            <div class="images-box space-y-10">
                              <div class="top_imgs">
                                <img src={item9} alt="" />
                                <img src={item10} alt="" />
                                <img src={item11} alt="" />
                              </div>
                              <img src={item12} alt="" />
                            </div>
                          </div>
                        </Link>
                        <div class="collections_footer justify-content-between">
                          <h5 class="collection_title">
                            <Link to="ollections.html">
                              Creative Art collection
                            </Link>
                          </h5>
                          <Link to="" class="likes space-x-3">
                            <RiHeart3Fill />
                            <span class="txt_md">2.1k</span>
                          </Link>
                        </div>
                        <div class="creators space-x-10">
                          <span class="color_text txt_md">
                            {" "}
                            5 items · Created by
                          </span>
                          <div class="avatars space-x-5">
                            <Link to="rofile.html">
                              <img
                                src={avatar2}
                                alt="Avatar"
                                class="avatar avatar-sm"
                              />
                            </Link>
                          </div>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_sm">
                              {" "}
                              @william_jamy...{" "}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8">
                      <div class="collections space-y-10 mb-30">
                        <Link to="04-4.html">
                          <div class="collections_item">
                            <div class="images-box space-y-10">
                              <div class="top_imgs">
                                <img src={item13} alt="" />
                                <img src={item14} alt="" />
                                <img src={item15} alt="" />
                              </div>
                              <img src={item16} alt="" />
                            </div>
                          </div>
                        </Link>
                        <div class="collections_footer justify-content-between">
                          <h5 class="collection_title">
                            <Link to="ollections.html">
                              Colorful Abstract Painting
                            </Link>
                          </h5>
                          <Link to="" class="likes space-x-3">
                            <RiHeart3Fill />
                            <span class="txt_md">3.5k</span>
                          </Link>
                        </div>
                        <div class="creators space-x-10">
                          <span class="color_text txt_md">
                            {" "}
                            7 items · Created by
                          </span>
                          <div class="avatars space-x-5">
                            <Link to="rofile.html">
                              <img
                                src={avatar3}
                                alt="Avatar"
                                class="avatar avatar-sm"
                              />
                            </Link>
                          </div>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_sm"> @alexis_fenn... </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8">
                      <div class="collections space-y-10 mb-30">
                        <Link to="04-4.html">
                          <div class="collections_item">
                            <div class="images-box space-y-10">
                              <div class="top_imgs">
                                <img src={item17} alt="" />
                                <img src={item18} alt="" />
                                <img src={item19} alt="" />
                              </div>
                              <img src={item20} alt="" />
                            </div>
                          </div>
                        </Link>
                        <div class="collections_footer justify-content-between">
                          <h5 class="collection_title">
                            <Link to="ollections.html">Modern Art collection</Link>
                          </h5>
                          <Link to="" class="likes space-x-3">
                            <RiHeart3Fill />
                            <span class="txt_md">7.2k</span>
                          </Link>
                        </div>
                        <div class="creators space-x-10">
                          <span class="color_text txt_md">
                            {" "}
                            2 items · Created by
                          </span>
                          <div class="avatars space-x-5">
                            <Link to="rofile.html">
                              <img
                                src={avatar1}
                                alt="Avatar"
                                class="avatar avatar-sm"
                              />
                            </Link>
                          </div>
                          <Link to="rofile.html">
                            <p class="avatars_name txt_sm"> @Joshua_Bren... </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="call2action">
            <div class="container">
              <div class="row justify-content-between align-items-center sm:space-y-20">
                <div class="col-md-6">
                  <div class="space-y-20">
                    <h1 class="text-white">Start your own collection today</h1>
                    <p class="color_text section__text">
                      raroin is a shared liquidity NFT market smart contract
                      which is used by multiple websites to provide the users
                      the best possible experience.
                    </p>
                    <Link
                      to="onnect-wallet.html"
                      class="btn
                                            btn-primary"
                    >
                      Start Collecting
                    </Link>
                  </div>
                </div>
                <div class="col-md-auto">
                  <img
                    class="img-fluid img__logo"
                    src={Logo_illustrstion}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="logos__wrap">
              <div class="row align-items-center justify-content-between">
                <div class="col-lg-auto col-md-12">
                  <h3
                    class="section__title md:mb-20 text-left d-flex
								        justify-content-center"
                  >
                    Loved by the community
                  </h3>
                </div>
                <div class="col-lg-auto col-md-12">
                  <div class="d-flex flex-column flex-md-row justify-content-center space-x-20 sm:space-x-0 sm:space-y-20 align-items-center">
                    <img src={oneSvg} alt="" />
                    <img src={twoSvg} alt="" />
                    <img src={threeSvg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default index;
