import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './header-logo.svg';
import {
  StyledNavLink,
  StyledNavList,
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavbarLogo,
} from './NavBar.styled';

const NavBar = () => {
  return (
    <StyledNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <NavLink to="/">
          <StyledNavbarBrand>
            <StyledNavbarLogo alt="" src={logo} /> Cinemania
          </StyledNavbarBrand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <StyledNavList className="me-auto">
            <StyledNavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '600' : '',
                  color: isActive ? 'orange' : '',
                };
              }}
            >
              Home
            </StyledNavLink>
            <StyledNavLink
              to="/catalog"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '600' : '',
                  color: isActive ? 'orange' : '',
                };
              }}
            >
              Catalog
            </StyledNavLink>
            <StyledNavLink
              to="/library"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '600' : '',
                  color: isActive ? 'orange' : '',
                };
              }}
            >
              My library
            </StyledNavLink>
          </StyledNavList>
          <Nav>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Change theme"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavBar;