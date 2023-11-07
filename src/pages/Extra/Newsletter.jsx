import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {newsletter} from '../components/img/index'
import { Link } from 'react-router-dom'

const Newsletter = () => {
    return (
        <>
            <body class="body" style={{backgroundColor:"#f3f3f3"}}>
                <div class="overflow-hidden">
                    <Navbar/>

                    <div class="container">
                        <div class="hero_newsletter box bg_white">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 left__side">
                                    <div class="content space-y-20">
                                        <h1 class="hero__title">Sign up for The NFT, Raroin newsletter!</h1>
                                        <p class="hero__desc">Sign up to receive our monthly newsletter, featuring updates from the team, new decentralized applications and NFT projects, and trends we’re seeing in the space.
                                        </p>
                                        <input placeholder="Enter your email" type="text" class="form-control" />
                                        <div><Link to="#" class="btn btn-grad">Subscribe</Link></div>
                                    </div>
                                </div>
                                <div class="col-lg-6 right__side">
                                    <img class="img-fluid hero__img" src={newsletter} alt="newsletter" />
                                </div>
                            </div>
                        </div>
			        </div>

                    <Footer/>
                </div>
            </body>
        </>
    )
}

export default Newsletter
