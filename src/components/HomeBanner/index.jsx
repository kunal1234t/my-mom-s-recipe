import React from "react";
import Slider from "react-slick";
import Slider1 from '../../assets/images/Slider1.png'
import Slider2 from '../../assets/images/Slider2.png'
const HomeBanner=()=>{
    var settings = {
        dots: false,
        arrow:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return(
        <div className="container mt-3">
            <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src={Slider1} alt="failed"  className="w-100 img-cropped"/>
                </div>
                <div className="item">
                    <img src={Slider2} alt="failed"  className="w-100 img-cropped"/>
                </div>
                <div className="item">
                    <img src={Slider2} alt="failed"  className="w-100 img-cropped"/>
                </div>
            </Slider>
        </div>
        </div>
    )
}
export default HomeBanner;