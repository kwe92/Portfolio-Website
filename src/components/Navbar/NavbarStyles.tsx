import styled from "styled-components";
import { Row } from "../../constants/layout/Flex";
import { Theme } from "../../interfaces/ThemeInterface";

const ContainerNavbar = styled.nav`

    display: flex;

    align-items: center;

    justify-content: space-between;

    position: fixed;

    z-index: 2;

    width: 100%;

    height: ${({ theme }:{ theme:Theme }) => (theme.navbarHeight)};

    padding: 1rem 2rem;

    // TODO: Figure out a good navbar color
    background: rgba(0, 0, 0, 0.05);

    backdrop-filter: blur(0.25rem);

    --webkit-backdrop-filter: blur(0.25rem);

    border: 0.0625rem solid rgba(255, 255, 255, 0.18);

`;

const LogoImageContainer = styled(Row)`

    justify-content: flex-start;

    align-items: center;

`;

const LogoImage = styled.img`

    width: 5.625rem;

    height: auto;

    @media screen and (min-width: 2000px){
        width: 11.25rem;
    }
`;

const NavLinkUL = styled.ul`

    // flex: 1;

    display: flex;

    align-items: center;

    justify-content: center;

    @media screen and (max-width: 900px){

        display: none;

    }
`;

const NavLinkListItemDot = styled.div`

    width: 0.3125rem;

    height: 0.3125rem;

    background: transparent;

    margin-bottom: 0.3125rem;

    border-radius: 50%;

`;

const NavLinkListItem = styled.a`

    display: flex;

    flex-direction: column;

    text-transform: uppercase;

    font-weight: 500;

    transition: all 0.3125s ease-in-out;
    
    color: ${({ theme }) => (theme.greyColor)};

    &: hover{
        color: ${({ theme }) => (theme.secondaryColor())};
    }

`;

const NavLinkListItemWrapper = styled.li`

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    margin: 0rem 0.625rem;

    cursor: pointer;

    &: hover{
        ${NavLinkListItemDot}{
            background: ${({theme}) => (theme.secondaryColor(0.75))};
        }
    }

`;





export {
           ContainerNavbar
         , LogoImageContainer
         , LogoImage
         , NavLinkUL
         , NavLinkListItemWrapper
         , NavLinkListItem
         , NavLinkListItemDot

        }