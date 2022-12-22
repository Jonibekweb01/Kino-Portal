import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { API_KEY, baseImgURL, baseURL } from '../../API/API'
import { Row, StyledContainer } from "../../app.styles";
import { Card } from "../../components/Card";


export const Search = () => {
    const { searchQuery } = useParams();

    const [searchedMovie, setSearchMovie] = useState();

    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        axios.get(baseURL + '/search/movie?query=' + searchQuery, {
            params: {
                api_key: API_KEY,
                page: activePage,
            },
        },).then((res) => {
            setSearchMovie(res.data)
        })
            .catch(err => console.log(err))
    }, [activePage, searchQuery])
    console.log(searchedMovie);
    return (
        <>
            <StyledContainer>
                <h1>Search</h1>

            </StyledContainer>
            <Row wrap="wrap" justify="center" gap="30px">
                {
                    searchedMovie ? (
                        searchedMovie.results.map((item) => <Card key={item.id} {...item} />)
                    ) : (
                        <h1>Loading . . .</h1>
                    )
                }
            </Row>
        </>
    )
}
