import React, { Fragment } from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../css/estiloGeneral.css";
import aLogo from "../img/a-logo.jpg";

const NavegacionAdm = () => {
  const URL = process.env.REACT_APP_API_URL;
  const URL_U = URL + "usuarios/auth/";

  const handleLogout = async () => {
    try {
      const consulta = await fetch(URL_U);
      const respuesta = await consulta.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="logo">
          RollingNews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink exact="true" to="/administracion" className="nav-link mx-2">Administración</NavLink>
            <NavLink exact="true" to="/administracion/nueva-noticia" className="nav-link mx-2">Agregar Noticia</NavLink>
            <NavLink exact="true" to="/administracion/nueva-categoria" className="nav-link mx-2">Agregar Categoria</NavLink>
            <NavLink exact="true" to="/administracion/noticias" className="nav-link mx-2">Noticias</NavLink>
            <NavLink exact="true" to="/administracion/categorias" className="nav-link mx-2">Categorias</NavLink>
            {/* <Button variant="outline-secondary" onClick={handleLogout} className="nav-link mx-2">Cerrar sesión</Button> */}
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Administrador</Tooltip>}>
              {({ ref, ...triggerHandler }) => (
                <Button
                  variant="light"
                  {...triggerHandler}
                  className="d-inline-flex align-items-center"
                  onClick={handleLogout}>
                  <Image
                    ref={ref}
                    roundedCircle
                    src={aLogo}
                    className="aLogo" />
                  <span className="ms-1">Cerrar sesión</span>
                </Button>
              )}
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavegacionAdm;
