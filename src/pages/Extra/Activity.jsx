import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RiGamepadLine,
  RiBrushLine,
  RiStockLine,
  RiMusicLine,
  RiGlobalLine,
  RiEmotionLaughLine,
  RiLayout4Line,
} from "react-icons/ri";
import { item1, item2, item3, item4 } from "../components/img/index";

const Activity = () => {
  return (
    <>
      <Navbar />

      <div class="hero__activity">
        <div class="container">
          <h1 class="text-center">Activity Feed</h1>
        </div>
      </div>

      <div class="bg_white border-b py-20">
        <div class="container">
          <div class="d-flex justify-content-center">
            <ul class="menu_activity space-x-20">
              <li>
                {" "}
                <Link to="#">
                  <RiGamepadLine />
                  <span> Games </span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <RiBrushLine /> <span> Art </span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <RiStockLine /> <span> Trading Cards </span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <RiMusicLine /> <span> Music </span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <RiGlobalLine /> <span> Domain Names </span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <RiEmotionLaughLine /> <span> Memes </span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="#">
                  <RiLayout4Line /> <span> Collectibles </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section__activity">
        <div class="container mt-100">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 col-sm-10">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <Link to="#">Mark all read</Link>
                <div class="dropdown">
                  <button
                    class="btn btn-dark btn-sm dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Recent Active
                  </button>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link class="dropdown-item" to="#">
                      Another action
                    </Link>
                    <Link class="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </div>
                </div>
              </div>

              <div class="space-y-20">
                <div class="box">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <div class="creators_box">
                        <div class="avatars space-x-10">
                          <div class="media">
                            <img
                              src={item1}
                              alt="Avatar"
                              class="avatar
															avatar-md"
                            />
                          </div>
                          <div>
                            <h5 class="color_black">Creative Art collection</h5>
                            <div class="d-flex space-x-10">
                              <span class="price color_text">listed by </span>
                              <Link to="Profile.html" class="price color_brand">
                                @jimena_stark
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <p class="date color_text"> Last 2 days </p>
                    </div>
                  </div>
                </div>

                <div class="box">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <div class="creators_box">
                        <div class="avatars space-x-10">
                          <div class="media">
                            <img
                              src={item2}
                              alt="Avatar"
                              class="avatar
															avatar-md"
                            />
                          </div>
                          <div>
                            <h5 class="color_black">Creative Art collection</h5>
                            <div class="d-flex space-x-10">
                              <span class="price color_text">listed by </span>
                              <Link to="Profile.html" class="price color_brand">
                                @makinzi_beck
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-auto">
                      <p class="date color_text"> Last 2 days </p>
                    </div>
                  </div>
                </div>

                <div class="box">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <div class="creators_box">
                        <div class="avatars space-x-10">
                          <div class="media">
                            <img
                              src={item3}
                              alt="Avatar"
                              class="avatar
															avatar-md"
                            />
                          </div>
                          <div>
                            <h5 class="color_black">Creative Art collection</h5>
                            <div class="d-flex space-x-10">
                              <span class="price color_text">listed by </span>
                              <Link to="Profile.html" class="price color_brand">
                                @jaxon_duffy
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-auto">
                      <p class="date color_text"> Last 2 days </p>
                    </div>
                  </div>
                </div>

                <div class="box">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <div class="creators_box">
                        <div class="avatars space-x-10">
                          <div class="media">
                            <img
                              src={item4}
                              alt="Avatar"
                              class="avatar
															avatar-md"
                            />
                          </div>
                          <div>
                            <h5 class="color_black">Creative Art collection</h5>
                            <div class="d-flex space-x-10">
                              <span class="price color_text">listed by </span>
                              <Link to="Profile.html" class="price color_brand">
                                @darian_barry
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-auto">
                      <p class="date color_text"> Last 2 days </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Activity;
