import { useEffect, useState } from "react";
import { apis } from "../../API/API"
import { Row } from "../../app.styles";
import { Card } from "../../components/Card";
import { StyledBox } from "./Latest.styles";

export const Latest = () => {
    const [movies, setMovies] = useState([])

    const getLatestMovies = async () => {
        const res = await apis.getLatestMovies()
        setMovies(res.data.results);
        console.log(res);
    }

    useEffect(() => {
        getLatestMovies()
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
