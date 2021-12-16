import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/estiloGeneral.css";
import aLogo from "../img/a-logo.jpg";

const NavegacionAdm = () => {
  // const URL = process.env.REACT_APP_API_URL;
  // const URL_U = URL + "usuarios/auth/";
  let navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  });
  const [token, setToken] = useState([]);

  useEffect(()=>{
    const usuarioLogged = localStorage.getItem('usuario');
    const tokenLogged = localStorage.getItem('token');
    if(usuarioLogged){
      const usuario = JSON.parse(usuarioLogged);
      const token = JSON.parse(tokenLogged);
      setUsuario(usuario);
      setToken(token)
    }
    if(!tokenLogged) {
        navigate('/')
    }
  }, [])

  const handleLogout = () => {
    try {
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/administracion" className="logoAdm ps-5">
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
