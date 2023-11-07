import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import "./launchpad.css";
import { GiEarthAmerica } from "react-icons/gi";
import { MdGeneratingTokens } from "react-icons/md";
import SubNavbar from '../../components/SubNavbar/launchPadSubNavbar';
import { useRef } from 'react';
import { DAO, Funding, lock, mainElement, mintNFT, moveAnimation, stacking, wallet, withoutbg } from '../../img';
import ComingSlider from './ComingSlider';

// window.onscroll = function () { myFunction() };
// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop + header.scrollTop;

//   function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
const LaunchPad = (props) => {
  props.set(false);
  // props.set1(true);
  const choose = [
    { image: <GiEarthAmerica size={80} />, title: "Exposure", spanData: "Get exposure to the millions of DtoC users around the world." },
    { image: <GiEarthAmerica size={80} />, title: "Liquidity", spanData: "Projects that are launched on Launchpad or Launchpool will be listed and have world-class liquidity in multiple trading pairs." },
    { image: <GiEarthAmerica size={80} />, title: "Token Distribution", spanData: "Your token will immediately be distributed to a large user base that hold your token." },
    { image: <GiEarthAmerica size={80} />, title: "Exposure", spanData: "Project will receive extensive support and advice even after listing, having access to all areas of the DtoC ecosystem." },
  ]


  const Ref = useRef(null);

  // The state for our timer
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

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  }
  return (
    <>
      <div className="header" id="myHeader">
        <SubNavbar />
      </div>
      <div className="ladd">
        <div className="coverImg">
          <div className="Launch_heading">
            <h1 className='launchHead' style={{ fontWeight: 'bold', color: "#fff", margin: "auto" }}>
              DtoC Launch Pad
            </h1>
            <h4 className='ms-4 launch_title' style={{ fontWeight: 'bold', color: "#fff" }}>
              Buy or earn directly on DtoC
            </h4>
            <span className="Launch_Coming" style={{ fontWeight: 'bold', margin: "auto" }}>
              Coming Soon
            </span>
          </div>
          <div className="frontImg" style={{ height: "100wh", width: "25%" }}>
          </div>
        </div>
        <div className="formBlock">
          <div className="formBlock_1">
            <div>
              <span className="align-items-center formBlockHead" style={{ fontWeight: "800", color: "white" }}>
                Launch Your Project with DtoC now!
              </span>

            </div>
            <span className="formBlock_1_txt fs-4 text-enter">

              Enabling the power of <br />
              <span className='border-0 px-3 pb-1 fs-6 d-flex' style={{ fontWeight: "bold", maxWidth: "13.5rem", borderRadius: "10px", background: "red" }}>
                Commnity Governance
              </span>
            </span>
            <div className="mt-3">
              <span className='formBlock_1_view border-bottom' style={{ cursor: "pointer" }}>
                View More
              </span>
            </div>
            {/* <div> */}
            <button className='btn-lg formBlockBtn'  >
              <span className="" style={{ color: "white" }}>
                Apply for Launch
              </span>
            </button>
            {/* </div> */}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, quo. Tenetur, rerum veniam nam a inventore excepturi sint atque illum. Aspernatur, ipsum ullam eos inventore debitis cum quae libero nulla? */}
          </div>
          <div className="formBlock_2" stlye={{ width: "100%", height: "100%" }} >
            <img src={withoutbg}
              style={{ width: "100%" }}
              className="launchFormImg" alt="" />
            <div>
            </div>
          </div>
        </div>
        <ComingSlider />
        <div className="kycSteps">
          <h1 className='text-center d-flex align-items-center justify-content-center comingSoon_header' style={{ textTransform: "capitalize", color: "white" }} >
            More Accessibility
          </h1>
          <Row className='yc'>
            <Col className='kyc1 text-center' style={{ backgroundColor: "rgb(178,168,195)" }}>
              <img className='text-center lockded' src={mintNFT} alt="" />
              <h2 style={{ color: "white" }}>
                Mint NFT
              </h2>
              <span className='kycSpan' style={{ color: "white" }}>
               
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora, officia iste voluptatem iure laborum quisquam.
              </span>
            </Col>
            <Col className="kyc1 text-center" style={{ backgroundColor: "rgb(178,168,195)" }}>

              {/* <div style={{ width: "20%" }}> */}
              <img className='lockded' src={DAO} alt="" />
              <h2 style={{ color: "white" }}>
                Create DAO
              </h2>
              <span style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta similique dolorem delectus blanditiis?   </span>
            </Col>
            <Col className='kyc1 text-center' style={{ backgroundColor: "rgb(178,168,195)" }}>
              <div>
                <img className="lockded" src={Funding} alt="" />
                <h2 style={{ color: "white" }}>
                  Get Funds
                </h2>
                <span style={{ color: "white" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim dicta neque?
                </span>
              </div>

            </Col>
          </Row>
        </div>
        <Row className="metavarse">
          {/* <h1 className="text-center" style={{ color: 'white' }}>MetaVerse</h1> */}
          {/* <Row className="metavarseelement"> */}
          <Col className="metavarsePower" style={{ maxWidth: "100%" }}>
            <h1 className="text-centr" style={{ color: 'white' }} stlye={{ color: "#fff" }}>#PowerToBuild</h1>
            <span className="metaverseTitle">
              <span className='metaverseTitle1'>
              Traditional beliefs about businesses are disintegrating. But what's next for us?
              </span>
              <span className='metaverseTitle2'>
               Power To Build aspires to motivate the development of ground-breaking concepts that will redefine business by fostering trustless,

              </span>
              <span className='metaverseTitle3'>
                purpose-driven, and self-organizing organisations.
              </span>
            </span>
            <div>
              {/* background-color: #f60e0e !important; */}
              <button className='btn-lg formBlockBtn' style={{ background: "#a3d8d9" }}>
                <span className="text-dark" style={{ fontWeight: "600" }}>
                  Learn More
                </span>
              </button>
            </div>
          </Col>
          <Col className="metavarseImg">
            <img src={mainElement} alt="" className="metavarseImgO" />
          </Col>
          {/* </Row> */}
        </Row>
        {/* <div className="chooseUs">
          <h1 className="text-center" style={{color: "white"}}>Why Choose us?</h1>
          <Row className='chooseUs1'>
            {choose.map((choice) => (
              <Col className="ChooseCard">
                <span className="cardimg">{choice.image}</span>
                <h5 className="my-3 text-center">{choice.title}</h5>
                <div className="w-100 text-center" style={{ fontSize: "13px" }}>
                  {choice.spanData}
                </div>
              </Col>
            ))}
          </Row>
        </div> */}
      </div>
    </>
  )
}

export default LaunchPad