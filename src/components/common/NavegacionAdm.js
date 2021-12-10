import React, { Fragment } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {Button} from "react-bootstrap";
import '../css/navegacion.css';

const NavegacionAdm = () => {
  const URL = process.env.REACT_APP_API_URL;
  const URL_U = URL + 'usuarios/auth/';


  const handleLogout = async () => {
    try{
      const consulta = await fetch(URL_U);
      const respuesta = await consulta.json(); 
      
    } catch(error) {
      console.log(error);
    }
  }
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
            <Button onClick={handleLogout} className="nav-link">
            Cerrar sesión
          </Button>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavegacionAdm;
