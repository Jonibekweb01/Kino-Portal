import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis, baseImgURL } from '../../API/API';
import { StyledContainer } from '../../app.styles';
import { StyledScore } from '../../components/Card/card.styles';
import { StyledImg, StyledOp, StyledSingleBox, StyledSingleMovie, StyledSingleTitle, StyledText } from './single-movie.styles';

export const Single = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [person, setPerson] = useState();

    const getSingleMovie = async (movieId) => {
        const res = await apis.getMovie(movieId)
        setMovie(res.data);
    }

    const getMovieCredits = async (movieId) => {
        const res = await apis.getMovieCredits(movieId);
    }

    useEffect(() => {
        getSingleMovie(id)
        getMovieCredits(id)
    }, [id])


    return (
        <>
            <StyledSingleMovie img={movie.backdrop_path}>
                <StyledOp>
                    <StyledContainer>
                        <StyledSingleBox>
                            <StyledImg src={baseImgURL + movie.poster_path} />
                            <div>
                                <StyledSingleTitle block="block">{movie.title}</StyledSingleTitle>
                                <StyledSingleTitle block='block'>Popularity : {Math.round(movie.popularity)
                                }</StyledSingleTitle>
                                <StyledText>
                                    {
                                        movie.overview
                                    }
                                </StyledText>
                                <StyledScore back="transparent !important" padding="20px 15px 20px 15px !important" >
                                    {Math.round(movie.popularity)}
                                </StyledScore>
                            </div>
                        </StyledSingleBox>
                    </StyledContainer>
                </StyledOp>
            </StyledSingleMovie>
        </>
    )
}
