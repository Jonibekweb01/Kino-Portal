import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled(Link)`
    position: relative;
    padding: 0 0 5px 0;
    width: 200px;
    border-radius: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-decoration: none;
`

export const StyledBoxTitle = styled.div`
    padding: 16px 16px 0 16px;
    font-family: sans-serif;
`

export const StyleCardImg = styled.img`
    border-radius: 10px 10px 0 0;
`

export const StyledTitleCard = styled.h3`
    margin: 0 0 10px 0;
    color: black;
`

export const StyledScore = styled.span`
    position: absolute;
    top:  ${props => props.top || "initial"};
    right:  ${props => props.right || "initial"};
    padding:  ${props => props.padding || "initial"};
    background-color:  ${props => props.back || "initial"};
    padding: 10px;
    border-radius: 50px;
    border: 3px solid green;
    color: #fff;
    font-family: sans-serif;
    font-weight: 700;
`

export const StyleDate = styled.span`
    color: gray;
    font-family: sans-serif;
`