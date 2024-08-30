import React from 'react';
import { Link } from 'react-router-dom';
import './Houses.css';
import Product1 from '../../assets/Images/Houses Images/et5.jpg'
import Product2 from '../../assets/Images/Houses Images/et7.jpg'
import Product3 from '../../assets/Images/Houses Images/et11.jpg'
import Product4 from '../../assets/Images/Houses Images/et4.jpg'
import Product5 from '../../assets/Images/Houses Images/et5.jpg'
import Product6 from '../../assets/Images/Houses Images/et6.jpg'
import Product7 from '../../assets/Images/Houses Images/et7.jpg'
import Product8 from '../../assets/Images/Houses Images/et8.jpg'
import Product9 from '../../assets/Images/Houses Images/et9.jpg'
import Product10 from '../../assets/Images/Houses Images/et10.jpg'
import Product11 from '../../assets/Images/Houses Images/et11.jpg'
import Product12 from '../../assets/Images/Houses Images/et12.jpg'


const ProductPage = () => {
  const products = [
    {
      id: 1,
      image: Product1,
      title: 'FOR RENT',
      description:(
        <>
          Owner Name: Temesgen Teresa
          <br />
          Price: $560,000
          <br />
          Location: Wolo Sefer
          <br />
          Phone Number:0909090909
          <br />
          Status:Individual
          <br />
        </>
      ),
    },
    {
      id: 2,
      image: Product2,
      title: 'FOR SELLING',
      description: (
        <>
          Owner Name: Temesgen Teresa
          <br />
          Price: $560,000
          <br />
          Location: Wolo Sefer
          <br />
          Phone Number:0909090909
          <br />
          Status:Verified Broaker
          <br />
        </>
      ),
    },
    {
      id: 3,
      image: Product3,
      title: 'FOR SWAPPING',
      description: (
        <>
          Owner Name: Temesgen Teresa
          <br />
          Price: $560,000
          <br />
          Location: Wolo Sefer
          <br />
          Phone Number:0909090909
          <br />
          Status:Verified Broaker
          <br />
        </>
      ),
    },
    {
        id: 3,
        image:Product4,
        title: 'FOR RENTING',
        description: (
          <>
            Owner Name: Temesgen Teresa
            <br />
            Price: $560,000
            <br />
            Location: Wolo Sefer
            <br />
            Phone Number:0909090909
            <br />
            Status:Verified Broaker
            <br />
          </>
        ),
      },
      {
        id: 3,
        image: Product5,
        title: 'FOR RENTING',
        description: (
          <>
            Owner Name: Temesgen Teresa
            <br />
            Price: $560,000
            <br />
            Location: Wolo Sefer
            <br />
            Phone Number:0909090909
            <br />
            Status:Individuals
            <br />
          </>
        ),
      },
      {
        id: 3,
        image: Product6,
        title: 'FOR SELLING',
        description: (
          <>
            Owner Name: Temesgen Teresa
            <br />
            Price: $560,000
            <br />
            Location: Wolo Sefer
            <br />
            Phone Number:0909090909
            <br />
            Status:Verified Broaker
            <br />
          </>
        ),
      },
      {
        id: 3,
        image: Product7,
        title: 'FOR SWAPPING',
        description: (
          <>
            Owner Name: Temesgen Teresa
            <br />
            Price: $560,000
            <br />
            Location: Wolo Sefer
            <br />
            Phone Number:0909090909
            <br />
            Status:Verified Broaker
            <br />
          </>
        ),
      },
      {
        id: 3,
        image: Product8,
        title: 'FOR SELLING',
        description: (
          <>
            Owner Name: Temesgen Teresa
            <br />
            Price: $560,000
            <br />
            Location: Wolo Sefer
            <br />
            Phone Number:0909090909
            <br />
            Status:Individual
            <br />
          </>
        ),
      },
      {
        id: 3,
        image: Product9,
        title: 'FOR SWAPPING',
        description: (
          <>
            Owner Name: Temesgen Teresa
            <br />
            Price: $560,000
            <br />
            Location: Wolo Sefer
            <br />
            Phone Number:0909090909
            <br />
            Status:Verified Broaker
            <br />
          </>
        ),
      },
      {
        id: 3,
        image: Product10,
        title: 'FOR RENT',
        description: 'This is a description for Product 3.',
      },
      {
        id: 3,
        image: Product11,
        title: 'FOR SWAPPING',
        description: 'This is a description for Product 3.',
      },
      {
        id: 3,
        image: Product12,
        title: 'FOR RENTING',
        description: 'This is a description for Product 3.',
      }
      
  ];

  return (
    <div className="product-page">
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Link to = '/Description' className="see-more-button">
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
