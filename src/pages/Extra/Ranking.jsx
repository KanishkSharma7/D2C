import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {collection} from '../components/img/index'
import { RiGamepadLine, RiBrushLine, RiStockLine, RiMusicLine, RiGlobalLine, RiEmotionLaughLine, RiLayout4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Ranking = () => {
    return (
        <>
            <body class="body" style={{backgroundColor:"#f3f3f3"}}>
                <div class="overflow-hidden">
                    <Navbar/>

                    <div class="hero_ranking bg_white">
                        <div class="container">
                            <h1 class="text-center">Ranking NFT</h1>
                        </div>
                    </div>

                    <div class="bg_white border-b py-20">
                        <div class="container">
                            <div class="row justify-content-between align-items-center">

                                <div class="col-lg-auto">
                                    <div class="d-flex space-x-10 align-items-center">
                                        <ul class="menu_categories space-x-20">
                                            <li>
                                                <Link to="#" class="color_brand">
                                        
                                                    <span> All </span>
                                                </Link>
                                            </li>
                                            <li> <Link to="#">
                                                    <RiGamepadLine/> <span> Games </span>
                                                </Link>
                                        
                                            </li>
                                            <li> <Link to="#">
                                                    <RiBrushLine/> <span> Art </span>
                                                </Link>
                                        
                                            </li>
                                            <li> <Link to="#">
                                                    <RiStockLine/> <span> Trading Cards </span>
                                                </Link>
                                        
                                            </li>
                                            <li> <Link to="#">
                                                    <RiMusicLine/> <span> Music </span>
                                                </Link>
                                        
                                            </li>
                                            <li> <Link to="#">
                                                    <RiGlobalLine/> <span> Domain Names </span>
                                                </Link>
                                            </li>
                                            <li> <Link to="#">
                                                    <RiEmotionLaughLine/> <span> Memes </span>
                                                </Link>
                                            </li>
                                            <li> <Link to="#">
                                                    <RiLayout4Line/> <span> Collectibles </span>
                                                </Link>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>

                                <div class="col-lg-auto">
                                    <div class="d-flex space-x-10 align-items-center sm:mt-20">

                                        <div class="dropdown">
                                            <button class="btn btn-dark btn-sm dropdown-toggle"
                                                type="button"
                                                data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                All Chains
                                            </button>
                                            <div class="dropdown-menu">
                                                <Link class="dropdown-item" to="#">Action</Link>
                                                <Link class="dropdown-item" to="#">Another action</Link>
                                                <Link class="dropdown-item" to="#">Something else here</Link>
                                            </div>
                                        </div>
                                        
                                        <div class="dropdown">
                                            <button class="btn btn-dark btn-sm dropdown-toggle"
                                                type="button"
                                                data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                All Chains
                                            </button>
                                            <div class="dropdown-menu">
                                                <Link class="dropdown-item" to="#">Action</Link>
                                                <Link class="dropdown-item" to="#">Another action</Link>
                                                <Link class="dropdown-item" to="#">Something else
                                                    here</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <section class="section ranking mt-100">
                        <div class="container">
                            <div class="box d-flex table-responsive">
                                <table class="table ranking">
                                    <thead>
                                        <tr>
                                            <th scope="col"><span>Collection</span></th>
                                            <th scope="col"><span>Volume</span></th>
                                            <th scope="col"><span>24h %</span></th>
                                            <th scope="col"><span>7d %</span></th>
                                            <th scope="col"><span>Floor Price</span></th>
                                            <th scope="col"><span>Owners</span></th>
                                            <th scope="col"><span>Assets</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td> 
                                                <div class="collection space-x-10">
                                                    <div class="media">
                                                        <div class="has_number">
                                                            1
                                                        </div>
                                                        <img src={collection} class="collection__img" />
                                                    </div>
                                                    <div>
                                                        <h6 class="title color_black">Creative Art collection</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>12,4353</span></td>
                                            <td><span class="color_green">+3456%</span></td>
                                            <td><span class="color_red">-564%</span></td>
                                            <td><span>12,4353 ETH</span></td>
                                            <td><span>3.3k</span></td>
                                            <td><span>23k</span></td>
                                        </tr>

                                        <tr>
                                            <td> 
                                                <div class="collection space-x-10">
                                                    <div class="media">
                                                        <div class="has_number">
                                                            1
                                                        </div>
                                                        <img src={collection} class="collection__img" />
                                                    </div>
                                                    <div>
                                                        <h6 class="title color_black">Creative Art collection</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>12,4353</span></td>
                                            <td><span class="color_green">+3456%</span></td>
                                            <td><span class="color_red">-564%</span></td>
                                            <td><span>12,4353 ETH</span></td>
                                            <td><span>3.3k</span></td>
                                            <td><span>23k</span></td>
                                        </tr>

                                        <tr>
                                            <td> 
                                                <div class="collection space-x-10">
                                                    <div class="media">
                                                        <div class="has_number">
                                                            1
                                                        </div>
                                                        <img src={collection} class="collection__img" />
                                                    </div>
                                                    <div>
                                                        <h6 class="title color_black">Creative Art collection</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>12,4353</span></td>
                                            <td><span class="color_green">+3456%</span></td>
                                            <td><span class="color_red">-564%</span></td>
                                            <td><span>12,4353 ETH</span></td>
                                            <td><span>3.3k</span></td>
                                            <td><span>23k</span></td>
                                        </tr>

                                        <tr>
                                            <td> 
                                                <div class="collection space-x-10">
                                                    <div class="media">
                                                        <div class="has_number">
                                                            1
                                                        </div>
                                                        <img src={collection} class="collection__img" />
                                                    </div>
                                                    <div>
                                                        <h6 class="title color_black">Creative Art collection</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>12,4353</span></td>
                                            <td><span class="color_green">+3456%</span></td>
                                            <td><span class="color_red">-564%</span></td>
                                            <td><span>12,4353 ETH</span></td>
                                            <td><span>3.3k</span></td>
                                            <td><span>23k</span></td>
                                        </tr>

                                        <tr>
                                            <td> 
                                                <div class="collection space-x-10">
                                                    <div class="media">
                                                        <div class="has_number">
                                                            1
                                                        </div>
                                                        <img src={collection} class="collection__img" />
                                                    </div>
                                                    <div>
                                                        <h6 class="title color_black">Creative Art collection</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span>12,4353</span></td>
                                            <td><span class="color_green">+3456%</span></td>
                                            <td><span class="color_red">-564%</span></td>
                                            <td><span>12,4353 ETH</span></td>
                                            <td><span>3.3k</span></td>
                                            <td><span>23k</span></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
			        </section>

                    <Footer/>

                </div>
            </body>
        </>
    )
}

export default Ranking
