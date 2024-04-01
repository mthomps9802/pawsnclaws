import React, {useEffect} from "react";
import './aboutStyles.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const About = () => {
        useEffect(() => {
            // Change the cursor for the entire document
            document.body.style.cursor = `url('${process.env.PUBLIC_URL}/mouse_image.png'), auto`;

            // Revert to the default cursor when the component unmounts
            return () => {
                document.body.style.cursor = 'default';
            };
        }, []);

        const customCursorStyle = {
            cursor: `url('http://localhost:3000/mouse_image.png'), auto`
        };
   
    const teams = [
        {
          name: "Engine Team",
          members: [
            {
                name: "Mordecai",
                image: `${process.env.PUBLIC_URL}/mordecai.jpg`,
                info: "...To Be Added"
            },
            {
                name: "Rigby",
                image: `${process.env.PUBLIC_URL}/rigby.png`,
                info: "...To Be Added"
            },
            {
                name: "Benson",
                image: `${process.env.PUBLIC_URL}/benson.png`,
                info: "...To Be Added"
            },
            {
                name: "Skips",
                image: `${process.env.PUBLIC_URL}/skips.jpg`,
                info: "...To Be Added"
            },
            {
                name: "Pops",
                image: `${process.env.PUBLIC_URL}/pops.jpg`,
                info: "...To Be Added"
            },
            {
                name: "Muscle Man",
                image: `${process.env.PUBLIC_URL}/muscle_man.jpg`,
                info: "...To Be Added"
            }
            // ... member objects with properties like name, image, and funFact
            ]
        },
        {
          name: "GUI Team",
          members: [
            {
                name: "Mordecai",
                image: `${process.env.PUBLIC_URL}/mordecai.jpg`,
                info: "...To Be Added"
            },
            {
                name: "Rigby",
                image: `${process.env.PUBLIC_URL}/rigby.png`,
                info: "...To Be Added"
            },
            {
                name: "Benson",
                image: `${process.env.PUBLIC_URL}/benson.png`,
                info: "...To Be Added"
            },
            {
                name: "Skips",
                image: `${process.env.PUBLIC_URL}/skips.jpg`,
                info: "...To Be Added"
            },
            {
                name: "Pops",
                image: `${process.env.PUBLIC_URL}/pops.jpg`,
                info: "...To Be Added"
            },
            {
                name: "Muscle Man",
                image: `${process.env.PUBLIC_URL}/muscle_man.jpg`,
                info: "...To Be Added"
            }
            // ... member objects
            ]
        }
      ];

      

      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
        <div className="about-container" >
            <div className="header" >
                <img 
                    src={`${process.env.PUBLIC_URL}/main_banner.jpg`} 
                    alt="Main Banner" 
                    className="head-image"  
                />
            </div>
            
            <div className="content-container">
                <div className="text-and-list">
                    <h1>Our Story</h1>
                    <ul className="info-list">
                        <li><b>Founded with Love:</b> Began as a small dream driven by a passion for animals.</li>
                        <li><b>Roots:</b> Established in the heart of our local community, earning trust and recognition.</li>
                        <li><b>Growth:</b> Evolved from a modest start into a trusted name in pet care.</li>
                        <li><b>Team of Passionate People:</b> Comprised of devoted pet lovers and experts in various fields.</li>
                        <li><b>A Family of Pet Advocates:</b> United by a shared mission to make a positive impact on pets and their families.</li>
                    </ul>
                </div>
                <img 
                    src={`${process.env.PUBLIC_URL}/main_banner_2.jpg`} 
                    alt="Secondary Banner" 
                    className="second-image"  
                />
            </div>
            <div className="mission-statement" >
                <h1>Our Mission</h1>
                <p>At Furrytale, our mission is to bring a
                     splash of joy and companionship into
                      every home through our dedicated service
                       and passion for animals. We believe in
                        creating strong bonds between pets and
                         their families by providing top-tier
                          care and an array of services tailored
                           to meet the unique needs of every furry
                            friend. Our commitment to excellence and
                             love for animals drives us to constantly
                              innovate and improve, ensuring that every
                               pet enjoys a happy, healthy, and fulfilling
                                life</p>
            </div>
            

            <div className="meet-teams">
            <h1> Meet The Teams</h1>

                {teams.map((team, index) => (
          <div key={index} className="team-section">
            <h2>{team.name}</h2>
            <Slider {...sliderSettings}>
              {team.members.map((member, memberIndex) => (
                <div key={memberIndex} className="team-member">
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.info}</p>
                </div>
              ))}
            </Slider>
          </div>
        ))}
                
            </div>

        </div>
    );
};

export default About;
