import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import './index.css'
const NavBar = () => {
return <>
  <Navbar className="Navbar" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Logo</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#our">Nosotros</Nav.Link>
      <Nav.Link href="#service">Servicios</Nav.Link>
      < BsFillCartFill color='white' />
    </Nav>
    </Container>
  </Navbar>
  
</>
}

export default NavBar;
