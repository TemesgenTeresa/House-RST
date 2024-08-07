import React from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        quote: "ይህ Webaite ሕይወቴን በተሻለ ሁኔታ ቀይሮታል!",
        name: "Temesgen T",
        title: "ደላላ"
    },
    {
        quote: "በጣም ጥሩ አገልግሎት እና አስደናቂ ውጤቶች!",
        name: "Adane Abebe",
        title: "የ XXX ክፍለ ከተማ አስተዳደር"
    },
    {
        quote: "Highly recommend to anyone looking for quality!",
        name: "Yeabsira Tolosa",
        title: "Marketing Manager, Best Marketing"
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>የ መስሪያ ቤቶች መዕልክት</h2>
            <div className="testimonials-container">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p className="quote">"{testimonial.quote}"</p>
                        <p className="name">- {testimonial.name}</p>
                        <p className="title">{testimonial.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
