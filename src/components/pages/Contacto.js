import React from "react";
import { Form } from "react-bootstrap";
import fotoContacto from "../img/fotoContacto.jpg"
import emailjs from "emailjs-com";
import "../css/estiloGeneral.css"
import Navegacion from "../common/Navegacion";

const Contacto = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yhpptwo", "template_rpi33u6", e.target, "user_jPFg93idCpAqXVLMdupMy")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
    <Navegacion />
      <div className="container contenedor">
        <section className="text-center text-light fondoContacto py-4">
          <div>
            <h1>¿Necesitas ayuda?</h1>
            <h3 className="mt-3">Contactanos!</h3>
          </div>
        </section>
        <section className="row formulario mt-5">
          <article className="col-md-6 col-sm-12">
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                  className="form-control"
                  name="gmail"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Consulta</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Agregar Consulta"
                  className="form-control"
                  name="consulta"
                />
              </Form.Group>
              <input
                type="submit"
                className="btn btn-primary"
                value="Enviar"
              ></input>
            </Form>
          </article>
          <article className="col-md-6 col-sm-12">
              <img src={fotoContacto} alt="Cartas, una pluma y tinta sobre una mesa" className=" w-100" />
          </article>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
