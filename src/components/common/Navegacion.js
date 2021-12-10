import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "../css/navegacion.css";

const Navegacion = () => {
  // hacer logica de login y hacer la logica de navbar con state
  const URL = process.env.REACT_APP_API_URL;
  const URL_U = URL + 'usuarios/auth/';
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [noticias, setNoticias] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(()=>{
    getNewsNavbar();
  }, [])

  const getNewsNavbar = async () => {
    console.log(`${URL}?categoria=${params.categoria}`)
    try{
      const res = await fetch(`${URL}?categoria=${params.categoria}`);
      if (res.status === 200) {
        const consulta = await res.json();
        setNoticias(consulta);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const categorias = noticias.map(cat => 
    <Link to="/categoria/:categoria" className="nav-link" key={cat._id}>
      {cat.categoria}
    </Link>
  )

  const handleLogout = async () => {
    try{
      const consulta = await fetch(URL_U);
      const respuesta = await consulta.json(); 
      setNoticias(respuesta);
    } catch(error) {
      console.log(error);
    }
  }
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
              {categorias}
            </Offcanvas.Body>
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
