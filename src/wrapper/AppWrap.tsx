import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { AppContainer, Copyright, ComponentWrapper } from "./AppWrapStyles";

const AppWrap = (Component: any, idName: string, classNames: string) => function HOC() {
  return (
    <AppContainer id={idName} className={`app__container ${ classNames }`}>

      <SocialMedia/>

      <ComponentWrapper className="app__wrapper app__flex">
        <Component />
      </ComponentWrapper>


      
      <Copyright className="copyright">
        <p className="p-text">@2023 Kweayon</p>
        <p className="p-text">All rights reserved</p>
      </Copyright>

      <NavigationDots active={idName} />


      {/* <NavigationDots active={idName} /> */}
    </AppContainer>
  );
};

export default AppWrap;