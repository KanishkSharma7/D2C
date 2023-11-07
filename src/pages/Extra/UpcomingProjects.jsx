import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { RiCalendarEventLine, RiLink, RiTimeLine, RiPriceTag3Line, RiMoneyDollarCircleLine, RiFileLine } from 'react-icons/ri';
import {browsers} from '../components/img/index'

const UpcomingProjects = () => {
    return (
        <>
            <body class="body" style={{backgroundColor:"#f3f3f3"}}>
                <div class="overflow-hidden">
                    <Navbar/>

                    {/* section1 in upcoming projects */}
                    <div class="hero_upcoming_projects bg_white">
                        <div class="container">
                            <div class="space-y-20">
                                <h1 class="text-center hero__title">Upcoming NFT Projects</h1>
                                <p class="text-center hero__desc">You can set preferred display name, create your profile URL and manage other personal settings.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* section2 in upcoming projects */}
                    <section class="section upcoming_projects mt-100">
                        <div class="container">
                            <div class="space-x-10 d-flex align-items-center mb-20">
                                <div class="calendar_icon"><RiCalendarEventLine/></div>
                                <h3>September 16th</h3>
                            </div>
                            <div class="box d-flex table-responsive">
                                <table class="table upcoming_projects">
                                    <thead>
                                        <tr>
                                            <th scope="col"><span>Project</span></th>
                                            <th class="space-x-5" scope="col"><RiLink/><span>Links</span></th>
                                            <th class="space-x-5" scope="col"><RiTimeLine/><span>Time</span></th>
                                            <th class="space-x-5" scope="col"><RiPriceTag3Line/><span>Count</span></th>
                                            <th class="space-x-5" scope="col"><RiMoneyDollarCircleLine/><span>Price</span></th>
                                            <th class="space-x-5" scope="col"><RiFileLine/><span>Extras</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span class="color_black">The Botties</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">10 PM UTC</span></td>
                                            <td><span class="color_red">-100%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $200, 1 SOL</span></td>
                                        </tr>
                                        <tr class="white">
                                            <td><span class="color_black">Hell Hounds</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">9 PM UTC</span></td>
                                            <td><span class="color_red">-900%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $400, 1 SOL</span></td>
                                        </tr>
                                        <tr>
                                            <td><span class="color_black">Red Dead</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">8 PM UTC</span></td>
                                            <td><span class="color_red">-750%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $300, 1 SOL</span></td>
                                        </tr>
                                        <tr class="white">
                                            <td><span class="color_black">Phantoms</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">7 PM UTC</span></td>
                                            <td><span class="color_red">-10%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $100, 1 SOL</span></td>
                                        </tr>
                                        <tr>
                                            <td><span class="color_black">CrowPunks</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">6 PM UTC</span></td>
                                            <td><span class="color_red">-150%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $700, 1 SOL</span></td>
                                        </tr>
                                        <tr class="white">
                                            <td><span class="color_black">Halloween</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">5 PM UTC</span></td>
                                            <td><span class="color_red">-50%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $400, 1 SOL</span></td>
                                        </tr>
                                        <tr>
                                            <td><span class="color_black">Nomad Presale</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">4 PM UTC</span></td>
                                            <td><span class="color_red">-26%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $100, 2 SOL</span></td>
                                        </tr>
                                        <tr class="white">
                                            <td><span class="color_black">ClubCards</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">3 PM UTC</span></td>
                                            <td><span class="color_red">-97%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $200, 1 SOL</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    
                    {/* section3 in upcoming projects */}
                    <section class="section upcoming_projects mt-100">
                        <div class="container">

                            <div class="space-x-10 d-flex align-items-center mb-20">
                                <div class="calendar_icon"><RiCalendarEventLine/></div>
                                <h3>September 17th</h3>
                            </div>

                            <div class="box d-flex table-responsive">
                                <table class="table upcoming_projects">
                                    <thead>
                                        <tr>
                                            <th scope="col"><span>Project</span></th>
                                            <th class="space-x-5" scope="col"><RiLink/><span>Links</span></th>
                                            <th class="space-x-5" scope="col"><RiTimeLine/><span>Time</span></th>
                                            <th class="space-x-5" scope="col"><RiPriceTag3Line/><span>Count</span></th>
                                            <th class="space-x-5" scope="col"><RiMoneyDollarCircleLine/><span>Price</span></th>
                                            <th class="space-x-5" scope="col"><RiFileLine/><span>Extras</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span class="color_black">NFBeans</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">10 PM UTC</span></td>
                                            <td><span class="color_red">-700%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $200, 1 SOL</span></td>
                                        </tr>
                                        <tr class="white">
                                            <td><span class="color_black">The Hourglass</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">9 PM UTC</span></td>
                                            <td><span class="color_red">-900%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $400, 1 SOL</span></td>
                                        </tr>
                                        <tr>
                                            <td><span class="color_black">Deaf beef</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">8 PM UTC</span></td>
                                            <td><span class="color_red">-450%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $500, 1 SOL</span></td>
                                        </tr>
                                        <tr class="white">
                                            <td><span class="color_black">PEGZ</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">7 PM UTC</span></td>
                                            <td><span class="color_red">-10%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $100, 2 SOL</span></td>
                                        </tr>
                                        <tr>
                                            <td><span class="color_black">CrowPunks</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">6 PM UTC</span></td>
                                            <td><span class="color_red">-180%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $700, 1 SOL</span></td>
                                        </tr>
                                        <tr class="white">
                                            <td><span class="color_black">Halloween</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">5 PM UTC</span></td>
                                            <td><span class="color_red">-50%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $200, 1 SOL</span></td>
                                        </tr>
                                        <tr>
                                            <td><span class="color_black">Nomad Presale</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">4 PM UTC</span></td>
                                            <td><span class="color_red">-260%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $400, 1 SOL</span></td>
                                        </tr>
                                        <tr class="white">
                                            <td><span class="color_black">ClubCards</span></td>
                                            <td><img class="imh-fluid" src={browsers} alt="" /></td>
                                            <td><span class="color_green">3 PM UTC</span></td>
                                            <td><span class="color_red">-987%</span></td>
                                            <td><span class="color_info">Free mint</span></td>
                                            <td><span class="color_black">If SOL is above $500, 1 SOL</span></td>
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

export default UpcomingProjects
