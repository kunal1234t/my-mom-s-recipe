import { FiMenu } from "react-icons/fi";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiBloggerLine } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";
import { BiPackage } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
    const [showTasteDropdown, setShowTasteDropdown] = useState(false);

    // Create a ref for the dropdown
    const dropdownRef = useRef(null);

    // Function to handle clicks outside of the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowTasteDropdown(false);
        }
    };

    // Add event listener for clicks outside the dropdown when it's visible
    useEffect(() => {
        if (showTasteDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showTasteDropdown]);

    return (
        <nav>
            <div className="container" style={{ marginLeft: 'auto' }}>
                <div className="row">
                    {/* Shop By Taste Dropdown */}
                    <div className="col-sm-2 navPart1">
                        <div className="catWrapper">
                            <Button
                                className='allCatTab align-items-center'
                                onClick={() => setShowTasteDropdown(!showTasteDropdown)}
                            >
                                <span className="icon1"><FiMenu /></span>
                                <span className="text">Shop By Taste</span>
                                <span className="icon2 ml-2"><FaAngleDown /></span>
                            </Button>
                            {showTasteDropdown && (
                                <div ref={dropdownRef} className="sidebarNav shadow">
                                    <ul>
                                        <li><Link to="/taste/spicy"><Button>Spicy</Button></Link></li>
                                        <li><Link to="/taste/tangy"><Button>Tangy</Button></Link></li>
                                        <li><Link to="/taste/sweet"><Button>Sweet</Button></Link></li>
                                        <li><Link to="/taste/mango"><Button>Mango</Button></Link></li>
                                        <li><Link to="/taste/seasonal-pickle"><Button>Seasonal Pickle</Button></Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Other Navigation Links */}
                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto ">
                            <li className="list-inline-item">
                                <Link to="/shop">
                                    <Button>
                                        <span className="icon2"><FaShop /></span>
                                        Shop
                                        <span className="icon2"><FaAngleDown /></span>
                                    </Button>
                                </Link>
                                <div className="submenu shadow">
                                    <Link to="/shop/homemade-pickle">
                                        <Button>Homemade Pickle</Button>
                                    </Link>
                                    <Link to="/shop/chutneyes">
                                        <Button>Chutneyes</Button>
                                    </Link>
                                    <Link to="/shop/seasonal-pickle">
                                        <Button>Seasonal Pickle</Button>
                                    </Link>
                                    <Link to="/shop/combos">
                                        <Button>30% off Combos</Button>
                                    </Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/our-story">
                                    <Button>
                                        <span><IoBookOutline /></span>Our Story
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/blog-page">
                                    <Button>
                                        <span><RiBloggerLine /></span>Blog
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/launching-soon">
                                    <Button>
                                        <span><FaRegClock /></span>Launching Soon
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/combos">
                                    <Button>
                                        <span><BiPackage /></span>Combos
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/contact-us">
                                    <Button>
                                        <span><CiPhone /></span>Contact Us
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
