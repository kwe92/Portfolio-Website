import React, { ReactElement } from "react";
import Navbar from "./components/Navbar/Navbar";
import styled, { ThemeProvider } from "styled-components";
import AppWrapper from "./AppStyles";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import appTheme from "./theme/Theme";
import { Theme } from "./interfaces/ThemeInterface";

interface Props{

};

const App = (props:Props) => {
    return (
      <ThemeProvider theme={appTheme}>

         <AppWrapper>

            <Navbar/>
            <Wrapper>
              <Header />
              <About />
              {/* <Work />
              <Skills />
              <Testimonial />
              <Footer />  */}
            </Wrapper>
          </AppWrapper>

      </ThemeProvider>
         
          
    );
};

const Wrapper = styled.div`
  padding-top: ${({ theme }:{ theme: Theme }) => (theme.navbarHeight)};
`;

export default App;