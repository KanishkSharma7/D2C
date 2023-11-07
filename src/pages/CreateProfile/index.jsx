import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { avatar2, avatar3 } from "../../img";
import "./createprofile.css"
import { RegisterUser } from "../../hooks/User"
import { Link } from "react-router-dom";
// import axios from "axios";

const CreateProfile = (props) => {
  // props.set(true);
  const [fileUrl, setFileUrl] = useState(null);
  const [fileUrl1, setFileUrl1] = useState(null);
  const [formInput, updateFormInput] = useState({

  });
  const [formInputLink, updateFormInputLink] = useState([]);
  const router = useNavigate();

  let formData = new FormData();
  const register = async () => {
    console.log("test 1 completed");
    formData.append("profilephoto", fileUrl);
    formData.append("coverphoto", fileUrl1);
    formData.append("fisrtname", formInput.fisrtname);
    formData.append("lastname", formInput.lastname);
    formData.append("walletaddres", formInput.walletaddres);
    formData.append("bio", formInput.bio);
    formData.append("email", formInput.email);
    formData.append("links", formInputLink);
    // RegisterUser(formData).then((res)=>(
    //   console.log(res)
    // ))
    const config = {
      method: "post",
      // body: formData,
      cors: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${typeof window !== "undefined" &&
        //     JSON.parse(JSON.stringify(localStorage.getItem("token")))
        //     }`,
      },
      body: JSON.stringify({
        fisrtname: formInput.firstname,
        lastname: formInput.lastname,
        walletaddres: formInput.walletaddres,
        bio: formInput.bio,
        email: formInput.email,
        links: formInputLink
      })
    };
    console.log("test 2 completed")
    await fetch(`https://faithful-garters-crab.cyclic.app/api/user/createuser`, config)
      .then((response) => response.json())
      .then(function (res) {
        console.log("response", res);
        return res;
      })
    // .catch ((error)=> (
    //     return error.response.res;
    // ))
    // try {
    //   const res = await axios(config);
    //   console.log("res", res);
    //   return res.data;
    // } catch (error) {
    //   console.log(error.response.data, "users");
    //   return error.response.data;
    // }
  };

  console.log(formInput);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [media, setMedia] = useState(null);
  const [media1, setMedia1] = useState(null);
  const id = "1";
  const handleChange = (e) => {
    e.preventDefault();
    setFileUrl(e.target.files[0])
    ChangeImg(e.target.files[0])
    CoverAdd("profileimageupdate", id);

  }
  const handleChange1 = (e) => {
    e.preventDefault();
    setFileUrl1(e.target.files[0])
    ChangeImg1(e.target.files[0])
    CoverAdd("coverimageupdate", id);
  }

  const CoverAdd = async (image, id) => {
    formData.append("coverphoto", fileUrl1);
    const config = {
      method: "post",
      body: formData,
      cors: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   fisrtname: formInput.firstname,
      //   lastname: formInput.lastname,
      //   walletaddres: formInput.walletaddres,
      //   bio: formInput.bio,
      //   email: formInput.email,
      //   links: formInputLink
      // })
    };
    console.log("test 2 completed")
    await fetch(`https://faithful-garters-crab.cyclic.app/api/user/${image}/${id}`, config)
      .then((response) => response.json())
      .then(function (res) {
        console.log("response", res);
        return res;
      })
  };
  const ChangeImg = (files) => {
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = (readerEvent) => {
      let newfile = readerEvent.target.result;
      setMedia(newfile);
    };
  }
  const ChangeImg1 = (files) => {
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = (readerEvent) => {
      let newfile = readerEvent.target.result;
      setMedia1(newfile);
    };
  }

  const SetLink = () => {
    updateFormInput({
      ...formInput,
      link: formInputLink
    })
  }
  console.log(formInput, formInputLink, media, media1);
  return (
    <div>
      <div className="edit_profile createP-bg register">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-2"></div> */}
            <div className="col-lg-12">
              <div className="right_part space-y-20">
                <h1 className="color_white"> Setup Your Account</h1>
                <p className="color_white">
                  You can set preferred display name, create your profile URL
                  and manage other personal settings.
                </p>
                <div className="box edit_box w-full space-y-20">
                  <div className="row">
                    <div className="col-lg-6 account-info">
                      <div className="avatars space-x-20 mb-30">
                        <div id="profile-container">
                          <img
                            id="profileImage"
                            src={fileUrl1 !== null ? media1 : avatar3}
                            // src={avatar3}
                            alt="Avatar"
                            className="avatar avatar-lg border-0"
                          />
                        </div>
                        <div>
                          <h6 className="mb-1">Profile photo</h6>
                          <p className="mb-1">
                            We recommend an image of at least 400x400. Gifs work
                            too 🙌
                          </p>
                          <div id="boxUpload">
                            <Link to="" className="btn btn-sm btn-grad">
                              {" "}
                              Upload{" "}
                            </Link>
                            <input
                              id="imageUpload"
                              type="file"
                              name="profilephoto"
                              placeholder="Photo"
                              required=""
                              capture=""
                              onChange={(e) =>
                                handleChange1(e)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="avatars space-x-20 mb-30">
                        <div id="profile-container">
                          <img
                            id="profileImage"
                            // src={media}
                            src={fileUrl !== null ? media : avatar2}
                            alt="Avatar"
                            className="avatar avatar-lg border-0"
                          />
                        </div>
                        <div>
                          <h6 className="mb-1">Cover photo</h6>
                          <p className="mb-1">
                            We recommend an image of at least 400x400. Gifs work
                            too 🙌
                          </p>
                          <div id="boxUpload">
                            <Link to="" className="btn btn-sm btn-grad">
                              {" "}
                              Upload{" "}
                            </Link>
                            <input
                              id="imageUpload"
                              type="file"
                              name="coverphoto"
                              placeholder="Photo"
                              required=""
                              capture=""
                              onChange={(e) =>
                                handleChange(e)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-20"> 🍉 Account info </h3>
                      <div className="form-group space-y-10 mb-0">
                        <div className="space-y-20">
                          <div className="space-y-10">
                            <span className="nameInput">First Name</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                              // name="firstname"
                              onChange={(e) =>
                                updateFormInput({
                                  ...formInput,
                                  firstname: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Last Name</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                              // name="lastname"
                              onChange={(e) =>
                                updateFormInput({
                                  ...formInput,
                                  lastname: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Display name</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="your name"
                              onChange={(e) =>
                                updateFormInput({
                                  ...formInput,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Wallet Address</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Wallet Address"
                              onChange={(e) =>
                                updateFormInput({
                                  ...formInput,
                                  walletaddres: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput d-flex justify-content-between">
                              Email
                              <span className="txt_xs color_text">
                                Your email for marketplace notifications
                              </span>
                            </span>
                            <div className="confirm">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e) =>
                                  updateFormInput({
                                    ...formInput,
                                    email: e.target.value,
                                  })
                                }
                              />
                              <Link
                                to=""
                                className="confirm-btn btn btn-dark btn-sm"
                              >
                                Confirm
                              </Link>
                            </div>
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Bio</span>
                            <textarea
                              placeholder="Add your bio"
                              className="txtarea"
                              onChange={(e) =>
                                updateFormInput({
                                  ...formInput,
                                  bio: e.target.value,
                                })
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 social-media">
                      <h3 className="mb-20">👨 Social media ‍</h3>
                      <div className="form-group space-y-10">
                        <div className="space-y-20">
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Facebook</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="facebook username"
                              onChange={(e) =>
                                updateFormInputLink({
                                  ...formInputLink,
                                  facebook: e.target.value,
                                })
                              }
                              onClick={() => SetLink()}
                            />
                            <Link
                              className="facebook-btn btn btn-dark mt-10 btn-sm"
                              to=""
                            >
                              <i className="ri-facebook-circle-fill"></i>
                              Connect to Facebook
                            </Link>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Twitter</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="twitter username"
                              onChange={(e) =>
                                updateFormInputLink({
                                  ...formInputLink,
                                  twitter: e.target.value,
                                })
                              }
                              onClick={() => SetLink()}
                            />
                            <Link
                              className="twitter-btn btn btn-dark mt-10 btn-sm"
                              to=""
                            >
                              <i className="ri-twitter-fill"></i>
                              Connect to Twitter
                            </Link>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Discord</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="discord username"
                              onChange={(e) =>
                                updateFormInputLink({
                                  ...formInputLink,
                                  discord: e.target.value,
                                })
                              }
                              onClick={() => SetLink()}
                            />
                            <Link
                              className="discord-btn btn btn-dark mt-10 btn-sm"
                              to=""
                            >
                              <i className="ri-discord-fill"></i>
                              Connect to Discord
                            </Link>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-20 mt-40">📮 Notifications </h3>
                      <ul className="space-y-10">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch1" checked="" />
                          <label for="switch1">Toggle</label>
                          <span className="color_text">
                            {" "}
                            Email Notifications{" "}
                          </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch2" checked="" />
                          <label for="switch2">Toggle</label>
                          <span className="color_text"> New Bids </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch3" checked="" />
                          <label for="switch3">Toggle</label>
                          <span className="color_text"> Item Purchased </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch4" checked="" />
                          <label for="switch4">Toggle</label>
                          <span className="color_text"> People Followed </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hr"></div>
                  <p className="color_black">
                    Please take a few minutes to read and understand Stacks
                    Terms of Service. To continue, you’ll need to accept the
                    terms of services by checking the boxes.
                  </p>
                  <button onClick={register} className="btn btn-grad">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateProfile;
