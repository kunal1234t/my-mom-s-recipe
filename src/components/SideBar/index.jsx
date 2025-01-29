import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import Banner1 from '../../assets/images/Banner1.jpg'
import { Link } from "react-router-dom";
const Sidebar=()=>{
    const [value,setValue]=useState([100,60000]);
    const [value2,setaValue2]=useState(0);
    return(
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6>Aachar Categories</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Mango" />
                            </li>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Mix" />
                            </li>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Chilli" />
                            </li>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Lemon" />
                            </li>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Amla" />
                            </li>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Garlic" />
                            </li>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Ginger" />
                            </li>
                        </ul>
                    
                    </div>
                </div>
                <div className="filterBox">
                    <h6>Sort By</h6>
                    <RangeSlider value={value} onInput={setValue} min={100} max={10000} step={5} />
                    <div className="d-flex pt-2 pb-2 pt-2 priceRange">
                        <span>From <strong className='text-success'>Rs: {value[0]}</strong></span>
                        <span className='ml-auto'>From: <strong className='text-dark'>Rs: {value[1]}</strong></span>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>Product Status</h6>
                    <div className="scroll">
                        <ul>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="In Stock" />
                            </li>
                            <li>
                            <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Out Of Stock" />
                            </li>
                        </ul>
                    
                    </div>
                </div>
                <br />
                <div className="banner">
                <Link to ="#"><img src={Banner1} alt="" /></Link>
                </div>
            </div>
        </>
    )
};
export default Sidebar;