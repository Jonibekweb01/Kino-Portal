import { Row, StyledContainer } from '../../app.styles'
import { StyledHeader, StyledImg, StyledLogo, StyledNav, StyledNavItem, StyledNavLink, StyledNavList, StyledSearchInput } from './header.styles'
import Logo from '../../assets/images/Tmdb.svg';
export const Header = () => {
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
                    <StyledSearchInput type="search" placeholder="Search film..." />
                </Row>
            </StyledContainer>
        </StyledHeader>
    )
}
