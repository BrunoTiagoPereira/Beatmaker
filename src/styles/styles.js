import styled from "styled-components";

export const Container = styled.div`

    padding: ${props=>`${props.padding}px`};
    background-color: ${props=>props.backgroundColor}
`;