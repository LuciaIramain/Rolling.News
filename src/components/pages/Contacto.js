import React, {useState} from "react";
import { Button, Form, Alert } from "react-bootstrap";
import fotoContacto from "../img/fotoContacto.jpg"
import emailjs from "emailjs-com";
import Navegacion from "../common/Navegacion";
import Swal from "sweetalert2";
import "../css/estiloGeneral.css"
import { campoRequerido, validarMail } from "../common/validaciones";

const Contacto = (props) => {
  const [error, setError] = useState('');
  const [nombreCont, setNombreCont] = useState('');
  const [emailCont, setEmailCont] = useState('');
  const [consultaCont, setConsultaCont] = useState('');
  
  
    const sendEmail = (e) => {
    e.preventDefault();
    if (campoRequerido(nombreCont) ||
        validarMail(emailCont) ||
        campoRequerido(consultaCont)) {
      setError(true);
      return;
    } else {
      setError(false);
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
      setNombreCont("");
      setEmailCont("");
      setConsultaCont("");
      Swal.fire(
        "Su consulta se envío con éxito!",
        "Dentro de las próximas 24 horas nos estaremos comunicando con usted.",
        "success"
      );
    };
  }

  return (
    <div>
    <Navegacion noticias={props.noticias} categoriaFiltrada={props.categoriaFiltrada} consultarAPI={props.consultarAPI} />
      <div className="container contenedor">
        <section className="text-center text-light fondoContacto py-4">
          <div>
            <h1>¿Necesitas ayuda?</h1>
            <h3 className="mt-3">Contactanos!</h3>
          </div>
        </section>
        <section className="row formulario mt-5">
          <article className="col-md-6 col-sm-12">
          {error ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Apellido y Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  className="form-control"
                  name="nombre"
                  value={nombreCont}
                  maxLength="70"
                  minLength="10"
                  required
                  onChange={(e) => setNombreCont(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ejemplo@ejemplo.com"
                  className="form-control"
                  name="gmail"
                  value={emailCont}
                  maxLength="70"
                  minLength="10"
                  required
                  onChange={(e) => setEmailCont(e.target.value)}
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
                  value={consultaCont}
                  maxLength="300"
                  minLength="20"
                  required
                  onChange={(e) => setConsultaCont(e.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
              >Enviar</Button>
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
