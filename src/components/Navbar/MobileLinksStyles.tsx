import styled from "styled-components";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Row, Column } from "../../constants/layout/Flex";
import { Theme } from "../../interfaces/ThemeInterface";
import { motion } from "framer-motion";
import { NavLinkListItem } from "./NavbarStyles";
import { images } from "../../constants/images";

const secondaryColor = ( { theme }: {theme: Theme} ) => (theme.secondaryColor(1));

const NavbarMobileMenu = styled(Row)`

    width: 2.1875rem;

    height: 2.1875rem;

    background: ${secondaryColor};

    align-items: center;

    justify-content: center;

    position: relative;

    border-radius: 50%;

    @media screen and (min-width:900px){
        display: none;
    }
`;

const HiMenu = styled(HiMenuAlt4)`

width: 70%;

height: 70%;

color: ${( { theme }: {theme: Theme} ) => (theme.whiteColor)};

`;

const Hi_X = styled(HiX)`

    font-size: 1rem;

    color: ${({ theme }) => (theme.whiteColor)};

    &: hover{
        color: ${({ theme }) => (theme.secondaryColor())}
    }

`;

const FramerDiv = styled(motion.div)`

    display: flex;

    flex-direction: column;

    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;

    // TODO: Figure out best width you like

    width: 40%;

    height: 100vh;

    background-image: url(${images.mobileMenu});

    background-size: cover;

    // TODO: Maybe remove
    // background-repeat: repeat;

    padding: 1rem;

    justify-content: flex-end;
    
    align-items: flex-end;

    @media screen and (min-width:900px){
        display: none;
    }
    
`;


const MobileNavLinkUL = styled.ul`

    display: flex;

    flex-direction: column;

    width: 100%;

    height: 100%;

    justify-content: flex-start;

    align-items: flex-start;

    gap 2.75rem;

`

const MobileNavLinkListItem = styled(NavLinkListItem)`

    display: inline;

    color: ${({ theme }) => (theme.whiteColor)}
`
export { 
      NavbarMobileMenu
    , HiMenu
    , Hi_X
    , FramerDiv
    , MobileNavLinkUL
    , MobileNavLinkListItem
}

