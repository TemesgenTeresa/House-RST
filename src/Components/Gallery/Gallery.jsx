import React from 'react'
import './Gallery.css'
import photos_1 from '../../assets/Images/photos_1.png'
import photos_2 from '../../assets/Images/photos_2.png'
import photos_3 from '../../assets/Images/photos_3.png'
import photos_4 from '../../assets/Images/photos_4.jpg'
import arrow from '../../assets/Images/arrow.gif'


const Gallery = () => {
  return (
    <div className ='Gallery'>
        <p>Stake Holders</p>
        <h2>ባለድርሻ አካላት</h2>
        <br/>
        <div className="Photos">
            <img src={photos_1} alt="" />
            <img src={photos_2} alt="" />
            <img src={photos_3} alt="" />
            <img src={photos_4} alt="" />
        
    </div>
    <br/>
    <button className ='button'>ሌሎች <img src="" alt="" /></button>
    </div>
  )
}

export default Gallery
