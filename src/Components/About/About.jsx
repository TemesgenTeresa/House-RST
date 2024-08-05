import React from 'react'
import './About.css'
import about_img from '../../assets/Images/About1.png'
import play_icon from '../../assets/Images/play_icon.png'


const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
    <div className = "about-right">
        <h3> About House RST</h3>
        <h2>RENTING SWAPPPING & TRADING</h2>
        <p>
Welcome to House Connect: Your Home Trading, Renting, and Swapping Hub
At House Connect, we believe that finding the perfect home should be a
 seamless and rewarding experience. Whether you're looking to trade, rent,
  or swap homes, our platform is designed to cater to your unique housing 
  needs with ease and convenience.<br/>
  <br/>
Our Mission
Our mission is to revolutionize the way people find homes by offering a 
comprehensive platform that connects homeowners and renters worldwide.
 We strive to provide a trustworthy and user-friendly service that 
 simplifies the process of house trading, renting, and swapping.

What We Offer
1. House Trading:
Looking to upgrade or downsize your living space? Our house trading
 service allows you to directly swap homes with others who share similar
  preferences. Say goodbye to the hassle of selling and buying separately;
   our platform makes the transition smooth and efficient.</p></div>
    </div>
  )
}

export default About
