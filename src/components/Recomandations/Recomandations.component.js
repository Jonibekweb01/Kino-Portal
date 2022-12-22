import { Link } from "react-router-dom";
import { baseImgURL } from "../../API/API"
import { StyledRecomenddationBox, StyledImgs, StyledListBox, StyledTitle, StyledLinks } from "./recomandations.styles";

export const Recomandations = ({ id, title, img }) => {
    return (
        <>
            <StyledLinks to={`/movie/${id}`}>
                <StyledRecomenddationBox>
                    <StyledListBox>
                        <StyledImgs src={baseImgURL + img} />
                        <StyledTitle>
                            {title}
                        </StyledTitle>
                    </StyledListBox>
                </StyledRecomenddationBox></StyledLinks>
        </>
    )
}
