import styled from "styled-components";
import GenStyledComponent from "./types/styled_components/types";

interface Props{
    theme:{primaryColor:string}
}

const AppWrapper: GenStyledComponent<"div",Props> =
styled.div<Props>`

    background: ${props => props.theme.primaryColor && props.theme.primaryColor}

`;

export default AppWrapper;
