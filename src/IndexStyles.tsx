import styled, { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from "styled-components";

const AppGlobalTheme: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

    :root {
        --font-base: "DM Sans", sans-serif;

        --primary-color: #edf2f8;
        --secondary-color: #313bac;
        --black-color: #030303;
        --lightGray-color: #e4e4e4;
        --gray-color: #6b7688;
        --brown-color: #46364a;
        --white-color: #ffffff;
    }

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

`;

export default AppGlobalTheme;