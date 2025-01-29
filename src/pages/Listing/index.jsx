import upi from "../../assets/images/upi.jpg";
import paypal from "../../assets/images/paypal.jpg";
import mastercard from "../../assets/images/mastercard.jpg";
import visa from "../../assets/images/visa.jpg";
import Sidebar from "../../components/SideBar";
import Slider from "react-slick";
import Slider1 from '../../assets/images/Slider1.png'
import Slider2 from '../../assets/images/Slider2.png'
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import ProductItem from "../../components/Products";
const Listing=()=>{
  const [anchorEl, setAnchorEl] = useState(null);
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <>
        <section className="product_Listing_Page">
            <div className="container">
                <div className="productListing d-flex">
                    <Sidebar/>
                    <div className="content_right">
                        <img src={Slider1} alt="" className="w-100"/>
                        <div className="showBy mt-3 mb-3 d-flex align-items-center">
                            <div className="d-flex align-item-center btnWrapper">
                                <Button><IoIosMenu/></Button>
                                <Button><HiMiniSquares2X2/></Button>
                                <Button><CgMenuGridO/></Button>
                                <Button><TfiLayoutGrid4Alt/></Button>
                            </div>
                            <div className="ml-auto showByFilter" style={{ marginLeft: 'auto' }}>
                              <Button onClick={handleClick}>Show 9 <FaAngleDown/></Button>
                                <Menu
                                  className="showPerPageDropdown"
                                  id="basic-menu"
                                  anchorEl={anchorEl}
                                  open={openDropdown}
                                  onClose={handleClose}
                                  MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                  }}
                                >
                                  <MenuItem onClick={handleClose}>9</MenuItem>
                                  <MenuItem onClick={handleClose}>18</MenuItem>
                                  <MenuItem onClick={handleClose}>27</MenuItem>
                                  <MenuItem onClick={handleClose}>36</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className="productListing">
                          <ProductItem />
                          <ProductItem />
                          <ProductItem />
                          <ProductItem />
                          <ProductItem />
                        </div>

                        
                    </div>
                </div>
                
            </div>
        </section>
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
export default Listing ;