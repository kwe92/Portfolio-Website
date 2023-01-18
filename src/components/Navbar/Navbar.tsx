import React from "react";
import { images } from "../../constants/images";
import {ContainerNavbar, LogoImageContainer, LogoImage, NavLinkUL}from "./NavbarStyles";

interface Props {

};


const Navbar = (props:Props) => {

  return (
   <ContainerNavbar>

      <LogoImageContainer>
          <LogoImage src={images.logo2} alt="logo2"/>
      </LogoImageContainer>

      <NavLinkUL>
        {navLinksItems}
      </NavLinkUL>
   </ContainerNavbar>
  );
};

const linkText = ["home", "about", "work", "skills", "contact"];

const navLinksItems = linkText.map((item, index) => 
  <li key={index}>{item}</li>
);

export default Navbar;