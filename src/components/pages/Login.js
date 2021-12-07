import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Login.css";

const Login = () => {

    const [ usuario, setUsuario ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario;

  const changeLogin = (e) => {
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar que no haya campos vacios

    // peticion get para verificar -- que token sea admitido y descifrar el password
    

  };

  return (
    <div className="form-usuario">
      <section className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={changeLogin}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Introduce tu contraseña"
              onChange={changeLogin}
            />
          </Form.Group>
          <Button className='w-100' type="submit">
            Iniciar Sesión
          </Button>
        </Form>
        <hr />
        <Link to="*" className="nav-link">
            ¿Olvidaste tu contraseña?
        </Link>
        <Link to="/administracion/nueva-cuenta" className="nav-link">
            ¿Aún no tienes tu cuenta? ¡Regístrate ahora!
        </Link>
      </section>
    </div>
  );
};

export default Login;
