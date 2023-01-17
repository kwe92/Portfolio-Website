import styled from "styled-components";

export interface Theme {
    
    fontBase: string,

    primaryColor: string,

    secondaryColor: string,

    blackColor: string,

    lightgreyColor: string,

    greyColor: string,

    brownColor: string,

    whiteColor: string
}

const appTheme: Theme = {

    fontBase: "Roboto",

    primaryColor: "#edf2f8",

    secondaryColor: "#313bac",

    blackColor: "#030303",

    lightgreyColor: "#e4e4e4",

    greyColor: "#6b7688",

    brownColor: "#46364a",

    whiteColor: "#ffffff"
}

export default appTheme;
