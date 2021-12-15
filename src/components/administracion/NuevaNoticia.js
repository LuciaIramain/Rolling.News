import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import NavegacionAdm from "../common/NavegacionAdm";
import "../css/estiloGeneral.css";

const NuevaNoticia = (props) => {
  const URL = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();
  
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [descripcionBreve, setDescripcionBreve] = useState("");
  const [descripcionDetallada, setDescripcionDetallada] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
  const [imagen, setImagen] = useState("");
  const [destacada, setDestacada] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [error, setError] = useState(false);

  const verNoticiaDestacada = (e) => {
    setDestacada(e.target.value);
  };

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      tituloNoticia.trim() === "" ||
      descripcionBreve.trim() === "" ||
      descripcionDetallada.trim() === "" ||
      autor.trim() === "" ||
      fecha.trim() === "" ||
      imagen.trim() === "" ||
      categoria === ""
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      // Creo la noticia
      const datosNoticia = {
        tituloNoticia,
        descripcionBreve,
        descripcionDetallada,
        categoria,
        autor,
        fecha,
        imagen,
        destacada,
      };

      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosNoticia),
        };

        const respuesta = await fetch(URL, parametros);

        if ((await respuesta.status) === 201) {
          Swal.fire(
            "Noticia agregada!",
            "Se cargo una nueva noticia en RollingNews!",
            "success"
          );

          setTituloNoticia("");
          setDescripcionBreve("");
          setDescripcionDetallada("");
          setCategoria("");
          setAutor("");
          setFecha("");
          setImagen("");
          setDestacada("");

          props.consultarAPI();
          navigate("/administracion/noticias");
        }
      } catch (error) {
        console.log(error);
        Swal.fire(
          "No se pudo agregar la noticia",
          "Por favor intentelo de nuevo más tarde",
          "error"
        );
      }
    }
  };
 
  const categorias = props.categoriaFiltrada?.map((categoria, index) => 
    <Form.Check
      key={index}
      type="radio"
      label={categoria}
      name="categoria"
      value={categoria}
      onChange={cambiarCategoria}
      inline
    ></Form.Check>
  );

  return (
    <div className="contenido">
      <NavegacionAdm />
      <h1 className="my-4 text-center">Agregar una nueva noticia</h1>
      <Container className="my-5">
        <Form onSubmit={handleSubmit}>
          {error ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Noticia destacada"
              name="destacada"
              value="destacada"
              onChange={verNoticiaDestacada}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Titulo de la Noticia *</Form.Label>
            <Form.Control
              type="text"
              value={tituloNoticia}
              onChange={(e) => setTituloNoticia(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción breve *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descripcionBreve}
              onChange={(e) => setDescripcionBreve(e.target.value)}
              maxLength="500"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción detallada *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descripcionDetallada}
              maxLength="10000"
              minlenght="1000"
              onChange={(e) => setDescripcionDetallada(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Autor *</Form.Label>
            <Form.Control
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha *</Form.Label>
            <Form.Control
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen URL *</Form.Label>
            <Form.Control
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </Form.Group>
          <section className="text-center my-4">
            {/* traer las categorias, lo mapeo con un array y pongo un solo radio dinamico */}
            <h5>Categoria *</h5>
            {categorias}
          </section>
          <Button className="color text-light w-100 mb-5 mt-3" type="submit">
            Agregar noticia
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default NuevaNoticia;
