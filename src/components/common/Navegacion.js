import React, { Fragment } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <Fragment>
          <Navbar bg="light" expand='' className='d-flex justify-content-between px-4'>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Link exact={true} to={'/'} className='nav-link'>Inicio</Link>
                  <Link exact={true} to={'/administracion'} className='nav-link'>Administración</Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + 'logo1.png'} alt='logo de rollingnews' /></Navbar.Brand>
              <section >
                <Button variant="outline-dark" className='mx-3'>Suscribirse</Button>
                <Button variant="outline-dark">Iniciar sesión</Button>
              </section>
          </Navbar>
    </Fragment>
  );
};

export default Navegacion;
