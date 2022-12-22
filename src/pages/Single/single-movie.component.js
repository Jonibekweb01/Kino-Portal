import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis, baseImgURL } from '../../API/API';
import { StyledContainer } from '../../app.styles';
import { StyledScore } from '../../components/Card/card.styles';
import { Recomandations } from '../../components/Recomandations';
import { StyledImg, StyledOp, StyledRec, StyledRecBox, StyledSingleBox, StyledSingleMovie, StyledSingleTitle, StyledText } from './single-movie.styles';

export const Single = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [rek, setRek] = useState();

    const getSingleMovie = async (movieId) => {
        const res = await apis.getMovie(movieId)
        setMovie(res.data);
    }

    const getMovieCredits = async (movieId) => {
        const res = await apis.getMovieCredits(movieId);
        console.log(res);
    }

    const getMovieRek = async (movieId) => {
        const res = await apis.getMovieRek(movieId);
        setRek(res)
        // console.log(res);
    }

    // const getPersons = async (movieId) => {
    //     const res = await apis.getPersons(movieId);
    //     console.log(res);
    // }

    useEffect(() => {
        getSingleMovie(id)
        getMovieCredits(id)
        getMovieRek(id)
        // getPersons(id)
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
            <StyledRec>
                <StyledContainer>
                    <h2 style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '28px', color: 'white', marginBottom: '40px' }}>Recommended movies</h2>
                    <StyledRecBox>
                        {
                            rek?.data?.results?.map(el => {
                                return <Recomandations key={el.id} id={el.id} img={el?.backdrop_path} title={el?.title} />
                            })
                        }
                    </StyledRecBox>
                </StyledContainer>
            </StyledRec>
        </>
    )
}
