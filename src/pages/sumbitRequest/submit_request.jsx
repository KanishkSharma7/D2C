import React from "react";
import { Link } from "react-router-dom";
import { requests } from "../../img";
import "./sumbit_request.css";
const SubmitRequest = (props) => {
  props.set(true);
  return (
    <>
      <div className="body">
        <div className="overflow-hidden">
          <div className="requests">
            <div className="container">
              <div className="row gx-5 justify-content-center">
                <div
                  className="col-lg-8 col-md-10 requests__content"
                  style={{ marginBottom: "12rem" }}
                >
                  <div className="requests__wrap space-y-20">
                    <div>
                      <h1 className="text-left">Submit a request</h1>
                    </div>
                    <div className="box is__big">
                      <div className="space-y-20 mb-0">
                        <div className="space-y-10">
                          <span className="nameInput">Your email address</span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="contact@Creabik.com"
                          />
                        </div>
                        <div className="space-y-10">
                          <span className="nameInput">Subject</span>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="space-y-10">
                          <span className="nameInput">Description</span>
                          <textarea
                            style={{ minHeight: "110px" }}
                            className="mb-0"
                          ></textarea>
                          <p>
                            Please enter the details of your request. A member
                            of our support staff will respond as soon as
                            possible.
                          </p>
                        </div>
                        <div className="space-y-10">
                          <span className="nameInput">Category</span>
                          <select
                            className="form-select
			                                    custom-select"
                            aria-label="Default
			                                    select example"
                          >
                            <option>Art</option>
                            <option>Music</option>
                            <option>Video Game</option>
                          </select>
                        </div>
                        <div className="row d-flex align-items-center justify-content-between">
                          <div className="col Attach_desc space-x-20 d-flex align-items-center justify-content-start">
                            <div className="Attach_file d-flex">
                              <Link
                                to=""
                                className="btn btn-white btn-lg"
                                style={{ minWidth: "max-content" }}
                              >
                                Attach file
                              </Link>
                              <input type="file" className="req_input" />
                            </div>
                            <h5 className="text-secondary pt-4">
                              Maximum file size:
                              <span className="color_black">800 MB</span>
                            </h5>
                          </div>
                          <div className="col">
                            <Link
                              to="request.html"
                              className="btn btn-lg text-white btn-primary"
                            >
                              Submit message
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 contact__img">
                  <div className="img__wrap">
                    <img src={requests} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <footer className="footer__1">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-6 space-y-20">
                                  <div className="footer__logo">
                                      <Link to="index.html">
                                          <img src="assets/img/logos/Logo.svg" alt="logo" id="logo_js_f">
                                      </Link>
                                  </div>
                                  <p className="footer__text">
                                      raroin is a shared liquidity NFT market smart contract
                                  </p>
                                  <div>
                                      <ul className="footer__social space-x-10 mb-40">
                                          <li> <Link to="#"> <i className="ri-facebook-line"></i> </Link>
                                          </li>
                                          <li> <Link to="#"> <i className="ri-messenger-line"></i> </Link>
                                          </li>
                                          <li> <Link to="#"> <i className="ri-whatsapp-line"></i> </Link>
                                          </li>
                                          <li> <Link to="#"> <i className="ri-youtube-line"></i> </Link>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-2 col-6">
                                  <h6 className="footer__title">Raroin</h6>
                                  <ul className="footer__list">
                                      <li> <Link to="Home1.html"> Home1 </Link>
                                      </li>
                                      <li> <Link to="Home2.html"> Home2
                                      </Link> </li>
                                      <li> <Link to="Home3.html"> Home3 </Link> </li>
                                      <li> <Link to="Marketplace.html"> Marketplace
                                      </Link>
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-lg-2 col-6">
                                  <h6 className="footer__title">Assets</h6>
                                  <ul className="footer__list">
                                      <li> <Link to="Profile.html"> Profile </Link>
                                      </li>
                                      <li> <Link to="Creators.html"> Creators </Link>
                                      </li>
                                      <li> <Link to="Collections.html"> Colletctions </Link>
                                      </li>
                                      <li> <Link to="Activity.html"> Activity
                                      </Link> </li>
                                  </ul>
                              </div>
                              <div className="col-lg-2 col-6">
                                  <h6 className="footer__title">Company</h6>
                                  <ul className="footer__list">
                                      <li> <Link to="Upload-type.html"> Upload Types </Link>
                                      </li>
                                      <li> <Link to="Upload.html"> Upload </Link> </li>
                                      <li> <Link to="Connect-wallet.html"> Connect wallet
                                      </Link> </li>
                                      <li> <Link to="Item-details.html"> Item details </Link>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <p className="copyright text-center">
                              Copyright © 2021. Created with love by creabik.
                          </p>
                      </div>
                  </footer>	 */}
        </div>
        {/* <!-- 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈 SCRIPTS -->
              <script src="assets/js/jquery-3.6.0.js"></script>
              <script src="assets/js/bootstrap.bundle.min.js"></script>
              <script src="assets/js/swiper-bundle.min.js"></script>
              <script src="assets/js/gsap.min.js"></script>
              <script src="assets/js/ScrollTrigger.min.js"></script>
              <script src="assets/js/sticky-sidebar.js"></script>
              <script src="assets/js/script.js"></script>
              <script src="../cdn.jsdelivr.net/npm/web3%40latest/dist/web3.min.js"></script>
              <script src="../unpkg.com/moralis%402.10.3/dist/moralis.js"></script>
              <script src="assets/js/nft.js"></script>
              <script
                  src="../unpkg.com/%40lottiefiles/lottie-player%401.6.2/dist/lottie-player.js"></script> */}
      </div>
    </>
  );
};

export default SubmitRequest;
