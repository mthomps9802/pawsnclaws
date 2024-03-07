import React, { useState, useEffect } from "react";
import './NavStyles.css'; 
import logo from '../logo.svg';
import {NavLink as Link} from "react-router-dom";

const Navbar = () => {

    //Track dropdown visibility state
    const [dropdownVisible, setDropdownVisible] = useState(false);

    //Show dropdown  
    const showDropdown = () => setDropdownVisible(true);

    //Hide dropdown  
    const hideDropdown = () => setDropdownVisible(false);

    //add/remove event listeners
    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (dropdownVisible && !event.target.closest('.dropdown')){
                hideDropdown();
            }
        };

        if (dropdownVisible){
            document.addEventListener('click', handleDocumentClick);
        }

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [dropdownVisible]);

    return(
        <>
        <div className="top-nav">
            <Link to="rehome"> Rehome</Link>
            <Link to="adopt"> Adopt</Link>
        </div>

        <nav className="navbar">    
            <div className="logo ">
                <Link to="rehome">
                    <img src={logo} alt="logo" />
                </Link>
                
            </div>
            <ul className="nav-links ">
                <li className="dropdown">
                    <button type="button" className="dropbtn" onClick={showDropdown}>Browse Pets </button>
                    {dropdownVisible && (
                        <div className="dropdown-content">
                        <a href="#dogs">Dogs</a>
                        <a href="#cats">Cats</a>
                        <a href="#birds">Birds</a>
                        <a href="#small-pets">Small Pets</a>
                    </div>
                    )}
                </li>   
                <li><Link to="aboutus"> About Us</Link></li>
                <li><Link to="contactus"> Contact Us</Link></li>
                <li><Link to="donate"> Donate </Link></li>
                <li><Link to="howitworks"> How It Works</Link></li>
            </ul>     
        </nav>

        </>
    );
};

export default Navbar;