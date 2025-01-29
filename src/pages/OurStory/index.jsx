import React from "react";
import item1 from '../../assets/images/mango.jpg';
import upi from "../../assets/images/upi.jpg";
import paypal from "../../assets/images/paypal.jpg";
import mastercard from "../../assets/images/mastercard.jpg";
import visa from "../../assets/images/visa.jpg";
const OurStory = () => {
  
  return (
    <>
    
    <div className="welcome-container">
    <div className="welcome-content">
      <h1>Welcome to Our</h1>
      <h2>Dive into Our Story</h2>
      <p>
        At the heart of our pickle website lies a tale of passion, innovation,
        and a relentless pursuit of the perfect pickle.
      </p>
      <div className="welcome-buttons">
        <button className="explore-button">Explore Now</button>
        <button className="learn-button">Learn More</button>
      </div>
    </div>
    <div className="welcome-image">
      <img
        src={item1}
        alt="Pickle Burger"
        className="pickle-burger"
      />
    </div>
  </div>
  <div className="pickling-container">
      <div className="pickling-header">
        <h1>Pickling Passion</h1>
        <p>
          Join our growing community of pickle enthusiasts and be the first to
          hear about our latest creations, exclusive offers, and upcoming events.
        </p>
      </div>
      <div className="pickling-content">
        <div className="content-left">
          <h2>Pickled Pairings</h2>
          <p>
            Discover the perfect accompaniments to elevate your meals. Our blog
            features a wealth of recipes, flavor pairings, and serving suggestions
            to inspire your culinary adventures. From classic dill pickles to
            innovative flavor combinations, we’ve got the perfect pickled partner
            for every dish.
          </p>
          <div className="content-buttons">
            <button className="explore-button">Explore Now</button>
            <button className="learn-button">Learn More</button>
          </div>
        </div>
        <div className="content-right">
          <img
            src={item1}
            alt="Pickled Dish"
            className="pickling-image"
          />
        </div>
      </div>
    </div>
  <div class="achar-footer">
        <div class="footer-main">
          <div class="footer-section">
            <h3>Explore Our Range</h3>
            <ul>
              <li><a href="/">Traditional Pickles</a></li>
              <li><a href="/">Fusion Chutneys</a></li>
              <li><a href="/">Homemade Relishes</a></li>
              <li><a href="/">Seasonal Specials</a></li>
              <li><a href="/">Gift Combos</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Farmers</a></li>
              <li><a href="/">Sustainability</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for offers and updates:</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <div class="social-icons">
              <a href="/"><i class="fab fa-facebook"></i></a>
              <a href="/"><i class="fab fa-instagram"></i></a>
              <a href="/"><i class="fab fa-twitter"></i></a>
              <a href="/"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      
        <div class="footer-bottom">
          <p>&copy; 2024 AcharCraft. Crafted with love for pickle enthusiasts.</p>
          <div class="payment-icons">
            <img src={visa} alt="Visa" />
            <img src={upi} alt="UPI" />
            <img src={mastercard} alt="MasterCard" />
            <img src={paypal} alt="PayPal" />
          </div>
        </div>
      </div>
  </>
  );
};

export default OurStory;
