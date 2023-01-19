import React, { ReactElement } from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import AppWrapper from "./AppStyles";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import appTheme from "./theme/Theme";

interface Props{

};

const App = (props:Props) => {
    return (
      <ThemeProvider theme={appTheme}>

         <AppWrapper>

            <Navbar/>
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />

          </AppWrapper>

      </ThemeProvider>
         
          
    );
};

export default App;