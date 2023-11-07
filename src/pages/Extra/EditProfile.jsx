import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
// import Navbar from '../components/Navbar'
import { RiTelegramFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { tiktok, medium, cover2, cover3, cover4, cover5, cover6, cover_active, edit_1, edit1, avatar1, avatar3, cover } from '../../img'
import NavBarNew from '../../components/NavBarNew';


const EditProfile = (props) => {
  props.set(true);

  return (
    <>
      <div className="body">
        <div className="overflow-hidden">
          {/* <NavBarNew/> */}
          <div className="edit_profile">
            <div className="mb-50">
              <div className="hero__profile">
                <div className="tabs">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb default mb-0">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Edit profile</li>
                    </ol>
                  </nav>
                </div>
                <div className="cover">
                  <img src={cover} alt="cover" />
                </div>
              </div>
            </div>
            <div className="container mb-5">
              <div className="mb-50">
                <h3 className="mb-30">Choice your Cover image</h3>
                <div className="row profile-img">
                  <div className="col-6 col-md-2">
                    <div className="box
			                        in__profile
			                        d-flex
			                        justify-content-center
			                        align-items-center">
                      {/* <img className="icon"
                                                // src="assets/img/icons/upload-plus.svg"
                                                alt="" /> */}
                      <svg className="icon" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.0003 59.1673C46.1089 59.1673 59.1675 46.1086 59.1675 30C59.1675 13.8914 46.1089 0.832764 30.0003 0.832764C13.8916 0.832764 0.833008 13.8914 0.833008 30C0.833008 46.1086 13.8916 59.1673 30.0003 59.1673Z" fill="url(#paint0_linear)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.7495 20.5203C31.7495 20.0557 31.5649 19.6101 31.2364 19.2816C30.9079 18.9531 30.4623 18.7686 29.9977 18.7686C29.5331 18.7686 29.0876 18.9531 28.7591 19.2816C28.4305 19.6101 28.246 20.0557 28.246 20.5203V28.2466H20.5215C20.0574 28.2466 19.6122 28.4309 19.284 28.7591C18.9559 29.0873 18.7715 29.5324 18.7715 29.9966C18.7715 30.4607 18.9559 30.9058 19.284 31.234C19.6122 31.5622 20.0574 31.7466 20.5215 31.7466H28.246V39.4711C28.246 39.9352 28.4304 40.3803 28.7585 40.7085C29.0867 41.0367 29.5319 41.2211 29.996 41.2211C30.4601 41.2211 30.9052 41.0367 31.2334 40.7085C31.5616 40.3803 31.746 39.9352 31.746 39.4711V31.7448H39.474C39.7102 31.7554 39.946 31.718 40.1673 31.6349C40.3886 31.5518 40.5908 31.4247 40.7617 31.2614C40.9325 31.098 41.0685 30.9017 41.1614 30.6843C41.2543 30.4669 41.3022 30.233 41.3022 29.9966C41.3022 29.7602 41.2543 29.5262 41.1614 29.3088C41.0685 29.0914 40.9325 28.8951 40.7617 28.7318C40.5908 28.5684 40.3886 28.4413 40.1673 28.3582C39.946 28.2751 39.7102 28.2377 39.474 28.2483H31.7477V20.5203H31.7495Z" fill="#566FFE" />
                        <defs>
                          <linearGradient id="paint0_linear" x1="-41.8184" y1="-11.1444" x2="-11.6433" y2="84.6465" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#36FDDE" />
                            <stop offset="0.561" stop-color="#F4FDD0" />
                            <stop offset="0.975" stop-color="#F5DAF8" />
                            <stop offset="1" stop-color="#F5D8FA" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <input type="file" accept="image/png, image/jpeg" />
                    </div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="pro_img is_active">
                      <img src={cover_active} alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="pro_img">
                      <img src={edit1} alt="" />
                    </div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="pro_img">
                      <img src={edit1} alt="" />
                    </div>
                  </div>

                </div>
              </div>
              <div>
                <div className="avatars space-x-20 mb-30">
                  <div id="profile-container">
                    <img id="profileImage" src={avatar3}
                      alt="Avatar" className="avatar avatar-lg border-0" />
                  </div>
                  <div className="space-x-10 d-flex">
                    <div id="boxUpload">
                      <Link to="/" className="btn btn-dark">
                        Upload New Photo </Link>
                      <input id="imageUpload" type="file"
                        name="profile_photo" placeholder="Photo" required=""
                        capture />
                    </div>
                    <Link to="/" className="btn btn-white"> Delete </Link>
                  </div>
                </div>
                <div className="box edit_box col-lg-9 space-y-30">
                  <div className="row sm:space-y-20">
                    <div className="col-lg-6 account-info">
                      <h3 className="mb-20">Account info 🍉</h3>
                      <div className="form-group space-y-10 mb-0">
                        <div className="space-y-40">
                          <div className="space-y-10">
                            <span className="nameInput">Display name</span>
                            <input type="text" className="form-control"
                              value="Creabik" />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Custom URL</span>
                            <input type="text" className="form-control"
                              value="raroin.creabik.com/" />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput d-flex
			                                        justify-content-between">Email
                              <span className="txt_xs">Your email for
                                marketplace notifications</span>
                            </span>
                            <div className="confirm">
                              <input type="text" className="form-control"
                                placeholder="Enter your email" />
                              <Link to="/" className="confirm-btn btn
			                                            btn-dark btn-sm">Confirm</Link>
                            </div>
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Bio</span>
                            <textarea style={{ minHeight: "110px" }}
                              placeholder="Add your bio">

                            </textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 social-media">
                      <h3 className="mb-20">Your Social media</h3>
                      <div className="form-group space-y-10">
                        <div className="space-y-40">
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Facebook</span>
                            <input type="text" className="form-control"
                              placeholder="facebook username" />
                            <Link className="facebook-btn btn btn-primary d-flex align-items-center mt-20
			                                        btn-sm"  to="/">
                              <FaFacebook size={23} />
                              <h6 className="mx-2 mt-2 text-white">
                                Connect to Facebook
                              </h6>
                            </Link>


                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Twitter</span>
                            <input type="text" className="form-control"
                              placeholder="twitter username" />
                            <Link className="twitter-btn btn d-flex align-items-center btn-primary mt-20
			                                        btn-sm" to="#">
                              <AiOutlineTwitter size={23} />
                              {/* <i className="ri-twitter-fill"></i> */}
                              <h6 className="mx-2 mt-2 text-white">
                                Connect to Twitter
                              </h6>
                            </Link>

                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Discord</span>
                            <input type="text" className="form-control"
                              placeholder="discord username" />
                            <Link className="discord-btn d-flex align-items-center btn btn-primary mt-20
			                                        btn-sm" to="/">
                              {/* <i className="ri-discord-fill"></i> */}
                              <BsDiscord size={23} />
                              <h6 className="mx-2 mt-2 text-white">
                                Connect to Discord
                              </h6>
                            </Link>

                          </div>
                        </div>
                      </div>
                      <Link className="btn btn-white mt-20
			                            btn-sm" to="/" data-toggle="modal"
                        data-target="#popup_social_media">
                        <i className="ri-add-circle-line color_brand me-2"></i>
                        Add more Social media
                      </Link>
                    </div>
                  </div>
                  <div className="hr"></div>
                  <p className="color_black">To update your settings you should
                    sign message through your wallet. Click 'Update profile'
                    then sign the message.</p>
                  <div>
                    <Link to="/" className="btn btn-primary text-white btn-lg">Update Profile</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
