import styled from "styled-components";


export const StyledSingleMovie = styled.div`
height: 88vh;
    background-image: ${(props) =>
        props.img
            ? `url(https://image.tmdb.org/t/p/original${props.img})`
            : "https://via.placeholder.com/300"};
    background-repeat:no-repeat;
    background-size:100%;
    background-position:center;
`

export const StyledOp = styled.div`
    background-color: #0e0e0ed1;
    position: absolute;
    width: 100%;
    height: 88%;
`

export const StyledImg = styled.img`
    width: 400px;
    height: 400px;
`

export const StyledSingleTitle = styled.h3`
    display:  ${props => props.block || "initial"};
    color: #fff;
    font-family: sans-serif;
    font-size: 28px;
    margin: 0 0 10px 0;
`

export const StyledSingleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 100px;
    width: 900px;
`

export const StyledText = styled.p`
    margin: 0 0 10px 0;
    padding: 0;
    color: white;
    font-family: sans-serif;
    line-height:30px;
`