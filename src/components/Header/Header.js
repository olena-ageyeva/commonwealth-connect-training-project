import React from "react";
import { useRoutes } from "hookrouter";
import Routes from "../Routes/Routes";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useStateValue } from "../../global-state/GlobalState";

const HeaderStyles = styled.div`
  .profile__picture__icon {
    color: white;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 0 20px;
    background: lightgrey;
    padding: 7px;
    vertical-align: middle;
  }
  .navbar-nav {
    line-height: 35px;
  }
  .text-center{
    margin: 0 auto;
  }
`;

export default function Header() {
  const routeResult = useRoutes(Routes);
  const [{ user }, dispatch] = useStateValue();
  return (
    <HeaderStyles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/"> Commonwealth Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

       
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
        <Navbar.Text className="text-center">
          Signed in as: <a href="#login">Welcome, {user}!</a>
        </Navbar.Text>
          <Nav>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link eventKey={2} href="/profile">
              My Profile
              <FontAwesomeIcon
                className="profile__picture__icon"
                icon={faUser}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      {routeResult}
    </HeaderStyles>
  );
}
