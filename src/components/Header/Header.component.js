import { Row, StyledContainer } from '../../app.styles'
import { StyledHeader, StyledImg, StyledLogo, StyledNav, StyledNavItem, StyledNavLink, StyledNavList, StyledSearchInput } from './header.styles'
import Logo from '../../assets/images/Tmdb.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Header = () => {

    const [searchVal, setSearchVal] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (searchVal.length > 0) {
            navigate('/search/' + searchVal)
        }
        else {
            navigate('/')
        }
    }, [searchVal]);



    return (
        <StyledHeader>
            <StyledContainer>
                <Row justify='' align="center">
                    <StyledLogo to='/popular'>
                        <StyledImg src={Logo} alt="" />
                    </StyledLogo>
                    <StyledNav>
                        <StyledNavList>
                            <StyledNavItem>
                                <StyledNavLink to='/movies'>Movies</StyledNavLink>
                            </StyledNavItem>
                            <StyledNavItem>
                                <StyledNavLink to='/popular'>Popular</StyledNavLink>
                            </StyledNavItem>
                            <StyledNavItem>
                                <StyledNavLink to='/latest'>Latest</StyledNavLink>
                            </StyledNavItem>
                        </StyledNavList>
                    </StyledNav>
                    <StyledSearchInput type="search" placeholder="Search film..." onChange={(evt) => setSearchVal(evt.target.value)} />
                </Row>
            </StyledContainer>
        </StyledHeader>
    )
}
