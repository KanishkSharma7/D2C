import React from 'react'
// import Section1 from '../components/Section1'
// import Footer from '../components/Footer'
import {bidgrad, item4, badge, avatar2} from '../../img'
import NavBarNew from '../../components/NavBarNew'
import Footer from '../../components/Footer'
import LiveBid from './liveBid'
import { Link } from 'react-router-dom'

const LiveAuctions = (props) => {
    props.set(true);
    return (
        <>
        <div class="body" style={{backgroundColor:"#f3f3f3"}}>
            <div class="overflow-hidden">
                {/* <NavBarNew/> */}
                {/* section1 in live auctions */}
                <div class="hero_Live_Auctions">
                    <div class="container">
                        <div class="row align-items-center">

                            <div class="col-lg-5 col-md-12 col-sm-12 space-y-10 left_content">
                                <img class="img-fluid" src={bidgrad} alt="bid icon" style={{maxWidth:"70px;"}} />
                                <h1 class="text-left">Live Auctions</h1>
                                <p>Sign up to receive our monthly newsletter, featuring updates
                                    from the team, new decentralized applications and NFT
                                    projects, and trends we’re seeing in the space.
                                </p>
                            </div>

                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <div class="card__item one">
                                    <div class="card_body space-y-10">
                                        <div class="row align-items-center">
                                            <div class="col-xl-7 col-md-7 col-sm-7 space-y-20 card_left">
                                                <div class="space-y-20">
                                                    <h4>Colorful Abstract Painting</h4>
                                                    <div class="details d-flex justify-content-between">
                                                        <div class="bid">
                                                            <div>
                                                                <p class="color_text txt_xs">CURRENT BID</p>
                                                                <span class="txt_sm">4.77 ETH</span>
                                                            </div>
                                                        </div>
                                                        <div class="auction_end">
                                                            <p class="color_text txt_xs">AUCTION END</p>
                                                            <span class="counter txt_sm">56 : 34 : 00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-center space-x-20">
                                                    <div>
                                                        <Link to="" class="btn btn-white">View Artwork</Link>
                                                    </div>
                                                    <div><Link to="#" data-toggle="modal" data-target="#popup_bid" class="btn btn-primary">Place Bid</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-5 col-md-5 col-sm-5">
                                                <div class="card_right">
                                                    <Link to="">
                                                        <img src={item4} alt=".." />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* section2 in live auctions */}
                
                    <div class="border-top border-1 border-secondary hero_Live_Auctions">
                    <div class="container">
                        <div class="section__head">
                            <div class="">
                                <h2 class="section__title text-left">Hot bids 🔥</h2>
                            </div>
                        </div>
                        {/* section3 in live auctions */}
                            <LiveBid />
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default LiveAuctions
