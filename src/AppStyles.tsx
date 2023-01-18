import styled from "styled-components";
import GenStyledComponent from "./types/styled_components/types";

const AppWrapper: GenStyledComponent<"div",{}> =
styled.div`

    background: ${({ theme }) => theme.primaryColor && theme.primaryColor}

`;

export default AppWrapper;
