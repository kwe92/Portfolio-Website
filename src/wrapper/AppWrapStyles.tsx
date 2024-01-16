import styled from "styled-components";
import { Row } from "../constants/layout/Flex";

const AppContainer = styled(Row)`
    width: 100%
    min-height: 100vh;
`;

const Copyright = styled.div`

width: fit-content;

padding: 2rem 0 0;

display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;

p {
  text-transform: uppercase;
  color: var(--black-color);
}
    
`;

const ComponentWrapper = styled.div`

flex: 1;

width: 100%;

height: 100vh;

flex-direction: column;

padding: 4rem 2rem;

display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 450px) {
  padding: 4rem 1rem 2rem;
}


`;

const AppNavigation = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
    padding: 1rem;

`;

const NavigationDot = styled.a`
 
 
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #cbcbcb;

    margin: 0.5rem;

    transition: background-color 0.2s ease-in-out;

    &:hover {
    background-color: var(--secondary-color);
    }

    @media screen and (min-width: 2000px) {
    width: 20px;
    height: 20px;
    }
 
`;

export { 
          AppContainer
        , Copyright
        , ComponentWrapper
        , AppNavigation
        , NavigationDot
     };