import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import "../css/estiloGeneral.css"

const Login = () => {
  const URL = process.env.REACT_APP_API_URL;
  const URL_U = URL + 'usuarios/auth/';
  let navigate = useNavigate();
  const [errorCampos, setErrorCampos] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const changeLogin = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    const datosUsuario = {
      email,
      password
    }

    try {
      const parametros = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosUsuario),
      };

      const res = await fetch(URL_U, parametros);
      console.log('respuesta', res);
      if ((await res.status) === 200) {
        navigate('/administracion');
        return;
      } 
      
    } catch (error) {
      console.log(error);
      Swal.fire(
        "No se pudo iniciar sesión",
        "Por favor intentelo de nuevo más tarde",
        "error"
      );
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      setErrorCampos(true);
      return;
    } else {
      setErrorCampos(false);
    }

    // Password minimo de 6 caracteres
    if (password.length < 6) {
      setErrorPassword(true);
      return;
    } else {
      setErrorPassword(false);
    }

    // peticion get para verificar -- que token sea admitido y descifrar el password
    login({
      email,
      password
    });
  };

  return (
    <div className="form-usuario contenido">
      <section className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <Form onSubmit={handleSubmit}>
          {errorCampos ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
          {errorPassword ? (
            <Alert variant={"danger"}>
              El password debe ser de al menos 6 caracteres
            </Alert>
          ) : null}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={changeLogin}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Introduce tu contraseña"
              onChange={changeLogin}
            />
          </Form.Group>
          <Button className="w-100" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
        <hr />
        <Link to="*" className="nav-link">
          ¿Olvidaste tu contraseña?
        </Link>
        <Link to="/auth/nueva-cuenta" className="nav-link">
          ¿Aún no tienes tu cuenta? ¡Regístrate ahora!
        </Link>
      </section>
    </div>
  );
};

export default Login;
