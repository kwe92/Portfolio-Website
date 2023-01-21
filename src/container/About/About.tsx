import React, { useState, useEffect  } from "react";
import { motion } from "framer-motion";
import { AboutContainer, AboutHeadText, AboutProfilesContainer, AboutProfileContainer } from "./AboutStyles";
import { images } from "../../constants/images/index"

interface About {
  title: string,
   description: string,
   imageUrl: string,
};

const About = () => {

  const abouts: About[] = [
    {
      title: "Software Development Principles",
       description: "Software development is a passion of mine",
       imageUrl: images.about01,
    },
    {
      title: "Web Design",
       description: "Good design should be kept in mind!",
       imageUrl: images.about02,
    },
    {
      title: "UI/UX",
       description: "Simple clean responsive and adaptive",
       imageUrl: images.about03,
    },
    {
      title: "Web Developer",
       description: "I love to create beautiful web applications that look good on any device.",
       imageUrl: images.about04,
    }
  ];

  return (
    <AboutContainer>
    <AboutHeadText>
      i know that
      <span> good design</span>
      <br/>
      means
      <span> good business</span>
    </AboutHeadText>

    <AboutProfilesContainer className="app__profiles">
      {abouts.map((about, index) => (
        <AboutProfileContainer key={`about-${index}`}
        whileInView={{ opacity: 1 } }
        whileHover={{ scale: 1.1}}
        transition={{duration: 0.5, type: "tween "}}
        className={"app__profile-item"}
        >
          <img src={about.imageUrl} alt={about.title} />
          <h2 className="bold-text" style={{marginTop: "20px"}}>{about.title}</h2>
          <p className="bold-text" style={{marginTop: "10px"}}>{about.description}</p>

        </AboutProfileContainer>
      ))}
    </AboutProfilesContainer>
    </AboutContainer>
  );
}

export default About;