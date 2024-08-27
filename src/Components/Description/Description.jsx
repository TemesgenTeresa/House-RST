import React from 'react';
import '../Houses/Houses.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';

const HouseDescription = () => {
  return (
    <div>
      <head>
        <link rel="shortcut icon" href="hh.webp" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <title>House Description</title>
      </head>
      
      <body>
        <h1><u>House Description</u></h1>

        <table>
          <tr>
            <td>
              <img src="../Image/welcometran.gif" alt="Welcome" height="60" width="60" />
            </td>
            <td>
              <h2>TO YOUR DREAM HOUSE!</h2>
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <td>
              <ul>
                <li>
                  <div className="map">
                    Found in the heart of <a href="https://www.google.com/maps/place/Kent+house+road+house+75/@51.4236576,-0.1954794,12z/data=!4m10!1m2!2m1!1skent+southeast+of+london+houses!3m6!1s0x487601e45836ef4d:0xf1e93168f82cdf39!8m2!3d51.4236641!4d-0.0430364!15sCh9rZW50IHNvdXRoZWFzdCBvZiBsb25kb24gaG91c2VzkgEPaG91c2luZ19jb21wbGV44AEA!16s%2Fg%2F11khbtg94z?entry=ttu">
                      London &#129398;
                    </a>
                  </div>
                </li>
                <li>This stunning British-made house offers a perfect blend of elegance, comfort, and modern living.</li>
                <p>Boasting:</p>
                <li>5 bedrooms</li>
                <li>5 bathrooms</li>
                <li>It has a water pool &#128561;</li>
                <li><b>This exquisite property is ready to welcome you home.</b></li>
              </ul>
            </td>
            <td>
              <span>
                <video autoPlay>
                  <source src="../Video/vid1.mp4" type="video/mp4" />
                </video>
              </span>
            </td>
          </tr>
        </table>
<strong>Key Features</strong>
        <ul>
          <li><b>Interior:</b> <i>Step inside to discover an expansive living area bathed in natural light, perfect for entertaining guests or enjoying quiet family evenings.</i></li>
          <li><b>Gourmet Kitchen:</b> <i>The chef's kitchen is equipped with top-of-the-line appliances, ample counter space, and custom cabinetry, making meal preparation a joy.</i></li>
          <li><b>Luxurious Bedrooms:</b> <i>Retreat to your private oasis in the generously sized bedrooms, each offering plush carpets, large windows, and ample closet space.</i></li>
          <li><b>Tranquil Outdoor Spaces:</b> <i>Escape to the meticulously landscaped backyard oasis, where lush greenery and a French Outdoor create a serene environment for relaxation and outdoor dining.</i></li>
          <li><b>Convenient Location:</b> <i>Situated in the sought-after area, this home offers easy access to bars, top-rated schools, and major transportation routes.</i></li>
        </ul>

        <div><b>Price:</b> <s>$5,200,000</s> <strong>$5,025,255</strong> &#128077;</div>
        <div><b>Square Footage:</b> 400m<sup>2</sup></div>
        <div><b>Lot Size:</b> 0.3 acres</div>
        <div><b>Year Built:</b> 2022</div>
        <div><b>Parking:</b> 2 with car garage</div>

        <h3>Don't miss the opportunity to make this extraordinary residence your own. Contact us today to schedule a private showing!</h3>

        <div className="footerContainer">
          <div className="socialIcons">
            <a href="https://www.facebook.com/thehouseoftradingfx/"><FaFacebook /></a>
            <a href="https://www.instagram.com/cityhometrading/?hl=en"><FaInstagram /></a>
            <a href="https://tweethunter.io/trending/housing"><FaTwitter /></a>
            <a href="https://www.youtube.com/watch?v=hmj0U5SiB74"><FaYoutube /></a>
            <a href="https://t.me/housesellandbuywebprogrammingpro"><FaTelegram /></a>
          </div>
        </div>
      </body>
    </div>
  );
};

export default HouseDescription;
