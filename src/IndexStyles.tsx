import styled, { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from "styled-components";
import { Theme } from "./interfaces/ThemeInterface";

const AppGlobalTheme: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

    * {
        margin: 0;

        padding: 0;

        box-sizing: border-box;

        scroll-behavior: smooth;
    }

    body{
        font-family: Roboto;
        
        // background: #191d24;
    }

    li {
        list-style: none;
    }

    a{
        text-decoration: none;

        // color: rgba(255,255,255,1);
        
        color: rgba(0,0,0,1);

    }

`;

export default AppGlobalTheme;