import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import "../css/estiloGeneral.css";

const NuevaCuenta = () => {
  const URL = process.env.REACT_APP_API_URL;
  const URL_U = URL + 'usuarios/';
  let navigate = useNavigate();

  const [errorCampos, setErrorCampos] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmar, setErrorConfirmar] = useState(false);
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });
   

  useEffect(()=>{

  }, [])

  const { nombre, email, password, confirmar } = usuario;

  const changeLogin = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const registrarUsuario = async () => {
    const datosUsuario = {
      nombre,
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
      console.log(res);
      if ((await res.status) === 201) {
        Swal.fire(
          "Registro éxitoso!",
          "success"
        );
      } 
      navigate('/login');
      
    } catch (error) {
      console.log(error);
      Swal.fire(
        "No se pudo registrar su usuario",
        "Por favor intentelo de nuevo más tarde",
        "error"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar que no haya campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
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

    // los dos password iguales
    if (password !== confirmar) {
      setErrorConfirmar(true);
      return;
    } else {
      setErrorConfirmar(false);
    }
    // peticion get para verificar -- que token sea admitido y descifrar el password
    registrarUsuario({
      nombre, 
      email, 
      password
    });
  };

  return (
    <div className="form-usuario contenido">
      <section className="contenedor-form sombra-dark">
        <h1>Crear una cuenta</h1>
        <Form onSubmit={handleSubmit}>
          {errorCampos ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
          {errorPassword ? (
            <Alert variant={"danger"}>
              El password debe ser de al menos 6 caracteres
            </Alert>
          ) : null}
          {errorConfirmar ? (
            <Alert variant={"danger"}>Los password deben ser iguales</Alert>
          ) : null}
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={nombre}
              onChange={changeLogin}
            />
          </Form.Group>
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
          <Form.Group className="mb-3">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              name="confirmar"
              value={confirmar}
              placeholder="Introduce nuevamente tu contraseña"
              onChange={changeLogin}
            />
          </Form.Group>
          <Button className="w-100" type="submit">
            Registrarme
          </Button>
        </Form>
        <hr />
        <Link to="/login" className="nav-link">
          Volver a Iniciar Sesión
        </Link>
      </section>
    </div>
  );
};

export default NuevaCuenta;
