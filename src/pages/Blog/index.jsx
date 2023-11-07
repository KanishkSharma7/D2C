import React from 'react'
import { Link } from 'react-router-dom'
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  post_1,
  post_2,
  post_3,
  post_4,
  post_5,
  post_6,
} from '../../img'
import './blog.css'
export const Blog = (props) => {
  // props.setNav(true);
  props.set(true);

  const blog = [
    {
      url: '/artical',
      post: `${post_1}`,
      heading: 'Design Trends From Top Designers',
      para:
        'creabik is a digital design platform that combines a powerful, native Mac app with collaboration features in the cloud. The Mac app gives all the tools you need to',
      avater: `${avatar1}`,
      name: 'Joshua William',
      description: 'Verified Writer',
      date: '08 May',
    },
    {
      url: '/artical',
      post: `${post_2}`,
      heading: 'Behind the Scenes of the creabik App',
      para:
        'There was this general idea that the existent tools were not tailored for UI/UX design, pair it with a strong codebase that creabik was,',
      avater: `${avatar2}`,
      name: 'Joshua William',
      description: 'Verified Writer',
      date: '08 May',
    },
    {
      url: '/artical',
      post: `${post_3}`,
      heading: 'the official repository for designs',
      para:
        'I think my role back then was doing everything! Haha, we were a two-man team for quite a while. I focused a lot of my time in design,',
      avater: `${avatar3}`,
      name: 'Joshua William',
      description: 'Verified Writer',
      date: '08 May',
    },
    {
      url: '/artical',
      post: `${post_4}`,
      heading: 'Meet fennouni, Product Designer at GitHub',
      para:
        'We felt frustrated that there was no product that focused specifically on interface design and we wanted to change that. ',
      avater: `${avatar4}`,
      name: 'Joshua William',
      description: 'Verified Writer',
      date: '08 May',
    },
    {
      url: '/artical',
      post: `${post_5}`,
      heading: 'Simple, beautiful interfaces are the future',
      para:
        'hosting events, creating content and promoting the tool — and the creabik community started blowing up.',
      avater: `${avatar5}`,
      name: 'Joshua William',
      description: 'Verified Writer',
      date: '08 May',
    },
    {
      url: '/artical',
      post: `${post_6}`,
      heading: 'The Winner of the Vice Presidential Debate',
      para:
        'I don&#x27;t think there was any one tool that was the inspiration for creabik. We knew what we wanted to build, and I wanted an app ',
      avater: `${avatar6}`,
      name: 'Joshua William',
      description: 'Verified Writer',
      date: '08 May',
    },
  ]

  const socialLink = [
    { icon: 'ri-facebook-box-line', url: '', css: 'social_link facebook' },
    { icon: 'ri-dribbble-line', url: '', css: 'social_link dribbble' },
    { icon: 'ri-youtube-line', url: '', css: 'social_link youtube' },
    { icon: 'ri-twitter-line', url: '', css: 'social_link twitter' },
  ]
  const RecentArticals = [
    {
      review: 'Review Of Photoshop CC Editing Techniques',
      date: 'may 25, 2015',
      link: '',
    },
    {
      review: 'Drone Powered By AI Can Detect Obstacles',
      date: 'may 25, 2015',
      link: '',
    },
    {
      review: '5 Ways Animals Will Help You Get More Business',
      date: 'may 25, 2015',
      link: '',
    },
    {
      review: 'Top 5 Unheard Interesting Facts About Basketball',
      date: 'may 25, 2015',
      link: '',
    },
  ]
  const Cat_Item = [
    {title:"About us", url:""},
    {title:"Business", url:""},
    {title:"General", url:""},
    {title:"Knowledge Base", url:""},
  ]
  const Tags = [
    {url:"#", title:"NFT"},
    {url:"#", title:"DTOC"},
    {url:"#", title:"btc"},
    {url:"#", title:"crypto"},
    {url:"#", title:"bankrupt"},
    {url:"#", title:"advantages"},
    {url:"#", title:"mint"},
    {url:"#", title:"creabik"},
    {url:"#", title:"design"},
    {url:"#", title:"envato"},
    {url:"#", title:"analitics"},
    {url:"#", title:"ceo"},
    {url:"#", title:"great"},
    {url:"#", title:"post"},
    {url:"#", title:"vlogs"},
    {url:"#", title:"daily work"},
  ]
  return (
    <>
      <div className="body">
        <div className="overflow-hidden">
          <div className="hero_forum bg_white">
            <div className="Blog_container_card">
              <div className="row align-items-center sm:space-y-20">
                <div className="col-lg-6 col-md-6 col-sm-12 space-y-10">
                  <h1 className="text-left">Latest News</h1>
                  <p>
                    You can set preferred display name, create your profile URL
                    and manage other personal settings.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="search m-auto p-2" style={{ maxWidth: '400px' }}>
                    <input type="text" classname="" placeholder="Forum Blog" />
                    <button className="result">
                      <i className="ri-search-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main className="mt-10">
            <div className="Blog_container_card">
              <div className="main" id="main-content">
                {/* <!-- ================================= blog --> */}
                <div className="row">
                  <div className="col-lg-8 pr-sm-0 pl-sm-0">
                    <div id="content">
                      <div className="continer">
                        <div className="row">
                          {blog.map((data) => (
                            <>
                              <div className="col-lg-6"
                              >
                                <div id="fdsa" className="blog dddd has_style_grid"
                                  // style={{ backgroundColor: "#0b1b27" }}
                                >
                                  <div className="row align-items-center">
                                    <div className="col-row col-12">
                                      <div
                                        className="blog-img"
                                        style={{
                                          width: '100%',
                                          marginLeft: '-3rem',
                                          marginTop: '-3rem',
                                        }}
                                      >
                                        <div className="meta absolute">
                                          <Link
                                            to="#"
                                            className="comments meta-info mobile"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24
                                                                                                                                                                                        			                                                                24"
                                              width="24"
                                              height="24"
                                            >
                                              <path
                                                fill="none"
                                                d="M0
                                                                                                                                                                                                			                                                                    0h24v24H0z"
                                              ></path>
                                              <path
                                                d="M2
                                                                                                                                                                                                			                                                                    8.994A5.99
                                                                                                                                                                                                			                                                                    5.99 0 0 1 8
                                                                                                                                                                                                			                                                                    3h8c3.313 0
                                                                                                                                                                                                			                                                                    6 2.695 6
                                                                                                                                                                                                			                                                                    5.994V21H8c-3.313
                                                                                                                                                                                                			                                                                    0-6-2.695-6-5.994V8.994zM14
                                                                                                                                                                                                			                                                                    11v2h2v-2h-2zm-6
                                                                                                                                                                                                			                                                                    0v2h2v-2H8z"
                                              ></path>
                                            </svg>
                                            <span className="comment-count">
                                              1
                                            </span>
                                          </Link>

                                          <span
                                            className="views-counter
                                                                                                                                                                                        			                                                            meta-info mobile
                                                                                                                                                                                        			                                                            comments"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24
                                                                                                                                                                                        			                                                                24"
                                              width="24"
                                              height="24"
                                            >
                                              <path
                                                fill="none"
                                                d="M0
                                                                                                                                                                                                			                                                                    0h24v24H0z"
                                              ></path>
                                              <path
                                                d="M12
                                                                                                                                                                                                			                                                                    23a7.5 7.5 0
                                                                                                                                                                                                			                                                                    0
                                                                                                                                                                                                			                                                                    1-5.138-12.963C8.204
                                                                                                                                                                                                			                                                                    8.774 11.5
                                                                                                                                                                                                			                                                                    6.5 11 1.5c6
                                                                                                                                                                                                			                                                                    4 9 8 3 14 1
                                                                                                                                                                                                			                                                                    0 2.5 0
                                                                                                                                                                                                			                                                                    5-2.47.27.773.5
                                                                                                                                                                                                			                                                                    1.604.5
                                                                                                                                                                                                			                                                                    2.47A7.5 7.5
                                                                                                                                                                                                			                                                                    0 0 1 12
                                                                                                                                                                                                			                                                                    23z"
                                              ></path>
                                            </svg>
                                            5480
                                          </span>
                                          <div
                                            className="min-read
                                                                                                                                                                                			                                                            meta-info"
                                            title="3
                                                                                                                                                                                        			                                                            Min Read"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24
                                                                                                                                                                                        			                                                                24"
                                              width="24"
                                              height="24"
                                            >
                                              <path
                                                fill="none"
                                                d="M0
                                                                                                                                                                                                			                                                                    0h24v24H0z"
                                              ></path>
                                              <path
                                                d="M6.382
                                                                                                                                                                                                			                                                                    5.968A8.962
                                                                                                                                                                                                			                                                                    8.962 0 0 1
                                                                                                                                                                                                			                                                                    12 4c2.125 0
                                                                                                                                                                                                			                                                                    4.078.736
                                                                                                                                                                                                			                                                                    5.618
                                                                                                                                                                                                			                                                                    1.968l1.453-1.453
                                                                                                                                                                                                			                                                                    1.414
                                                                                                                                                                                                			                                                                    1.414-1.453
                                                                                                                                                                                                			                                                                    1.453a9 9 0
                                                                                                                                                                                                			                                                                    1 1-14.064
                                                                                                                                                                                                			                                                                    0L3.515
                                                                                                                                                                                                			                                                                    5.93l1.414-1.414
                                                                                                                                                                                                			                                                                    1.453
                                                                                                                                                                                                			                                                                    1.453zM13
                                                                                                                                                                                                			                                                                    12V7.495L8
                                                                                                                                                                                                			                                                                    14h3v4.5l5-6.5h-3zM8
                                                                                                                                                                                                			                                                                    1h8v2H8V1z"
                                              ></path>
                                            </svg>
                                            3
                                          </div>
                                        </div>
                                        <img
                                          className="m-5"
                                          width={100}
                                          src={data.post}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className=" col-row col-12">
                                      <div className="blog-wrap">
                                        <h3 className="blog-title">
                                          <Link to={data.url}>
                                            {data.heading}{' '}
                                          </Link>
                                        </h3>
                                        <p className="blog-excerpt">
                                          {data.para}{' '}
                                        </p>
                                        <div
                                          className="blog-author-detail
                                                                                                                                                                                			                                                        d-flex
                                                                                                                                                                                			                                                        justify-content-between
                                                                                                                                                                                			                                                        align-items-center"
                                        >
                                          <div
                                            className="c-customer-review-meta
                                                                                                                                                                                        			                                                            d-flex
                                                                                                                                                                                        			                                                            justify-content-start
                                                                                                                                                                                        			                                                            align-items-center"
                                          >
                                            <div className="user">
                                              <img
                                                src={data.avater}
                                                alt="avatar"
                                                className="avatar
                                                                                                                                                                                                        			                                                                    avatar-sm
                                                                                                                                                                                                        			                                                                    rounded-circle"
                                              />
                                            </div>
                                            <div
                                              className="meta
                                                                                                                                                                                                			                                                                pl-20"
                                            >
                                              <p className="name">
                                                {data.name}{' '}
                                              </p>
                                              <p className="author-post">
                                                {data.description}{' '}
                                              </p>
                                            </div>
                                          </div>
                                          <span
                                            className="font-semibold
                                                                                                                                                                                        			                                                            text-gray"
                                          >
                                            {data.date}{' '}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                          {/* <div c */}{' '}
                        </div>
                        <div className="d-flex justify-content-center pt-30">
                          <ul className="pagination">
                            <li className="page-item" id="fdsa">
                              <Link className="page-link" to="#!" id="fdsa">
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                id="fdsa"
                                className="page-link is-active"
                                to="#!"
                              >
                                2
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" id="fdsa" to="#!">
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" id="fdsa" to="#!">
                                <i
                                  className="ri-arrow-right-s-line md
                                                                                                                                        			                                                hydrated"
                                  role="img"
                                  aria-label="chevron forward
                                                                                                                                        			                                                outline"
                                ></i>{' '}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <aside className="blog_sidebar">
                      <div className="widget" id="fdsa">
                        <h3 className="widget-title">
                          Let’s connect
                        </h3>
                        <div className="widget-wrap">
                          <div className="social-widget">
                            {socialLink.map((data) => (
                              <>
                                <Link to={data.url}>
                                  <div className={`${data.css}`}>
                                    <i className={`${data.icon}`}></i>
                                  </div>
                                </Link>
                              </>
                            ))}
                            {/* <Link to="#">
                              <div className="social_link dribbble">
                                <i className="ri-dribbble-line"></i>
                              </div>
                            </Link>
                            <Link to="#">
                              <div className="social_link youtube">
                                <i className="ri-youtube-line"></i>
                              </div>
                            </Link>
                            <Link to="#">
                              <div className="social_link twitter">
                                <i className="ri-twitter-line"></i>
                              </div>
                            </Link> */}
                          </div>
                        </div>
                      </div>
                      <div className="widget" id="fdsa">
                        <h3 className="widget-title text-dark">
                          Recent Articles
                        </h3>
                        <div className="widget-wrap">
                          <div className="Recent_Articles-widget">
                            {/* <!-- Slider main container --> */}
                            <div className="swiper-container sidebar_posts">
                              {/* <!-- Additional required wrapper --> */}
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  {/* <!-- Slides --> */}
                                  {RecentArticals.map((data) => (
                                    <>
                                      <article className="item">
                                        {/* <Link to="#" className="thumb hover-effect">
                                      <img
                                                                              src="src/img/small_post/404.html"
                                                                              alt="" />{' '}
                                    </Link> */}
                                        <div className="info">
                                          <h6 className="titl">
                                            <Link className to={`${data.url}`}>
                                              <span>
                                              {data.review}
                                              </span>
                                            </Link>
                                          </h6>
                                          <div className="time">
                                            {data.date}
                                          </div>
                                        </div>
                                      </article>
                                    </>
                                  ))}
                                </div>
                                <div className="swiper-slide">
                                  {/* <!-- Slides --> */}
                                  {RecentArticals.map((data) => (
                                    <>
                                      <article className="item">
                                        {/* <Link to="#" className="thumb hover-effect">
                                      <img
                                                                              src="src/img/small_post/404.html"
                                                                              alt="" />{' '}
                                    </Link> */}
                                        <div className="info">
                                          <h4 className="title">
                                            <Link to={`${data.url}`}>
                                              {data.review}
                                            </Link>
                                          </h4>
                                          <div className="time">
                                           1 {data.date}
                                          </div>
                                        </div>
                                      </article>
                                    </>
                                  ))}
                                  
                                </div>
                              </div>
                              {/* <!-- If we need navigation buttons --> */}
                              <div className="swiper-buttons-styling">
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- ============== widget --> */}

                      <div className="widget" id="fdsa">
                        <h3 className="widget-title">Stay updated</h3>
                        <small className="mb-20">
                          Don’t miss our newest business blog posts. Sign up for
                          the newsletter!
                        </small>
                        <div className="widget-wrap">
                          <input
                            type="email"
                            className="form-control mt-10 mb-20"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                          <Link
                            to=""
                            className="btn w-100 btn-secondary sweep_letter sweep_top"
                          >
                            <div className="inside_item">
                              <span data-hover="Join with us!">
                                {' '}
                                Join with us!{' '}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* <!-- ============== widget --> */}

                      <div className="widget" id="fdsa">
                        <h3 className="widget-title">Categories</h3>
                        <div className="widget-wrap">
                          <ul>
                            {Cat_Item.map((data)=>(<>
                            <li className="cat-item" style={{
                                color: "#0b1b27",
                                listStyle: "none",
                                paddingBottom: " 10px",
                                borderBottom: "solid 1px #f9fbfc",
                                marginBottom: "10px" 
                            }}>
                              <Link to={`${data.url}`}>{data.title}</Link>
                            </li>
                            </>))}
                          </ul>
                        </div>
                      </div>
                      {/* <!-- ============== widget --> */}

                      <div className="widget" id="fdsa">
                        <h3 className="widget-title">Tags</h3>

                        <div className="widget-wrap">
                          <div className="tag_cloud">
                            {Tags.map((data)=>(
                              <>
                            <Link rel="nofollow" to={`${data.url}`}>
                              {data.title}
                            </Link>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
