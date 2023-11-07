import React, { useEffect, useState } from 'react'
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
    mintNFT,
    CS,
    CS1,
    CS2,
    CS3,
    CS4,
} from "../../img";
import { useRef } from 'react';
import "./launchpad.css"
const ComingSlider = () => {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1414,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1214,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1007,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            img: CS,
            name: "@xander_hall...",
            price: "16.58 ETH",
            img2: badge,
        },
        {
            img: CS1,
            name: "@hamza_pitts...",
            price: "14.55 ETH",
            img2: badge,
        },
        {
            img: CS2,
            name: "@nathan_walls...",
            price: "24.13 ETH",
            img2: badge,
        },
        {
            img: CS3,
            name: "@kelton_colier...",
            price: "62.68 ETH",
            img2: badge,
        },
        {
            img: CS4,
            name: "@cade_glover...",
            price: "32.48 ETH",
            img2: badge,
        },
        {
            img: CS,
            name: "@xander_hall...",
            price: "16.58 ETH",
            img2: badge,
        },
        {
            img: CS1,
            name: "@hamza_pitts...",
            price: "14.55 ETH",
            img2: badge,
        },
        {
            img: CS2,
            name: "@nathan_walls...",
            price: "24.13 ETH",
            img2: badge,
        },
        {
            img: CS3,
            name: "@kelton_colier...",
            price: "62.68 ETH",
            img2: badge,
        },
        {
            img: CS4,
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
            <div className=" overflow-hidden ">
                <div className='comingSoon'>
                    <h1 className='text-center comingSoon_header' style={{ textTransform: "capitalize", color: "white" }} >Featured Projects </h1>
                    <Slider {...settings}>
                        {slider.map((slider) => (
                            <>
                                <div className='mainComponent'>
                                    <div className="mainImg">
                                        <img src={slider.img} className='mainfeatureImg' alt="" />
                                    </div>
                                    <div className='secondaryDiv'>
                                        <h2 style={{ color: "white" }}>
                                            Codyfight IGO
                                        </h2>
                                        <span>
                                            <span>

                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            </span>
                                            <span className="codyfightText">
                                                Atque inventore, voluptas sint eveniet repellendus delectus?
                                            </span>
                                        </span>
                                        <div className='d-flex align-items-center justify-content-between m-2' style={{ borderRadius: "4px", background: "#183b56" }}>
                                            <span className='m-2'>
                                                Price {slider.price}
                                            </span>
                                            <span className='m-2'>
                                                Total sales : $32456
                                            </span>

                                        </div>
                                        <span style={{ fontWeight: "bold" }}>
                                            Sale end in
                                        </span>
                                        <div>
                                            <h2 style={{ color: "white" }}>{timer}</h2>
                                        </div>
                                    </div>
                                </div>
                                {"\u00A0"}
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ComingSlider
