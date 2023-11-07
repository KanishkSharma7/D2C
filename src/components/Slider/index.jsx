import React, { Component } from "react";
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
import "./slider.css";
import { Link } from "react-router-dom";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 300,
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
    return (
      <>
        <div className="section_head ">
          <h2 className="container section__title ">Top Artists</h2>
        </div>
        <div className="section_body swiper_artists sp-bottom2x sp-top-1 overflow-hidden mr-left mr-right">
          <Slider {...settings}>
            {slider.map((slider) => (
              <>
                <div className="creator_item mx-2 creator_card rounded_border space-x-10">
                  <div className="avatars space-x-10">
                    <div className="media">
                      <div className="badge">
                        <img
                          src={slider.img2}
                          alt=""
                          className="avatar avatar-sm border-0"
                          style={{
                            width: "1.3rem",
                            height: "1.3rem",
                            marginTop: "5rem",
                            background: "transparent",
                          }}
                        />
                      </div>
                      <Link to="#">
                        <img
                          src={slider.img}
                          alt="Avatar"
                          className="avatar avatar-md"
                          style={{ width: "5rem", height: "5rem" }}
                        />
                      </Link>
                    </div>
                    <div>
                      <Link to="#">
                        <p className="avatars_name color_black">
                          {slider.name}
                        </p>
                      </Link>
                      <span className="price color_green">{slider.price}</span>
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
  }
}
