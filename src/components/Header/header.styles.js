import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 20px;
    background-color: #032541FF;
`

export const StyledLogo = styled(Link)`
    font-size: 24px;
    text-decoration: none;
    color: #fff;
    margin-right: 30px;
`

export const StyledNav = styled.nav``;

export const StyledNavList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
`

export const StyledNavItem = styled.li`
margin-right: 30px;
`
export const StyledNavLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    font-family: sans-serif;
    transition:  0.2s ease;
    &:hover {
       opacity: 0.7;
    }
`


export const StyledSearchInput = styled.input`
    padding: 15px 15px;
    border: 0;
    border-radius: 30px;
    width: 200px;
    margin-left: auto;
    outline: none;
`

export const StyledImg = styled.img`
    width: 200px;
`