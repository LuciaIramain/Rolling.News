import React, { Fragment, useState } from "react";
import { Navbar, Nav, Button, Offcanvas, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "../css/estiloGeneral.css";

const Navegacion = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mostrarModal, setmostrarModal] = useState(false);

  const handleCerrar = () => setmostrarModal(false);
  const handleAbrir= () => setmostrarModal(true);

  const categorias = props.categoriaFiltrada?.map((categoria, index) => (
    <Offcanvas.Body key={index}>
      <Link
        to={`/categoria/${categoria}`}
        className="nav-link"
        key={index}
      >
        {categoria}
      </Link>
    </Offcanvas.Body>
  ));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yhpptwo", "template_p0194qs", e.target, "user_jPFg93idCpAqXVLMdupMy")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    Swal.fire(
      "Su suscripción se realizó con éxito!",
      "Recibirá diariamente las nuevas actualizaciones de RollingNews!",
      "success"
    );
  };

  return (
    <Fragment>
      <Navbar bg="light" className="navegacion d-flex justify-content-between" expand="md">
        <Button variant="outline-dark" onClick={handleShow} className='secc'>
        <FontAwesomeIcon icon={faAlignJustify} className="secciones mx-1" />
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
        <section className="navbar-responsive">
          <Button variant="outline-dark" onClick={handleAbrir} className="boton-navbar boton-navbar-1">
            Suscribirse
          </Button>
          <Link to="/login" className="boton-navbar btn btn-outline-dark">
            Iniciar sesión
          </Link>
        </section>
      </Navbar>
      
      <Modal show={mostrarModal} onHide={handleCerrar}>
        <Modal.Header closeButton>
          <Modal.Title>Suscribete a <span className="logo logoModal">RollingNews</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Apellido y Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  className="form-control"
                  name="nombre"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu dirección"
                  className="form-control"
                  name="direccion"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Localidad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu localidad"
                  className="form-control"
                  name="localidad"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Código postal</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Tu código postal"
                  className="form-control"
                  name="codigoPostal"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Tu teléfono"
                  className="form-control"
                  name="telefono"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                  className="form-control"
                  name="gmail"
                />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
              >Enviar</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCerrar}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Navegacion;
