import React from "react";
import { Link } from "react-router-dom";
import {
  article,
  avatar1,
  avatar11,
  avatar2,
  avatar3,
  avatar4,
} from "../../img";

const Artical = (props) => {
  props.set(true);
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
    { title: "About us", url: "" },
    { title: "Business", url: "" },
    { title: "General", url: "" },
    { title: "Knowledge Base", url: "" },
  ]
  const Tags = [
    { url: "#", title: "NFT" },
    { url: "#", title: "DTOC" },
    { url: "#", title: "btc" },
    { url: "#", title: "crypto" },
    { url: "#", title: "bankrupt" },
    { url: "#", title: "advantages" },
    { url: "#", title: "mint" },
    { url: "#", title: "creabik" },
    { url: "#", title: "design" },
    { url: "#", title: "envato" },
    { url: "#", title: "analitics" },
    { url: "#", title: "ceo" },
    { url: "#", title: "great" },
    { url: "#", title: "post" },
    { url: "#", title: "vlogs" },
    { url: "#", title: "daily work" },
  ]
  return (
    <>
      <div
        className="body"
        style={{
          // background: "#f5f2f5",
          marginBottom: "10rem",
        }}
      >
        <div className="container article_page pt-100">
          <div className="main row" id="main-content">  
            {/* <!-- ================================= Article --> */}
            <div className="col-lg-8">
              <div id="content">
                <div className="article_wrap mt-0">
                  <div className="content">
                    <img
                      className="mb-30 img-fluid w-full img_article"
                      alt=""
                      src={article}
                    />
                    <h1 className="mb-40">
                      {" "}
                      NFT is coming soon: join the waitlist today for early
                      access
                    </h1>

                    <div
                      className="blog-author-detail d-flex
			                            justify-content-between align-items-center"
                    >
                      <div
                        className="author-meta d-flex justify-content-start
			                                align-items-center"
                      >
                        <div className="user">
                          <img
                            src={avatar11}
                            alt="..."
                            className="avatar avatar-sm rounded-circle
			                                        w-full"
                          />
                        </div>

                        <div className="meta pl-20">
                          <p className="name color_brand">Joshua William</p>
                          <p className="author-post">Author </p>
                        </div>
                      </div>
                      <span className="font-semibold text-gray">02 May</span>
                    </div>
                    <div className="inner">
                      <div className="snippe">
                        <p>
                          <strong>Handshake release assets</strong>
                          &nbsp;validation metrics first mover advantage
                          ownership prototype. Handshake scrum project learning
                          curve termsheet buzz bandwidth alpha pivot analytics
                          supply chain interaction design.&nbsp;
                          <mark>
                            Niche market deployment metrics venture customer
                            funding buyer handshake twitter stock
                          </mark>
                          .&nbsp;Pitch analytics assets.
                        </p>
                        <p>
                          Attending a trade show can be a very effective method
                          of promoting your company and its products. And one of
                          the most effective ways to optimize your trade show
                          display and increase traffic to your booth is through
                          the use of banner stands.{" "}
                        </p>
                        <figure>
                          <figcaption>
                            This is a caption on this photo for reference
                          </figcaption>
                        </figure>
                      </div>

                      <h3>Microsoft Patch Management For Home Users</h3>
                      <p>
                        Last month, my wife, Anne Doe, took me to Las Vegas
                        because she had to go for a business convention.
                        Needless to say, she writes for an guide to casinos and
                        I hate gambling. But then, she likes it and this
                        supports us too, so I went along without any hassle. At
                        first I was depressed, but then as I asked around and
                        looked around, I ended up having more fun in Las Vegas
                        than I would have thought. And no. I did not enter a
                        single casino while I was there.
                      </p>

                      <h4>Entertainment</h4>
                      <p>
                        One of the greatest things about Las Vegas, Reno and
                        Atlantic City (but especially Las Vegas) is the number
                        of shows that are available. You can get to watch top
                        className comedians like Jay Leno, Jerry Seinfeld, Ray
                        Romano, Tim Allen and even the likes of Bill Cosby and
                        Chris Rock. If you are into music you can watch female
                        singers like Celine Dion, Mariah Carey, Britney Spears,
                        Christina Aguilera and Beyonc?, male performers like
                        Phil Collins, Eric Clapton, Snoopy Dog and bands like
                        Oasis and Bon Jovi. I could go on and on but the list is
                        endless. If you are into magic you can watch magicians
                        like David Copperfield do their thing meters from you.
                        Whatever you like, you can find it here from Western
                        music to oldies to Jazz, Rock, Heavy Mettle to Trance.
                        All you have to do is look at the itenary offered during
                        your visit.
                      </p>
                      <h4>Food</h4>
                      <p>
                        Chinese to Japanese to Korean to Jewish and even
                        Vegetarian and proper meat eating establishments await
                        your every delight in Vegas. Do not opt for the cheap
                        and oily fried dishes served for free while you play.
                        Stop a while and take in the delightful scenery and
                        smells of East Asian or European dishes. What is
                        wondrous is that you get to see man’s ability to mix. A
                        real melting pot if I may say so myself.
                      </p>
                      <p>
                        But is that all what casino cities like Las Vegas are
                        about? Do you have to remain in the city to really and
                        truly enjoy your stay? No.
                      </p>
                      <p>
                        While looking at the Dam and Canyon is from above, to
                        see the true beauty of the river, you have to go down.
                        The Colorado river is excellent for river-rafting and
                        water sports, but you do not have to take part if it is
                        not your thing. Instead just sit back and enjoy another
                        of nature’s marvels.
                      </p>

                      <h4>Bonnie Springs</h4>
                      <p>
                        Who can not resist going to one of the old towns like
                        those in the Western gun slinging movies? Your
                        destination needs to be Old Nevada. There you can
                        delight in an old western town right in the middle of
                        Red Rock Canyon. They host western shootouts too so come
                        prepared, partner! I could go on and on about other
                        attractions like the theme park in Circus Circus, the
                        Gilcrease Nature Sanctuary, the Henderson Bird Viewing
                        Preserve and Mt. Charleston but I think you get the
                        picture. In Las Vegas and hate gambling? Do not despair.
                        Just go out and have some clean un-gambling fun.
                      </p>
                    </div>
                  </div>
                  <h4 className="h3 mb-30">Comment </h4>

                  <div className="comments_article">
                    <ul className="article-comments mb-4 mb-sm-5">
                      <li>
                        <div className="comment">
                          <div
                            className="d-flex justify-content-between
			                                        align-items-center mb-3"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src={avatar1}
                                alt="Daniel Smith"
                                className="avatar avatar-sm"
                              />
                              <div className="h6 mb-0 ml-2">Daniel Smith</div>
                            </div>
                            <div className="text-small text-muted">
                              14 minutes ago
                            </div>
                          </div>
                          <div className="comment-content" id="bodyDark">
                            <p>
                              Dolor sit amet, consectetur adipiscing elit.
                              Phasellus feugiat elit vitae enim lacinia semper.
                              Cras nulla lectus, porttitor vitae urna iaculis,
                              Melisandre tincidunt lectus. Brienne nec tellus
                              sit amet massa auctor imperdiet imp vitae diam.
                            </p>

                            <Link to="">Reply</Link>
                          </div>
                        </div>

                        <ul className="article-comments is_child">
                          <li>
                            <div className="comment">
                              <div
                                className="d-flex
			                                                justify-content-between
			                                                align-items-center mb-3"
                              >
                                <div
                                  className="d-flex
			                                                    align-items-center"
                                >
                                  <img
                                    src={avatar2}
                                    alt="Daniel Smith"
                                    className="avatar
			                                                        avatar-sm"
                                  />
                                  <div className="h6 mb-0 ml-2">
                                    Daniel Smith
                                  </div>
                                </div>
                                <div
                                  className="text-small
			                                                    text-muted"
                                >
                                  14 minutes ago
                                </div>
                              </div>
                              <div className="comment-content" id="bodyDark">
                                <p>
                                  Dolor sit amet, consectetur adipiscing elit.
                                  Phasellus feugiat elit vitae enim lacinia
                                  semper. Cras nulla lectus, porttitor vitae
                                  urna iaculis, Melisandre tincidunt lectus.
                                  Brienne nec tellus sit amet massa auctor
                                  imperdiet imp vitae diam.
                                </p>

                                <Link to="">Reply</Link>
                              </div>
                            </div>
                            <ul className="article-comments is_child">
                              <li>
                                <div className="comment">
                                  <div
                                    className="d-flex
			                                                        justify-content-between
			                                                        align-items-center
			                                                        mb-3"
                                  >
                                    <div
                                      className="d-flex
			                                                            align-items-center"
                                    >
                                      <img
                                        src={avatar3}
                                        alt="Daniel
			                                                                Smith"
                                        className="avatar
			                                                                avatar-sm"
                                      />
                                      <div
                                        className="h6 mb-0
			                                                                ml-2"
                                      >
                                        Daniel Smith
                                      </div>
                                    </div>
                                    <div
                                      className="text-small
			                                                            text-muted"
                                    >
                                      14 minutes ago
                                    </div>
                                  </div>
                                  <div className="comment-content" id="bodyDark">
                                    <p>
                                      Dolor sit amet, consectetur adipiscing
                                      elit. Phasellus feugiat elit vitae enim
                                      lacinia semper. Cras nulla lectus,
                                      porttitor vitae urna iaculis, Melisandre
                                      tincidunt lectus. Brienne nec tellus sit
                                      amet massa auctor imperdiet imp vitae
                                      diam.
                                    </p>

                                    <Link to="">Reply</Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment">
                          <div
                            className="d-flex justify-content-between
			                                        align-items-center mb-3"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src={avatar4}
                                alt="Daniel Smith"
                                className="avatar avatar-sm"
                              />
                              <div className="h6 mb-0 ml-2">Daniel Smith</div>
                            </div>
                            <div className="text-small text-muted">
                              14 minutes ago
                            </div>
                          </div>
                          <div className="comment-content" id="bodyDark">
                            <p>
                              Dolor sit amet, consectetur adipiscing elit.
                              Phasellus feugiat elit vitae enim lacinia semper.
                              Cras nulla lectus, porttitor vitae urna iaculis,
                              Melisandre tincidunt lectus. Brienne nec tellus
                              sit amet massa auctor imperdiet imp vitae diam.
                            </p>

                            <Link to="">Reply</Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h4 className="h3 mb-30">Leave a reply</h4>
                  <div className="reply" id="fdsa">
                    <form>
                      <div className="form-row">
                        <div className="col-sm">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="reply-name"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="reply-email"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="reply-message"
                          rows="8"
                          className="form-control"
                          placeholder="Your Reply"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <Link
                          to=""
                          className="btn btn-primary sweep_letter
			                                    sweep_top"
                        >
                          <div className="inside_item">
                            <span
                              data-hover="Reply"
                              className="text-white fs-5 border-0"
                            >
                              {" "}
                              Reply{" "}
                            </span>
                          </div>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ================================= sidebar --> */}
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
                      {Cat_Item.map((data) => (<>
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
                      {Tags.map((data) => (
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
    </>
  );
};

export default Artical;
