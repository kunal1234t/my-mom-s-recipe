
import Button from '@mui/material/Button';

import item1 from '../../assets/images/mango.jpg';

import Rating from '@mui/material/Rating';
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ProductModel from '../../components/ProductModel';

import { useState } from 'react';
const ProductItem=()=>{
    const[isOpenProductModel,setisOpenProductModel]=useState(false);
    const viewProductDetails = (id) => {
        document.body.style.overflow = "hidden"; // Prevent scroll shifts
        setisOpenProductModel(true);
      };
      
      const closeProductModel = () => {
        document.body.style.overflow = "auto"; // Restore scrolling
        setisOpenProductModel(false);
      };
      
    return(
        <>
        <div className="item productItem">
            <div className="imgWrapper">
                <img src={item1} alt="failed" className="w-100"/>
                <span className="badge badge-primary">28%</span>
                <div className="actions">
                    <Button onClick={()=>viewProductDetails(1)}><BsArrowsFullscreen /></Button>
                    <Button><FaRegHeart /></Button>
                </div>
            </div>
            <div className="info">
                <h4>Mango Pickle</h4>
                <span className="text-success d-block">In Stock</span>
                <Rating className="mt-2 mb-2" name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="small" />
                <div className="d-flex">
                <span className="oldPrice">Rs 2500</span>
                <span className="newPrice text-danger ml-3">Rs 1500</span>
                </div>
            </div>
                                

        </div>
                            { 
                                isOpenProductModel===true && <ProductModel closeProductModel={closeProductModel} />
                            }
                            </>
    )
}
export default ProductItem;