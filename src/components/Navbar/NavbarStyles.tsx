import styled from "styled-components";
import { Row } from "../../constants/layout/Flex";

const ContainerNavbar = styled.nav`

    display: flex;

    align-items: center;

    justify-content: space-between;

    position: fixed;

    width: 100%;

    padding: 1rem 2rem;

    // background: rgba(255, 255, 255, 0.25);

    background: rgba(255, 145, 101, 0.25);

    backdrop-filter: blur(0.25rem);

    --webkit-backdrop-filter: blur(0.25rem);

    border: 0.0625rem solid rgba(255, 255, 255, 0.18);

    z-index: 2;


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

`;

const NavLinkListItemWrapper = styled.li`

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    margin: 0rem 0.75rem;

    cursor: pointer;

`;

const NavLinkListItemDot = styled.div`

    width: 0.3125rem;

    height: 0.3125rem;

    background: blue;

    margin-bottom: 0.3125rem;

    border-radius: 50%;

`;

const NavLinkListItem = styled.a`

    display: flex;

    flex-direction: column;

    text-transform: uppercase;

    font-weight: 500;

    transition: all 0.3125s ease-in-out;

    &: hover{
        color: orange;
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