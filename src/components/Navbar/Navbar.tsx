import React, { useState } from "react";
import { images } from "../../constants/images";
import {ContainerNavbar, LogoImageContainer, LogoImage, NavLinkUL, NavLinkListItem, NavLinkListItemWrapper, NavLinkListItemDot}from "./NavbarStyles";
import { NavbarMobileMenu, HiMenu, Hi_X, FramerDiv, MobileNavLinkUL, MobileNavLinkListItem } from "./MobileLinksStyles";
import { motion } from "framer-motion";

interface Props {

};


const Navbar = (props:Props) => {

  const [toggle, setToggle] = useState(false);

  const handToggleOn = () => (setToggle(true));

  const handToggleOff = () => (setToggle(false));

  const handToggleBoth = () => (setToggle((prevState) => (!prevState)));


  const linkText = ["home", "about", "work", "skills", "contact"];

const navLinksItems = linkText.map((item) => 
  <NavLinkListItemWrapper key={`link-${item}`}>

    <NavLinkListItemDot/>
    
    <NavLinkListItem href={`#${item}`}>
      {item}
    </NavLinkListItem>

  </NavLinkListItemWrapper>
);

const mobileNavLinksItems = linkText.map((item) => 

  <NavLinkListItemWrapper key={item}>

    <MobileNavLinkListItem href={`#${item}`} onClick={handToggleOff}>
      {item}
    </MobileNavLinkListItem>

  </NavLinkListItemWrapper>
);

  return (
   <ContainerNavbar>

      <LogoImageContainer>
          <LogoImage src={images.logo2} alt="logo2"/>
      </LogoImageContainer>

      <NavLinkUL>
        {navLinksItems}
      </NavLinkUL>

      <NavbarMobileMenu>
        <HiMenu onClick={handToggleBoth}/>
      
        {
          toggle &&  
          <MotionDiv>
            <Hi_X onClick={handToggleOff}/>
            <MobileNavLinkUL>
            {mobileNavLinksItems}
            </MobileNavLinkUL>
          </MotionDiv>
      }
      </NavbarMobileMenu>

   </ContainerNavbar>
  );
};

const transition = { duration:0.85, ease: "easeOut" };

const MotionDiv = (props:{ children: any }) => (
    <FramerDiv
    whileInView={{ x: [300, 0] }}
    transition={transition}
    >
      {props.children} 
    </FramerDiv>
)
export default Navbar;