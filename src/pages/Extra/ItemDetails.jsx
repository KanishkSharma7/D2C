import React from 'react'
import Nabvar from '../components/Navbar'
import Footer from '../components/Footer'
import {item2, avatar3, badge, avatar2, avatar1, ipfs, ether} from '../components/img/index';
import { RiHeart3Fill, RiShareLine, RiFacebookLine, RiMessengerLine, RiWhatsappLine, RiYoutubeLine, RiMoreFill, RiFlagLine, RiExternalLinkLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const ItemDetails = () => {
    return (
        <>
          <Nabvar/>

            <div class="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog" aria-hidden="true">
			    <div class="modal-dialog modal-dialog-centered" role="document">
			        <div class="modal-content">
			            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                <span aria-hidden="true"><>&times;</></span>
			            </button>
			            <div class="modal-body space-y-20 p-40">
			                <h3 class="text-center">Your Bidding Successfuly Added</h3>
			                <p class="text-center">your bid <span class="color_text txt_bold">(16ETH) </span> has been listing to our database</p>
			                <Link to="#" class="btn btn-dark w-full"> Watch the listings</Link>
			            </div>
			        </div>
			    </div>
			</div>

            <div class="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true">
			    <div class="modal-dialog modal-dialog-centered" role="document">
			        <div class="modal-content">
			            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                <span aria-hidden="true"><>&times;</></span>
			            </button>
			            <div class="modal-body space-y-20 p-40">
			                <h3>Place a Bid</h3>
			                <p>You must bid at least <span class="color_black">15 ETH</span>
			                </p>
			                <input type="text" class="form-control" placeholder="00.00 ETH" />
			
			                <p>Enter quantity. <span class="color_green">5 available</span></p>
			                <input type="text" class="form-control" value="1" />
			                <div class="hr"></div>
			                <div class="d-flex justify-content-between">
			                    <p> You must bid at least:</p>
			                    <p class="text-right color_black txt _bold"> 67,000 ETH </p>
			                </div>
			                <div class="d-flex justify-content-between">
			                    <p> service free:</p>
			                    <p class="text-right color_black txt _bold"> 0,901 ETH </p>
			                </div>
			                <div class="d-flex justify-content-between">
			                    <p> Total bid amount:</p>
			                    <p class="text-right color_black txt _bold"> 56,031 ETH </p>
			                </div>
			                <Link to="#" class="btn btn-primary w-full"
			                    data-toggle="modal"
			                    data-target="#popup_bid_success"
			                    data-dismiss="modal"
			                    aria-label="Close"> Place a bid
                            </Link>
			            </div>
			        </div>
			    </div>
			</div>  

            <div class="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog" aria-hidden="true">
			    <div class="modal-dialog modal-dialog-centered" role="document">
			        <div class="modal-content">
			            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                <span aria-hidden="true"><>&times;</></span>
			            </button>
			            <div class="modal-body space-y-20 p-40">
			                <h3 class="text-center">Your Bidding Successfuly Added</h3>
			                <p class="text-center">your bid <span class="color_text txt_bold">(16ETH) </span> has been listing
			                    to our database</p>
			                <Link to="#" class="btn btn-dark w-full"> Watch the listings</Link>
			            </div>
			        </div>
			    </div>
			</div>

            <div class="modal fade popup" id="popup_buy" tabindex="-1" role="dialog" aria-hidden="true">
			    <div class="modal-dialog modal-dialog-centered" role="document">
			        <div class="modal-content">
			            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                <span aria-hidden="true"><>&times;</></span>
			            </button>
			            <div class="modal-body space-y-20 p-40">
			                <h3>Checkout
			                </h3>
			                <p>You are about to purchase a <span class="color_black">SHADOW #7</span> from
			                    <span class="color_black">Lona</span>
			                </p>
			                <div class="space-y-10">
			                    <p>You pay</p>
			                    <input type="text" class="form-control" placeholder="00.00 ETH" />
			                </div>
			                <div class="space-y-10">
			                    <p>Enter quantity. <span class="color_green">5 available</span>
			                    </p>
			                    <input type="text" class="form-control"
			                        value="1" />
			                </div>
			                <div class="hr"></div>
			                <div class="d-flex justify-content-between">
			                    <p> You must bid at least:</p>
			                    <p class="text-right color_black txt _bold"> 67,000 ETH </p>
			                </div>
			                <div class="d-flex justify-content-between">
			                    <p> service free:</p>
			                    <p class="text-right color_black txt _bold"> 0,901 ETH </p>
			                </div>
			                <div class="d-flex justify-content-between">
			                    <p> Total bid amount:</p>
			                    <p class="text-right color_black txt _bold"> 56,031 ETH </p>
			                </div>
			                <Link to="https://pay.sendwyre.com/" class="btn btn-primary w-full" aria-label="Close">
			                    Add funds
                            </Link>
			            </div>
			        </div>
			    </div>
			</div>

            <div class="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog" aria-hidden="true">
			    <div class="modal-dialog modal-dialog-centered" role="document">
			        <div class="modal-content">
			            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                <span aria-hidden="true"><>&times;</></span>
			            </button>
			            <div class="modal-body space-y-20 p-40">
			                <h3 class="text-center">Your Bidding
			                    Successfuly Added</h3>
			                <p class="text-center">your bid <span class="color_text txt
			                        _bold">(16ETH) </span> has been listing
			                    to our database</p>
			                <Link to="#" class="btn btn-dark w-full"> Watch the listings</Link>
			            </div>
			        </div>
			    </div>
			</div>

            <div class="modal fade popup" id="popup_report" tabindex="-1" role="dialog" aria-hidden="true">
			    <div class="modal-dialog modal-dialog-centered" role="document">
			        <div class="modal-content">
			            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                <span aria-hidden="true">&times;</span>
			            </button>
			            <div class="modal-body space-y-20 p-40">
			                <h3>Report this item</h3>
			                <div class="hr"></div>
			                <div class="form-group space-y-10">
			                    <span class="variationInput">reason:</span>
			                    <select class="form-select custom-select" aria-label="Default select example">
			                        <option> Select a reason</option>
			                        <option>Purchase</option>
			                        <option>Support</option>
			                        <option>Technique</option>
			                        <option>Service Request</option>
			                    </select>
			                </div>
			                <div class="form-group space-y-10">
			                    <span class="variationInput">Additional comments:</span>
			                    <textarea name="..." cols="30" rows="10"
			                        placeholder="Explain why you are concerned about it."></textarea>
			                </div>
			                <Link to="#" class="btn btn-dark"> Report</Link>
			            </div>
			        </div>
			    </div>
			</div>

            <div class="container">
				<Link to="index.html" class="btn btn-white btn-sm my-40">
					Back to home
				</Link>
				<div class="item_details">
					<div class="row sm:space-y-20">
						<div class="col-lg-6">
							<img class="item_img" src={item2}
								alt="" />
						</div>
						<div class="col-lg-6">
							<div class="space-y-20">
								<h3>Creative girl illustration</h3>
								<div class="d-flex justify-content-between">
									<div class="space-x-10 d-flex align-items-center">
										<p>1 of 1</p>
										<Link to="#" class="likes space-x-3">
											<RiHeart3Fill/>
											<span class="txt_sm">2.1k</span>
										</Link>
									</div>
									<div class="space-x-10 d-flex align-items-center">
										<div class="share">
											<div class="icon">
												<Link to="#"> <RiShareLine/>
												</Link>
											</div>
											<div class="dropdown__popup">
												<ul class="space-y-10">
													<li> <Link to="#"> <RiFacebookLine/>
														</Link>
													</li>
													<li> <Link to="#"> <RiMessengerLine/>
														</Link>
													</li>
													<li> <Link to="#"> <RiWhatsappLine/>
														</Link>
													</li>
													<li> <Link to="#"> <RiYoutubeLine/>
														</Link>
													</li>
												</ul>
											</div>
										</div>
										<div class="more">
											<div class="icon">
												<Link to="#"> <RiMoreFill/>
												</Link>
											</div>
											<div class="dropdown__popup">
												<ul class="space-y-10">
													<li>
														<Link to="#" class="space-x-10 d-flex"
															data-toggle="modal"
															data-target="#popup_report">
															<RiFlagLine/>
															<span> Report
															</span>
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div class="dropdown">
									<button class="btn btn-white btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                        View proof of authenticity
									</button>
									<div class="dropdown-menu">
										<Link class="dropdown-item" to="https://ipfs.io/" target="_blank">
											<span>
												<img src={ipfs} width="20" alt="" />
												View on IPFS
											</span>
											<RiExternalLinkLine class="color_brand"/>
										</Link>
										<Link class="dropdown-item" to="https://etherscan.io/" target="_blank">
											<span>
												<img src={ether} width="20" alt="" />
												View on Etherscan
											</span>
											<RiExternalLinkLine class="color_brand"/>
										</Link>
									</div>
								</div>

								<div class="box">
									<div class="space-y-20">
										<div class="d-flex justify-content-between
											mb-30_reset">
											<ul class="nav nav-tabs d-flex space-x-10 mb-30"
												role="tablist">
												<li class="nav-item">
													<Link
														class="btn btn-white btn-sm active"
														data-toggle="tab"
														to="#tabs-1"
														role="tab">
														Details</Link>
												</li>
												<li class="nav-item">
													<Link
														class="btn btn-white btn-sm"
														data-toggle="tab"
														to="#tabs-2"
														role="tab">
														Bids</Link>
												</li>
												<li class="nav-item">
													<Link
														class="btn btn-white btn-sm"
														data-toggle="tab"
														to="#tabs-3"
														role="tab">
														History</Link>
												</li>
											</ul>
											<div class="dropdown d-none d-sm-block">
												<button
													class="btn btn-white btn-sm
													dropdown-toggle"
													type="button"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false">
													Recent Active
												</button>
												<div class="dropdown-menu">
													<Link class="dropdown-item" to="#">Action</Link>
													<Link class="dropdown-item" to="#">Another action</Link>
													<Link class="dropdown-item" to="#">Something else here</Link>
												</div>
											</div>
										</div>
										<div class="hr"></div>
										<div class="tab-content">
											<div class="tab-pane active" id="tabs-1" role="tabpanel">
												<p>Hey guys! New exploration about NFT
													Marketplace Web Design, this time I'm
													inspired by one of my favorite NFT
													website called Rarible (with crypto
													payment)! What do you think?</p>
											</div>
											<div class="tab-pane" id="tabs-2" role="tabpanel">
												<p>No active bids yet. Be the first to make
													a bid!</p>
											</div>
											<div class="tab-pane space-y-20" id="tabs-3" role="tabpanel">
												<div class="creator_item creator_card space-x-10">
													<div class="avatars space-x-10">
														<div class="media">
															<div class="badge">
																<img
																	src={badge}
																	alt="" />
															</div>
															<Link to="Profile.html">
																<img
																	src={avatar1}
																	alt="Avatar"
																	class="avatar
																	avatar-md" />
															</Link>
														</div>
														<div>
															<p class="color_black">Bid accepted 
                                                                <span class="color_brand">1 ETH</span>
                                                                by <Link class="color_black txt_bold" to="Profile.html">ayoub</Link>
                                                            </p>
															<span class="date color_text">28/06/2021, 12:08</span>
														</div>
													</div>
												</div>

												<div class="creator_item creator_card space-x-10">
													<div class="avatars space-x-10">
														<div class="media">
															<div class="badge">
																<img
																	src={badge}
																	alt="" />
															</div>
															<Link to="Profile.html">
																<img
																	src={avatar2}
																	alt="Avatar"
																	class="avatar
																	avatar-md" />
															</Link>
														</div>
														<div>
															<p class="color_black">Bid accepted 
                                                                <span class="color_brand">3 ETH</span> by 
                                                                <Link class="color_black txt_bold" to="Profile.html">monir</Link>
                                                            </p>
															<span class="date color_text">22/05/2021, 12:08</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="numbers">
									<div class="row">
										<div class="col-lg-6">
											<div class="space-y-5">
												<p class="color_text">Minimum bid</p>
												<h4>2.4000 <span class="txt_sm color_text">
														ETH/ $4769.88</span></h4>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="space-y-5">
												<p class="color_text">countdown</p>
												<div class="d-flex countdown_item
													align-items-center">
													<div class="item">
														<div class="number hours">22<span></span></div>
													</div>
													<div class="dots">:</div>
													<div class="item">
														<div class="number minutes">04<span></span></div>
													</div>
													<div class="dots">:</div>
													<div class="item">
														<div class="number seconds">35<span></span></div>
													</div>
												</div>
			
											</div>
										</div>
									</div>
								</div>

								<div class="hr2"></div>

								<div class="creators">
									<div class="row">
										<div class="col-lg-6">
											<div class="avatars space-x-5">
												<div class="media">
													<Link to="Profile.html">
														<img
															src={avatar3}
															alt="Avatar" class="avatar
															avatar-sm" />
													</Link>
												</div>
												<div>
													<Link to="Profile.html">
														<p class="avatars_name color_black">@ayoub_fennouni
															/ fouzi...</p>
													</Link>
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="avatars space-x-5">
												<div class="media">
													<div class="badge">
														<img class="badge"
															src={badge}
															alt="" />
													</div>
													<Link to="Profile.html">
														<img
															src={avatar2}
															alt="Avatar" class="avatar
															avatar-sm" />
													</Link>
												</div>
												<div>
													<Link to="Profile.html">
														<p class="avatars_name color_black">@makinzi_jamy...</p>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="d-flex space-x-20">
									<Link to="#" class="btn btn-primary btn-lg" data-toggle="modal"
										data-target="#popup_buy"> Buy Now</Link>
									<Link to="#" class="btn btn-grad btn-lg" data-toggle="modal"
										data-target="#popup_bid"> Place bid</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

            <Footer/>
        </>
    )
}

export default ItemDetails
