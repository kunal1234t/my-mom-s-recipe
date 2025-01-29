import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import { FaHeart } from "react-icons/fa";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from '../QuantityBox';

import item1 from '../../assets/images/mango.jpg';
import item2 from '../../assets/images/mix.jpg';
import item3 from '../../assets/images/Mirch.jpg';

const ProductModel = (props) => {
    const zoomSliderBigRef = useRef(null);
    const zoomSliderRef = useRef(null);

    const [slideIndex, setSlideIndex] = useState(0);

    const goto = (index) => {
        setSlideIndex(index);
        if (zoomSliderRef.current?.swiper) {
            zoomSliderRef.current.swiper.slideTo(index);
        }
        if (zoomSliderBigRef.current?.swiper) {
            zoomSliderBigRef.current.swiper.slideTo(index);
        }
    };

    return (
        <Dialog className="ProductModel" open={true} onClose={props.closeProductModel}>
            <Button className="close_" onClick={props.closeProductModel}>
                <IoClose />
            </Button>
            <h4 className="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center mr-4">
                    <span>Brand:</span>
                    <span className="ml-2">Welch's</span>
                </div>
                <Rating name="read-only" value={5} readOnly precision={0.5} size="small" />
            </div>
            <hr />
            <div className="row mt-2">
                <div className="col-md-5">
                    <div className="productZoom position-relative">
                        <div className="badge badge-primary">28% OFF</div>
                        <Swiper
                            slidesPerView={1}
                            navigation={false}
                            modules={[Navigation]}
                            className="zoomSliderBig"
                            onSwiper={(swiper) => (zoomSliderBigRef.current = { swiper })}
                        >
                            <SwiperSlide>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={item1} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={item2} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={item3} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="zoomSlider"
                        onSwiper={(swiper) => (zoomSliderRef.current = { swiper })}
                    >
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 0 ? 'item_active' : ''}`}>
                                <img
                                    src={item1}
                                    alt="failed"
                                    className="w-100"
                                    onClick={() => goto(0)}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 1 ? 'item_active' : ''}`}>
                                <img
                                    src={item2}
                                    alt="failed"
                                    className="w-100"
                                    onClick={() => goto(1)}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 2 ? 'item_active' : ''}`}>
                                <img
                                    src={item3}
                                    alt="failed"
                                    className="w-100"
                                    onClick={() => goto(2)}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="col-md-7">
                    <div className="d-flex info align-items-center mb-4">
                        <span className="oldPrice text-success mr-2">Rs 2500</span>
                        <span className="newPrice text-danger">Rs 1500</span>
                    </div>
                    <span className="badge badge-success">IN STOCK</span>
                    <p className="mt-3">
                        Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent.
                    </p>
                    <div className="d-flex align-items-center">
                        <QuantityBox />
                        <Button className="btn-green btn-lg btn-big btn-round ml-3">Add to Cart</Button>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <Button className="btn-round btn-sml" variant="outlined">
                            <FaHeart /> &nbsp; Add to Wishlist
                        </Button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductModel;
