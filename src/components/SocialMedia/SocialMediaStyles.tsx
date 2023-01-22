import styled from "styled-components";
import { Row, Column } from "../../constants/layout/Flex";
import { Theme } from "../../interfaces/ThemeInterface";

const AppSocialContainer = styled(Column)`

justify-content: flex-end;
align-items: center;

padding: 1rem;

div{
    wdith: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme  }:{ theme:Theme }) => (theme.whiteColor)};
    margin: 0.25rem 0rem;
    border: 0.0625rem solid ${({ theme  }:{ theme:Theme }) => (theme.lightgreyColor)};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease-in-out;

    svg{
        width: 15px;
        height: 15px;
        color: ${({ theme  }:{ theme:Theme }) => (theme.greyColor)};
    }

    &: hover{
        background-color: ${({ theme }:{ theme:Theme }) => (theme.secondaryColor())};
        border-color: ${({ theme }:{ theme:Theme }) => (theme.secondaryColor())};

        svg{
            color: ${({ theme }:{ theme:Theme }) => (theme.whiteColor)}
        }

        @media screen and (min-width:2000px){
            width: 70px;
            height: 70px;

            margin 0.5rem 0;

            svg{
                width: 30px;
                height: 30px;
            }
        }
    }


}

@media screen and (max-width: 450px){
    display: none;
}


`;

export { 
      AppSocialContainer
    , 
}