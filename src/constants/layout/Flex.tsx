import styled from "styled-components";
import GenStyledComponent from "../../types/styled_components/types";

const Row: GenStyledComponent<"div", {}> = styled.div`

    display: flex;

`;

const Column: GenStyledComponent<"div", {}> = styled.div`

    display: flex;

    flex-direction: column;

`;

export { Row, Column }
