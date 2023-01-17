import styled, { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from "styled-components";

const AppGlobalTheme: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Roboto;
        // background: #191d24;
    }

    li {
        list-style: none;
    }

`;

export default AppGlobalTheme;