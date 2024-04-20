import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function HeaderSection() {
  return (
    <>
      {/* <ul className="menu-bar">
        <Link className="home" to="/">
          <li className="menu-bar-items">Home</li>
        </Link>

        <Link className="about" to="/about">
          <li className="menu-bar-items"> About</li>
        </Link>
        <Link className="contact" to="/contact">
          <li className="menu-bar-items">Contact</li>
        </Link>
        <Link className="joke" to="/joke">
          <li className="menu-bar-items">Joke of The Day</li>
        </Link>
      </ul> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ZZ-Protfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>

              {/* <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link> */}
              {/* <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderSection;
