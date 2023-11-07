import React from 'react'
import { Link } from 'react-router-dom'
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, item1, item4, item3, item2, item5, item6, item7, item8 } from '../../img'

const LiveBid = () => {
    const LiveAction = [
        { avatar:  avatar1 , avatar2:avatar2, avatar1Link: "", avatar21Link: "/", link: "/", name1: "@mickel_fenn", name2: "@danil_pannini", itemImg: item1 , itemLink: "/", likeLink: "", likeCount:'1.2k', cardName: "Colorful Abstract Painting", cardNameLink:"", stockCount:"4 in stock", stockPrizeLink:"", stockType:"2.45 ETH", historyLink:"", plceBidLink:""  },
        { avatar: avatar3, avatar2: avatar4, avatar1Link: "", avatar21Link: "/", link: "/", name1: "@mazanov_sky", name2: "@mucky_fennouni", itemImg: item2, itemLink: "/", likeLink: "", likeCount: '13.2k', cardName: "The girl with the firefly", cardNameLink: "", stockCount: "12 in stock", stockPrizeLink: "", stockType:"2.55 ETH", historyLink:"", plceBidLink:""  },
        { avatar: avatar5, avatar2: avatar6, avatar1Link: "", avatar21Link: "/", link: "/", name1: "@jimmy_dom", name2: "@kristian_sefroui", itemImg: item3, itemLink: "/", likeLink: "", likeCount: '1.2k', cardName: "Dodo hide the seek", cardNameLink:"", stockCount:"6 in stock", stockPrizeLink:"", stockType:"2.45 ETH", historyLink:"", plceBidLink:""  },
        { avatar: avatar7, avatar2: avatar8, avatar1Link: "", avatar21Link: "/", link: "/", name1: "@Alvin_nov", name2: "@mucky_holiman", itemImg: item4, itemLink: "/", likeLink: "", likeCount: '4.1k', cardName: "Liquid Forest Princess", cardNameLink:"", stockCount:"34 in stock", stockPrizeLink:"", stockType:"0.45 ETH", historyLink:"", plceBidLink:""  },
        { avatar: avatar9, avatar2: avatar10, avatar1Link: "", avatar21Link: "/", link: "/", name1: "@stivan_rominok", name2: "@danil_pan", itemImg: item5, itemLink: "/", likeLink: "", likeCount: '6.4k', cardName: "Spider Eyes Modern Art", cardNameLink: "", stockCount:"7 in stock", stockPrizeLink:"", stockType:"1.45 ETH", historyLink:"", plceBidLink:""  },
        { avatar: avatar11, avatar2: avatar12, avatar1Link: "", avatar21Link: "/", link: "/", name1: "@mazanov_sky", name2: "@mucky_art", itemImg: item6, itemLink: "/", likeLink: "", likeCount: '13.2k', cardName: "Synthwave Painting", cardNameLink:"", stockCount:"2 in stock", stockPrizeLink:"", stockType:"0.055 ETH", historyLink:"", plceBidLink:""  },
        { avatar: avatar1, avatar2: avatar2, avatar1Link: "", avatar21Link: "/", link: "/", name1: "@jimmy_dom", name2: "@kristian_fel", itemImg: item7, itemLink: "/", likeLink: "", likeCount: '1.6k', cardName: "Contemporary Abstract", cardNameLink:"", stockCount:"34 in stock", stockPrizeLink:"", stockType:"0.95 ETH", historyLink:"", plceBidLink:""  },
        { avatar: avatar8, avatar2: avatar4, avatar1Link: "", avatar21Link: "/", link: "/", name1: "@Alvin_nov", name2: "@mucky_art", itemImg: item8, itemLink: "/", likeLink: "", likeCount: '11.5k', cardName: "Valkyrie Abstract Art", cardNameLink:"", stockCount:"9 in stock", stockPrizeLink:"", stockType:"3.54 ETH", historyLink:"", plceBidLink:""  },
    ]
  return (
    // <div className="body">
      <div className="row">
          {LiveAction.map((data) => (
          <>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card__item four">
                  <div className="card_body space-y-10">
                      {/* <!-- =============== --> */}
                      <div className="creators space-x-10">
                          <div className="avatars space-x-3">
                              <Link to={`${data.avatar1Link}`} className="width-100 height-100">
                                  <img
                                      src={data.avatar}
                                      alt="Avatar"
                                    //   width={100}
                                    //   height={100}
                                    //   style={{height:"1000px"}}
                                      className="avatar avatar-sm" />
                              </Link>
                                      <Link to={`${data.avatar1Link}`}>
                                  <p className="avatars_name txt_xs">{data.name1}</p>
                              </Link>
                          </div>
                          <div className="avatars space-x-3">
                                      <Link to={`${data.avatar2Link}`}>
                                  <img
                                      src={data.avatar2}
                                      alt="Avatar"
                                      className="avatar avatar-sm" />
                              </Link>
                                      <Link to={`${data.avatar2Link}`}>
                                  <p className="avatars_name txt_xs">{data.name2}</p>
                              </Link>
                          </div>
                      </div>
                      <div className="card_head">
                                  <Link to={`${data.link}`}>
                              <img
                                          src={data.itemImg}
                                  alt="item
												img" />
                              </Link>
                                  <Link to={`${data.likeLink}`} className="likes space-x-3">
                              <i className="ri-heart-3-fill"></i>
                              <span className="txt_sm">{data.likeCount}</span>
                          </Link>
                      </div>
                      {/* <!-- =============== --> */}

                      <h6 className="card_title">
                          <Link to="color_black"
                              href="Item-details.html">
                              {data.cardName}
                          </Link>
                      </h6>
                      <div className="card_footer d-block space-y-10">
                          <div className="card_footer justify-content-between">
                              <div className="creators">
                                  <p className="txt_sm">4 in stock</p>
                              </div>
                                      <Link to={`${data.stockPrizeLink}`} className="">
                                  <p className="txt_sm">
                                      Price: <span className="color_green txt_sm">{data.stockType}</span>
                                  </p>
                              </Link>
                          </div>
                          <div className="hr"></div>
                          <div className="d-flex
											align-items-center
											space-x-10
											justify-content-between">
                              <div className="d-flex align-items-center
												space-x-5">
                                  <i className="ri-history-line"></i>
                                          <Link to={`${data.historyLink}`} data-toggle="modal"
                                      data-target="#popup_history">
                                      <p className="color_text txt_sm
														view_history" style={{width:"auto"}}>
                                          View History
                                      </p>
                                  </Link>
                              </div>
                                      <Link className="btn btn-sm btn-primary" to={`${data.plceBidLink}`}
                                  data-toggle="modal"
                                  data-target="#popup_bid">Place Bid</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
          ))}
      </div>
    // </div>
  )
}

export default LiveBid