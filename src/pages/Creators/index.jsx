import React, { useEffect } from 'react'
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar14, avatar13, avatar15, cover1, cover2, cover3, cover4, cover5, cover6 } from '../../img'
import { RiSearchLine } from 'react-icons/ri';
import "./creator.css";
import { Link } from 'react-router-dom';
// (function () {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(".creators_anim1", {
//         x: 500,
//         duration: 3,
//         scrollTrigger: {
//             trigger: ".dribbble_svg",
//             scrub: true
//         }
//     });

//     gsap.to(".creators_anim2", {
//         x: -500,
//         duration: 3,
//         scrollTrigger: {
//             trigger: ".dribbble_svg",
//             scrub: true
//         }
//     });

//     gsap.to(".creators_anim3", {
//         x: 500,
//         duration: 3,
//         scrollTrigger: {
//             trigger: ".dribbble_svg",
//             scrub: true
//         }
//     });

// }());
const Creators = (props) => {
// props.setNav(true)
  props.set(true);

  const cards = [
    { img: avatar1, to: "profile.html", no: "1", ava_name: "@jimena_stark", text: "4 sales on 14.28 ETH" },
    { img: avatar2, to: "profile.html", no: "2", ava_name: "@makinzi_beck", text: "16 sales on 8.04 ETH" },
    { img: avatar5, to: "profile.html", no: "3", ava_name: "@jaxon_duffy", text: "4 sales on 12.53 ETH" },
    { img: avatar9, to: "profile.html", no: "4", ava_name: "@darian_barry", text: "62 sales on 7.26 ETH" },
  ];
  const sliderrow = [
    { link: "profile.html", image: avatar1, a_name: "@xander_hall...", price: "16.58 ETH" },
    { link: "profile.html", image: avatar2, a_name: "@hamza_pitts...", price: "14.55 ETH" },
    { link: "profile.html", image: avatar3, a_name: "@nathan_walls...", price: "24.13 ETH" },
    { link: "profile.html", image: avatar4, a_name: "@kelton_collier...", price: "62.68 ETH" },
    { link: "profile.html", image: avatar5, a_name: "@cade_glover...", price: "32.48 ETH" },
    { link: "profile.html", image: avatar1, a_name: "@teagan_poole...", price: "50.02 ETH" },
    { link: "profile.html", image: avatar2, a_name: "@austin_rivera...", price: "9.99 ETH" },
    { link: "profile.html", image: avatar3, a_name: "@jeremy_shah...", price: "52.58 ETH" },
    { link: "profile.html", image: avatar4, a_name: "@joel_reese...", price: "14.58 ETH" },
    { link: "profile.html", image: avatar5, a_name: "@anton_wright...", price: "12.24 ETH" },
  ];
  const slidersecond = [
    { link: "profile.html", image: avatar1, a_name: "@xander_hall...", price: "16.58 ETH" },
    { link: "profile.html", image: avatar2, a_name: "@hamza_pitts...", price: "14.55 ETH" },
    { link: "profile.html", image: avatar3, a_name: "@nathan_walls...", price: "24.13 ETH" },
    { link: "profile.html", image: avatar4, a_name: "@kelton_collier...", price: "62.68 ETH" },
    { link: "profile.html", image: avatar5, a_name: "@cade_glover...", price: "32.48 ETH" },
    { link: "profile.html", image: avatar1, a_name: "@teagan_poole...", price: "50.02 ETH" },
    { link: "profile.html", image: avatar2, a_name: "@austin_rivera...", price: "9.99 ETH" },
    { link: "profile.html", image: avatar3, a_name: "@jeremy_shah...", price: "52.58 ETH" },
    { link: "profile.html", image: avatar4, a_name: "@joel_reese...", price: "14.58 ETH" },
    { link: "profile.html", image: avatar5, a_name: "@anton_wright...", price: "12.24 ETH" },
  ];
  const sliderthird = [
    { link: "profile.html", image: avatar1, a_name: "@xander_hall...", price: "16.58 ETH" },
    { link: "profile.html", image: avatar2, a_name: "@hamza_pitts...", price: "14.55 ETH" },
    { link: "profile.html", image: avatar3, a_name: "@nathan_walls...", price: "24.13 ETH" },
    { link: "profile.html", image: avatar4, a_name: "@kelton_collier...", price: "62.68 ETH" },
    { link: "profile.html", image: avatar5, a_name: "@cade_glover...", price: "32.48 ETH" },
    { link: "profile.html", image: avatar1, a_name: "@teagan_poole...", price: "50.02 ETH" },
    { link: "profile.html", image: avatar2, a_name: "@austin_rivera...", price: "9.99 ETH" },
    { link: "profile.html", image: avatar3, a_name: "@jeremy_shah...", price: "52.58 ETH" },
    { link: "profile.html", image: avatar4, a_name: "@joel_reese...", price: "14.58 ETH" },
    { link: "profile.html", image: avatar5, a_name: "@anton_wright...", price: "12.24 ETH" },
  ];

  const allcreator = [
    { link: "Profile.html", cover: cover1, avatar: avatar5, price: "191 ETH", type: "Sold", collection: "345", collectionText: "Collection", viewNumber: "17,005", viewText: "Views" },
    { link: "Profile.html", cover: cover2, avatar: avatar6, price: "142 ETH", type: "Sold", collection: "255", collectionText: "Collection", viewNumber: "14,005", viewText: "Views" },
    { link: "Profile.html", cover: cover3, avatar: avatar7, price: "150 ETH", type: "Sold", collection: "455", collectionText: "Collection", viewNumber: "20,005", viewText: "Views" },
    { link: "Profile.html", cover: cover4, avatar: avatar8, price: "87 ETH", type: "Sold", collection: "142", collectionText: "Collection", viewNumber: "23,575", viewText: "Views" },
    { link: "Profile.html", cover: cover5, avatar: avatar9, price: "198 ETH", type: "Sold", collection: "321", collectionText: "Collection", viewNumber: "12,024", viewText: "Views" },
    { link: "Profile.html", cover: cover6, avatar: avatar10, price: "198 ETH", type: "Sold", collection: "345", collectionText: "Collection", viewNumber: "12,053", viewText: "Views" },
  ]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* section1 in creator page */}
      <div className="hero__creators">
        <div className="container">
          <div className="row mx-4 align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="space-y-20">
                <h1>Popular Creators</h1>
                <p className="hero__text">
                  I make art with the simple goal of giving you something
                  pleasing to
                  look at for a few seconds.
                </p>
              </div>
            </div>
            <div className="col-lg-auto">
              <Link className="btn btn-dark" to="/walletconnect"> be
                one of our creators
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* section2 in creator page */}
      <div className="container">
        <div className="row mx-4">
          {/* {cards.map((card) =>
                        <div className="col-lg-3">
                            <div className="creator_item creator_card-d bg-white border-0 space-y-10 is_big">
                                <div className="avatars flex-column space-y-10">
                                    <div className="media has_border">
                                        <Link to={card.to}>
                                            <img src={card.img}
                                                alt="Avatar" className="avatar-md creator-avator border-2 border border-white" style={{height:"4rem"}} />
                                        </Link>
                                        <div className="has_number">
                                            {card.no}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Link to="Profile.html">
                                            <p className="avatars_name large color_black" style={{marginBottom:"-0.4rem"}}>{card.ava_name}</p>
                                        </Link>
                                        <span className="sales color_text">{card.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}*/}
        </div>
      </div>

      {/* section3 in creator page */}
      <div className="section__creators mt-100" style={{ maxWidth: "100%" }}>
        <div className="container">
          <div className="space-y-30">

            <div className="section_head">
              <h2 className="section__title text-center">Popular Creators</h2>
            </div>

            <div className=" space-y-20" style={{ position: "relative", maxWidth: "90%" }}>

              <div className="d-flex space-x-10 justify-content-center creators_anim1" style={{ maxWidth: "90%" }} >
                {sliderrow.map((slide) =>
                  <div className="creator_item creator_card space-x-10">
                    <div className="avatars space-x-10">
                      <Link to={slide.link}>
                        <img
                          src={slide.image}
                          alt="Avatar" className="avatar-md rounded-circle out" style={{ height: "60px", width: "60px" }} />
                      </Link>
                      <div>
                        <Link to={slide.link}>
                          <p className="avatars_name color_black">{slide.a_name}</p>
                        </Link>
                        <span className="price color_green">{slide.price}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="-ml-70  creators_anim2" style={{ maxWidth: "90%" }}>
                <div className="d-flex space-x-10 justify-content-center">
                  {slidersecond.map(
                    (slide) =>
                      <div className="creator_item creator_card space-x-10">
                        <div className="avatars space-x-10">
                          <Link to={slide.link}>
                            <img
                              src={slide.image}
                              alt="Avatar" className="avatar-md rounded-circle out" style={{ height: "60px", width: "60px" }} />
                          </Link>
                          <div>
                            <Link to={slide.link}>
                              <p className="avatars_name color_black">{slide.a_name}</p>
                            </Link>
                            <span className="price color_green">{slide.price}</span>
                          </div>
                        </div>
                      </div>
                  )}
                </div>
              </div>
              <div className="d-flex space-x-10 justify-content-center creators_anim3" style={{ maxWidth: "90%" }}>
                <div className="d-flex space-x-10 justify-content-center">
                  {sliderthird.map(
                    (slide) =>
                      <div className="creator_item creator_card space-x-10">
                        <div className="avatars space-x-10">
                          <Link to={slide.link}>
                            <img
                              src={slide.image}
                              alt="Avatar" className="avatar-md rounded-circle out" style={{ height: "60px", width: "60px" }} />
                          </Link>
                          <div>
                            <Link to={slide.link}>
                              <p className="avatars_name color_black">{slide.a_name}</p>
                            </Link>
                            <span className="price color_green">{slide.price}</span>
                          </div>
                        </div>
                      </div>
                  )}

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* section4 in creator page */}
      <div className="section__creators mt-100">
        <div className="container">
          <div className="space-y-30">
            <div className="section_head">
              <div className="row justify-content-between align-items-center">

                <div className="col-lg-auto">
                  <h2 className="section__title">Discover all Creators</h2>
                </div>

                <div className="col-lg-4">
                  <div className="search">
                    <input type="text" placeholder="Search" className="b_white" />
                    <button className="result">
                      <RiSearchLine />
                    </button>
                  </div>
                </div>

                <div className="col-lg-auto">
                  <div className="dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Recent Active
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">Action</Link>
                      <Link className="dropdown-item" to="#">Another action</Link>
                      <Link className="dropdown-item" to="#">Something else here</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="section__body space-y-20">
              <div className="row mb-20_reset">
                {allcreator.map((creator) =>

                  <div className="col-lg-4">
                    <div className="creator_item creator_card space-y-20 mb-20">
                      <div className="avatars flex-column space-y-10">
                        <div style={{
                          background: "#183b56", borderRadius: "10px 10px 0 0", marginBottom: "-50px", overflow: "hidden", width: '100%', height: '90px'
                        }}>

                          <img src={creator.cover} alt="Avatar" className="img-fluid" />
                        </div>
                        <div className="media">
                          <Link to="Profile.html">
                            <img src={creator.avatar} alt="Avatar" className="avatar" />
                          </Link>
                        </div>
                        <div className="details-av text-center">
                          <div>
                            <p className="color_black txt">{creator.price}
                            </p>
                            <p className="color_black txt_sm">{creator.type}</p>
                          </div>
                          <div>
                            <p className="color_black txt">{creator.collection}</p>
                            <p className="color_black txt_sm">{creator.collectionText}</p>
                          </div>
                          <div>
                            <p className="color_black txt">{creator.viewNumber}</p>
                            <p className="color_black txt_sm">{creator.viewText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Creators
