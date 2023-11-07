import React from 'react'
import { Link } from 'react-router-dom';
import "./404.css";
const Error404 = (props) => {
    props.set1(true);
    return (
        <div className="bod">
            <h1 className="heade">404</h1>
            <div className="cloak__wrapper">
                <div className="cloak__container">
                    <div className="cloak"></div>
                </div>
            </div>
            <div className="info">
                <h2>We can't find that page</h2>
                <p className='p'>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
                <Link className='als' to={"/"} target="_blank" rel="noreferrer noopener">Home</Link>
            </div>
        </div>
    )
}

export default Error404 