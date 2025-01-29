import React, { useState } from "react";
import HomeBanner from "../../components/HomeBanner";
import email from "../../assets/images/email2.png";
import upi from "../../assets/images/upi.jpg";
import paypal from "../../assets/images/paypal.jpg";
import mastercard from "../../assets/images/mastercard.jpg";
import visa from "../../assets/images/visa.jpg";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../../components/Products";
import HomeCat from "../../components/HomeCat";
import { CiMail } from "react-icons/ci";
import Button from "@mui/material/Button";

import { FaAngleDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Banner1 from '../../assets/images/Banner1.jpg'
import Banner2 from '../../assets/images/Banner2.png'
import Slider1 from '../../assets/images/Slider1.png'

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const faqs = [
    {
      question: "Why Should You Buy Pickles Online?",
      answer:
        "Buying pickles online offers convenience, variety, and access to homemade and artisanal options.",
    },
    {
      question: "How do you preserve homemade pickles?",
      answer:
        "Homemade pickles are preserved by using quality oil, airtight containers, and natural preservatives.",
    },
    {
      question: "What is the best way to store pickles?",
      answer:
        "Store pickles in a cool, dry place away from direct sunlight to maintain their freshness.",
    },
    {
      question: "How long do homemade pickles last on the shelf?",
      answer:
        "Homemade pickles can last up to a year if stored properly in airtight containers.",
    },
    {
      question: "Our Range of Homemade Pickles Online",
      answer:
        "We offer a wide range of delicious homemade pickles including mango, lime, and mixed varieties.",
    },
  ];

  return (
    <>
      <HomeBanner />
      <HomeCat />
      <div className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="sticky">
                            <div className="banner">
                                <img src={Banner1} alt="failed" />
                            </div>
                            <div className="banner mt-4">
                                <img src={Banner2} alt="failed" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 productRow">
                        <div className="d-flex align-items-center ">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">Homemade Pickles</h3>
                                <p className="text-light text-sml mb-0">Do not miss the current offer until the end of March</p>
                            </div>
                            <Button className="viewAllBtn ml-auto" style={{ marginLeft: 'auto' }}>view All<span className="ml-auto" style={{ marginLeft: 'auto' }}><FaAngleDown /></span></Button>
                        </div>


                        <div className="product_row w-100 mt-4">
                        <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                         <SwiperSlide>
                            <ProductItem />             

                         </SwiperSlide>
                         <SwiperSlide>
                            <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                          <ProductItem />                            
                         </SwiperSlide>
                         <SwiperSlide>
                          <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                          <ProductItem />                           
                         </SwiperSlide>
                        </Swiper>
                        <div className="d-flex align-items-center ">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">New Products</h3>
                                <p className="text-light text-sml mb-0">Do not miss the current offer until the end of March</p>
                            </div>
                            <Button className="viewAllBtn ml-auto" style={{ marginLeft: 'auto' }}>view All<span className="ml-auto" style={{ marginLeft: 'auto' }}><FaAngleDown /></span></Button>
                        </div>
                        <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                         <SwiperSlide>
                         <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                          <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                         <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                         <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                         <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                          <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                         <ProductItem /> 
                         </SwiperSlide>
                         <SwiperSlide>
                         <ProductItem /> 
                         </SwiperSlide>
                           
                        </Swiper>
                        
                        
                        
                        </div>
                        
                        <div className="d-flex mt-4 mb-5 bannerSec">
                            <div className="banner3 ">
                                <img src={Slider1} alt="failed" className='cursor w-100' />
                            </div>
                            <div className="banner3">
                                <img src={Slider1} alt="failed" className='cursor w-100' />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
            
        </div>
      <div className="newsLetterSection mt-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">Rs 100 discount for your first order</p>
              <h3 className="text-white">Become a Part of Mom's Magic Family</h3>
              <p className="text-light">
                Enter Your E-mail <br />
                to receive our latest news and offers
              </p>
              <form action="">
                  <CiMail className="icon" />
                  <input type="text" placeholder="Your e-mail Address" />
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </form>
            </div>
            <div className="col-md-6 imgWrapper">
              <img src={email} alt="failed" className="w-100 img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="steps-container">
        <h2 className="steps-title">
          Steps we take to prepare <span>our Pickles</span>
        </h2>
        <div className="steps">
          <div className="step">
            <img src={step1} alt="Step 1" />
            <h3>Step 1</h3>
            <p>Farm fresh vegetables are sourced and cut</p>
          </div>
          <div className="step">
            <img src={step2} alt="Step 2" />
            <h3>Step 2</h3>
            <p>Vegetables are sautéed with Indian spices and quality oil</p>
          </div>
          <div className="step">
            <img src={step3} alt="Step 3" />
            <h3>Step 3</h3>
            <p>Pickles are stored in Barnis and sun-dried</p>
          </div>
          <div className="step">
            <img src={step4} alt="Step 4" />
            <h3>Step 4</h3>
            <p>Pickles are lab-tested and packed for delivery</p>
          </div>
        </div>
      </div>
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question} <span className="arrow">&#9662;</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
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

export default Home;
