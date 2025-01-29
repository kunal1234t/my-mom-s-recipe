import logo from '../../assets/images/logo.jpg'
import {Link} from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { FaUserLarge } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import React, { useState } from "react";
const Header=()=>{
    const [darkMode, setDarkMode] = useState(false);
    
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute(
          "data-theme",
          darkMode ? "light" : "dark"
        );
      };
    return(
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">New Launch: Makhana Kheer Mixes. Shop Now</p>
                </div>
            </div>
            <div className="header">
                <div className="container">
                <div className="row g-3 d-flex align-items-center">
                        <div className="logoWrapper d-flex align-items-center col-sm-2 mb-3">
                            <Link to={'/'}><img src={logo} alt='Logo' /></Link>
                        </div>
                        <div className="part2 col-sm-10 d-flex align-items-center">
                            <CountryDropdown />
                            <SearchBox />
                            <div className="part3 d-flex align-items-center ml-auto">
                                <Link to={'/sign-up'}><Button className='circle mr-3'><FaUserLarge /></Button></Link>
                                <div className="cartTab d-flex align-item-center ml-auto !important">
                                    <span className='price'>Rs: 1300</span>
                                    <div className="position-relative ml-2">
                                        <Button className='circle '><IoBagHandleSharp /></Button>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                    <button className="toggle-dark-mode" onClick={toggleDarkMode}>
                                        {darkMode ? "Light Mode" : "Dark Mode"}
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Navigation />
        </div>
    )
}
export default Header;