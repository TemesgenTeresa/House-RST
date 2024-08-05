import React from 'react'
import'./Programs.css'
import program_1 from '../../assets/Images/Et1.jpg'
import program_2 from '../../assets/Images/Et2.jpg'
import program_3 from '../../assets/Images/Et3.jpg'
import program_icon1 from '../../assets/Images/icon1.png'
import program_icon2 from '../../assets/Images/icon2.png'
import program_icon3 from '../../assets/Images/icon3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt=""/>
        <div className="caption">
            <img src={program_icon1} alt=" "/>
            <p>House Renting</p>
    </div>
    <div className="program">
        <img src={program_2} alt=""/>
        <div className="caption">
            <img src={program_icon2} alt=" "/>
            <p>House Swapping</p>
    </div>
    </div>
    <div className="program">
        <img src={program_3} alt=""/>
        <div className="caption">
            <img src={program_icon3} alt=" "/>
            <p>House Trading</p>
    </div>
    </div>
    </div>
    </div
  )
}

export default Programs
