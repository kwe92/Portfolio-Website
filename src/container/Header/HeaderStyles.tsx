import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { images } from "../../constants/images";
import { Column, Row } from "../../constants/layout/Flex";
import { Theme } from "../../interfaces/ThemeInterface";

const HeaderContainer = styled(Row)`

    // TODO: Maybe Remove
    flex: 1;

    // TODO: Maybe should be viewport
    width: 100%;

    // TODO: Maybe 100% ?
    height: 100vh;

    position: relative;

    background: url(${images.bgImg});

    background-size: cover;

    background-repeat: repeat;

    background-position: center;

    padding: 6rem 2rem 0;

    @media screen and (max-width:1200px){
        flex-direction: column;
    }

`;

const HeaderInfo = styled(motion.div)`
//  TODO: Remove flex?
flex: 0.65;

display: flex;

flex-direction: column;

height: 100%;

align-items: flex-start;

flex-direction: flex-start;

`;

const HeaderBadgeContainer = styled(Column)`

    width: 100%;

    align-items: flex-start;

    justify-content: flex-start;

    gap: 0.625rem;

    @media screen and (min-width: 1200px){

        align-items: flex-end;

        justify-content: flex-end;

    }

`;

const ContainerCSS = css`

padding: 1rem 1.625rem;

// TODO: Remove, why is there no thickness or border type?
border: ${({ theme }:{ theme: Theme }) => (theme.whiteColor)};

border-radius: 15px;

width: auto;

box-shadow: 0 0 20px rgba(0,0,0,0.2);


`;


const IconNameContainer = styled(Row)`
${ContainerCSS}

    gap: 0.75rem;

    padding-left: 1rem;
`;

const DescriptionContainer = styled(Column)`

${ContainerCSS}

gap: 0.5rem;

p {
    width: 100%;

    text-transform: capitalize;

    text-align: right;
}

`

const IconHand = styled.span`

display: flex;

flex-direction: column;

align-items: center;

justify-content: center;

font-size: 2.5rem;

@media screen and (min-width: 2000px){

    font-size: 5rem;

}

@media screen and (max-width: 1200px){

    justify-content: flex-start;
    
    align-items: flex-start;

}

`;

const CircleIconContainer = styled(motion.div)`

    // TODO: Remove flex?
    flex: 0.75;

    display: flex;

    width: fit-content;

    align-self: center;

    flex-direction: column;

    justify-content: space-evenly;

    align-items: flex-start;

    margin-left: 1rem;

    @media screen and (max-width: 1200px){

        width: 100%;
    
        flex-direction: row;
    
        flex-wrap: wrap;
    
        margin-left: 0;
    
    }

`;

const CircleIconBadge = styled(Column)`

display: flex;

flex-direction: column;

justify-content: center;

align-items: center;

width: 100px;

height: 100px;

border-radius: 50%;

background: ${({ theme }:{ theme: Theme }) => (theme.whiteColor)};

box-shadow: 0 0 20px rgba(0,0,0,0.2);

&:nth-child(1){

    width: 100px;

    height: 100px;

}

&:nth-child(2){

    margin: 1.75rem;

    width: 150px;

    height: 150px;

}

&:nth-child(3){

    width: 70px;

    height: 70px;

}

// TODO: Maybe change stagger size? 
@media screen and (min-width: 2000px){

    &:nth-child(1){

        width: 400px;
    
        height: 400px;
    
    }
    
    &:nth-child(2){
    
        width: 170px;
    
        height: 170px;
    
    }
    
    &:nth-child(3){
    
        width: 200px;
    
        height: 200px;
    
    }

}

@media and screen (max-width: 1200px){
    margin: 1rem;
}

`;

const CircleIconBadgeImage = styled.img`

    width: 60%;

    height: 60%;

`;

const ProfileImageContainer = styled(motion.div)`

    flex: 1;

    height: 100%;

    display: flex;

    justify-content: flex-end;

    position: relative;

    img{
        width: 100%;

        object-fit: contain;

        z-index: 1;


    }

`;

const OverlayCircle = styled(motion.img)`

    position: absolute;

    left: 0;

    right: 0;

    bottom: 0;

    z-index: 0;

    width: 100%;

    height: 100%;

    @media screen and (max-width: 1200px){
        margin: 2rem 0;
    }
`;


export {
      HeaderContainer
    , HeaderInfo
    , HeaderBadgeContainer
    , IconNameContainer
    , IconHand
    , DescriptionContainer
    , CircleIconContainer
    , CircleIconBadge
    , CircleIconBadgeImage
    , ProfileImageContainer
    , OverlayCircle
    
};