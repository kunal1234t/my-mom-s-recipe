import React from "react";
import upi from "../../assets/images/upi.jpg";
import paypal from "../../assets/images/paypal.jpg";
import mastercard from "../../assets/images/mastercard.jpg";
import visa from "../../assets/images/visa.jpg";
const ContactUs = () => {
  return (
    <>
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions, feedback, or pickle love.</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Our Details</h2>
          <p><strong>Address:</strong> 123 Pickle Lane, Pickletown, PL 45678</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> contact@pickleparadise.com</p>
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
          </div>
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

export default ContactUs;
