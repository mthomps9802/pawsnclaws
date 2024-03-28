import React from "react";
import './aboutStyles.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="header">
                <img 
                    src={`${process.env.PUBLIC_URL}/main_banner.jpg`} 
                    alt="Main Banner" 
                    className="head-image"  
                />
                <h1>About Furrytale</h1>
            </div>
            
            <div className="content-container">
                <div className="text-and-list">
                    <p>Our team Radda Radda Radda</p>
                    <ul className="info-list">
                        <li>What we do</li>
                        <li>Why we do</li>
                        <li>Where we do</li>
                        <li>Who we do</li>
                        <li>When we do</li>
                    </ul>
                </div>
                <img 
                    src={`${process.env.PUBLIC_URL}/main_banner_2.jpg`} 
                    alt="Secondary Banner" 
                    className="second-image"  
                />
            </div>
        </div>
    );
};

export default About;
