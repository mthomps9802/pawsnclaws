import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import './adoptStyles.css'; 

const Adopt = () => {
    return (
        <div>
            

            <Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true}>
                <div className="carousel-container">
                    
                <img src={`${process.env.PUBLIC_URL}/main_banner.jpg`} alt="Test Pets 1" />
                    <p className="legend">Animal 1</p>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/main_banner_2.jpg`} alt="Test Pets 2" />
                    <p className="legend">Animal 2</p>
                </div>
                {/* Add more images as needed */}
            </Carousel>

            <h1>Main page of what I think is called Paws n Claws</h1>
        </div>
        
    );
};
 
export default Adopt;