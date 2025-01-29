import item1 from '../../assets/images/mango.jpg';
import upi from "../../assets/images/upi.jpg";
import paypal from "../../assets/images/paypal.jpg";
import mastercard from "../../assets/images/mastercard.jpg";
import visa from "../../assets/images/visa.jpg";
const LaunchingSoon=()=>{
    return(
        <>
        <div class="launching container">
        <header class="header">
            <h1>Launching Soon</h1>
            <h2>Pickled Perfection</h2>
            <p>Get ready for the launch of our highly anticipated online store, where you can explore our full range of delectable pickled creations and have them delivered straight to you!</p>
        </header>

        <div class="main-content">
            <div class="image-container">
                <img src={item1} alt="Pickle" class="pickle-image" />
            </div>

            <div class="content-grid">
                <div class="content-item">
                    <h3>Pickled Pairings</h3>
                    <p>Discover the perfect accompaniments to elevate your meals. Our blog features a wealth of recipes, flavor pairings, and serving suggestions to inspire your culinary adventures.</p>
                </div>

                <div class="content-item">
                    <h3>Combo Creations</h3>
                    <p>Explore our unique pickle and snack combinations, perfectly curated to satisfy your cravings.</p>
                </div>

                <div class="content-item">
                    <h3>Connect with Us</h3>
                    <p>We'd love to hear from you! Get in touch to share your feedback and suggestions.</p>
                </div>

                <div class="content-item">
                    <h3>Frequently Asked</h3>
                    <p>Browse our FAQs to find answers to your burning questions about our pickles, ingredients, and shipping.</p>
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
    )
}
export default LaunchingSoon;