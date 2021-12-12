import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "../css/estiloGeneral.css";

const Navegacion = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const categorias = props.noticias.map((noticia) => (
    <Offcanvas.Body noticia={noticia} key={noticia._id}>
      <Link
        to={`/categoria/${noticia.categoria}`}
        className="nav-link"
        key={noticia._id}
      >
        {noticia.categoria}
      </Link>
    </Offcanvas.Body>
  ));

  return (
    <Fragment>
      <Navbar bg="light" className="d-flex justify-content-between px-4">
        <Button variant="outline-dark" onClick={handleShow}>
          <FontAwesomeIcon icon={faAlignJustify} className="mx-2" />
          Secciones
        </Button>
        <Nav>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="logo">RollingNews</Offcanvas.Title>
            </Offcanvas.Header>
            {categorias}
          </Offcanvas>
        </Nav>
        <Navbar.Brand href="/" className="logo">
          RollingNews
        </Navbar.Brand>
        <section>
          <Link to="*" className="mx-3 btn btn-outline-dark">
            Suscribirse
          </Link>
          <Link to="/login" className="mx-3 btn btn-outline-dark">
            Iniciar sesión
          </Link>
        </section>
      </Navbar>
    </Fragment>
  );
};

export default Navegacion;
