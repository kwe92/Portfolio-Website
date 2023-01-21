import { motion } from "framer-motion";
import styled from "styled-components";
import { Column, Row } from "../../constants/layout/Flex";
import { Theme } from "../../interfaces/ThemeInterface";

const AboutHeadText = styled.h2`

    font-size: 2.75rem;

    font-weight: 500;

    text-align: center;

    text-transform: capitalize;

    span{

        color: ${({ theme }:{ theme:Theme }) => (theme.secondaryColor())};

    }

    @media screen and (min-width: 2000px){
        font-size: 4rem;
    }
`;

const AboutContainer = styled(Column)`
    flex: 1;

    width: 100%;
`;

const AboutProfilesContainer = styled(Row)`

    justify-content: center;

    align-items: flex-start;

    flex-wrap: wrap;

    margin-top: 2rem;

`; 

const AboutProfileContainer = styled(motion.div)`

    display: flex;

    flex-direction: column;   

    justify-contet: flex-start;

    align-items: flex-start; 
     
    width: 190px;

    margin: 1.5rem; 

    img{
        width: 100%;
        height: 145 px;
        object-fit: cover;
        border-radius: 15px;
    }

    @media screen and (min-width: 2000px){

        width: 370px;

        margin: 2rem 4rem;

        img {
            height: 320px;
        }
    }


`;

export {
        AboutHeadText
      , AboutContainer
      , AboutProfilesContainer
      , AboutProfileContainer
    };
