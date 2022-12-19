import { useEffect, useState } from "react";
import { apis } from "../../API/API"
import { Row } from "../../app.styles";
import { Card } from "../../components/Card";
import { StyledBox } from "./popular.styles";

export const Popular = () => {
    const [movies, setMovies] = useState([])

    const getPopularMovies = async () => {
        const res = await apis.getPopularMovies()
        setMovies(res.data.results);
        console.log(res);
    }

    useEffect(() => {
        getPopularMovies()
    }, [])

    return (
        <>
            <StyledBox>
                {
                    movies.length ?
                        <Row wrap="wrap" align="stretch" gap="30px" justify="center">
                            {
                                movies.map(movie => (
                                    <Card key={movie.id} {...movie} />
                                ))
                            }
                        </Row> : ''
                }
            </StyledBox>
        </>
    )
}
