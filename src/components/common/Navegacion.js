import React, { Fragment, useState } from "react";
import { Navbar, Nav, Button, Offcanvas, Modal, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "../css/estiloGeneral.css";
import { campoRequerido, validarMail } from "./validaciones";

const Navegacion = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mostrarModal, setmostrarModal] = useState(false);
  const [error, setError] = useState('');
  const [nombreSus, setNombreSus] = useState("");
  const [direccionSus, setDireccionSus] = useState("");
  const [localidadSus, setLocalidadSus] = useState("");
  const [codigoPostalSus, setCodigoPostalSus] = useState("");
  const [telefonoSus, setTelefonoSus] = useState("");
  const [emailSus, setEmailSus] = useState("");
  
  const handleCerrar = () => setmostrarModal(false);
  const handleAbrir= () => setmostrarModal(true);

  const categorias = props.categoriaFiltrada?.map((categoria, index) => (
    <Offcanvas.Body key={index} className='canvasNav'>
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
    if (campoRequerido(nombreSus) ||
      campoRequerido(direccionSus) ||
      campoRequerido(localidadSus) ||
      campoRequerido(codigoPostalSus) ||
      campoRequerido(telefonoSus) || 
      validarMail(emailSus) ) {
      setError(true);
      return;
    } else {
      setError(false);
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
      setNombreSus("");
      setDireccionSus("");
      setLocalidadSus("");
      setCodigoPostalSus("");
      setTelefonoSus("");
      setEmailSus("");

      Swal.fire(
        "Su suscripci??n se realiz?? con ??xito!",
        "Recibir?? diariamente las nuevas actualizaciones de RollingNews!",
        "success"
      );
    }
  };

  return (
    <Fragment>
      <Navbar bg="light" className="navegacion d-flex justify-content-between" expand="md">
        <Button variant="outline-dark boton-navbar" onClick={handleShow} className='secc'>
        <FontAwesomeIcon icon={faAlignJustify} className="secciones mx-1" />
           Secciones
        </Button>
        <Nav>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="logoCanvas">RollingNews</Offcanvas.Title>
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
          <Link to="/login" className="boton-navbar btn ">
            Iniciar sesi??n
          </Link>
        </section>
      </Navbar>
      
      <Modal show={mostrarModal} onHide={handleCerrar}>
        <Modal.Header closeButton>
          <Modal.Title>Suscribete a <span className="logo logoModal">RollingNews</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={sendEmail}>
        {error ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
              <Form.Group className="mb-3">
                <Form.Label>Apellido y Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  className="form-control"
                  name="nombre"
                  maxLength="40"
                  minLength="10"
                  required
                  value={nombreSus}
                  onChange={(e)=> setNombreSus(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Direcci??n</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu direcci??n"
                  className="form-control"
                  name="direccion"
                  maxLength="45"
                  minLength="10"
                  required
                  value={direccionSus}
                  onChange={(e)=> setDireccionSus(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Localidad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu localidad"
                  className="form-control"
                  name="localidad"
                  maxLength="45"
                  minLength="10"
                  required
                  value={localidadSus}
                  onChange={(e)=> setLocalidadSus(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>C??digo postal</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Tu c??digo postal"
                  className="form-control"
                  name="codigoPostal"
                  min="0"
                  max="15000"
                  required
                  value={codigoPostalSus}
                  onChange={(e)=> setCodigoPostalSus(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tel??fono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Tu tel??fono"
                  className="form-control"
                  name="telefono"
                  maxLength="25"
                  minLength="6"
                  required
                  value={telefonoSus}
                  onChange={(e)=> setTelefonoSus(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                  className="form-control"
                  name="gmail"
                  maxLength="70"
                  minLength="10"
                  required
                  value={emailSus}
                  onChange={(e)=> setEmailSus(e.target.value)}
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
