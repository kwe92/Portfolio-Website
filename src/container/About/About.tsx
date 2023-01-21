import React, { useState, useEffect, SetStateAction  } from "react";
import { motion } from "framer-motion";
import { AboutContainer, AboutHeadText, AboutProfilesContainer, AboutProfileContainer } from "./AboutStyles";
import { images } from "../../constants/images/index";
import AboutInterface  from "../../interfaces/About";
import useAbouts from "../../hooks/sanity_hooks/AboutsData";
import { urlfor } from "../../client";
import { SlowBuffer } from "buffer";

const About = () => {

  // Custom Hook for API call
  const abouts = useAbouts();

  console.log("Abouts data: ", abouts);

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
        {abouts.map((about, index) =>{
          
          const imageUrl = urlfor(about.imageUrl).url();

          return (
              <AboutProfileContainer_ key={`about-${index}`}>

                <img src={imageUrl} alt={about.title} />
                <h2 className="bold-text" style={{marginTop: "20px"}}>{about.title}</h2>
                <p className="bold-text" style={{marginTop: "10px"}}>{about.description}</p>
                
              </AboutProfileContainer_>
          )
        })}
      </AboutProfilesContainer>
    </AboutContainer>
  );
}

const AboutProfileContainer_ = (props:{children: any, key: React.Key}) =>  <AboutProfileContainer key={props.key}
whileInView={{ opacity: 1 } }
whileHover={{ scale: 1.1}}
transition={{duration: 0.5, type: "tween "}}
className={"app__profile-item"}
>
  {props.children}
</AboutProfileContainer>

export default About;