import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom"
import { useTranslation } from "react-i18next";
import LanguageSelector from '../LanguageSelector';
import "./navbar.css"


const NavBar = (props) => {
  const {t} = useTranslation();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">{t("Logo")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mr-3">
                <NavLink className="NavLink" to="/home">
                  {t("Home")}
                </NavLink>
              </Nav.Link>
              <Nav.Link className="mr-3">
                <NavLink to="/about" className="NavLink">
                  {t("About")}
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <LanguageSelector />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar
