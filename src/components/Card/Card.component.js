import { baseImgURL } from "../../API/API"
import { StyleCardImg, StyleDate, StyledBoxTitle, StyledCard, StyledScore, StyledTitleCard } from "./card.styles"

export const Card = ({ title, poster_path, vote_average, id, backdrop_path }) => {
    return (
        <>
            <StyledCard to={`/movie/${id}`}>
                <StyleCardImg src={baseImgURL + poster_path} alt="" />
                <StyledScore back='black' top='270px' right='145px' padding="20px">
                    {vote_average}
                </StyledScore>
                <StyledBoxTitle>
                    <StyledTitleCard>{title}</StyledTitleCard>
                    <StyleDate>release_date</StyleDate>
                </StyledBoxTitle>
            </StyledCard>
        </>
    )
}
