import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginFormPopup from '../Common/LoginForm';
export const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      {["lg",].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-light flex-nowrap custom-navbar">
          <Container fluid>
            <Navbar.Brand href="#home" className='padding-l-136 pl-6'>
              <span className='display-3 text-dark fw-bold font-24'>MedicalFunc</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='ms-auto' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex justify-content-around gap-3">
                  <Nav.Link href="#home" className='text-muted font-14 fw-bold responsive-font'>Home</Nav.Link>
                  <Nav.Link href="#product" className='text-muted font-14 fw-bold responsive-font'>Product</Nav.Link>
                  <Nav.Link href="#pricing" className='text-muted font-14 fw-bold responsive-font'>Pricing</Nav.Link>
                  <Nav.Link href="#contact" className='text-muted font-14 fw-bold responsive-font'>Contact</Nav.Link>
                </Nav>
                <div className="d-flex gap-3 ms-auto flex-md-direction">
                  <Form className="d-flex gap-3">
                    <Button variant="outline-none" className='primary-color font-14 fw-bold responsive-font'>Login</Button>
                  </Form>
                 
                  <Form className='padding-r-143 padding-0'>
                    <Button variant="" className='primary-background-color responsive-font pl-1 'onClick={handleShow}>
                      <span className='text-white font-14 fw-bold'>Join US</span>
                      <i className="bi bi-arrow-right text-white"></i>
                    </Button>
                    <LoginFormPopup show={showModal} handleClose={handleClose} />
                  </Form>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
