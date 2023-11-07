import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    badge,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
} from "../../img";
import "./home.css"
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Carouselw () {
    // return() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1414,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 1214,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 1007,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 516,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
            ],
        };
        const slider = [
            {
                img: avatar1,
                name: "@xander_hall...",
                price: "16.58 ETH",
                img2: badge,
            },
            {
                img: avatar2,
                name: "@hamza_pitts...",
                price: "14.55 ETH",
                img2: badge,
            },
            {
                img: avatar3,
                name: "@nathan_walls...",
                price: "24.13 ETH",
                img2: badge,
            },
            {
                img: avatar4,
                name: "@kelton_colier...",
                price: "62.68 ETH",
                img2: badge,
            },
            {
                img: avatar5,
                name: "@cade_glover...",
                price: "32.48 ETH",
                img2: badge,
            },
            {
                img: avatar1,
                name: "@xander_hall...",
                price: "16.58 ETH",
                img2: badge,
            },
            {
                img: avatar2,
                name: "@hamza_pitts...",
                price: "14.55 ETH",
                img2: badge,
            },
            {
                img: avatar3,
                name: "@nathan_walls...",
                price: "24.13 ETH",
                img2: badge,
            },
            {
                img: avatar4,
                name: "@kelton_colier...",
                price: "62.68 ETH",
                img2: badge,
            },
            {
                img: avatar5,
                name: "@cade_glover...",
                price: "32.48 ETH",
                img2: badge,
            },
        ];

        const Ref = useRef(null);

        const [timer, setTimer] = useState('00:00:00');


        const getTimeRemaining = (e) => {
            const total = Date.parse(e) - Date.parse(new Date());
            const seconds = Math.floor((total / 1000) % 60);
            const minutes = Math.floor((total / 1000 / 60) % 60);
            const hours = Math.floor((total / 1000 / 60 / 60) % 24);
            return {
                total, hours, minutes, seconds
            };
        }

        const startTimer = (e) => {
            let { total, hours, minutes, seconds }
                = getTimeRemaining(e);
            if (total >= 0) {

                // update the timer
                // check if less than 10 then we need to 
                // add '0' at the beginning of the variable
                setTimer(
                    (hours > 9 ? hours : '0' + hours) + ':' +
                    (minutes > 9 ? minutes : '0' + minutes) + ':'
                    + (seconds > 9 ? seconds : '0' + seconds)
                )
            }
        }

        const clearTimer = (e) => {

            // If you adjust it you should also need to
            // adjust the Endtime formula we are about
            // to code next    
            setTimer('00:00:10');

            // If you try to remove this line the 
            // updating of timer Variable will be
            // after 1000ms or 1sec
            if (Ref.current) clearInterval(Ref.current);
            const id = setInterval(() => {
                startTimer(e);
            }, 1000)
            Ref.current = id;
        }

        const getDeadTime = () => {
            let deadline = new Date();

            // This is where you need to adjust if 
            // you entend to add more time
            deadline.setSeconds(deadline.getSeconds() + 100000);
            return deadline;
        }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

        return (
            <>
                <div className="section_body swiper_artists sp-bottm2x sp-top-1 overflow-hidden mr-left mr-right">
                    <Slider {...settings}>
                        {slider.map((slider) => (
                            <>
                                <div className="mx-2 space-x-10" style={{ background: "#f5a2a7", width: "21rem", height:"20rem", borderRadius:"10px"}} >
                                    <div className="space-x-10 d-flex" style={{ flexDirection:"column", alignItems: "center"}} >
                                        <div className="w-100 h-100" style={{position:"relative"}}>
                                            <Link to="#">
                                                <img
                                                    src={slider.img}
                                                    alt="Avatar"
                                                    className=" d-flex align-item-center justify-content-center"
                                                    style={{ borderRadius: "10px", width: "21rem", height: "20rem", alignItems: "center"}}
                                                />
                                            </Link>
                                        </div>
                                        <div className="" style={{position: "absolute", bottom: "0", left: "0"}}>
                                            <Link to="#">
                                                <img
                                                    src={slider.img}
                                                    alt="Avatar"
                                                    className=" d-flex align-item-center justify-content-center"
                                                    style={{ borderRadius: "10px", width: "2rem", height: "2rem", alignItems: "center", border:"2px solid white" }}
                                                />
                                            </Link>
                                            <div className="my-3">
                                                <h2 style={{color:"white"}}>
                                                    Best Nft 
                                                </h2>
                                            </div>
                                            <div className="m-1">
                                                <img
                                                    src={slider.img2}
                                                    alt=""
                                                    className="avatar avatar-sm border-0"
                                                    style={{
                                                        width: "1.3rem",
                                                        height: "1.3rem",
                                                    }}
                                                />
                                            </div>

                                            <div className="my-3 d-flex ">
                                                <h6 style={{ color: "white" }}>
                                                    Created By {slider.name}
                                                </h6>
                                                <img
                                                    src={slider.img2}
                                                    alt=""
                                                    className="avatar ms-2 avatar-sm border-0"
                                                    style={{
                                                        width: "1.3rem",
                                                        height: "1.3rem",
                                                    }}
                                                />
                                            </div>
                                            <div className="my-3 d-flex ">
                                                <h6 style={{ color: "white" }}>
                                                    6,500 items: {slider.price}
                                                </h6>
                                            </div>
                                            <Link to="#" className="d-flex">
                                                <h2 style={{ color: "white" }}>
                                                <span>Session Ends in: </span>
                                                </h2>
                                                <h1 className="avatars_name" style={{color:"white"}}>
                                                    {timer}
                                                </h1>
                                            </Link>
                                           </div>
                                    </div>
                                </div>
                                {"\u00A0"}
                            </>
                        ))}
                    </Slider>
                </div>
            </>
        );
    // }
}
