import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';// Jika Anda memiliki file CSS untuk gaya kustom

const Header = () => {
  return (
    <Navbar className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" bg="light" expand="lg" sticky="top"> {/* Properti bg="light" untuk warna latar belakang */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ms-5">
          <Nav.Link href="#link1">sekolah</Nav.Link>
          <Nav.Link href="#link2">gedung</Nav.Link>
          <Nav.Link href="#link3">masjid</Nav.Link>
          <Nav.Link href="#link4">lapangan</Nav.Link>
        </Nav>
        <Container fluid className="justify-content-start">
          <Button variant="outline-success" className="me-2">Daftar Sekarang</Button>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
