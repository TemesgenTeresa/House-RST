import React, { useState } from 'react';
import './Description.css';
import videoSrc from '../../assets/Images/HP Images/vid2.mp4';

const VideoSection = () => {
    return (
        <div className="video-container">
            <iframe
                src={videoSrc}
                frameBorder="0"
                autoplay
                muted
                allowFullScreen
                playsInline
                controls
                title="Video"
                onCanPlay={() => console.log('Video is ready to play')}
                onError={() => console.error('Error loading video')}
            ></iframe>
        </div>
    );
};


const RatingStars = ({ rating, onRatingChange }) => {
    return (
        <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= rating ? 'star filled' : 'star'}
                    onClick={() => onRatingChange(star)}
                >
                    &#9733;
                </span>
            ))}
        </div>
    );
};

const ProductCard = ({ name, description, mapUrl, details }) => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="product-cardd">
            <h3>{name}</h3>
            <div className="product-details">
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Rating:</strong></p>
                <RatingStars rating={rating} onRatingChange={handleRatingChange} />
                <ul className="details-list">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                <div className="map-container">
                    <iframe
                        src={mapUrl}
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                        title="Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const products = [
        {
            name: 'House 1',
            description: 'Beautiful house with modern amenities.',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.568743098287!2d38.77018334137884!3d8.991979164271353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b845420b57cc3%3A0xa1bf964f2ce6972f!2sWollo%20Sefer%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1725017130420!5m2!1sen!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade', // Replace with actual map URL
            details: [
                '3 Bedrooms',
                '2 Bathrooms',
                '1 Kitchen',
                'Spacious Living Room',
                'Attached Garage'
            ],
        },
        {
            name: 'House 2',
            description: 'Luxurious home with a great view.',
            mapUrl: 'https://www.google.com/maps/embed?pb=your-map-url-2', // Replace with actual map URL
            details: [
                '4 Bedrooms',
                '3 Bathrooms',
                '2 Kitchens',
                'Large Balcony',
                'Swimming Pool'
            ],
        },
        // Add more houses as needed
    ];

    return (
        <div>
            <div className="product-page">
                <div className="product-container">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            description={product.description}
                            mapUrl={product.mapUrl}
                            details={product.details}
                        />
                    ))}
                </div>
            </div>
            <VideoSection />
        </div>
    );
};

export default App;
