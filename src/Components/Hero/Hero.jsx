import React from 'react';
import './Hero.css';
import videoSrc from '../../assets/Images/vid1.mp4';

const Hero = () => {
    return (
        <div className="hero">
            <video className="hero-video" src={videoSrc} autoPlay loop muted></video>
            <div className="hero-content">
                <h1>House RST</h1>
                <p>Welcome to House Renting,Swapping & Trading.</p>
            </div>
        </div>
    );
}

export default Hero;
