import styled from "styled-components";
import { Row } from "../../constants/layout/Flex";

const ContainerNavbar = styled.nav`

    display: flex;

    align-items: center;

    justify-content: space-between;

    position: fixed;

    width: 100%;

    padding: 1rem 2rem;

    background: rgba(255, 255, 255, 0.25);
`;

const LogoImageContainer = styled(Row)`

    width: 5rem;

`;

const LogoImage = styled.img`
    max-width: 100%;
`;

const NavLinkUL = styled.ul``;

export {
           ContainerNavbar
         , LogoImageContainer
         , LogoImage
         , NavLinkUL

        }