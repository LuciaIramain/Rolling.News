import React, { Fragment, useState } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "../css/navegacion.css";

const Navegacion = () => {
  // hacer logica de login y hacer la logica de navbar con state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Navbar
        bg="light"
        className="d-flex justify-content-between px-4"
      >
        <Button variant="outline-dark" onClick={handleShow}>
          <FontAwesomeIcon icon={faAlignJustify} className="mx-2" />
          Secciones
        </Button>
        <Nav>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="logo">RollingNews</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Link to="/" className="nav-link">
               politica
              </Link>
              <Link to="/administracion" className="nav-link">
                economia
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </Nav>
        <Navbar.Brand href="/" className="logo">
          RollingNews
        </Navbar.Brand>
        <section>
          <Button variant="outline-dark" className="mx-3">
            Suscribirse
          </Button>
          <Button variant="outline-dark">Iniciar sesión</Button>
        </section>
      </Navbar>
    </Fragment>
  );
};

export default Navegacion;
