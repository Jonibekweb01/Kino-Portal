import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    align-items: ${props => props.align || "initial"};
    justify-content: ${props => props.justify || "initial"};
    flex-wrap: ${props => props.wrap || "initial"};
    gap:  ${props => props.gap || "initial"};
`

export const StyledContainer = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`