import React from 'react';
import {Navbar, NavbarBrand, Nav, NavLink, Container} from 'react-bootstrap';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

import styles from './navigation.module.scss';

const navigation = ({active}) => {
  return (
    <Navbar bg="light" expand="lg" className={styles.Navbar}>
      <Container>
        <NavbarBrand href="/" className={styles.Brand}>
          OKClassic
        </NavbarBrand>
        <NavbarToggle aria-controls="navbarText" className={styles.Toggler}/>
        <NavbarCollapse id="navbarText">
          <Nav className="mr-auto">
            <NavLink href="/schedule">
              Schedule
            </NavLink>
            <NavLink href="/center">
              Bowling Center
            </NavLink>
            <NavLink href="/hotels">
              Host Hotel
            </NavLink>
            {/*<NavLink href="/okc">*/}
            {/*  Oklahoma City*/}
            {/*</NavLink>*/}
            <NavLink href="/rules">
              Rules
            </NavLink>
            <NavLink href="/contact">
              Contact
            </NavLink>
            <NavLink href="/results">
              Results
            </NavLink>
            <NavLink href="/links">
              Links
            </NavLink>

            {/* We can add more in a dropdown here if need be */}
            {/*<NavDropdown id="navbar-dropdown" title="More">*/}
            {/*  <NavDropdown.Item href="/rules">*/}
            {/*    Rules*/}
            {/*  </NavDropdown.Item>*/}
            {/*  <NavDropdown.Item href="/contact">*/}
            {/*    Contact*/}
            {/*  </NavDropdown.Item>*/}
            {/*</NavDropdown>*/}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default navigation;
