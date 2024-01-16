import React, { useState } from "react";
import { images } from "../../constants/images";
import {ContainerNavbar, LogoImageContainer, LogoImage, NavLinkUL, NavLinkListItem, NavLinkListItemWrapper, NavLinkListItemDot}from "./NavbarStyles";
import { NavbarMobileMenu, HiMenu, Hi_X, FramerDiv, MobileNavLinkUL, MobileNavLinkListItem } from "./MobileLinksStyles";
import linkText from "../../constants/data/LinkText";

const Navbar = (props:{}) => {

  const [toggle, setToggle] = useState(false);

  const handToggleOn = () => (setToggle(true));

  const handToggleOff = () => (setToggle(false));

  const handToggleBoth = () => (setToggle((prevState) => (!prevState)));

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
    // TODO: whileInView on devices with a smaller width than 300px | Small case, can figure it out later
    whileInView={{ x: [300, 0] }}
    transition={transition}
    >
      {props.children} 
    </FramerDiv>
)
export default Navbar;