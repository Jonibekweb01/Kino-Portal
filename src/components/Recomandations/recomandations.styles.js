import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledRecomenddationBox = styled.div`
    width: 300px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    /* padding: 10px; */
`
export const StyledListBox = styled.div``;
export const StyledImgs = styled.img`
    border-radius: 20px 20px 0 0;
`
export const StyledTitle = styled.h3`
    padding: 0 20px 0px 20px;
    font-family: sans-serif;
    color: white;
`
export const StyledLinks = styled(Link)`
    text-decoration: none;
    transition: 0.2s ease;
    border-radius: 20px;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 0px 10px white;
        border-radius: 20px;
        opacity: 0.6;
    }
`
