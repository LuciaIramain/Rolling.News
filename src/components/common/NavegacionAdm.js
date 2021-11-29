import React, { Fragment } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/navegacion.css';

const NavegacionAdm = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/" className="logo">RollingNews</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink exact="true" to='administracion' className="nav-link mx-2">Administración</NavLink>
            <NavLink exact="true" to='/administracion/nueva-noticia' className="nav-link mx-2">Agregar Noticia</NavLink>
            <NavLink exact="true" to='/administracion/nueva-categoria' className="nav-link mx-2">Agregar Categoria</NavLink>  
            <NavLink exact="true" to='/administracion/noticias' className="nav-link mx-2">Noticias</NavLink>  
            <NavLink exact="true" to='/administracion/categorias' className="nav-link mx-2">Categorias</NavLink>
            <NavLink exact="true" to='/login' className="nav-link mx-2">Iniciar Sesión</NavLink>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavegacionAdm;
