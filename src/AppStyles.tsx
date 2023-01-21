import styled from "styled-components";
import { Theme } from "./interfaces/ThemeInterface";
import GenStyledComponent from "./types/styled_components/types";

const AppWrapper: GenStyledComponent<"div",{}> =
styled.div`

    width: 100vw;

    height: 100vh;

    background: ${({ theme }: { theme: Theme }) => (theme.primaryColor)};
`;

export default AppWrapper;
