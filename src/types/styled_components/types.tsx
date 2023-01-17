import React from "react";
import styled, {StyledComponent} from "styled-components";

type GenStyledComponent<E extends React.ComponentType<any> | keyof JSX.IntrinsicElements, T extends object> = StyledComponent<E, any, T, never>;

export default GenStyledComponent;