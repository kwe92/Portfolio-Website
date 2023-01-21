import styled from "styled-components";
import { Theme } from "../interfaces/ThemeInterface";

const appTheme: Theme = {

      fontBase: "Roboto"
    // , primaryColor: "lightblue"
    , primaryColor: "#edf2f8"

    // , secondaryColor: "#313bac"
    , secondaryColor: (alpha = 1) => (`rgba(21, 125, 191, ${alpha})`)

    , blackColor: "#030303"

    , lightgreyColor: "#e4e4e4"

    , greyColor: "#6b7688"

    , brownColor: "#46364a"

    , whiteColor: "#ffffff"

    , navbarHeight: "4rem"
  
};

export default appTheme;
