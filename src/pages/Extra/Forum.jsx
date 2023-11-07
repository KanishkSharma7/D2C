import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { RiSearchLine, RiHeart3Fill, RiChat1Line, RiEyeLine, RiTimeLine, RiAddLine } from 'react-icons/ri';
import {avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, item1, avatar10, avatar11, item2, avatar12, avatar13, item3, avatar14, avatar15, live, forumpost} from '../components/img/index';


const Forum = () => {
    return (
        <>
            <body class="body" style={{backgroundColor:"#f3f3f3"}}>
                <div class="overflow-hidden">

                    <Navbar/>

                    <div class="hero_forum bg_white">
                        <div class="container">
                            <div class="row align-items-center sm:space-y-20">
                                <div class="col-lg-6 col-md-6 col-sm-12 space-y-10">
                                    <h1 class="text-left">Forum</h1>
                                    <p>You can set preferred display name, create your profile URL and manage other personal settings.</p>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="search m-auto" style={{maxWidth: "400px;"}}>
                                        <input type="text" placeholder="Forum Search" />
                                        <button class="result">
                                            <RiSearchLine />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="section forum mt-100">
                        <div class="container-md">
                            <div class="row sm:space-y-30">
                            
                                <div class="col-lg-8">
                                    <div class="forum__content">
                                        <ul class="nav nav-tabs d-flex mb-30" role="tablist">
                                            <li class="nav-item">
                                                <Link class="btn btn-white btn-sm active" data-toggle="tab" to="#tabs-1" role="tab">
                                                    Recent Questions
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="btn btn-white btn-sm" data-toggle="tab" to="#tabs-1" role="tab">
                                                    Most Answered
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="btn btn-white btn-sm" data-toggle="tab" to="#tabs-1" role="tab">
                                                    Bump Question
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="btn btn-white btn-sm" data-toggle="tab" to="#tabs-1" role="tab">
                                                    Most Voted
                                                </Link>
                                            </li>
                                        </ul>
                    
                                        <div class="tab-content">
                                            <div class="tab-pane active space-y-30" id="tabs-1" role="tabpanel">

                                                <div class="box is__big space-y-20">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="d-flex align-items-center space-x-15">
                                                            <div class="avatars space-x-10">
                                                                <div class="media has_border">
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar3}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-forum" />
                                                                    </Link>
                                                                </div>
                                                                <div class="text-center">
                                                                    <Link to="Profile.html">
                                                                        <p class="avatars_name color_brand">@ayoub</p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="category">
                                                                <p class="color_black"><span class="color_text">in:</span> General</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div class="avatars space-x-3">
                                                                <div class="-space-x-20">
                                                                    <Link class="d-none d-sm-inline"
                                                                        to="Profile.html">
                                                                        <img
                                                                            src={avatar1}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar2}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar4}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar5}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar6}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <span class="total__avatars">+20</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex">
                                                        <div class="number">
                                                            <span>42</span>
                                                        </div>
                                                        <div class="space-y-20">
                                                            <Link to="post_details.html">
                                                                <h3 class="forum__title">Localbitcoins Clone Script | Localbitcoins Clone Software</h3>
                                                            </Link>
                                                            <p class="forum__desc">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Rarible (with crypto payment)! What do you</p>
                                                            <div class="tags">
                                                                <span>#NFT Marketplace</span>
                                                                <span>#crypto Artists</span>
                                                                <span>#NFT Artists</span>
                                                            </div>
                                                            <div class="hr"></div>
                                                            <div class="d-flex justify-content-between flex-wrap">
                                                                <div class="reaction">
                                                                    <Link to="#" class="likes space-x-3">
                                                                        <RiHeart3Fill/>
                                                                        <span class="txt_sm">2.1k</span>
                                                                    </Link>
                                                                    <Link to="post_details.html" class="comments space-x-3">
                                                                        <RiChat1Line/>
                                                                        <span class="txt_sm">257 Comments</span>
                                                                    </Link>
                                                                    <span class="views space-x-3">
                                                                        <RiEyeLine/>
                                                                        <span>257 Views</span>
                                                                    </span>
                                                                    <span class="time space-x-3">
                                                                        <RiTimeLine/>
                                                                        <span>2 days ago</span>
                                                                    </span>
                                                                </div>
                                                                <div class="answer">
                                                                    <Link to="#" class="btn btn-dark btn-sm">Answer</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="box is__big space-y-20">
                                                    <div class="d-flex justify-content-between align-items-center">

                                                        <div class="d-flex align-items-center space-x-15">
                                                            <div class="avatars space-x-10">
                                                                <div class="media has_border">
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar3}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-forum" />
                                                                    </Link>
                                                                </div>
                                                                <div class="text-center">
                                                                    <Link to="Profile.html">
                                                                        <p class="avatars_name
                                                                            color_brand">@ayoub
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="category">
                                                                <p class="color_black"><span class="color_text">in:</span>
                                                                    General
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div class="avatars space-x-3">
                                                                <div class="-space-x-20">
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar1}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar2}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar4}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar5}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar6}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <span class="total__avatars">+20</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex">
                                                        <div class="number">
                                                            <span>25</span>
                                                        </div>
                                                        <div class="space-y-20">
                                                            <Link to="post_details.html">
                                                                <h3 class="forum__title">Thank you you all for making this community a nice place to learn about NFTシ</h3>
                                                            </Link>
                                                            <p class="forum__desc">Hey guys! I want to start buying interest art from crypto artists so please feel free to share anything. I really love animated pieces and 3d stuff, but I’d give a try to anything different or new (for me) like AR nft ...</p>
                                                            <img class="img-fluid" src={forumpost} alt="" />
                                                            <div class="tags">
                                                                <span>#crypto Artists</span>
                                                                <span>#NFT Artists</span>
                                                                <span>#3d Art</span>
                                                            </div>
                                                            <div class="hr"></div>
                                                            <div class="d-flex justify-content-between flex-wrap">
                                                                <div class="reaction">
                                                                    <Link to="#" class="likes space-x-3">
                                                                        <RiHeart3Fill/>
                                                                        <span class="txt_sm">5.1k</span>
                                                                    </Link>
                                                                    <Link
                                                                        to="post_details.html"
                                                                        class="comments space-x-3">
                                                                        <RiChat1Line/>
                                                                        <span class="txt_sm">563 Comments</span>
                                                                    </Link>
                                                                    <span class="views space-x-3">
                                                                        <RiEyeLine/>
                                                                        <span>700 Views</span>
                                                                    </span>
                                                                    <span class="time space-x-3">
                                                                        <RiTimeLine/>
                                                                        <span>8 days ago</span>
                                                                    </span>
                                                                </div>
                                                                <div class="answer">
                                                                    <Link to="#" class="btn btn-dark
                                                                        btn-sm">Answer</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="box is__big space-y-20">
                                                    <div class="d-flex justify-content-between align-items-center">

                                                        <div class="d-flex align-items-center space-x-15">
                                                            <div class="avatars space-x-10">
                                                                <div class="media has_border">
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar3}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-forum" />
                                                                    </Link>
                                                                </div>

                                                                <div class="text-center">
                                                                    <Link to="Profile.html">
                                                                        <p class="avatars_name color_brand">@ayoub</p>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div class="category">
                                                                <p class="color_black"><span class="color_text">in:</span>
                                                                    General
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div class="avatars space-x-3">
                                                                <div class="-space-x-20">
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar1}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar2}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar4}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar5}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar6}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <span class="total__avatars">+20</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="d-flex">
                                                        <div class="number">
                                                            <span>17</span>
                                                        </div>

                                                        <div class="space-y-20">
                                                            <Link to="post_details.html">
                                                                <h3 class="forum__title">Why to Create an NFT On the Cardano Blockchain? </h3>
                                                            </Link>
                                                            <p class="forum__desc">Hey guys! NFTs, and especially NFT markets, have democratized the whole collectible art ecosystem. As a result, the new blockchain should make it simple for anybody to build their own NFT and trade it without difficulty. The possession of a ...</p>
                                                            <div class="tags">
                                                                <span>#blockchain</span>
                                                                <span>#Cardano</span>
                                                                <span>#art ecosystem</span>
                                                            </div>
                                                            <div class="hr"></div>
                                                            <div class="d-flex justify-content-between flex-wrap">
                                                                <div class="reaction">
                                                                    <Link to="#" class="likes space-x-3">
                                                                        <RiHeart3Fill/>
                                                                        <span class="txt_sm">3.1k</span>
                                                                    </Link>
                                                                    <Link
                                                                        to="post_details.html"
                                                                        class="comments space-x-3">
                                                                        <RiChat1Line/>
                                                                        <span class="txt_sm">357 Comments</span>
                                                                    </Link>
                                                                    <span class="views space-x-3">
                                                                        <RiEyeLine/>
                                                                        <span>134 Views</span>
                                                                    </span>
                                                                    <span class="time space-x-3">
                                                                        <RiTimeLine/>
                                                                        <span>4 days ago</span>
                                                                    </span>
                                                                </div>
                                                                <div class="answer">
                                                                    <Link to="#" class="btn btn-dark
                                                                        btn-sm">Answer</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="box is__big space-y-20">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="d-flex align-items-center space-x-15">
                                                            <div class="avatars space-x-10">
                                                                <div class="media has_border">
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar3}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-forum" />
                                                                    </Link>
                                                                </div>
                                                                <div class="text-center">
                                                                    <Link to="Profile.html">
                                                                        <p class="avatars_name color_brand">@ayoub</p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="category">
                                                                <p class="color_black"><span
                                                                        class="color_text">in:</span>
                                                                    General
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div class="avatars space-x-3">
                                                                <div class="-space-x-20">
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar1}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link class="d-none d-sm-inline" to="Profile.html">
                                                                        <img
                                                                            src={avatar2}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link class="d-none d-sm-inline"
                                                                        to="Profile.html">
                                                                        <img
                                                                            src={avatar4}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar5}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <Link to="Profile.html">
                                                                        <img
                                                                            src={avatar6}
                                                                            alt="Avatar"
                                                                            class="avatar
                                                                            avatar-sm" />
                                                                    </Link>
                                                                    <span class="total__avatars">+20</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex">
                                                        <div class="number">
                                                            <span>34</span>
                                                        </div>
                                                        <div class="space-y-20">
                                                            <Link to="post_details.html">
                                                                <h3 class="forum__title">Localbitcoins Clone Script | Localbitcoins Clone Software</h3>
                                                            </Link>
                                                            <p class="forum__desc">Binance Clone App
                                                                to launch the Cryptocurrency
                                                                Exchange App like Binance App. At
                                                                Maticz, we provide an advanced
                                                                Binance Exchange Clone App to launch
                                                                Crypto trading App like
                                                                Binance. Our Binance Clone App is
                                                                highly scalable, robust, and
                                                                supports cross-platform
                                                                compatibility. Now ...</p>
                                                            <div class="tags">
                                                                <span>#binance</span>
                                                                <span>#binance clone</span>
                                                                <span>#binance clone script</span>
                                                            </div>
                                                            <div class="hr"></div>
                                                            <div class="d-flex justify-content-between flex-wrap">
                                                                <div class="reaction">
                                                                    <Link to="#" class="likes space-x-3">
                                                                        <RiHeart3Fill/>
                                                                        <span class="txt_sm">4.4k</span>
                                                                    </Link>
                                                                    <Link to="post_details.html"
                                                                        class="comments space-x-3">
                                                                        <RiChat1Line/>
                                                                        <span class="txt_sm">852 Comments</span>
                                                                    </Link>
                                                                    <span class="views space-x-3">
                                                                        <RiEyeLine/>
                                                                        <span>264 Views</span>
                                                                    </span>
                                                                    <span class="time space-x-3">
                                                                        <RiTimeLine/>
                                                                        <span>6 days ago</span>
                                                                    </span>
                                                                </div>
                                                                <div class="answer">
                                                                    <Link to="#" class="btn btn-dark btn-sm">Answer</Link>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                                <p>2</p>
                                            </div>
                                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                                <p>3</p>
                                            </div>
                                            <div class="tab-pane" id="tabs-4" role="tabpanel">
                                                <p>4</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <div class="sidebar space-y-30">
                                        <Link to="#" class="btn btn-grad w-100">
                                            <RiAddLine/>
                                            Start New Topic
                                        </Link>

                                        <div class="space-y-10">
                                            <h5>Categories</h5>
                                            <div class="box space-y-10 is__big">
                                                <div class="d-flex justify-content-between">
                                                    <span class="color-black">General</span>
                                                    <span class="light_bg">346</span>
                                                </div>
                                                <div class="hr"></div>
                                                <div class="d-flex justify-content-between">
                                                    <span class="color-black">NFT Update</span>
                                                    <span class="light_bg">346</span>
                                                </div>
                                                <div class="hr"></div>
                                                <div class="d-flex justify-content-between">
                                                    <span class="color-black">Marketplace</span>
                                                    <span class="light_bg">346</span>
                                                </div>
                                                <div class="hr"></div>
                                                <div class="d-flex justify-content-between">
                                                    <span class="color-black">Platform Update</span>
                                                    <span class="light_bg">346</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="space-y-10">
                                            <h5>Popular Tags</h5>
                                            <div class="box popular-tags is__big">
                                                <div class="tags_items">
                                                    <span class="light_bg mr-10">#bitcoinpr</span>
                                                    <span class="light_bg">#cryptopressrelease</span>
                                                    <span class="light_bg">#nftcommunity</span>
                                                    <span class="light_bg">#nftcollector</span>
                                                    <span class="light_bg">#nftartist </span>
                                                    <span class="light_bg">#opensea</span>
                                                    <span class="light_bg">#nftartbtc</span>
                                                    <span class="light_bg">#nftartbtc</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="space-y-10">

                                            <div class="d-flex space-x-10">
                                                <img src={live} alt="" style={{width: "13px;"}} />
                                                <h5>Live auctions</h5>
                                            </div>

                                            <div class="box space-y-30">

                                                <div class="card__item two">
                                                    <div class="card_body space-y-10">

                                                        <div class="card_head">
                                                            <Link to="Item-details.html">
                                                                <img src={item1} alt="" />
                                                            </Link>
                                                            <div class="block_timer">
                                                                <div class="d-flex justify-content-center align-items-center">
                                                                    <div class="item">
                                                                        <div class="number hours"></div>
                                                                    </div>
                                                                    <div class="dots">:</div>
                                                                    <div class="item">
                                                                        <div class="number minutes"></div>
                                                                    </div>
                                                                    <div class="dots">:</div>
                                                                    <div class="item">
                                                                        <div class="number seconds"></div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="details d-flex justify-content-between">
                                                                <div class="progress">
                                                                    <div class="progress-bar" role="progressbar"
                                                                        style={{width: "80%"}}
                                                                        aria-valuenow="80"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                    
                                                        <h6 class="card_title">
                                                            <Link class="color_black" to="Item-details.html">
                                                                Colorful Abstract Painting
                                                            </Link>
                                                        </h6>

                                                        <div class="hr"></div>

                                                        <div class="card_footer justify-content-between">
                                                            <div class="creators">
                                                                <div class="avatars space-x-3">
                                                                    <div class="-space-x-20">
                                                                        <Link to="Profile.html">
                                                                            <img
                                                                                src={avatar10}
                                                                                alt="Avatar"
                                                                                class="avatar
                                                                                avatar-sm" />
                                                                        </Link>
                                                                        <Link to="Profile.html">
                                                                            <img
                                                                                src={avatar11}
                                                                                alt="Avatar"
                                                                                class="avatar
                                                                                avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                    <Link to="Profile.html">
                                                                        <p class="avatars_name txt_sm color_black">
                                                                            @darian_barry
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <Link to="#" class="space-x-3">
                                                                <p class="color_green txt_sm">0.001 ETH</p>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="card__item two">
                                                    <div class="card_body space-y-10">
                                                        <div class="card_head">
                                                            <Link to="Item-details.html">
                                                                <img src={item2} alt="" />
                                                            </Link>
                                                            <div class="block_timer">
                                                                <div class="d-flex justify-content-center align-items-center">
                                                                    <div class="item">
                                                                        <div class="number hours"></div>
                                                                    </div>
                                                                    <div class="dots">:</div>
                                                                    <div class="item">
                                                                        <div class="number minutes"></div>
                                                                    </div>
                                                                    <div class="dots">:</div>
                                                                    <div class="item">
                                                                        <div class="number seconds"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="details d-flex justify-content-between">
                                                                <div class="progress">
                                                                    <div class="progress-bar"
                                                                        role="progressbar"
                                                                        style={{width: "80%"}}
                                                                        aria-valuenow="80"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                    
                                                        <h6 class="card_title">
                                                            <Link class="color_black" to="Item-details.html">
                                                                Synthwave Modern Painting
                                                            </Link>
                                                        </h6>

                                                        <div class="hr"></div>

                                                        <div class="card_footer justify-content-between">
                                                            <div class="creators">
                                                                <div class="avatars space-x-3">
                                                                    <div class="-space-x-20">
                                                                        <Link
                                                                            to="Profile.html">
                                                                            <img
                                                                                src={avatar12}
                                                                                alt="Avatar"
                                                                                class="avatar
                                                                                avatar-sm" />
                                                                        </Link>
                                                                        <Link
                                                                            to="Profile.html">
                                                                            <img
                                                                                src={avatar13}
                                                                                alt="Avatar"
                                                                                class="avatar
                                                                                avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                    <Link to="Profile.html">
                                                                        <p class="avatars_name txt_sm color_black">
                                                                            @makinzi_beck
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <Link to="#" class="space-x-3">
                                                                <p class="color_green txt_sm">0.047 ETH</p>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="card__item two">
                                                    <div class="card_body space-y-10">
                                                        <div class="card_head">
                                                            <Link to="Item-details.html">
                                                                <img src={item3} alt="" />
                                                            </Link>
                                                            <div class="block_timer">
                                                                <div class="d-flex justify-content-center align-items-center">
                                                                    <div class="item">
                                                                        <div class="number hours"></div>
                                                                    </div>
                                                                    <div class="dots">:</div>
                                                                    <div class="item">
                                                                        <div class="number minutes"></div>
                                                                    </div>
                                                                    <div class="dots">:</div>
                                                                    <div class="item">
                                                                        <div class="number seconds"></div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="details d-flex justify-content-between">
                                                                <div class="progress">
                                                                    <div class="progress-bar"
                                                                        role="progressbar"
                                                                        style={{width: "80%"}}
                                                                        aria-valuenow="80"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                    
                                                        <h6 class="card_title">
                                                            <Link class="color_black"
                                                                to="Item-details.html">
                                                                The girl with the firefly
                                                            </Link>
                                                        </h6>

                                                        <div class="hr"></div>

                                                        <div class="card_footer justify-content-between">
                                                            <div class="creators">
                                                                <div class="avatars space-x-3">
                                                                    <div class="-space-x-20">
                                                                        <Link to="Profile.html">
                                                                            <img
                                                                                src={avatar14}
                                                                                alt="Avatar"
                                                                                class="avatar
                                                                                avatar-sm" />
                                                                        </Link>
                                                                        <Link to="Profile.html">
                                                                            <img
                                                                                src={avatar15}
                                                                                alt="Avatar"
                                                                                class="avatar
                                                                                avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                    <Link to="Profile.html">
                                                                        <p class="avatars_name
                                                                            txt_sm
                                                                            color_black">
                                                                            @jaxon_duffy
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <Link to="#" class="space-x-3">
                                                                <p class="color_green txt_sm">0.074 ETH</p>
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
			        </section>
                    
                    <Footer/>
                </div>
            </body>  
        </>
    )
}

export default Forum
